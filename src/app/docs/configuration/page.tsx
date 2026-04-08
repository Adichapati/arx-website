"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function ConfigurationPage() {
  return (
    <DocsPageLayout
      title="Configuration"
      description="Customize ARX settings, AI context, server options, and more."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="config-file">Configuration File</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            ARX uses a YAML configuration file located at <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">~/.arx/config.yml</code> (Linux) or <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">%APPDATA%\arx\config.yml</code> (Windows).
          </p>
          <CodeBlock
            code={`# ARX configuration file\n# ~/.arx/config.yml\n\nserver:\n  name: "My Minecraft Server"\n  port: 25565\n  max_players: 20\n  motd: "Powered by ARX"\n\nai:\n  model: "gemma4:e2b"\n  context_size: 4096\n  ollama_host: "http://localhost:11434"\n\ndashboard:\n  port: 3000\n  host: "0.0.0.0"\n\ntunnel:\n  enabled: false\n  provider: "playit"\n\nlogging:\n  level: "info"\n  file: "~/.arx/logs/arx.log"`}
            language="yaml"
            title="config.yml"
            showLineNumbers
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="server-config">Server Settings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-arx-border">
                  <th className="text-left py-3 px-4 text-arx-text-secondary font-semibold">Key</th>
                  <th className="text-left py-3 px-4 text-arx-text-secondary font-semibold">Default</th>
                  <th className="text-left py-3 px-4 text-arx-text-secondary font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-arx-text-secondary">
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">server.port</td>
                  <td className="py-3 px-4">25565</td>
                  <td className="py-3 px-4">Minecraft server port</td>
                </tr>
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">server.max_players</td>
                  <td className="py-3 px-4">20</td>
                  <td className="py-3 px-4">Maximum concurrent players</td>
                </tr>
                <tr className="border-b border-arx-border/50">
                  <td className="py-3 px-4 font-mono text-arx-cyan text-xs">server.motd</td>
                  <td className="py-3 px-4">&quot;Powered by ARX&quot;</td>
                  <td className="py-3 px-4">Server message of the day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="ai-config">AI Settings</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            AI settings control the local Ollama integration. You can also modify these via CLI:
          </p>
          <CodeBlock
            code={`# Set context window via CLI\narx ai set-context 4096\n\n# Or edit config.yml directly\nai:\n  model: "gemma4:e2b"\n  context_size: 4096`}
            language="yaml"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="tunnel-config">Tunnel Settings</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            Enable and configure the Playit tunnel for internet access to your server.
          </p>
          <CodeBlock
            code={`tunnel:\n  enabled: true\n  provider: "playit"\n\n# Or use CLI:\narx tunnel setup`}
            language="yaml"
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="environment">Environment Variables</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            ARX also supports environment variable overrides with the <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">ARX_</code> prefix:
          </p>
          <CodeBlock
            code={`# Override server port\nexport ARX_SERVER_PORT=25566\n\n# Override AI context size\nexport ARX_AI_CONTEXT_SIZE=8192\n\n# Override dashboard port\nexport ARX_DASHBOARD_PORT=8080`}
            language="bash"
          />
        </section>
      </div>
    </DocsPageLayout>
  );
}
