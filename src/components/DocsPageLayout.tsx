"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Edit3 } from "lucide-react";
import { DOCS_NAV, GITHUB } from "@/lib/constants";
import { ScrollReveal } from "@/components/ScrollReveal";

interface DocsPageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocsPageLayout({ title, description, children }: DocsPageLayoutProps) {
  const pathname = usePathname();

  // Flatten nav for prev/next
  const allPages = DOCS_NAV.flatMap((section) => section.items as readonly { label: string; href: string }[]);
  const currentIndex = allPages.findIndex((item) => item.href === pathname);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  // Build edit URL from path
  const editPath = pathname.replace("/docs", "src/app/docs") + "/page.tsx";
  const editUrl = `https://github.com/${GITHUB.org}/${GITHUB.websiteRepo}/edit/main/${editPath}`;

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10">
      <ScrollReveal>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
          {description && (
            <p className="text-lg text-arx-text-secondary">{description}</p>
          )}
          <div className="gradient-line mt-6" />
        </div>

        {/* Content */}
        <div className="prose-arx">{children}</div>

        {/* Edit link */}
        <div className="mt-12 pt-6 border-t border-arx-border">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-arx-text-muted hover:text-arx-cyan transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            Edit this page on GitHub
          </a>
        </div>

        {/* Prev/Next */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className="glass-card-hover p-5 group"
            >
              <span className="text-xs text-arx-text-muted mb-1 block">Previous</span>
              <span className="text-sm font-semibold flex items-center gap-2">
                <ChevronLeft className="w-4 h-4 text-arx-cyan" />
                {prev.label}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={next.href}
              className="glass-card-hover p-5 text-right group sm:col-start-2"
            >
              <span className="text-xs text-arx-text-muted mb-1 block">Next</span>
              <span className="text-sm font-semibold flex items-center justify-end gap-2">
                {next.label}
                <ChevronRight className="w-4 h-4 text-arx-cyan" />
              </span>
            </Link>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
