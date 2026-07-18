import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story of ${business.name} — a family-owned site work company serving the Hudson Valley since 1974.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="A Family Business,"
        accent="Not A Franchise"
        lede="When you call us, you talk to the people who do the work — not a call center reading a script."
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow on-dark mb-4">Our Story</p>
            <h2 className="display text-4xl text-white">
              Built On <span className="text-flame-hot">Word Of Mouth</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-white/65">
              <p>
                {business.owner} started {business.name} in {business.founded} with
                one truck and a simple idea: treat every property in the Hudson
                Valley like it belongs to family. No inflated quotes, no invented
                problems, no disappearing after the check clears.
              </p>
              <p>
                {business.yearsInBusiness} years later, most new customers still
                come the old-fashioned way — a neighbor, friend, or coworker who
                tells them, &ldquo;call Wayne.&rdquo; That only happens when you do
                honest work at honest prices, year after year.
              </p>
              <p>
                Today {business.owner} still answers the phone himself and runs
                septic, drainage, waterproofing, and site work jobs across the
                Hudson Valley — still family owned, still hands-on.
              </p>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-white/10 pt-7">
              {[
                [`${business.yearsInBusiness}+`, "Years"],
                [`${business.founded}`, "Est."],
                ["5.0★", "Rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="display text-3xl text-flame-hot">{v}</dd>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white/50">{l}</p>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <img
                src={images.about}
                alt="Excavator staged on a Hudson Valley job site"
                className="w-full rounded-2xl border border-white/10 object-cover shadow-lift"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-flame px-7 py-5 text-white shadow-glow sm:block">
                <p className="display text-3xl">Est. {business.founded}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/85">
                  {business.city}, New York
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyUs />
      <CtaBand />
    </main>
  );
}
