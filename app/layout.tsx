import "./globals.css";

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { SITE_CONFIG } from "@/utils/config/site";

import { ReactLenis } from "@/lib/lenis";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  keywords: SITE_CONFIG.keywords,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_CONFIG.name,
  },
  authors: SITE_CONFIG.authors,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description as string,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <body className="min-h-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
