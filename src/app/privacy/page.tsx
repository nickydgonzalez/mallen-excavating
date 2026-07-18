import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses, and protects your information.`,
};

const sections: { h: string; p: string }[] = [
  {
    h: "Information We Collect",
    p: "When you request an estimate, book a service, or use our chat assistant, we collect the information you provide: name, phone number, email address, service address, and details about your project. We also collect basic usage data (pages visited, device type) to keep the site fast and useful.",
  },
  {
    h: "How We Use It",
    p: "We use your information for one purpose: providing the service you asked for — scheduling appointments, sending estimates, confirming visits, and following up on completed work. We may send review requests after a finished job. We do not sell, rent, or share your personal information with third parties for marketing.",
  },
  {
    h: "Text Messages",
    p: "If you provide your phone number, we may text you to confirm appointments, respond to missed calls, or follow up on quotes. Reply STOP at any time to opt out of text communication.",
  },
  {
    h: "Data Security",
    p: "Your information is stored securely and access is limited to the people who need it to schedule and complete your service. We retain job records for warranty purposes and as required by New York contractor regulations.",
  },
  {
    h: "Cookies & Analytics",
    p: "This site uses minimal, privacy-respecting analytics to understand how visitors use it. We do not use advertising trackers or sell browsing data.",
  },
  {
    h: "Your Choices",
    p: `You may request a copy of the information we hold about you, or ask us to delete it, at any time. Contact us at ${business.email} or ${business.phone} and we'll take care of it.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Privacy" accent="Policy" />
      <section className="bg-ink py-20 md:py-24">
        <div className="container-site max-w-3xl">
          <p className="text-sm text-white/50">Last updated: July 2026</p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-extrabold uppercase tracking-tight text-white">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-white/65">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
