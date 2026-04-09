"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function SecurityPage() {
  return (
    <DocsPageLayout title="Security Model" description="How ARX keeps your server, system, and data safe.">
      <div className="space-y-8">
        <section>
          <h2 id="philosophy">Security Philosophy</h2>
          <p>
            ARX is designed with security as a first principle. The system operates entirely locally by default — your data, your AI model, and your server operations never leave your machine unless you explicitly enable features like the Playit tunnel.
          </p>
        </section>

        <section>
          <h2 id="local-first">Local-First Operation</h2>
          <ul>
            <li>All AI processing runs locally through Ollama — no cloud API calls</li>
            <li>Server management operates entirely on your machine</li>
            <li>Dashboard is served locally, accessible only on your network by default</li>
            <li>No telemetry, analytics, or phone-home behavior</li>
          </ul>
        </section>

        <section>
          <h2 id="command-safety">Command Execution Safety</h2>
          <p>ARX implements multiple layers of command execution safety to prevent unintended operations:</p>
          <ul>
            <li><strong>Controlled command pathways:</strong> Only predefined, validated commands are executed</li>
            <li><strong>OP-only execution boundaries:</strong> Server commands require operator-level permissions</li>
            <li><strong>Explicit validation safeguards:</strong> Commands pass through validation before execution</li>
            <li><strong>No arbitrary code execution:</strong> AI suggestions are validated, not auto-executed</li>
          </ul>
        </section>

        <section>
          <h2 id="release-integrity">Release Integrity</h2>
          <p>Every ARX release includes SHA-256 checksums so you can verify download authenticity:</p>
          <CodeBlock
            code={`# Download checksums\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/checksums.txt -o checksums.txt\n\n# Verify\nsha256sum -c checksums.txt`}
            language="bash"
          />
          <p>See <a href="/docs/release-verification">Release Verification</a> for the complete guide.</p>
        </section>

        <section>
          <h2 id="reporting">Security Reporting</h2>
          <p>
            If you discover a security vulnerability, please report it responsibly by emailing{" "}
            <code>security@YOUR_DOMAIN</code>. Do not open public issues for security vulnerabilities.
          </p>
        </section>
      </div>
    </DocsPageLayout>
  );
}
