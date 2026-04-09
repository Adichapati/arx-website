import Link from "next/link";
import { Github } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-nav)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderBottom: "1px solid var(--border)" }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 py-16 pr-8 md:border-r" style={{ borderColor: "var(--border)" }}>
            <Link href="/" aria-label="ARX Home" className="block mb-4">
              <span className="display font-bold text-2xl" style={{ color: "var(--heading)", letterSpacing: "-0.03em" }}>
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Local-first Minecraft<br />operations platform.
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 label-caps footer-link"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>

          {/* Navigation */}
          <div className="py-16 px-8 md:border-r" style={{ borderColor: "var(--border)" }}>
            <p className="label-caps mb-6">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Docs */}
          <div className="py-16 px-8 md:border-r" style={{ borderColor: "var(--border)" }}>
            <p className="label-caps mb-6">Documentation</p>
            <ul className="space-y-3">
              {[
                { label: "Getting Started", href: "/docs/getting-started" },
                { label: "CLI Reference", href: "/docs/cli" },
                { label: "Configuration", href: "/docs/configuration" },
                { label: "Security", href: "/docs/security" },
                { label: "Troubleshooting", href: "/docs/troubleshooting" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Install */}
          <div className="py-16 px-8">
            <p className="label-caps mb-6">Get started</p>
            <Link href="/install" className="btn-primary mb-6 inline-flex">
              Install ARX
            </Link>
            <p className="text-xs leading-relaxed mt-6" style={{ color: "var(--muted)" }}>
              Linux + Windows official.<br />macOS best effort.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6">
          <p className="label-caps" style={{ color: "var(--muted)", fontSize: "0.65rem" }}>
            © {currentYear} {SITE_CONFIG.name} Project — Installer URL is a placeholder pending domain finalization.
          </p>
          <Link href="/status" className="label-caps footer-link" style={{ fontSize: "0.65rem" }}>
            System Status
          </Link>
        </div>
      </div>
    </footer>
  );
}
