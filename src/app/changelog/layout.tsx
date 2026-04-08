import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "ARX release notes and changelog. Track new features, improvements, and fixes.",
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
