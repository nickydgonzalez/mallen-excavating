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
    <section className="panel-dark py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Why Choose Us</p>
          <h2 className="display text-4xl text-white sm:text-5xl">
            The Company Your <span className="text-flame-hot">Neighbors</span> Recommend
          </h2>
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = iconMap[w.icon as keyof typeof iconMap] ?? BadgeCheck;
            return (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="flex gap-5">
                  <span className="grid size-13 shrink-0 place-items-center rounded border border-flame/40 bg-flame/10 text-flame-hot">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-extrabold uppercase tracking-tight text-white">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-smoke">{w.text}</p>
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
