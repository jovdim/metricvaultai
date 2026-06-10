export default function Hero() {
  return (
    <section className="hero">
      <svg className="hero-orbits" viewBox="0 0 820 820" aria-hidden="true">
        <circle className="ring r1" cx="410" cy="410" r="160" />
        <circle className="ring r2" cx="410" cy="410" r="270" />
        <circle className="ring r3" cx="410" cy="410" r="395" />
        <circle className="pulse" cx="410" cy="250" r="4" />
        <circle className="pulse" cx="680" cy="410" r="4" style={{ animationDelay: "1s" }} />
        <circle className="pulse" cx="410" cy="805" r="4" style={{ animationDelay: "2s" }} />
        <circle className="pulse" cx="140" cy="410" r="4" style={{ animationDelay: "1.5s" }} />
      </svg>
      <div className="hero-headline">
        <div className="hero-eyebrow">The AI Search Era · 2026</div>
        <h1>
          One domain.
          <br />
          <em>Every signal</em> that <span className="gradient">matters.</span>
        </h1>
        <p className="lede">
          The first platform that measures how ChatGPT, Gemini, and Perplexity
          see your brand — alongside everything Google measures.
        </p>
        <div className="hero-cta-row">
          <a href="/login.html?plan=free" className="btn-primary">
            Start free 14-day trial →
          </a>
          <a href="#demo" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>{" "}
            Watch 92-second demo
          </a>
        </div>
        <div className="hero-trust">
          <span>No credit card</span>
          <span>Cancel anytime</span>
          <span>Free forever tier</span>
        </div>
      </div>
    </section>
  );
}
