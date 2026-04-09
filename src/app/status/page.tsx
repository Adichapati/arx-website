"use client";

import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";

const services = [
  { name: "Website", status: "operational" as const },
  { name: "Documentation", status: "operational" as const },
  { name: "Installer CDN", status: "operational" as const },
  { name: "GitHub Releases", status: "operational" as const },
];

const statusLabel: Record<string, string> = {
  operational: "Operational",
  degraded: "Degraded",
  outage: "Outage",
};

const statusColor: Record<string, string> = {
  operational: "var(--accent)",
  degraded: "#f59e0b",
  outage: "#ef4444",
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="min-h-screen pt-14">
      {/* Header */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto" style={{ borderBottom: "1px solid var(--border)" }}>
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>System Status</p>
          <h1 className="display font-bold"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "var(--heading)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
            Service Status.
          </h1>
        </ScrollReveal>
      </section>

      <div className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto py-16">
        {/* Overall */}
        <ScrollReveal>
          <div className="flex items-center gap-4 py-6 mb-8" style={{ borderBottom: "1px solid var(--border)" }}>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: allOperational ? "var(--accent)" : "#f59e0b" }}
            />
            <h2 className="display font-semibold text-2xl" style={{ color: "var(--heading)" }}>
              {allOperational ? "All Systems Operational" : "Experiencing Issues"}
            </h2>
            <span className="label-caps ml-auto" style={{ color: "var(--muted)" }}>
              Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
        </ScrollReveal>

        {/* Service list */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl">
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {services.map((service, i) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span className="text-sm" style={{ color: "var(--heading)" }}>{service.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor[service.status] }} />
                    <span className="label-caps" style={{ color: statusColor[service.status] }}>
                      {statusLabel[service.status]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={0.2}>
          <p className="label-caps mt-12" style={{ color: "var(--muted)" }}>
            This is a placeholder status page. Live monitoring will be connected after launch.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
