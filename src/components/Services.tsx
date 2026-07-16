import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Droplets, Waves, Home, CloudRain, Layers, Trees, Route, Truck } from "lucide-react";
import { services } from "@/lib/business";
import { images } from "@/lib/images";
import Reveal from "@/components/Reveal";

const iconMap = {
  wrench: Wrench,
  shieldcheck: ShieldCheck,
  droplets: Droplets,
  waves: Waves,
  home: Home,
  cloudrain: CloudRain,
  layers: Layers,
  trees: Trees,
  route: Route,
  truck: Truck,
} as const;

export default function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-mist py-20 md:py-28" id="services">
      <div className="container-site">
        {heading && (
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="display text-4xl sm:text-5xl">
              Every Site Problem, <span className="text-flame">One Call</span>
            </h2>
          </Reveal>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Wrench;
            return (
              <Reveal key={s.slug} delay={i * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={images[s.image as keyof typeof images]}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-0 left-5 grid size-12 translate-y-1/2 place-items-center rounded bg-flame text-white shadow-card">
                      <Icon className="size-6" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-10">
                    <h3 className="text-xl font-extrabold uppercase tracking-tight">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-slate/80">{s.blurb}</p>
                    <Link
                      href={`/services#${s.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-flame-deep transition-colors group-hover:text-flame"
                    >
                      Learn More
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
