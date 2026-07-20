"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Star } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-5 sm:pt-5">
      <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-6 rounded-3xl border border-white/10 bg-slate px-5 py-3.5 shadow-lift backdrop-blur-xl sm:px-8 sm:py-4">
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          <span className="grid size-16 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-card sm:size-20">
            <img src="/logo.png" alt={business.name} className="size-full object-contain" />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-bold uppercase tracking-wide text-white/85 transition-colors hover:text-flame-hot"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-base font-bold text-white transition-colors hover:text-flame-hot md:flex"
          >
            <Phone className="size-5 text-flame-hot" aria-hidden />
            {business.phone}
          </a>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border-2 border-white/30 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-flame-hot hover:text-flame-hot lg:flex"
          >
            <Star className="size-4.5 fill-current" aria-hidden />
            Leave A Review
          </a>
          <Link
            href="/#quote"
            className="hidden rounded-full bg-flame px-7 py-3.5 text-base font-extrabold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-flame-hot hover:shadow-[0_0_0_1px_rgb(242_92_5_/_0.4),0_20px_56px_-12px_rgb(242_92_5_/_0.55)] sm:block"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid size-12 place-items-center rounded-full text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-7" aria-hidden /> : <Menu className="size-7" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-[76rem] rounded-2xl border border-white/10 bg-slate shadow-lift backdrop-blur-xl lg:hidden" aria-label="Mobile">
          <div className="flex flex-col p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-wide text-white/85"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#quote"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-flame px-5 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-glow"
            >
              Book Now
            </Link>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-5 py-4 text-base font-extrabold uppercase tracking-wide text-white"
            >
              <Star className="size-4.5 fill-current" aria-hidden /> Leave A Review
            </a>
            <a
              href={business.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 py-3 font-bold text-white"
            >
              <Phone className="size-4" aria-hidden /> Call {business.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
