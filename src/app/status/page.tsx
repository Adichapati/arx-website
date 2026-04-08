"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Activity, CheckCircle2, Clock } from "lucide-react";

const services = [
  { name: "Website", status: "operational" as const },
  { name: "Documentation", status: "operational" as const },
  { name: "Installer CDN", status: "operational" as const },
  { name: "GitHub Releases", status: "operational" as const },
];

const statusConfig = {
  operational: {
    label: "Operational",
    color: "text-green-400",
    bg: "bg-green-400",
    dot: "bg-green-400",
  },
  degraded: {
    label: "Degraded",
    color: "text-yellow-400",
    bg: "bg-yellow-400",
    dot: "bg-yellow-400",
  },
  outage: {
    label: "Outage",
    color: "text-red-400",
    bg: "bg-red-400",
    dot: "bg-red-400",
  },
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="section-padding !pt-8 !pb-12">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arx-bg-card/60 border border-arx-border mb-6">
              <Activity className="w-3.5 h-3.5 text-arx-cyan" />
              <span className="text-xs font-medium text-arx-text-secondary">System Status</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Service <span className="text-gradient-cyan">Status</span>
            </h1>
            <p className="text-arx-text-secondary max-w-xl mx-auto">
              Current operational status of ARX services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-narrow px-4 sm:px-6">
        {/* Overall status */}
        <ScrollReveal>
          <div
            className={`glass-card p-6 mb-8 flex items-center gap-4 ${
              allOperational ? "border-green-400/20" : "border-yellow-400/20"
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${allOperational ? "bg-green-400/10" : "bg-yellow-400/10"} flex items-center justify-center`}>
              <CheckCircle2 className={`w-6 h-6 ${allOperational ? "text-green-400" : "text-yellow-400"}`} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {allOperational ? "All Systems Operational" : "Experiencing Issues"}
              </h2>
              <p className="text-sm text-arx-text-muted flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                Last updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Service list */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card overflow-hidden">
            {services.map((service, i) => {
              const config = statusConfig[service.status];
              return (
                <div
                  key={service.name}
                  className={`flex items-center justify-between p-5 ${
                    i < services.length - 1 ? "border-b border-arx-border" : ""
                  }`}
                >
                  <span className="text-sm font-medium">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                    <span className={`text-sm ${config.color}`}>{config.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={0.2}>
          <p className="text-xs text-arx-text-muted text-center mt-8">
            This is a placeholder status page. It will be connected to live monitoring after launch.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
