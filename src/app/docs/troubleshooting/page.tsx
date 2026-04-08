"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function TroubleshootingPage() {
  return (
    <DocsPageLayout
      title="Troubleshooting"
      description="Common issues and how to resolve them."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="install-issues">Installation Issues</h2>

          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                &quot;command not found: arx&quot; after install
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                The shell hasn&apos;t loaded the new PATH entries yet.
              </p>
              <CodeBlock
                code={`# Reload your shell\nsource ~/.bashrc    # or ~/.zshrc\n\n# Or restart your terminal`}
                language="bash"
              />
            </div>

            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Permission denied on Linux install
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                The installer needs elevated permissions to install system-wide.
              </p>
              <CodeBlock
                code={`# Run with sudo\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh | sudo bash`}
                language="bash"
              />
            </div>

            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Windows Defender blocks the script
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                PowerShell execution policies may need adjustment.
              </p>
              <CodeBlock
                code={`# Run PowerShell as Administrator, then:\nSet-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n\n# Then retry the install command`}
                language="bash"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="ollama-issues">Ollama Issues</h2>

          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Ollama fails to start
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                Port 11434 might be in use or Ollama isn&apos;t installed properly.
              </p>
              <CodeBlock
                code={`# Check if port is in use\nlsof -i :11434\n\n# Start Ollama manually\nollama serve\n\n# Verify the model is available\nollama list`}
                language="bash"
              />
            </div>

            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Model not found
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                The Gemma model may not have been pulled during install.
              </p>
              <CodeBlock
                code={`# Pull the model manually\nollama pull gemma4:e2b\n\n# Verify\nollama list`}
                language="bash"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="server-issues">Server Issues</h2>

          <div className="space-y-4">
            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Server won&apos;t start
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                Check status and logs for error details.
              </p>
              <CodeBlock
                code={`# Check detailed status\narx status\n\n# Check logs (location from config)\ncat ~/.arx/logs/arx.log | tail -50`}
                language="bash"
              />
            </div>

            <div className="glass-card p-5">
              <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
                Port already in use (25565)
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                Another Minecraft server or process is using the default port.
              </p>
              <CodeBlock
                code={`# Find the process\nlsof -i :25565\n\n# Or change the port in config\n# ~/.arx/config.yml -> server.port: 25566`}
                language="bash"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="tunnel-issues">Tunnel Issues</h2>
          <div className="glass-card p-5">
            <h3 className="text-base font-semibold mb-2 text-arx-text-primary">
              Tunnel won&apos;t connect
            </h3>
            <p className="text-sm text-arx-text-secondary mb-3">
              Ensure Playit is installed and your internet connection is active.
            </p>
            <CodeBlock
              code={`# Check tunnel status\narx tunnel status\n\n# Re-run setup\narx tunnel setup`}
              language="bash"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="get-help">Still Need Help?</h2>
          <p className="text-arx-text-secondary text-sm">
            If your issue isn&apos;t covered here, reach out through:
          </p>
          <ul className="space-y-2 text-arx-text-secondary text-sm mt-3">
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>GitHub Issues: <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">github.com/YOUR_GITHUB_ORG_OR_USER/openclaw-dashboard-oneclick/issues</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Discord: <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">discord.gg/YOUR_INVITE</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Email: <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">support@YOUR_DOMAIN</code></span>
            </li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
