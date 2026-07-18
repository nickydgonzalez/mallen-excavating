import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/lib/images";
import Reveal from "@/components/Reveal";

const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]"];

export default function PhotoStrip() {
  const shown = galleryItems.slice(0, 6);
  return (
    <section className="bg-coal py-24 md:py-32">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow on-dark mb-4">Real Jobs</p>
            <h2 className="display text-4xl text-white sm:text-5xl">
              See The <span className="text-flame-hot">Work</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-flame-hot transition-colors hover:text-white"
          >
            More Photos
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="columns-2 gap-4 lg:columns-3">
          {shown.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06} className="mb-4 break-inside-avoid">
              <div className={`group relative overflow-hidden rounded-2xl border border-white/10 ${aspects[i % aspects.length]}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
