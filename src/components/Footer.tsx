import Link from "next/link";
import { Terminal, Github, MessageCircle } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-arx-border bg-arx-bg-elevated/50">
      {/* Gradient line */}
      <div className="gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="ARX Home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-arx-cyan to-arx-violet flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-arx-text-primary">A</span>
                <span className="text-arx-cyan">R</span>
                <span className="text-arx-text-primary">X</span>
              </span>
            </Link>
            <p className="text-sm text-arx-text-secondary leading-relaxed">
              {SITE_CONFIG.tagline}
              <br />
              Local AI. Full control.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-arx-text-primary mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-arx-text-secondary hover:text-arx-cyan transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Docs */}
          <div>
            <h3 className="text-sm font-semibold text-arx-text-primary mb-4 uppercase tracking-wider">
              Documentation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Getting Started", href: "/docs/getting-started" },
                { label: "CLI Reference", href: "/docs/cli" },
                { label: "Configuration", href: "/docs/configuration" },
                { label: "Security", href: "/docs/security" },
                { label: "Troubleshooting", href: "/docs/troubleshooting" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-arx-text-secondary hover:text-arx-cyan transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-arx-text-primary mb-4 uppercase tracking-wider">
              Community
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-arx-bg-card border border-arx-border flex items-center justify-center text-arx-text-secondary hover:text-arx-cyan hover:border-arx-cyan/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-arx-bg-card border border-arx-border flex items-center justify-center text-arx-text-secondary hover:text-arx-cyan hover:border-arx-cyan/30 transition-all"
                aria-label="Discord"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-arx-text-muted">
              Built with care for the Minecraft community.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-arx-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-arx-text-muted">
            © {currentYear} ARX Project. All rights reserved.
          </p>
          <p className="text-xs text-arx-text-muted">
            Installer URL is currently placeholder and will be replaced after domain finalization.
          </p>
        </div>
      </div>
    </footer>
  );
}
