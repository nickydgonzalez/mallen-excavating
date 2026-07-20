import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, services } from "@/lib/business";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7h2.3l.45-3H13.5V9.05c0-.87.24-1.55 1.5-1.55h1.35V4.8c-.28-.04-1.2-.12-2.28-.12-2.25 0-3.82 1.37-3.82 3.9V11H8v3h2.25v7h3.25Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-site grid gap-12 py-16 text-center md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <Link href="/" className="display block text-2xl leading-none text-flame-hot">
            Mallen
            <span className="block text-white">Excavating</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Family-owned site work and excavation serving the Hudson Valley since 1974.
            Honest pricing, reliable scheduling, and a phone Wayne actually answers.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-smoke">{business.license}</p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/MallenExcavatingNY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-slate transition-colors hover:bg-flame hover:text-white"
            >
              <FacebookIcon className="size-4.5" />
            </a>
          </div>
        </div>

        <nav aria-label="Services" className="flex flex-col items-center">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition-colors hover:text-flame-hot">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="flex flex-col items-center">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About Us", "/about"],
              ["Our Work", "/gallery"],
              ["Reviews", "/reviews"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-flame-hot">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">Get In Touch</h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <a href={business.phoneHref} className="flex items-center justify-center gap-3 font-bold text-white transition-colors hover:text-flame-hot">
                <Phone className="size-4.5 text-flame-hot" aria-hidden /> {business.phone}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail className="size-4.5 shrink-0 text-flame-hot" aria-hidden /> {business.email}
            </li>
            <li className="flex items-center justify-center gap-3">
              <MapPin className="size-4.5 shrink-0 text-flame-hot" aria-hidden /> {business.address}
            </li>
            <li className="flex items-center justify-center gap-3">
              <Clock className="size-4.5 shrink-0 text-flame-hot" aria-hidden />
              <span>{business.hours}</span>
            </li>
          </ul>
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-smoke">
            Serving {business.serviceAreas.slice(0, 6).join(", ")} &amp; the surrounding Hudson Valley.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-smoke sm:flex-row">
          <p>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
          <p>Made by pinkwing.ai</p>
        </div>
      </div>
    </footer>
  );
}
