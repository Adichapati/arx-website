"use client";

import { useEffect } from "react";

type BiomeTheme = "nether";

const STORAGE_KEY = "arx_biome_theme";

function applyBiomeTheme(theme: BiomeTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-biome", theme);
}

function saveBiomeTheme(theme: BiomeTheme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function BiomeThemeControl({ compact: _compact = false }: { compact?: boolean }) {
  useEffect(() => {
    applyBiomeTheme("nether");
    saveBiomeTheme("nether");
  }, []);

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Theme status">
      <span
        className="label-caps"
        style={{
          border: "1px solid var(--border-bright)",
          background: "color-mix(in srgb, var(--accent) 18%, transparent)",
          color: "var(--heading)",
          borderRadius: "999px",
          padding: _compact ? "0.22rem 0.55rem" : "0.3rem 0.7rem",
          fontSize: _compact ? "0.6rem" : "0.62rem",
          letterSpacing: "0.11em",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        Autumn
      </span>
    </div>
  );
}
