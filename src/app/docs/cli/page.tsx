"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { CLI_COMMANDS } from "@/lib/constants";

export default function CLIPage() {
  return (
    <DocsPageLayout
      title="CLI Reference"
      description="Complete reference for all ARX command-line commands."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="overview">Overview</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            The <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">arx</code> CLI is the primary interface for managing your Minecraft server operations. After installation, it&apos;s available as a global command.
          </p>
          <CodeBlock code="arx help" language="bash" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="commands">Commands</h2>
          <div className="space-y-4">
            {CLI_COMMANDS.map((cmd) => (
              <div key={cmd.command} className="glass-card p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <code className="text-sm font-mono text-arx-cyan font-semibold">{cmd.command}</code>
                </div>
                <p className="text-sm text-arx-text-secondary">{cmd.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="lifecycle">Lifecycle Commands</h2>
          <CodeBlock
            code={`# Start the full server stack (Minecraft server, dashboard, AI)\narx start\n\n# Check running status of all components\narx status\n\n# Gracefully shut down all components\narx shutdown`}
            language="bash"
            showLineNumbers
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="ai-commands">AI Commands</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            ARX uses Ollama with the Gemma model for local AI features. Configure the AI context window and model settings through the CLI.
          </p>
          <CodeBlock
            code={`# Set AI context window size\narx ai set-context 4096\n\n# The default model is gemma4:e2b\n# Managed through Ollama`}
            language="bash"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="tunnel-commands">Tunnel Commands</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            ARX supports optional internet access for your Minecraft server via the Playit tunnel system.
          </p>
          <CodeBlock
            code={`# Set up Playit tunnel for internet access\narx tunnel setup\n\n# Check tunnel connection status\narx tunnel status`}
            language="bash"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="global-options">Global Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-arx-border">
                  <th className="text-left py-3 px-4 text-arx-text-secondary font-semibold">Flag</th>
                  <th className="text-left py-3 px-4 text-arx-text-secondary font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-arx-text-secondary">
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">--version</td>
                  <td className="py-3 px-4">Display ARX version</td>
                </tr>
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">--help, -h</td>
                  <td className="py-3 px-4">Display help information</td>
                </tr>
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">--verbose, -v</td>
                  <td className="py-3 px-4">Enable verbose output</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocsPageLayout>
  );
}
