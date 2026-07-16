"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Truck } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent py-4"
          : "bg-ink/95 shadow-lg backdrop-blur-md py-2"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-white" aria-label={`${business.name} home`}>
          <span className="grid size-10 place-items-center rounded bg-flame text-white">
            <Truck className="size-6" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="display block text-lg">Mallen</span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-smoke">
              Excavating
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-flame-hot ${
                pathname === l.href ? "text-flame-hot" : "text-white/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 text-sm font-bold text-white transition-colors hover:text-flame-hot md:flex"
          >
            <Phone className="size-4 text-flame-hot" aria-hidden />
            {business.phone}
          </a>
          <Link
            href="/contact#quote"
            className="hidden rounded bg-flame px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-card transition-all hover:bg-flame-hot hover:shadow-lift sm:block"
          >
            Request Free Estimate
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-wide ${
                  pathname === l.href ? "text-flame-hot" : "text-white/85"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 rounded bg-flame px-5 py-3 font-bold text-white"
            >
              <Phone className="size-4" aria-hidden /> Call {business.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
