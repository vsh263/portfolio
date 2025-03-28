import type { Metadata } from "next";
import { Kode_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - VN",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${kodeMono.variable} font-sans antialiased`}
      >
        <Script
          defer
          src="https://p4nda.site/script.js"
          data-website-id="55ce1067-4d29-45f5-8237-c70f3c26c73b"
        />
        {children}
      </body>
    </html>
  );
}
