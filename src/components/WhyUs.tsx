import { BadgeCheck, Home, ShieldCheck, Wrench, Truck, ThumbsUp } from "lucide-react";
import { whyUs } from "@/lib/business";
import Reveal from "@/components/Reveal";

const iconMap = {
  badgecheck: BadgeCheck,
  home: Home,
  shieldcheck: ShieldCheck,
  wrench: Wrench,
  truck: Truck,
  thumbsup: ThumbsUp,
} as const;

export default function WhyUs() {
  return (
    <section className="panel-dark py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow on-dark mb-4">What Nobody Else Can Say</p>
          <h2 className="display text-4xl text-white sm:text-5xl">
            The Company Your <span className="text-flame-hot">Neighbors</span> Recommend
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((w, i) => {
            const Icon = iconMap[w.icon as keyof typeof iconMap] ?? BadgeCheck;
            return (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40">
                  <span className="grid size-16 shrink-0 place-items-center rounded-xl border border-flame/30 bg-flame/10 text-flame-hot transition-colors group-hover:bg-flame group-hover:text-white">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold uppercase tracking-tight text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-smoke">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
