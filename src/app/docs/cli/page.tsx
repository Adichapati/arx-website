"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { CLI_COMMANDS } from "@/lib/constants";

export default function CLIPage() {
  return (
    <DocsPageLayout title="CLI Reference" description="Complete reference for all ARX command-line commands.">
      <div className="space-y-8">
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            The <code>arx</code> CLI is the primary interface for managing your Minecraft server operations. After installation, it&apos;s available as a global command.
          </p>
          <CodeBlock code="arx help" language="bash" />
        </section>

        <section>
          <h2 id="commands">Commands</h2>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {CLI_COMMANDS.map((cmd) => (
              <div
                key={cmd.command}
                className="flex items-start justify-between gap-4 py-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <code style={{ color: "var(--accent)", fontSize: "0.8em" }}>{cmd.command}</code>
                <span style={{ color: "var(--body)", fontSize: "0.875rem", textAlign: "right" }}>{cmd.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 id="lifecycle">Lifecycle Commands</h2>
          <CodeBlock
            code={`# Start the full server stack (Minecraft server, dashboard, AI)\narx start\n\n# Check running status of all components\narx status\n\n# Gracefully shut down all components\narx shutdown`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="ai-commands">AI Commands</h2>
          <p>ARX uses Ollama with the Gemma model for local AI features. Configure the AI context window and model settings through the CLI.</p>
          <CodeBlock
            code={`# Set AI context window size\narx ai set-context 4096\n\n# The default model is gemma4:e2b\n# Managed through Ollama`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="tunnel-commands">Tunnel Commands</h2>
          <p>ARX supports optional internet access for your Minecraft server via the Playit tunnel system.</p>
          <CodeBlock
            code={`# Set up Playit tunnel for internet access\narx tunnel setup\n\n# Check tunnel connection status\narx tunnel status`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="global-options">Global Options</h2>
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>--version</code></td><td>Display ARX version</td></tr>
              <tr><td><code>--help, -h</code></td><td>Display help information</td></tr>
              <tr><td><code>--verbose, -v</code></td><td>Enable verbose output</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </DocsPageLayout>
  );
}
