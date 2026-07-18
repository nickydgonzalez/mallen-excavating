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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const transparent = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[76rem] items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          transparent ? "bg-transparent" : "glass shadow-lift"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          <span className="grid size-11 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-card sm:size-13">
            <img src="/logo.png" alt={business.name} className="size-full object-contain" />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-flame-hot"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-bold text-white transition-colors hover:text-flame-hot md:flex"
          >
            <Phone className="size-4 text-flame-hot" aria-hidden />
            {business.phone}
          </a>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-flame-hot hover:text-flame-hot lg:flex"
          >
            <Star className="size-4" aria-hidden />
            Leave A Review
          </a>
          <Link
            href="/#quote"
            className="hidden rounded-full bg-flame px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-flame-hot sm:block"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass mx-auto mt-2 max-w-[76rem] rounded-2xl shadow-lift lg:hidden" aria-label="Mobile">
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
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-flame px-5 py-3 font-bold uppercase tracking-wide text-white"
            >
              Book Now
            </Link>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold uppercase tracking-wide text-white"
            >
              <Star className="size-4" aria-hidden /> Leave A Review
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
