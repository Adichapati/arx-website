"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { INSTALLER } from "@/lib/constants";

export default function GettingStartedPage() {
  return (
    <DocsPageLayout title="Getting Started" description="Install ARX and run your first Minecraft server in minutes.">
      <div className="space-y-8">
        <section>
          <h2 id="prerequisites">Prerequisites</h2>
          <ul>
            <li>Linux (Ubuntu 20.04+, Debian 11+, Fedora 36+) or Windows 10/11</li>
            <li>At least 8GB RAM (16GB recommended for AI features)</li>
            <li>10GB free disk space</li>
            <li>Internet connection for initial setup</li>
          </ul>
        </section>

        <section>
          <h2 id="install">Step 1: Install ARX</h2>
          <h3>Linux</h3>
          <CodeBlock code={INSTALLER.linux} language="bash" />

          <h3>Windows (PowerShell)</h3>
          <CodeBlock code={INSTALLER.windows} language="bash" />

          <p>
            The installer will set up ARX, install Ollama if not present, and pull the{" "}
            <code>{INSTALLER.model}</code> model.
          </p>
        </section>

        <section>
          <h2 id="verify">Step 2: Verify Installation</h2>
          <CodeBlock code={`# Check ARX is installed\narx --version\n\n# Check Ollama\nollama list`} language="bash" />
        </section>

        <section>
          <h2 id="first-start">Step 3: First Launch</h2>
          <CodeBlock code={`# Start the full stack\narx start\n\n# Check everything is running\narx status`} language="bash" />
          <p>
            After <code>arx start</code>, the dashboard will be available at <code>http://localhost:3000</code> (default).
          </p>
        </section>

        <section>
          <h2 id="next-steps">Next Steps</h2>
          <ul>
            <li>Learn the full <a href="/docs/cli">CLI Reference</a></li>
            <li>Customize your setup in <a href="/docs/configuration">Configuration</a></li>
            <li>Set up internet access with <code>arx tunnel setup</code></li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
