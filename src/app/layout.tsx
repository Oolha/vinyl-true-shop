import type { Metadata } from "next";
import "./globals.css";
import { onest, unbounded, publicSans } from "./fonts";
import Header from "@/components/layout/Header/Header";
import Container from "@/components/ui/Container/Container";
import About from "@/components/home/About/About";
import Reviews from "@/components/home/Reviews/Reviews";

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
      <body>
        <header>
          <Container>
            <Header />
          </Container>
        </header>
        <main>
          {children}
          <Reviews />
          <About />
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
