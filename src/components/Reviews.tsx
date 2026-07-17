import { Star } from "lucide-react";
import { reviews, extraRatings, business } from "@/lib/business";
import Reveal from "@/components/Reveal";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </span>
  );
}

export default function Reviews({ compact = false }: { compact?: boolean }) {
  const shown = compact ? reviews.slice(0, 3) : reviews;
  return (
    <section className="bg-mist py-20 md:py-28" id="reviews">
      <div className="container-site">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Reviews</p>
            <h2 className="display text-4xl sm:text-5xl">
              5 Stars, <span className="text-flame">Every Time</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 shadow-card">
            <span className="display text-3xl">5.0</span>
            <div>
              <Stars n={5} />
              <p className="mt-0.5 text-xs font-semibold text-slate/70">Google Reviews</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-lg bg-white p-7 shadow-card transition-shadow hover:shadow-lift">
                <Stars n={r.stars} />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-mist pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-ink font-bold text-white">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{r.name}</p>
                    <p className="text-xs text-slate/60">{r.area} · Verified Customer</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          {extraRatings.map((r, i) => (
            <Reveal key={r.name} delay={(shown.length + i) * 0.07}>
              <div className="flex h-full flex-col justify-center rounded-lg bg-white p-7 shadow-card">
                <Stars n={r.stars} />
                <p className="mt-4 font-bold">{r.name}</p>
                <p className="text-xs text-slate/60">Google Reviews · 5-star rating</p>
              </div>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal className="mt-10 text-center" delay={0.15}>
            <a
              href="/reviews"
              className="inline-block rounded border-2 border-ink px-7 py-3 font-bold uppercase tracking-wide text-ink transition-all hover:bg-ink hover:text-white"
            >
              Read More Reviews
            </a>
          </Reveal>
        )}

        {!compact && (
          <Reveal className="mt-12 rounded-lg bg-white p-8 text-center shadow-card" delay={0.1}>
            <p className="text-lg font-semibold">
              Had a great experience with {business.name}?
            </p>
            <p className="mt-1 text-sm text-slate/70">
              Reviews help a family business more than you know — thank you.
            </p>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded bg-flame px-7 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-flame-hot"
            >
              Leave a Google Review
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
