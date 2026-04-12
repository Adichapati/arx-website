"use client";

import { useEffect, useState } from "react";

type BiomeTheme = "overworld" | "nether" | "end";

const STORAGE_KEY = "arx_biome_theme";

function applyBiomeTheme(theme: BiomeTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-biome", theme);
}

function loadBiomeTheme(): BiomeTheme {
  if (typeof window === "undefined") return "overworld";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === "nether" || raw === "end" || raw === "overworld") return raw;
  return "overworld";
}

function saveBiomeTheme(theme: BiomeTheme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function BiomeThemeControl({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<BiomeTheme>("overworld");

  useEffect(() => {
    const loaded = loadBiomeTheme();
    setTheme(loaded);
    applyBiomeTheme(loaded);
  }, []);

  const setAndPersist = (next: BiomeTheme) => {
    setTheme(next);
    applyBiomeTheme(next);
    saveBiomeTheme(next);
  };

  const btnBase: React.CSSProperties = {
    border: "1px solid var(--border)",
    background: "color-mix(in srgb, var(--accent) 6%, transparent)",
    color: "var(--muted)",
  };

  const active: React.CSSProperties = {
    borderColor: "var(--border-bright)",
    background: "color-mix(in srgb, var(--accent) 20%, transparent)",
    color: "var(--heading)",
  };

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Biome theme selector">
      {([
        ["overworld", "Over"],
        ["nether", "Nether"],
        ["end", "End"],
      ] as const).map(([id, label]) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setAndPersist(id)}
            className="focus-ring label-caps"
            style={{
              ...btnBase,
              ...(isActive ? active : null),
              borderRadius: "999px",
              padding: compact ? "0.22rem 0.55rem" : "0.3rem 0.7rem",
              fontSize: compact ? "0.6rem" : "0.62rem",
              letterSpacing: "0.11em",
              cursor: "pointer",
            }}
            aria-pressed={isActive}
            title={id === "overworld" ? "Overworld theme" : id === "nether" ? "Nether theme" : "End theme"}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
