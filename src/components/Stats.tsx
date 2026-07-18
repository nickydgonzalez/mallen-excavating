"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/lib/business";
import Reveal from "@/components/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="display text-5xl text-white sm:text-6xl">
      {display.toLocaleString()}
      <span className="text-flame-hot">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-ink" aria-label="Company statistics">
      <div className="container-site grid grid-cols-2 gap-4 py-16 md:grid-cols-4 md:py-20">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:bg-white/[0.06] sm:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-smoke">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
