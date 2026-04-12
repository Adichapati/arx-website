"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BiomeThemeControl } from "@/components/BiomeThemeControl";

const HOME_LINKS = [
  { label: "Journey", href: "/#journey" },
  { label: "Inventory", href: "/#features" },
  { label: "Operations", href: "/#operations" },
  { label: "Guidebook", href: "/#faq" },
  { label: "Docs", href: "/docs" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-nav)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border-bright)" : "1px solid var(--border)",
      }}
    >
      <nav className="hidden lg:grid" style={{ gridTemplateColumns: `220px repeat(${HOME_LINKS.length}, minmax(0,1fr)) 220px 150px` }}>
        <Link
          href="/"
          aria-label="ARX Home"
          className="flex items-center gap-2 px-6 py-4 border-r group"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="nav-pixel-grass" aria-hidden="true" />
          <span className="display font-bold text-xl tracking-tight transition-opacity duration-200 group-hover:opacity-80" style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "var(--heading)" }}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {HOME_LINKS.map((link) => {
          const active = pathname === link.href || (pathname === "/" && link.href.startsWith("/#"));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link flex items-center justify-center px-4 py-4 border-r text-center ${active ? "active" : ""}`}
              style={{ borderColor: "var(--border)" }}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="flex items-center justify-center px-4 py-4 border-r" style={{ borderColor: "var(--border)" }}>
          <BiomeThemeControl />
        </div>

        <Link href="/install" className="btn-primary flex items-center justify-center px-4 py-4 text-center" style={{ borderLeft: "none" }}>
          Install
        </Link>
      </nav>

      <div className="lg:hidden flex items-center justify-between px-5 py-4" style={{ borderBottom: mobileOpen ? "1px solid var(--border)" : "none" }}>
        <Link href="/" className="display font-bold text-lg" style={{ color: "var(--heading)", letterSpacing: "-0.03em" }}>
          {SITE_CONFIG.name}
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 focus-ring"
          style={{ color: "var(--muted)" }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg-nav)" }}
          >
            {HOME_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <Link href={link.href} className="block px-5 py-4 label-caps" style={{ color: "var(--heading)" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="px-4 pt-4 pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="label-caps mb-2" style={{ color: "var(--muted)" }}>Biome Theme</p>
              <BiomeThemeControl compact />
            </div>
            <div className="p-4">
              <Link href="/install" className="btn-primary w-full justify-center">Install ARX</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
