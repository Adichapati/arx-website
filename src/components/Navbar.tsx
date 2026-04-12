"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { BiomeThemeControl } from "@/components/BiomeThemeControl";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

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
      {/* Desktop nav — column grid */}
      <nav className="hidden md:grid" style={{ gridTemplateColumns: `240px repeat(${NAV_LINKS.length}, 1fr) 260px 160px` }}>
        {/* Brand cell */}
        <Link
          href="/"
          aria-label="ARX Home"
          className="flex items-center gap-2 px-6 py-5 border-r group"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="nav-pixel-grass" aria-hidden="true" />
          <span
            className="display font-bold text-xl tracking-tight transition-opacity duration-200 group-hover:opacity-80"
            style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "var(--heading)" }}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Nav link cells */}
        {NAV_LINKS.map((link) => {
          const href = link.href as string;
          const isActive = pathname === href || (href !== "/" && href !== "/#features" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`nav-link flex items-center justify-center px-4 py-5 border-r text-center transition-colors duration-200 ${isActive ? "active" : ""}`}
              style={{
                borderColor: "var(--border)",
                backgroundColor: isActive ? "rgba(95,125,255,0.08)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Biome theme cell */}
        <div className="flex items-center justify-center px-4 py-5 border-r" style={{ borderColor: "var(--border)" }}>
          <BiomeThemeControl />
        </div>

        {/* CTA cell */}
        <Link
          href="/install"
          className="btn-primary flex items-center justify-center px-4 py-5 text-center"
          style={{ borderLeft: "none" }}
        >
          Install
        </Link>
      </nav>

      {/* Mobile nav */}
      <div
        className="md:hidden flex items-center justify-between px-5 py-4"
        style={{ borderBottom: mobileOpen ? "1px solid var(--border)" : "none" }}
      >
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
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg-nav)" }}
          >
            {NAV_LINKS.map((link, i) => {
              const href = link.href as string;
              const isActive = pathname === href || (href !== "/" && href !== "/#features" && pathname.startsWith(href));
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <Link
                    href={href}
                    className="block px-5 py-4 label-caps transition-colors duration-200"
                    style={{ color: isActive ? "var(--heading)" : "var(--muted)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <div className="px-4 pt-4 pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="label-caps mb-2" style={{ color: "var(--muted)" }}>Biome Theme</p>
              <BiomeThemeControl compact />
            </div>
            <div className="p-4">
              <Link href="/install" className="btn-primary w-full justify-center">
                Install ARX
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
