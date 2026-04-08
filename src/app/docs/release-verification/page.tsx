"use client";

import { DocsPageLayout } from "@/components/DocsPageLayout";
import { CodeBlock } from "@/components/CodeBlock";

export default function ReleaseVerificationPage() {
  return (
    <DocsPageLayout
      title="Release Verification"
      description="How to verify the integrity of your ARX installation."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" id="why-verify">Why Verify?</h2>
          <p className="text-arx-text-secondary text-sm leading-relaxed">
            Verifying release checksums ensures the files you downloaded are authentic and haven&apos;t been tampered with. ARX provides SHA-256 checksums for every official release.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="linux-verify">Linux Verification</h2>
          <CodeBlock
            code={`# 1. Download the checksum file\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/checksums.txt -o checksums.txt\n\n# 2. Download the installer (if not already)\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh -o install.sh\n\n# 3. Verify checksum\nsha256sum -c checksums.txt\n# Expected output: install.sh: OK`}
            language="bash"
            title="Linux / macOS"
            showLineNumbers
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="windows-verify">Windows Verification</h2>
          <CodeBlock
            code={`# 1. Download the installer and checksum file from GitHub releases\n# or from https://INSTALLER_DOMAIN_PLACEHOLDER\n\n# 2. Verify using PowerShell\nGet-FileHash arx-installer.exe -Algorithm SHA256\n\n# 3. Compare the output hash with the value in checksums.txt\n# They should match exactly`}
            language="bash"
            title="PowerShell"
            showLineNumbers
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="github-releases">GitHub Releases</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            Checksums are also available as release assets on GitHub. Each release includes:
          </p>
          <ul className="space-y-2 text-arx-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Installer binaries for each platform</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span><code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">checksums.txt</code> — SHA-256 hashes for all artifacts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-arx-cyan mt-1">•</span>
              <span>Release notes with changelog</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" id="troubleshooting">Verification Fails?</h2>
          <p className="text-arx-text-secondary text-sm mb-4">
            If the checksum does not match:
          </p>
          <ul className="space-y-2 text-arx-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">1.</span>
              <span>Re-download the installer from the official source</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">2.</span>
              <span>Ensure you downloaded the correct version for your platform</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">3.</span>
              <span>Check that the download completed fully (no partial downloads)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">4.</span>
              <span>If issues persist, report to <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">security@YOUR_DOMAIN</code></span>
            </li>
          </ul>
        </section>
      </div>
    </DocsPageLayout>
  );
}
