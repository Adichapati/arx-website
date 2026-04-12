"use client";

import { useState, useCallback } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
  /** Numbered step prefix e.g. "1." */
  step?: string;
}

export function CodeBlock({ code, language = "bash", label, step }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const t = document.createElement("textarea");
      t.value = code;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="group" style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(95, 125, 255, 0.03)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}>
      {/* Header row */}
      {(label || step) && (
        <div
          className="flex items-center justify-between px-0 py-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span className="label-caps" style={{ color: "var(--muted)" }}>
            {step && <span style={{ color: "var(--heading)" }}>{step} </span>}
            {label}
          </span>
          <button
            onClick={handleCopy}
            className="label-caps transition-colors duration-200 focus:outline-none focus-visible:underline"
            style={{ color: copied ? "var(--accent)" : "var(--muted)", cursor: "pointer" }}
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      )}

      {/* Code area */}
      <div className="relative">
        {/* Copy button when no header */}
        {!label && !step && (
          <button
            onClick={handleCopy}
            className="label-caps absolute top-3 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:opacity-100 focus:outline-none"
            style={{ color: copied ? "var(--accent)" : "var(--muted)", cursor: "pointer" }}
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        )}

        <pre
          className="py-4 overflow-x-auto text-sm leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.7 }}
        >
          <code>
            {code.split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span style={{ color: colorize(line, language) === "comment" ? "var(--muted)" : line.includes("#") ? undefined : undefined }}>
                  {renderLine(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function colorize(line: string, language: string): string {
  if (line.trimStart().startsWith("#")) return "comment";
  return "default";
}

function renderLine(line: string, language: string): React.ReactNode {
  if (language === "bash" || language === "shell") {
    if (line.trimStart().startsWith("#")) {
      return <span style={{ color: "var(--muted)" }}>{line}</span>;
    }
    if (line.startsWith("$")) {
      return (
        <>
          <span style={{ color: "var(--accent)" }}>$</span>
          <span style={{ color: "var(--heading)" }}>{line.slice(1)}</span>
        </>
      );
    }
    // Color first word (command) in accent
    const m = line.match(/^(\s*)(\S+)(.*)/);
    if (m) {
      return (
        <>
          <span>{m[1]}</span>
          <span style={{ color: "var(--accent)" }}>{m[2]}</span>
          <span style={{ color: "var(--heading)" }}>{m[3]}</span>
        </>
      );
    }
  }
  if (language === "yaml" || language === "yml") {
    if (line.trimStart().startsWith("#")) return <span style={{ color: "var(--muted)" }}>{line}</span>;
    const m = line.match(/^(\s*)([\w-]+)(:)(.*)/);
    if (m) return (
      <>
        <span>{m[1]}</span>
        <span style={{ color: "var(--accent)" }}>{m[2]}</span>
        <span style={{ color: "var(--muted)" }}>{m[3]}</span>
        <span style={{ color: "var(--heading)" }}>{m[4]}</span>
      </>
    );
  }
  return <span style={{ color: "var(--heading)" }}>{line}</span>;
}
