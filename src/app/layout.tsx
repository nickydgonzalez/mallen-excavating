import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} — Septic, Drainage & Site Work in ${business.city}, ${business.state}`,
    template: `%s | ${business.name}`,
  },
  description: `Septic systems, drainage, basement waterproofing, and site work in ${business.city} and the Hudson Valley. Family owned since 1974, licensed & insured, free estimates. Call ${business.phone}.`,
  openGraph: {
    title: `${business.name} — Hudson Valley Site Work Since 1974`,
    description: `Septic systems, drainage, waterproofing, and excavation in ${business.city}, NY. Honest pricing, licensed & insured.`,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
