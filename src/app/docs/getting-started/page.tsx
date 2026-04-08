"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { INSTALLER } from "@/lib/constants";

export default function GettingStartedPage() {
  return (
    <DocsPageLayout
      title="Getting Started"
      description="Install ARX and run your first Minecraft server in minutes."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="prerequisites">Prerequisites</h2>
          <ul className="space-y-2 text-arx-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Linux (Ubuntu 20.04+, Debian 11+, Fedora 36+) or Windows 10/11</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>At least 8GB RAM (16GB recommended for AI features)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>10GB free disk space</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Internet connection for initial setup</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="install">Step 1: Install ARX</h2>
          <h3 className="text-lg font-semibold mb-2">Linux</h3>
          <CodeBlock code={INSTALLER.linux} language="bash" />

          <h3 className="text-lg font-semibold mb-2 mt-6">Windows (PowerShell)</h3>
          <CodeBlock code={INSTALLER.windows} language="bash" />

          <p className="text-sm text-arx-text-secondary mt-4">
            The installer will set up ARX, install Ollama if not present, and pull the{" "}
            <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">{INSTALLER.model}</code>{" "}
            model.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="verify">Step 2: Verify Installation</h2>
          <CodeBlock
            code={`# Check ARX is installed\narx --version\n\n# Check Ollama\nollama list`}
            language="bash"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="first-start">Step 3: First Launch</h2>
          <CodeBlock
            code={`# Start the full stack\narx start\n\n# Check everything is running\narx status`}
            language="bash"
          />
          <p className="text-sm text-arx-text-secondary mt-4">
            After <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">arx start</code>,
            the dashboard will be available at <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">http://localhost:3000</code> (default).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="next-steps">Next Steps</h2>
          <ul className="space-y-2 text-arx-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">→</span>
              <span>Learn the full <a href="/docs/cli" className="text-arx-cyan hover:underline">CLI Reference</a></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">→</span>
              <span>Customize your setup in <a href="/docs/configuration" className="text-arx-cyan hover:underline">Configuration</a></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">→</span>
              <span>Set up internet access with <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">arx tunnel setup</code></span>
            </li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
