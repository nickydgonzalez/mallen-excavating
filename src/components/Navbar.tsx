import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist bg-white">
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          <span className="display text-2xl leading-none text-flame sm:text-4xl">
            Mallen
            <span className="block text-ink">Excavating</span>
          </span>
        </Link>

        <a
          href={business.phoneHref}
          className="flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-flame-hot sm:px-7 sm:py-3.5 sm:text-base"
        >
          <Phone className="size-4.5" aria-hidden />
          Call Now
        </a>
      </div>
    </header>
  );
}
