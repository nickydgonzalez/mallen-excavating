"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { galleryItems } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function PhotoStrip() {
  const shown = galleryItems.slice(0, 6);
  const [lightbox, setLightbox] = useState<number | null>(null);

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
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block size-full"
                aria-label={`View larger: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && shown[lightbox] && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={shown[lightbox].alt}
          >
            <button
              type="button"
              className="absolute right-6 top-6 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-flame"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden />
            </button>
            <motion.img
              src={shown[lightbox].src}
              alt={shown[lightbox].alt}
              className="max-h-[85svh] max-w-full rounded-lg shadow-lift"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
