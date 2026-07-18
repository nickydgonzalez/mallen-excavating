import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import Reveal from "@/components/Reveal";

export default function CtaBand({
  heading = "52 Years Of Honest Hudson Valley Site Work",
  subtext = "Free estimates. Reliable scheduling. Wayne picks up his own phone.",
}: {
  heading?: string;
  subtext?: string;
}) {
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
          {heading}
        </h2>
        <p className="max-w-xl text-white/90">{subtext}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#quote"
            className="rounded-full bg-ink px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lift transition-transform hover:-translate-y-1"
          >
            Request Free Estimate
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-bold uppercase tracking-wide text-ink shadow-lift transition-transform hover:-translate-y-1"
          >
            <Phone className="size-5 text-flame" aria-hidden />
            {business.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
