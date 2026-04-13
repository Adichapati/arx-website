import Link from "next/link";
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
            <li>Linux or Windows (official support)</li>
            <li>macOS supported on best-effort basis</li>
            <li>At least 8GB RAM (16GB recommended for AI workloads)</li>
            <li>10GB+ free disk space</li>
            <li>Internet connection for first install and model pull</li>
          </ul>
        </section>

        <section>
          <h2 id="install">Step 1: Install ARX</h2>
          <h3>Linux/macOS (hosted one-liner)</h3>
          <CodeBlock code={INSTALLER.linux} language="bash" />

          <h3>Linux/macOS (source install fallback)</h3>
          <CodeBlock
            code={`git clone https://github.com/Adichapati/ARX.git\ncd ARX\n./install.sh`}
            language="bash"
          />

          <h3>Windows (PowerShell bootstrap)</h3>
          <CodeBlock code={INSTALLER.windows} language="powershell" />

          <p>
            Installer sets up ARX runtime, config, and local Ollama workflow with <code>{INSTALLER.model}</code>.
          </p>
        </section>

        <section>
          <h2 id="verify">Step 2: Verify install</h2>
          <CodeBlock
            code={`arx version\narx status\nollama list`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="first-start">Step 3: Start services</h2>
          <CodeBlock
            code={`arx start\narx status\narx open`}
            language="bash"
          />
          <p>
            Default dashboard URL is <code>http://localhost:18890/</code> unless changed during setup.
          </p>
        </section>

        <section>
          <h2 id="next-steps">Next Steps</h2>
          <ul>
            <li>Review <Link href="/docs/cli">CLI Reference</Link></li>
            <li>Tune options in <Link href="/docs/configuration">Configuration</Link></li>
            <li>Enable public access with <code>arx tunnel setup</code> if needed</li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
