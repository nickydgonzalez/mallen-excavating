import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist bg-white">
      <div className="container-site flex items-center justify-between py-2">
        <Link href="/" className="flex items-center" aria-label={`${business.name} home`}>
          <Image
            src="/logo-badge.png"
            alt={business.name}
            width={1024}
            height={1024}
            priority
            className="h-20 w-auto sm:h-32"
          />
        </Link>

        <p className="hidden text-center text-sm font-bold uppercase tracking-[0.15em] text-slate/60 md:block">
          Licensed &amp; Insured
          <span className="mx-3 text-mist">|</span>
          Serving The Hudson Valley Since {business.founded}
        </p>

        <a
          href={business.phoneHref}
          className="flex items-center gap-2 rounded-full bg-flame px-5 py-3 text-base font-extrabold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-flame-hot sm:px-7 sm:py-3.5 sm:text-xl"
        >
          <Phone className="size-5 shrink-0 sm:size-6" aria-hidden />
          {business.phone}
        </a>
      </div>
    </header>
  );
}
