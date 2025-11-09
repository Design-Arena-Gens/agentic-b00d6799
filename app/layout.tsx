import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automation Blueprint",
  description:
    "Interactive guide for crafting automation workflows across marketing, operations, and product."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
