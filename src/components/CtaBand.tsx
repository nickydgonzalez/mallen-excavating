import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-flame">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #000 0 2px, transparent 2px 24px)",
        }}
        aria-hidden
      />
      <Reveal className="container-site relative flex flex-col items-center gap-7 py-16 text-center md:py-20">
        <h2 className="display max-w-3xl text-4xl text-white sm:text-5xl">
          52 Years Of Honest Hudson Valley Site Work
        </h2>
        <p className="max-w-xl text-white/90">
          Free estimates. Reliable scheduling. Wayne picks up his own phone.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#quote"
            className="rounded bg-ink px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Request Free Estimate
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2.5 rounded bg-white px-8 py-4 font-bold uppercase tracking-wide text-ink shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5 text-flame" aria-hidden />
            {business.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
