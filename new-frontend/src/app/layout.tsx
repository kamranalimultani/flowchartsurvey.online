import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://flowchartsurvey.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Flow Survey | Visual Flowchart Survey Builder & Interactive Decision Trees",
    template: "%s | Flow Survey",
  },
  description:
    "Create complex logic flows, interactive decision trees, and advanced surveys with Flow Survey's visual builder. The enterprise standard for flowchart-based data collection.",
  keywords: [
    "flowchart surveys",
    "visual form builder",
    "decision tree software",
    "interactive surveys",
    "logic forms",
    "survey flows",
    "data collection tool",
    "surveyjs",
    "conditional logic surveys",
    "interactive decision trees"
  ],
  applicationName: "Flow Survey",
  authors: [{ name: "Flow Survey Team", url: BASE_URL }],
  creator: "Flow Survey",
  publisher: "Flow Survey",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Flow Survey | Visual Flowchart Survey Builder",
    description: "Build complex logic flows and interactive decision trees visually with our enterprise-grade builder.",
    siteName: "Flow Survey",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have an og-image.jpg in public folder or change this
        width: 1200,
        height: 630,
        alt: "Flow Survey Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Survey | Visual Flowchart Survey Builder",
    description: "Build complex logic flows and interactive decision trees visually.",
    creator: "@flowchartsurvey", // Update if you have a handle
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="85d184c5-00c4-4b4d-9325-2b25a6af582b">
        </Script>       <Script src="/viewer.min.js" strategy="afterInteractive" />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WX7RQ80C8G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WX7RQ80C8G');
          `}
        </Script><Providers>{children}</Providers>
      </body>
    </html>
  );
}
