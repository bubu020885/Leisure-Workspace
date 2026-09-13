import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leisure Workspace",
  description: "Plan better. Decide faster. Practical business planning, budget and customer journey tools for leisure attractions. Presented by Amusement Business Support.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
