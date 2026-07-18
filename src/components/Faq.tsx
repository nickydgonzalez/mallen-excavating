"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/business";
import Reveal from "@/components/Reveal";

export default function Faq({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const shown = compact ? faqs.slice(0, 4) : faqs;

  return (
    <section className="bg-ink py-24 md:py-32" id="faq">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow on-dark mb-4">FAQ</p>
          <h2 className="display text-4xl text-white sm:text-5xl">
            Straight <span className="text-flame-hot">Answers</span>
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">
            The questions every homeowner asks — answered honestly. Don&apos;t see
            yours? Ask the assistant in the corner or give us a call.
          </p>
          {compact && (
            <a
              href="/faq"
              className="glass mt-7 inline-block rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-flame/40"
            >
              All {faqs.length} Questions
            </a>
          )}
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {shown.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold leading-snug text-white">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid size-8 shrink-0 place-items-center rounded-full ${isOpen ? "bg-flame text-white" : "bg-white/10 text-white"}`}
                  >
                    <Plus className="size-4" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 leading-relaxed text-white/60">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
