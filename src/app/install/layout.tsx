import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Install ARX",
  description:
    "Install ARX on Linux or Windows with one command. Set up your Minecraft server operations platform in minutes.",
};

export default function InstallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
