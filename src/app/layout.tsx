import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DirectionalLight } from "@/components/core/DirectionalLight";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  title: "Kishan R | Engineering Professional",
  description: "A narrative of continuous operational quality and engineering transformation. Built strictly on verified evidence.",
  openGraph: {
    title: "Kishan R | Transformation Engineering",
    description: "Predictable, observable, and quality-gated delivery systems. Truth over cinema.",
    siteName: "Kishan R Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kishan R | Engineering Professional",
    description: "Predictable, observable, and quality-gated delivery systems. Truth over cinema.",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans bg-void text-text-primary no-scrollbar antialiased relative selection:bg-amber-core selection:text-void">
        <div aria-hidden="true" className="noise" />
        <div aria-hidden="true" className="technical-grid fixed inset-0 z-0 opacity-40 mix-blend-overlay" />
        <DirectionalLight />

        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
