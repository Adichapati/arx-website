import { DocsSidebar } from "@/components/DocsSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "ARX documentation — guides, CLI reference, configuration, security, and troubleshooting.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex" style={{ paddingTop: "3.5rem" }}>
      <DocsSidebar />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
