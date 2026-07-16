"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, BadgeCheck, ShieldCheck, Clock, Star } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

const badges = [
  { icon: BadgeCheck, label: "Family Owned" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "52 Years Experience" },
  { icon: Star, label: "Free Estimates" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <motion.img
          src={images.hero}
          alt="Excavator working a Hudson Valley job site"
          className="size-full object-cover opacity-45"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="container-site relative z-10 pb-20 pt-36">
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {business.city} · Hudson Valley
        </motion.p>

        <motion.h1
          className="display max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          52 Years Moving
          <br />
          <span className="text-flame-hot">Hudson Valley Earth.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Septic systems, drainage, waterproofing, and site work from a
          family-owned {business.city} company. Honest pricing, straight
          answers, and Wayne on the other end of the phone since 1974.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link
            href="/contact#quote"
            className="rounded bg-flame px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-flame-hot"
          >
            Request Free Estimate
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2.5 rounded border-2 border-white/25 px-7 py-[0.9rem] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:border-flame-hot hover:text-flame-hot"
          >
            <Phone className="size-5" aria-hidden />
            {business.phone}
          </a>
        </motion.div>

        <motion.ul
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
        >
          {badges.map((b) => (
            <motion.li
              key={b.label}
              className="flex items-center gap-2 text-sm font-semibold text-white/90"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <b.icon className="size-4.5 text-flame-hot" aria-hidden />
              {b.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
