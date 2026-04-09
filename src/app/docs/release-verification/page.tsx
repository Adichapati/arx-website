"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function ReleaseVerificationPage() {
  return (
    <DocsPageLayout title="Release Verification" description="How to verify the integrity of your ARX installation.">
      <div className="space-y-8">
        <section>
          <h2 id="why-verify">Why Verify?</h2>
          <p>Verifying release checksums ensures the files you downloaded are authentic and haven&apos;t been tampered with. ARX provides SHA-256 checksums for every official release.</p>
        </section>

        <section>
          <h2 id="linux-verify">Linux Verification</h2>
          <CodeBlock
            code={`# 1. Download the checksum file\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/checksums.txt -o checksums.txt\n\n# 2. Download the installer (if not already)\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh -o install.sh\n\n# 3. Verify checksum\nsha256sum -c checksums.txt\n# Expected output: install.sh: OK`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="windows-verify">Windows Verification</h2>
          <CodeBlock
            code={`# 1. Download the installer and checksum file from GitHub releases\n# or from https://INSTALLER_DOMAIN_PLACEHOLDER\n\n# 2. Verify using PowerShell\nGet-FileHash arx-installer.exe -Algorithm SHA256\n\n# 3. Compare the output hash with the value in checksums.txt\n# They should match exactly`}
            language="bash"
          />
        </section>

        <section>
          <h2 id="github-releases">GitHub Releases</h2>
          <p>Checksums are also available as release assets on GitHub. Each release includes:</p>
          <ul>
            <li>Installer binaries for each platform</li>
            <li><code>checksums.txt</code> — SHA-256 hashes for all artifacts</li>
            <li>Release notes with changelog</li>
          </ul>
        </section>

        <section>
          <h2 id="troubleshooting">Verification Fails?</h2>
          <p>If the checksum does not match:</p>
          <ul>
            <li>Re-download the installer from the official source</li>
            <li>Ensure you downloaded the correct version for your platform</li>
            <li>Check that the download completed fully (no partial downloads)</li>
            <li>If issues persist, report to <code>security@YOUR_DOMAIN</code></li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
