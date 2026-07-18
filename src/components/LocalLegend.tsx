import { localLegend } from "@/lib/business";
import Reveal from "@/components/Reveal";

export default function LocalLegend() {
  return (
    <section className="panel-dark relative overflow-hidden py-24 md:py-32">
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-3xl bg-mist p-10 shadow-glow">
            <img
              src="/logo-badge.png"
              alt="Mallen Excavating — Skull Finder"
              className="mx-auto w-full max-w-xs"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="glass mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-flame-hot">
            Featured Discovery
          </span>
          <p className="eyebrow on-dark mb-4">{localLegend.eyebrow}</p>
          <h2 className="display text-4xl text-white sm:text-5xl">{localLegend.title}</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/70">{localLegend.body}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/40">
            {localLegend.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
