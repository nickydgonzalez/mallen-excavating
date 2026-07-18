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

const homeSlugs = ["septic-systems", "basement-waterproofing", "drainage", "site-work"];

export default function Services({ heading = true, limit = false }: { heading?: boolean; limit?: boolean }) {
  const shown = limit ? services.filter((s) => homeSlugs.includes(s.slug)) : services;
  return (
    <section className="bg-ink py-24 md:py-32" id="services">
      <div className="container-site">
        {heading && (
          <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow on-dark mb-4">What We Do</p>
              <h2 className="display text-4xl text-white sm:text-5xl">
                Every Site Problem, <span className="text-flame-hot">One Call</span>
              </h2>
            </div>
            {limit && (
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-flame-hot transition-colors hover:text-white"
              >
                View All Services
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </Reveal>
        )}

        <div className={`grid gap-5 sm:grid-cols-2 ${limit ? "" : "lg:grid-cols-3"}`}>
          {shown.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Wrench;
            return (
              <Reveal key={s.slug} delay={i * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/40 hover:shadow-glow">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={images[s.image as keyof typeof images]}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  </div>
                  <div className="relative flex flex-1 flex-col p-6 pt-9">
                    <span className="absolute -top-6 left-6 grid size-12 place-items-center rounded-xl bg-flame text-white shadow-glow">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-white/60">{s.blurb}</p>
                    <Link
                      href={`/services#${s.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-flame-hot transition-colors group-hover:text-white"
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
