import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Septic installs, drainage, and site work across the Hudson Valley — see the quality for yourself.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Gallery"
        title="See The"
        accent="Quality"
        lede="Real jobs from real Hudson Valley properties. Clean work, tidy job sites, equipment we're proud to run."
      />
      <Gallery />
      <CtaBand />
    </main>
  );
}
