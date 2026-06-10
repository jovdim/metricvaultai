import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetricVault AI — One Domain. Every Signal. AI Search + SEO Intelligence",
  description:
    "The first platform that measures how ChatGPT, Gemini, and Perplexity see your brand — alongside everything Google measures. 30+ tools. One workspace. 92-second audit.",
  keywords:
    "AI SEO, ChatGPT visibility, Gemini SEO, Perplexity tracking, SEO tools, AI search intelligence, MetricVault",
  alternates: { canonical: "https://metricvaultai.com/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://metricvaultai.com/",
    title: "MetricVault AI — One Domain. Every Signal.",
    description:
      "The first platform that measures how ChatGPT, Gemini, and Perplexity see your brand. 30+ tools, one workspace.",
    images: ["https://metricvaultai.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetricVault AI — One Domain. Every Signal.",
    description: "AI search + traditional SEO intelligence, in one premium dashboard.",
    images: ["https://metricvaultai.com/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@500;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
