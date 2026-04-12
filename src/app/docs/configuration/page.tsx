import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function ConfigurationPage() {
  return (
    <DocsPageLayout title="Configuration" description="How ARX stores and applies runtime configuration.">
      <div className="space-y-8">
        <section>
          <h2 id="env-file">Primary configuration: .env</h2>
          <p>
            ARX runtime configuration is generated into a project-local <code>.env</code> file during install.
          </p>
          <CodeBlock
            code={`# Key runtime examples\nBIND_HOST=0.0.0.0\nBIND_PORT=18890\nAGENT_TRIGGER=gemma\nGEMMA_OLLAMA_MODEL=gemma4:e2b\nGEMMA_CONTEXT_SIZE=4096\nGEMMA_TEMPERATURE=0.2\nPLAYIT_ENABLED=false\nPLAYIT_URL=`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="runtime-state">Runtime state file</h2>
          <p>
            ARX also persists setup/runtime defaults in <code>state/arx_config.json</code>.
          </p>
        </section>

        <section>
          <h2 id="recommended-changes">Recommended way to change settings</h2>
          <p>
            Prefer CLI commands for common changes so state stays consistent.
          </p>
          <CodeBlock
            code={`# Update AI context safely\narx ai set-context 4096\n\n# Apply changes\narx restart`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="network">Networking notes</h2>
          <ul>
            <li>Dashboard default: <code>18890</code></li>
            <li>Minecraft default: <code>25565</code></li>
            <li>Ollama default local API: <code>127.0.0.1:11434</code></li>
          </ul>
        </section>

        <section>
          <h2 id="tunnel">Playit tunnel configuration</h2>
          <CodeBlock
            code={`arx tunnel setup\narx tunnel setup --url your-name.playit.gg:12345 --enable\narx tunnel status`}
            language="bash"
          />
        </section>
      </div>
    </DocsPageLayout>
  );
}
