import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainAndProgress } from "@/components/GrainAndProgress";
import { SITE_CONFIG } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.fullName}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["ARX", "Minecraft server", "server management", "local AI", "Ollama", "Gemma", "CLI", "operations platform"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.fullName}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.fullName}`,
    description: SITE_CONFIG.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased" style={{ backgroundColor: "var(--bg)", color: "var(--heading)" }}>
        {/* Grain film overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {/* Scroll progress */}
        <GrainAndProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
