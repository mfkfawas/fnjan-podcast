import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podbayy - The best podcast player on the web.",
  description: "The podcast library",
  icons: { icon: "logo.svg" },
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
