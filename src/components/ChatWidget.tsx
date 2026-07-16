"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Truck, CheckCircle2 } from "lucide-react";
import { business, chatAnswers, chatQuickQuestions } from "@/lib/business";

type Msg = { from: "bot" | "user"; text: string };
type LeadStage = null | "name" | "phone" | "question" | "done";

const fallback =
  "Great question — I want to make sure you get the right answer from the team. Can I grab a couple details so we can call you right back?";

function answerFor(text: string): string | null {
  const t = text.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const a of chatAnswers) {
    const score = a.keywords.filter((k) => t.includes(k)).length;
    if (score > 0 && (!best || score > best.score)) best = { score, answer: a.answer };
  }
  return best?.answer ?? null;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: `Hi! I'm the ${business.name} assistant. I can answer questions about services, pricing, and scheduling — or set up your free estimate. How can I help?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState<LeadStage>(null);
  const [leadData, setLeadData] = useState({ name: "", phone: "", question: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const botSay = (text: string, delay = 700) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text }]);
    }, delay);
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");

    // Lead-capture flow
    if (lead === "name") {
      setLeadData((d) => ({ ...d, name: text }));
      setLead("phone");
      botSay(`Thanks ${text.split(" ")[0]}! And the best phone number to reach you?`);
      return;
    }
    if (lead === "phone") {
      setLeadData((d) => ({ ...d, phone: text }));
      setLead("question");
      botSay("Perfect. Last one — what would you like the team to help with?");
      return;
    }
    if (lead === "question") {
      setLeadData((d) => ({ ...d, question: text }));
      setLead("done");
      botSay(
        `Got it — your request is in! Someone from ${business.name} will call you back shortly. If it's urgent, call ${business.phone} any time, day or night.`,
        900,
      );
      return;
    }

    const ans = answerFor(text);
    if (ans) {
      botSay(ans);
    } else {
      botSay(fallback, 800);
      setTimeout(() => {
        setLead("name");
        botSay("What's your name?", 1700);
      }, 900);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[70] flex max-h-[70svh] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-ink/10"
            role="dialog"
            aria-label="Chat with our AI assistant"
          >
            <div className="flex items-center gap-3 bg-ink px-5 py-4">
              <span className="relative grid size-10 place-items-center rounded-full bg-flame text-white">
                <Truck className="size-5" aria-hidden />
                <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-ink bg-green-400" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">{business.name}</p>
                <p className="text-xs text-smoke">AI Assistant · replies instantly</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-8 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="size-4.5" aria-hidden />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-mist/60 p-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-flame text-white"
                        : "rounded-bl-sm bg-white text-ink shadow-card"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-2xl rounded-bl-sm bg-white px-4 py-3.5 shadow-card">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="size-1.5 rounded-full bg-slate/50"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {lead === "done" && (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-xs font-semibold text-green-800 ring-1 ring-green-200">
                  <CheckCircle2 className="size-4 shrink-0" aria-hidden />
                  Lead created: {leadData.name} · {leadData.phone}
                </div>
              )}
            </div>

            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 border-t border-mist bg-white px-4 pt-3">
                {chatQuickQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-slate transition-colors hover:border-flame hover:text-flame-deep"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              className="flex items-center gap-2 bg-white p-3"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lead === "name" ? "Your name…" : lead === "phone" ? "Your phone number…" : "Type your question…"}
                className="flex-1 rounded-full border border-ink/15 px-4 py-2.5 text-sm outline-none transition-all focus:border-flame focus:ring-2 focus:ring-flame/25"
                aria-label="Message"
              />
              <button
                type="submit"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-flame text-white transition-colors hover:bg-flame-hot"
                aria-label="Send message"
              >
                <Send className="size-4.5" aria-hidden />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 z-[70] flex items-center gap-2.5 rounded-full bg-flame py-3.5 pl-4 pr-5 font-bold text-white shadow-lift transition-colors hover:bg-flame-hot"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        aria-label={open ? "Close chat" : "Chat with us"}
      >
        {open ? <X className="size-5" aria-hidden /> : <MessageCircle className="size-5" aria-hidden />}
        {!open && <span className="text-sm">Questions? Ask me!</span>}
      </motion.button>
    </>
  );
}
