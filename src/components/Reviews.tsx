import { Star, Quote } from "lucide-react";
import { reviews, extraRatings, business } from "@/lib/business";
import Reveal from "@/components/Reveal";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="size-4 fill-flame-hot text-flame-hot" aria-hidden />
      ))}
    </span>
  );
}

export default function Reviews({ compact = false }: { compact?: boolean }) {
  const shown = compact ? reviews.slice(0, 3) : reviews;
  return (
    <section className="bg-coal py-24 md:py-32" id="reviews">
      <div className="container-site">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow on-dark mb-4">Reviews</p>
            <h2 className="display text-4xl text-white sm:text-5xl">
              5 Stars, <span className="text-flame-hot">Every Time</span>
            </h2>
          </div>
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
            <span className="display text-3xl text-white">5.0</span>
            <div>
              <Stars n={5} />
              <p className="mt-0.5 text-xs font-semibold text-white/60">Google Reviews</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {shown.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40">
                <Quote className="absolute right-6 top-6 size-12 text-white/[0.06]" aria-hidden />
                <Stars n={r.stars} />
                <blockquote className="relative mt-4 flex-1 leading-relaxed text-white/80">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-flame font-bold text-white">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{r.name}</p>
                    <p className="text-xs text-white/50">{r.area} · Verified Customer</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          {extraRatings.map((r, i) => (
            <Reveal key={r.name} delay={(shown.length + i) * 0.07}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <Stars n={r.stars} />
                <p className="mt-4 font-bold text-white">{r.name}</p>
                <p className="text-xs text-white/50">Google Reviews · 5-star rating</p>
              </div>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal className="mt-10 text-center" delay={0.15}>
            <a
              href="/reviews"
              className="glass inline-block rounded-full px-7 py-3 font-bold uppercase tracking-wide text-white transition-all hover:border-flame/40"
            >
              Read More Reviews
            </a>
          </Reveal>
        )}

        {!compact && (
          <Reveal className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center" delay={0.1}>
            <p className="text-lg font-semibold text-white">
              Had a great experience with {business.name}?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Reviews help a family business more than you know — thank you.
            </p>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-flame px-7 py-3 font-bold uppercase tracking-wide text-white shadow-glow transition-colors hover:bg-flame-hot"
            >
              Leave a Google Review
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
