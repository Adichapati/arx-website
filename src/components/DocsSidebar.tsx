"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Search } from "lucide-react";
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
      <div className="p-4 border-b border-arx-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-arx-text-muted" />
          <input
            type="text"
            placeholder="Search docs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-arx-bg-card/50 border border-arx-border rounded-lg text-arx-text-primary placeholder:text-arx-text-muted focus:outline-none focus:border-arx-cyan/30 transition-colors"
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {filteredNav.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-arx-text-muted uppercase tracking-wider mb-2 px-2">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                        isActive
                          ? "bg-arx-cyan/10 text-arx-cyan font-medium border-l-2 border-arx-cyan"
                          : "text-arx-text-secondary hover:text-arx-text-primary hover:bg-arx-bg-hover"
                      }`}
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
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-arx-border bg-arx-bg-elevated/30 h-[calc(100vh-4rem)] sticky top-16 overflow-hidden">
        {sidebarContent}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-arx-cyan text-arx-bg flex items-center justify-center shadow-lg shadow-arx-cyan/25 focus-ring"
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
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed left-0 top-16 bottom-0 z-40 w-72 bg-arx-bg-elevated border-r border-arx-border"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
