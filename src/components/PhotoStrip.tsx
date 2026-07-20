import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function PhotoStrip() {
  const shown = galleryItems.slice(0, 6);
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Real Jobs</p>
            <h2 className="display text-4xl sm:text-5xl">
              See The <span className="text-flame">Work</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-flame-deep transition-colors hover:text-flame"
          >
            More Photos
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {shown.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.06} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
