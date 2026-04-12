import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { CLI_COMMANDS } from "@/lib/constants";

export default function CLIPage() {
  return (
    <DocsPageLayout title="CLI Reference" description="Command-line operations for installing, running, and managing ARX.">
      <div className="space-y-8">
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            The global <code>arx</code> command is installed during setup and provides runtime lifecycle control.
          </p>
          <CodeBlock code="arx help" language="bash" />
        </section>

        <section>
          <h2 id="core-commands">Core commands</h2>
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
          <h2 id="lifecycle">Lifecycle examples</h2>
          <CodeBlock
            code={`# Start everything\narx start\n\n# Start single targets\narx start dashboard\narx start server\narx start ollama\n\n# Stop behavior\narx stop        # keeps ollama running\narx shutdown    # stops all services`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="status-and-logs">Status and diagnostics</h2>
          <CodeBlock
            code={`arx status\narx doctor\narx logs dashboard --lines 120\narx logs server --lines 120`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="ai-commands">AI tuning commands</h2>
          <CodeBlock
            code={`arx ai set-context 4096\narx restart`}
            language="bash"
          />
          <p>
            Context values should remain in stable local ranges for your hardware.
          </p>
        </section>

        <section>
          <h2 id="tunnel-commands">Tunnel commands</h2>
          <CodeBlock
            code={`arx tunnel setup\narx tunnel setup --url your-name.playit.gg:12345 --enable\narx tunnel status\narx tunnel open\narx tunnel stop`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="version">Version</h2>
          <CodeBlock code={`arx version`} language="bash" />
        </section>
      </div>
    </DocsPageLayout>
  );
}
