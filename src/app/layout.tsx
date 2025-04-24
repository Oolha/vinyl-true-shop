import type { Metadata } from "next";
import "./globals.css";
import { onest, unbounded, publicSans } from "./fonts";

export const metadata: Metadata = {
  title: "Vinyl True Shop",
  description:
    "A curated collection of high-quality vinyl records, featuring classic albums, limited editions, and the latest releases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${unbounded.variable} ${publicSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
