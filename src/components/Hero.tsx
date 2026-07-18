"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Phone, BadgeCheck, ShieldCheck, Clock, Star, ChevronDown } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

const badges = [
  { icon: BadgeCheck, label: "Family Owned" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "52 Years Experience" },
  { icon: Star, label: "Free Estimates" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });
  const bgX = useTransform(springX, [-0.5, 0.5], ["-1.5%", "1.5%"]);
  const bgY = useTransform(springY, [-0.5, 0.5], ["-1.5%", "1.5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh items-center overflow-hidden bg-ink"
    >
      <motion.div className="absolute -inset-4" style={{ x: bgX, y: bgY }}>
        <motion.img
          src={images.hero}
          alt="Excavator working a Hudson Valley job site"
          className="size-full object-cover opacity-45"
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.1, 1.18, 1.1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <div className="container-site relative z-10 pb-24 pt-40">
        <motion.p
          className="eyebrow on-dark mb-7"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {business.city} · Hudson Valley
        </motion.p>

        <motion.h1
          className="display max-w-4xl text-6xl text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Hudson Valley
          <br />
          <span className="text-flame-hot text-glow">Excavation &amp; Site Work.</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Septic systems, drainage, waterproofing, grading, and general
          excavation — done by Wayne himself, not a call center. Fair
          pricing and 52 years of trust across the Hudson Valley.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            href="/#quote"
            className="rounded-full bg-flame px-8 py-4 font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-1 hover:bg-flame-hot"
          >
            Get Free Estimate
          </Link>
          <Link
            href="/gallery"
            className="glass flex items-center gap-2.5 rounded-full px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-1"
          >
            View Our Work
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2.5 px-2 py-4 font-bold uppercase tracking-wide text-white/80 transition-colors hover:text-flame-hot"
          >
            <Phone className="size-5" aria-hidden />
            {business.phone}
          </a>
        </motion.div>

        <motion.ul
          className="mt-16 flex flex-wrap gap-3"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } } }}
        >
          {badges.map((b) => (
            <motion.li
              key={b.label}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <b.icon className="size-4 text-flame-hot" aria-hidden />
              {b.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4, duration: 0.6 }, y: { delay: 1.4, duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <ChevronDown className="size-6 text-white/50" aria-hidden />
      </motion.div>
    </section>
  );
}
