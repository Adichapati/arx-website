import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function TroubleshootingPage() {
  return (
    <DocsPageLayout title="Troubleshooting" description="Common ARX setup/runtime issues and practical fixes.">
      <div className="space-y-8">
        <section>
          <h2 id="install">Install issues</h2>

          <h3>&quot;arx&quot; command not found</h3>
          <p>Restart terminal first. On Windows verify launcher path exists.</p>
          <CodeBlock
            code={`# Windows launcher path\n%USERPROFILE%\\AppData\\Local\\Microsoft\\WindowsApps\\arx.bat`}
            language="bash"
          />

          <h3>Linux permission issues</h3>
          <CodeBlock
            code={`chmod +x install.sh\n./install.sh`}
            language="bash"
          />

          <h3>PowerShell execution policy blocks script</h3>
          <CodeBlock
            code={`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`}
            language="powershell"
          />

          <h3>Windows bootstrap pasted into the wrong shell</h3>
          <p>Run the Windows install block from Windows PowerShell. Do not paste it into Command Prompt, Git Bash, or a generic terminal wrapper.</p>
          <CodeBlock
            code={`# Open PowerShell first, then paste:
$installer = Join-Path $env:TEMP "arx-install.ps1"
Invoke-RestMethod 'https://arxmc.studio/install.ps1' -OutFile $installer
& $installer
Remove-Item -Force $installer`}
            language="powershell"
          />
        </section>

        <section>
          <h2 id="ollama">Ollama/model issues</h2>
          <CodeBlock
            code={`ollama list\nollama pull gemma4:e2b\nollama serve`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="runtime">Runtime service issues</h2>
          <CodeBlock
            code={`arx status\narx doctor\narx logs dashboard --lines 120\narx logs server --lines 120\narx shutdown\narx start`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="ports">Port conflicts</h2>
          <p>
            ARX dashboard default is <code>18890</code>. If conflict occurs, rerun installer with a different port.
          </p>
        </section>

        <section>
          <h2 id="tunnel">Tunnel issues</h2>
          <CodeBlock
            code={`arx tunnel status\narx tunnel setup\narx tunnel setup --url your-name.playit.gg:12345 --enable`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="support">Need help</h2>
          <ul>
            <li>GitHub Issues: <code>https://github.com/Adichapati/ARX/issues</code></li>
            <li>Support: <code>support@arxmc.studio</code></li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
