"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function SecurityPage() {
  return (
    <DocsPageLayout
      title="Security Model"
      description="How ARX keeps your server, system, and data safe."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="philosophy">Security Philosophy</h2>
          <p className="text-arx-text-secondary text-sm leading-relaxed">
            ARX is designed with security as a first principle. The system operates entirely locally by default — your data, your AI model, and your server operations never leave your machine unless you explicitly enable features like the Playit tunnel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="local-first">Local-First Operation</h2>
          <div className="space-y-3">
            {[
              "All AI processing runs locally through Ollama — no cloud API calls",
              "Server management operates entirely on your machine",
              "Dashboard is served locally, accessible only on your network by default",
              "No telemetry, analytics, or phone-home behavior",
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 flex items-start gap-3">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-arx-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="command-safety">Command Execution Safety</h2>
          <p className="text-arx-text-secondary text-sm mb-4 leading-relaxed">
            ARX implements multiple layers of command execution safety to prevent unintended operations:
          </p>
          <ul className="space-y-2 text-arx-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span><strong className="text-arx-text-primary">Controlled command pathways:</strong> Only predefined, validated commands are executed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span><strong className="text-arx-text-primary">OP-only execution boundaries:</strong> Server commands require operator-level permissions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span><strong className="text-arx-text-primary">Explicit validation safeguards:</strong> Commands pass through validation before execution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span><strong className="text-arx-text-primary">No arbitrary code execution:</strong> AI suggestions are validated, not auto-executed</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="release-integrity">Release Integrity</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            Every ARX release includes SHA-256 checksums so you can verify download authenticity:
          </p>
          <CodeBlock
            code={`# Download checksums\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/checksums.txt -o checksums.txt\n\n# Verify\nsha256sum -c checksums.txt`}
            language="bash"
          />
          <p className="text-sm text-arx-text-secondary mt-3">
            See <a href="/docs/release-verification" className="text-arx-cyan hover:underline">Release Verification</a> for the complete guide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="reporting">Security Reporting</h2>
          <p className="text-arx-text-secondary text-sm">
            If you discover a security vulnerability, please report it responsibly by emailing{" "}
            <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">security@YOUR_DOMAIN</code>.
            Do not open public issues for security vulnerabilities.
          </p>
        </section>
      </div>
    </DocsPageLayout>
  );
}
