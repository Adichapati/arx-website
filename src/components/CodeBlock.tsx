"use client";

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const lines = code.split("\n");

  return (
    <div className="group relative code-block">
      {/* Header */}
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-arx-border bg-arx-bg-elevated/50">
          <span className="text-xs font-medium text-arx-text-secondary">{title}</span>
          <span className="text-xs text-arx-text-muted">{language}</span>
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 ${
          title ? "top-12" : ""
        } p-1.5 rounded-md bg-arx-bg-card/80 border border-arx-border text-arx-text-secondary hover:text-arx-cyan hover:border-arx-cyan/30 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus-ring z-10`}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right pr-4 text-arx-text-muted select-none flex-shrink-0">
                    {i + 1}
                  </span>
                )}
                <span className="flex-1">
                  {colorizeCode(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function colorizeCode(line: string, language: string): React.ReactNode {
  if (language === "bash" || language === "shell") {
    // Colorize comments
    if (line.trimStart().startsWith("#")) {
      return <span className="text-arx-text-muted">{line}</span>;
    }
    // Colorize the prompt
    if (line.startsWith("$") || line.startsWith(">")) {
      return (
        <>
          <span className="text-arx-cyan">{line[0]}</span>
          <span className="text-arx-text-primary">{line.slice(1)}</span>
        </>
      );
    }
    // Colorize commands (first word)
    const parts = line.match(/^(\s*)(\S+)(.*)/);
    if (parts) {
      return (
        <>
          <span>{parts[1]}</span>
          <span className="text-arx-cyan">{parts[2]}</span>
          <span className="text-arx-text-primary">{parts[3]}</span>
        </>
      );
    }
  }

  if (language === "yaml" || language === "yml") {
    const keyVal = line.match(/^(\s*)([\w-]+)(:)(.*)/);
    if (keyVal) {
      return (
        <>
          <span>{keyVal[1]}</span>
          <span className="text-arx-cyan">{keyVal[2]}</span>
          <span className="text-arx-text-muted">{keyVal[3]}</span>
          <span className="text-arx-text-primary">{keyVal[4]}</span>
        </>
      );
    }
    if (line.trimStart().startsWith("#")) {
      return <span className="text-arx-text-muted">{line}</span>;
    }
  }

  return <span className="text-arx-text-primary">{line}</span>;
}
