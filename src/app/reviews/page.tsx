import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What Hudson Valley homeowners say about Mallen Excavating's site work.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Reviews"
        title="Don't Take"
        accent="Our Word For It"
        lede="Every review below is from a real customer in our service area. This is the reputation we protect on every single job."
      />
      <Reviews />
      <CtaBand />
    </main>
  );
}
