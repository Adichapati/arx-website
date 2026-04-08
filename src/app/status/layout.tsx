import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status",
  description: "ARX service status — current operational status of all ARX services.",
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
