"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-arx-bg/80 backdrop-blur-xl border-b border-arx-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="ARX Home">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-arx-cyan to-arx-violet flex items-center justify-center group-hover:shadow-lg group-hover:shadow-arx-cyan/20 transition-shadow duration-300">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-arx-cyan to-arx-violet opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-arx-text-primary">A</span>
              <span className="text-arx-cyan">R</span>
              <span className="text-arx-text-primary">X</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const href = link.href as string;
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-arx-cyan"
                      : "text-arx-text-secondary hover:text-arx-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-arx-cyan rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/install"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-arx-bg bg-arx-cyan rounded-lg hover:bg-arx-cyan-dim transition-all duration-200 hover:shadow-lg hover:shadow-arx-cyan/25 focus-ring"
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-arx-text-secondary hover:text-arx-text-primary transition-colors focus-ring rounded-lg"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-arx-bg-elevated/95 backdrop-blur-xl border-b border-arx-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const mHref = link.href as string;
                const isActive =
                  pathname === mHref || (mHref !== "/" && pathname.startsWith(mHref));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-arx-cyan bg-arx-cyan/5"
                        : "text-arx-text-secondary hover:text-arx-text-primary hover:bg-arx-bg-hover"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/install"
                  className="block px-4 py-2.5 text-sm font-semibold text-center text-arx-bg bg-arx-cyan rounded-lg hover:bg-arx-cyan-dim transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
