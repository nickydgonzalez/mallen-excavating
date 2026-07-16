"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Phone } from "lucide-react";
import { services, business } from "@/lib/business";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  description: string;
  contactMethod: string;
};

const empty: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  description: "",
  contactMethod: "Phone Call",
};

const steps = ["Contact", "Project", "Review"];

const inputCls =
  "w-full rounded border border-ink/15 bg-white px-4 py-3 text-[0.95rem] outline-none transition-all focus:border-flame focus:ring-2 focus:ring-flame/25";
const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate/70";

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(empty);
  const [done, setDone] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData({ ...data, [k]: e.target.value });

  const canNext =
    step === 0
      ? data.name.trim() && data.phone.trim()
      : step === 1
        ? data.service
        : true;

  if (done) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow-lift">
        <CheckCircle2 className="mx-auto size-14 text-green-600" aria-hidden />
        <h3 className="display mt-5 text-3xl">Request Received</h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-slate/80">
          Thanks, {data.name.split(" ")[0] || "neighbor"}! We&apos;ll reach out by{" "}
          {data.contactMethod.toLowerCase()} shortly to confirm your free estimate.
        </p>
        <a
          href={business.phoneHref}
          className="mt-7 inline-flex items-center gap-2 rounded bg-flame px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-flame-hot"
        >
          <Phone className="size-4" aria-hidden /> Need us now? {business.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lift">
      {/* progress */}
      <div className="flex border-b border-mist">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex-1 px-4 py-3.5 text-center text-xs font-bold uppercase tracking-widest transition-colors ${
              i === step ? "bg-flame text-white" : i < step ? "bg-ink text-white" : "bg-mist text-slate/50"
            }`}
            aria-current={i === step ? "step" : undefined}
          >
            {i + 1}. {s}
          </div>
        ))}
      </div>

      <form
        className="p-7 sm:p-9"
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 2) setStep(step + 1);
          else setDone(true);
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="qf-name">Full Name *</label>
                  <input id="qf-name" className={inputCls} value={data.name} onChange={set("name")} placeholder="John Smith" required />
                </div>
                <div>
                  <label className={labelCls} htmlFor="qf-phone">Phone *</label>
                  <input id="qf-phone" type="tel" className={inputCls} value={data.phone} onChange={set("phone")} placeholder="(845) 555-0123" required />
                </div>
                <div>
                  <label className={labelCls} htmlFor="qf-email">Email</label>
                  <input id="qf-email" type="email" className={inputCls} value={data.email} onChange={set("email")} placeholder="you@email.com" />
                </div>
                <div>
                  <label className={labelCls} htmlFor="qf-address">Service Address</label>
                  <input id="qf-address" className={inputCls} value={data.address} onChange={set("address")} placeholder="Poughkeepsie, NY" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-5">
                <div>
                  <label className={labelCls} htmlFor="qf-service">Service Needed *</label>
                  <select id="qf-service" className={inputCls} value={data.service} onChange={set("service")} required>
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Not sure">Not sure — need a diagnosis</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="qf-desc">Tell us about the project</label>
                  <textarea
                    id="qf-desc"
                    className={`${inputCls} min-h-28 resize-y`}
                    value={data.description}
                    onChange={set("description")}
                    placeholder="Backyard stays soggy after it rains, thinking it's a drainage issue…"
                  />
                </div>
                <div>
                  <span className={labelCls}>Photos (optional)</span>
                  <label className="flex cursor-pointer items-center gap-3 rounded border border-dashed border-ink/25 px-4 py-3.5 text-sm text-slate/70 transition-colors hover:border-flame hover:text-flame-deep">
                    <Upload className="size-4.5" aria-hidden />
                    {fileName ?? "Upload photos of the unit or problem area"}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={(e) => setFileName(e.target.files?.length ? `${e.target.files.length} photo(s) attached` : null)}
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5">
                <div>
                  <span className={labelCls}>Preferred Contact Method</span>
                  <div className="flex flex-wrap gap-2.5">
                    {["Phone Call", "Text Message", "Email"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setData({ ...data, contactMethod: m })}
                        className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                          data.contactMethod === m ? "bg-ink text-white" : "bg-mist text-slate hover:bg-ink/10"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <dl className="grid gap-2.5 rounded bg-mist p-5 text-sm">
                  {[
                    ["Name", data.name],
                    ["Phone", data.phone],
                    ["Service", data.service],
                    ["Address", data.address || "—"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6">
                      <dt className="font-bold uppercase tracking-wide text-slate/60">{k}</dt>
                      <dd className="text-right font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs text-slate/50">
                  Your request goes straight to Wayne — he&apos;ll call you back
                  personally to talk through the job.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-slate/60 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden /> Back
            </button>
          ) : <span />}
          <button
            type="submit"
            disabled={!canNext}
            className="inline-flex items-center gap-2 rounded bg-flame px-7 py-3.5 font-bold uppercase tracking-wide text-white transition-all enabled:hover:bg-flame-hot disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? "Submit Request" : "Continue"}
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </form>
    </div>
  );
}
