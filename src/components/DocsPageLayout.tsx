"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Edit3 } from "lucide-react";
import { DOCS_NAV, GITHUB } from "@/lib/constants";
import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";

interface DocsPageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocsPageLayout({ title, description, children }: DocsPageLayoutProps) {
  const pathname = usePathname();

  const allPages = DOCS_NAV.flatMap((section) => section.items as readonly { label: string; href: string }[]);
  const currentIndex = allPages.findIndex((item) => item.href === pathname);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const editPath = pathname.replace("/docs", "src/app/docs") + "/page.tsx";
  const editUrl = `https://github.com/${GITHUB.org}/${GITHUB.websiteRepo}/edit/main/${editPath}`;

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12">
      <ScrollReveal>
        {/* Header */}
        <div className="mb-10">
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Documentation</p>
          <h1 className="display font-bold mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--heading)", letterSpacing: "-0.02em" }}>
            {title}
          </h1>
          {description && (
            <p className="text-base leading-relaxed" style={{ color: "var(--body)" }}>{description}</p>
          )}
          <RevealedRule className="mt-8" delay={0.2} />
        </div>

        {/* Content */}
        <div className="prose-arx">{children}</div>

        {/* Edit link */}
        <div className="mt-16 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-caps transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--heading)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            <Edit3 className="w-3.5 h-3.5" />
            Edit this page on GitHub
          </a>
        </div>

        {/* Prev/Next */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0"
          style={{ borderTop: "1px solid var(--border)" }}>
          {prev ? (
            <Link
              href={prev.href}
              className="py-6 pr-6 group transition-colors duration-200"
              style={{ borderRight: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <p className="label-caps mb-2" style={{ color: "var(--muted)" }}>← Previous</p>
              <p className="text-sm font-medium" style={{ color: "var(--heading)" }}>{prev.label}</p>
            </Link>
          ) : <div />}
          {next && (
            <Link
              href={next.href}
              className="py-6 pl-6 text-right group transition-colors duration-200 sm:col-start-2"
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <p className="label-caps mb-2" style={{ color: "var(--muted)" }}>Next →</p>
              <p className="text-sm font-medium" style={{ color: "var(--heading)" }}>{next.label}</p>
            </Link>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
