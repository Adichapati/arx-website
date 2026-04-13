"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncHash = () => setActiveHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof document === "undefined") return;

    const root = document.documentElement;
    const updateOffset = () => {
      const next = Math.ceil(header.getBoundingClientRect().height) + 8;
      root.style.setProperty("--nav-offset", `${next}px`);
    };

    updateOffset();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateOffset);
      resizeObserver.observe(header);
    }

    window.addEventListener("resize", updateOffset, { passive: true });

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const hashTargets = NAV_LINKS
      .map((link) => (typeof link.href === "string" && link.href.startsWith("/#") ? link.href.slice(2) : null))
      .filter((id): id is string => Boolean(id));

    if (!hashTargets.length) return;

    const sections = hashTargets
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const headerHeight = Math.ceil(headerRef.current?.getBoundingClientRect().height ?? 68);
    const topCutoff = headerHeight + 24;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHash(`#${visible[0].target.id}`);
          return;
        }

        const passed = sections.filter((section) => section.getBoundingClientRect().top <= topCutoff);
        if (passed.length > 0) {
          setActiveHash(`#${passed[passed.length - 1].id}`);
        }
      },
      {
        rootMargin: `-${headerHeight + 8}px 0px -45% 0px`,
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      const targetHash = href.slice(1); // "#features"
      return pathname === "/" && activeHash === targetHash;
    }

    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 overflow-visible"
      style={{
        backgroundColor: "var(--bg-nav)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid var(--border)",
      }}
    >
      {/* Desktop nav — column grid */}
      <nav
        className="hidden md:grid"
        aria-label="Primary"
        style={{ gridTemplateColumns: `240px repeat(${NAV_LINKS.length}, 1fr) 160px` }}
      >
        {/* Brand cell */}
        <Link
          href="/"
          aria-label="ARX Home"
          className="brand-link flex items-center px-6 py-5 border-r group"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="brand-wordmark display font-bold text-xl tracking-tight transition-opacity duration-200 group-hover:opacity-80"
            style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "var(--heading)", marginLeft: "1.6rem" }}
          >
            {SITE_CONFIG.name}
          </span>
          <span className="brand-miner" aria-hidden="true" />
        </Link>

        {/* Nav link cells */}
        {NAV_LINKS.map((link) => {
          const href = link.href as string;
          const isActive = isLinkActive(href);

          return (
            <Link
              key={href}
              href={href}
              className={`nav-link flex items-center justify-center px-4 py-5 border-r text-center transition-colors duration-200 ${isActive ? "active" : ""}`}
              style={{ borderColor: "var(--border)" }}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}

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
          type="button"
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
              const isActive = isLinkActive(href);
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
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
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
