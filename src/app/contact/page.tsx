import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, PhoneCall } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free estimate or call ${business.name} at ${business.phone}. Serving the Hudson Valley since 1974.`,
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About"
        accent="Your Project"
        lede="Call, text, or send the form — Wayne answers his own phone and will get back to you fast."
      />

      <section className="bg-mist py-20 md:py-24" id="quote">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-6">
              <a
                href={business.phoneHref}
                className="flex items-center gap-5 rounded-lg bg-flame p-6 text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                <PhoneCall className="size-9 shrink-0" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                    Call Wayne Directly
                  </p>
                  <p className="display text-2xl">{business.phone}</p>
                </div>
              </a>

              <div className="space-y-5 rounded-lg bg-white p-7 shadow-card">
                {[
                  { Icon: Phone, label: "Phone", value: business.phone, href: business.phoneHref },
                  { Icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                  { Icon: MapPin, label: "Service Area", value: `${business.city} & the Hudson Valley` },
                  { Icon: Clock, label: "Hours", value: business.hours },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded bg-mist text-flame">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate/60">{label}</p>
                      {href ? (
                        <a href={href} className="font-semibold transition-colors hover:text-flame-deep">{value}</a>
                      ) : (
                        <p className="font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-lg shadow-card">
                <div className="grid aspect-[16/9] place-items-center bg-slate text-center text-white/60">
                  <div>
                    <MapPin className="mx-auto size-9 text-flame-hot" aria-hidden />
                    <p className="mt-2 text-sm font-semibold">Google Map — {business.city}, NY</p>
                    <p className="text-xs text-white/40">(interactive map embeds here in the live site)</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
