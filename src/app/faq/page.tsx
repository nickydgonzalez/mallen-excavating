import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Honest answers to the questions Hudson Valley property owners ask about septic, drainage, and site work.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        eyebrow="FAQ"
        title="Questions?"
        accent="Straight Answers."
        lede="Costs, timelines, septic-or-repair — everything property owners actually want to know, answered without the runaround."
      />
      <Faq />
      <CtaBand />
    </main>
  );
}
