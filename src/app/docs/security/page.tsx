import Link from "next/link";
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
            <li>All AI processing runs locally through Ollama — no cloud LLM API dependency</li>
            <li>Server management operates entirely on your machine</li>
            <li>Dashboard binds to localhost by default</li>
            <li>No runtime usage telemetry by default; optional/explicit network features may perform external calls</li>
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
            code={`# Download manifest + release artifacts\ncurl -fsSL https://arxmc.studio/checksums.txt -o checksums.txt\ncurl -fsSL https://arxmc.studio/install.sh -o install.sh\ncurl -fsSL https://arxmc.studio/install.ps1 -o install.ps1\ncurl -fsSL https://arxmc.studio/arx-runtime.zip -o arx-runtime.zip\n\n# Verify\nsha256sum -c checksums.txt`}
            language="bash"
          />
          <p>See <Link href="/docs/release-verification">Release Verification</Link> for the complete guide.</p>
        </section>

        <section>
          <h2 id="reporting">Security Reporting</h2>
          <p>
            If you discover a security vulnerability, please report it responsibly by emailing{" "}
            <code>security@arxmc.studio</code>. Do not open public issues for security vulnerabilities.
          </p>
        </section>
      </div>
    </DocsPageLayout>
  );
}
