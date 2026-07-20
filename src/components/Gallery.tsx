"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryCategories } from "@/lib/business";
import { galleryItems } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function Gallery({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = galleryItems.filter((g) => filter === "All" || g.category === filter);
  const shown = compact ? items.slice(0, 6) : items;

  return (
    <section className="bg-white py-20 md:py-28" id="gallery">
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">Our Work</p>
          <h2 className="display text-4xl sm:text-5xl">
            Built Clean. <span className="text-flame">Done Right.</span>
          </h2>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                filter === c ? "bg-ink text-white" : "bg-mist text-slate hover:bg-ink/10"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid auto-rows-[11rem] grid-cols-2 gap-4 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((g, i) => (
              <motion.button
                layout
                key={g.src}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-lg ${i % 5 === 0 ? "row-span-2" : ""}`}
                aria-label={`View larger: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 translate-y-2 text-left text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

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
      </div>
    </section>
  );
}
