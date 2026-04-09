"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function ReleaseVerificationPage() {
  return (
    <DocsPageLayout title="Release Verification" description="Verify installer integrity before running ARX artifacts.">
      <div className="space-y-8">
        <section>
          <h2 id="why-verify">Why verify</h2>
          <p>
            Verifying checksums ensures downloaded installer artifacts match official releases and were not modified in transit.
          </p>
        </section>

        <section>
          <h2 id="official-endpoints">Official endpoints</h2>
          <CodeBlock
            code={`https://arxmc.studio/install.sh\nhttps://arxmc.studio/install.ps1\nhttps://arxmc.studio/arx-runtime.zip\nhttps://arxmc.studio/checksums.txt`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="linux-macos">Linux/macOS verification</h2>
          <CodeBlock
            code={`curl -fsSL https://arxmc.studio/checksums.txt -o checksums.txt\ncurl -fsSL https://arxmc.studio/install.sh -o install.sh\nsha256sum -c checksums.txt`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="windows">Windows verification</h2>
          <CodeBlock
            code={`Invoke-WebRequest https://arxmc.studio/checksums.txt -OutFile checksums.txt\nInvoke-WebRequest https://arxmc.studio/install.ps1 -OutFile install.ps1\nGet-FileHash .\\install.ps1 -Algorithm SHA256\nGet-Content .\\checksums.txt`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="fallback">GitHub fallback</h2>
          <p>
            If website endpoints are unavailable, use release assets from:
          </p>
          <CodeBlock code={`https://github.com/Adichapati/ARX/releases`} language="bash" />
        </section>

        <section>
          <h2 id="failure-policy">If verification fails</h2>
          <ul>
            <li>Do not run the file.</li>
            <li>Delete and re-download from official source.</li>
            <li>Re-check hash values.</li>
            <li>Report persistent mismatch to <code>security@arxmc.studio</code>.</li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
