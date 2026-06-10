/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="topnav">
      <div className="wrap row">
        <a href="/" className="brand" aria-label="MetricVault">
          <img src="/logo-dark.png" alt="MetricVault" />
        </a>
        <nav className="nav-mid">
          <a href="#chapters">Platform</a>
          <a href="#story">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="/blog">Blog</a>
          <a href="/free/schema-validator">Free tools</a>
        </nav>
        <div className="nav-right">
          <a href="/login.html" className="nav-link">
            Sign in
          </a>
          <a href="/login.html?plan=free" className="cta-mini">
            Start free →
          </a>
        </div>
      </div>
    </header>
  );
}
