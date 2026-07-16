import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { business, services } from "@/lib/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.legalName,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "US",
  },
  areaServed: business.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHours: "Mo-Fr 07:00-17:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Gallery compact />
      <Reviews compact />
      <Faq compact />
      <section className="bg-mist pb-20 md:pb-28" id="quote">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Free Estimate</p>
            <h2 className="display text-4xl sm:text-5xl">
              Get Your <span className="text-flame">Free Quote</span> In 60 Seconds
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate/80">
              Tell us what&apos;s going on and Wayne will call you back with an
              honest assessment — no pressure, no games.
            </p>
            <ul className="mt-7 space-y-2.5 text-sm font-semibold">
              {["No obligation, no pressure", "Straight pricing before any work", "52 years of Hudson Valley experience"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-flame" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
