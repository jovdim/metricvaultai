import type { Metadata } from "next";
import SiteBackground from "@/components/SiteBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — MetricVault AI",
  description:
    "Field notes on AI search, SEO intelligence, and how brands show up across ChatGPT, Gemini, and Perplexity. Coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <SiteBackground />
      <Header />

      <section className="hero" style={{ minHeight: "62vh", paddingBottom: 80 }}>
        <div className="hero-headline">
          <div className="hero-eyebrow">The Journal</div>
          <h1 style={{ fontSize: "72px" }}>
            The <span className="gradient">Blog</span> is
            <br />
            coming soon.
          </h1>
          <p className="lede">
            Field notes on AI search, SEO intelligence, and how brands show up
            across ChatGPT, Gemini, and Perplexity. We&apos;re writing the first
            issues now.
          </p>
          <div className="hero-cta-row">
            <a href="/" className="btn-primary">
              ← Back to home
            </a>
            <a href="/#pricing" className="btn-secondary">
              See pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
