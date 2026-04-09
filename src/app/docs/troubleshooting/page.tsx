"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function TroubleshootingPage() {
  return (
    <DocsPageLayout title="Troubleshooting" description="Common issues and how to resolve them.">
      <div className="space-y-8">
        <section>
          <h2 id="install-issues">Installation Issues</h2>

          <h3>&quot;command not found: arx&quot; after install</h3>
          <p>The shell hasn&apos;t loaded the new PATH entries yet.</p>
          <CodeBlock code={`# Reload your shell\nsource ~/.bashrc    # or ~/.zshrc\n\n# Or restart your terminal`} language="bash" />

          <h3>Permission denied on Linux install</h3>
          <p>The installer needs elevated permissions to install system-wide.</p>
          <CodeBlock code={`# Run with sudo\ncurl -fsSL https://arxmc.studio/install.sh | sudo bash`} language="bash" />

          <h3>Windows Defender blocks the script</h3>
          <p>PowerShell execution policies may need adjustment.</p>
          <CodeBlock code={`# Run PowerShell as Administrator, then:\nSet-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\n\n# Then retry the install command`} language="bash" />
        </section>

        <section>
          <h2 id="ollama-issues">Ollama Issues</h2>

          <h3>Ollama fails to start</h3>
          <p>Port 11434 might be in use or Ollama isn&apos;t installed properly.</p>
          <CodeBlock code={`# Check if port is in use\nlsof -i :11434\n\n# Start Ollama manually\nollama serve\n\n# Verify the model is available\nollama list`} language="bash" />

          <h3>Model not found</h3>
          <p>The Gemma model may not have been pulled during install.</p>
          <CodeBlock code={`# Pull the model manually\nollama pull gemma4:e2b\n\n# Verify\nollama list`} language="bash" />
        </section>

        <section>
          <h2 id="server-issues">Server Issues</h2>

          <h3>Server won&apos;t start</h3>
          <p>Check status and logs for error details.</p>
          <CodeBlock code={`# Check detailed status\narx status\n\n# Check logs (location from config)\ncat ~/.arx/logs/arx.log | tail -50`} language="bash" />

          <h3>Port already in use (25565)</h3>
          <p>Another Minecraft server or process is using the default port.</p>
          <CodeBlock code={`# Find the process\nlsof -i :25565\n\n# Or change the port in config\n# ~/.arx/config.yml -> server.port: 25566`} language="bash" />
        </section>

        <section>
          <h2 id="tunnel-issues">Tunnel Issues</h2>

          <h3>Tunnel won&apos;t connect</h3>
          <p>Ensure Playit is installed and your internet connection is active.</p>
          <CodeBlock code={`# Check tunnel status\narx tunnel status\n\n# Re-run setup\narx tunnel setup`} language="bash" />
        </section>

        <section>
          <h2 id="get-help">Still Need Help?</h2>
          <p>If your issue isn&apos;t covered here, reach out through:</p>
          <ul>
            <li>GitHub Issues: <code>github.com/Adichapati/ARX/issues</code></li>
            <li>Email: <code>support@arxmc.studio</code></li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
