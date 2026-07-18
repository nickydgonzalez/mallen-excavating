import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { services, business } from "@/lib/business";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: `Septic systems, drainage, basement waterproofing, grading, and site work in ${business.city} and the Hudson Valley.`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Every Site Problem,"
        accent="One Call"
        lede="Septic, drainage, waterproofing, grading, and general site work — 52 years across the Hudson Valley."
      />

      <section className="bg-ink py-24 md:py-28">
        <div className="container-site space-y-24">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
                  <img
                    src={images[s.image as keyof typeof images]}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div>
                  <p className="eyebrow on-dark mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display text-3xl text-white sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-white/65">{s.description}</p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <Link
                      href="/contact#quote"
                      className="rounded-full bg-flame px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-colors hover:bg-flame-hot"
                    >
                      Get A Free Quote
                    </Link>
                    <a
                      href={business.phoneHref}
                      className="glass rounded-full px-6 py-[0.68rem] text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-flame/40"
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
