"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { DOCS_NAV } from "@/lib/constants";

export function DocsSidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredNav = DOCS_NAV.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
          <input
            type="text"
            placeholder="Search docs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-6 pr-3 py-2 text-sm bg-transparent focus:outline-none placeholder:label-caps"
            style={{
              color: "var(--heading)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              caretColor: "var(--accent)",
            }}
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-6 px-5 space-y-8">
        {filteredNav.map((section) => (
          <div key={section.title}>
            <p className="label-caps mb-3" style={{ color: "var(--muted)" }}>
              {section.title}
            </p>
            <ul className="space-y-0">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} style={{ borderBottom: "1px solid var(--border)" }}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm transition-colors duration-200"
                      style={{
                        color: isActive ? "var(--heading)" : "var(--muted)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.72rem",
                        letterSpacing: "0.06em",
                        paddingLeft: isActive ? "0.75rem" : "0",
                        borderLeft: isActive ? "1px solid var(--accent)" : "1px solid transparent",
                        transition: "all 200ms",
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.color = "var(--heading)";
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.color = "var(--muted)";
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:block w-60 flex-shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden"
        style={{ borderRight: "1px solid var(--border)", backgroundColor: "var(--bg-nav)" }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center focus-ring"
        style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(12,26,13,0.85)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="lg:hidden fixed left-0 top-14 bottom-0 z-40 w-72 overflow-auto"
              style={{ backgroundColor: "var(--bg-nav)", borderRight: "1px solid var(--border)" }}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
