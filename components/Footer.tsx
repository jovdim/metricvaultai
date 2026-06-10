/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer>
      <div className="ftwrap">
        <div className="ftgrid">
          <div className="ftcol ftbrand">
            <a href="/" className="logo" aria-label="MetricVault">
              <img src="/logo-dark.png" alt="MetricVault" />
            </a>
            <p>
              SEO + AI search intelligence for marketing teams. Watch your brand
              across Google, ChatGPT, Gemini, and Perplexity — from one
              workspace.
            </p>
            <ul className="ftcontact">
              <li>
                <span className="lbl">Office</span>
                <span>123 Anywhere St, Suite 200, Wilmington, DE</span>
              </li>
              <li>
                <span className="lbl">Phone</span>
                <a href="tel:+15550000000">+1 (555) 000-0000</a>
              </li>
              <li>
                <span className="lbl">Email</span>
                <a href="mailto:support@metricvaultai.com">
                  support@metricvaultai.com
                </a>
              </li>
            </ul>
          </div>
          <div className="ftcol">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#chapters">Features</a>
              </li>
              <li>
                <a href="/login.html?plan=free">All tools</a>
              </li>
              <li>
                <a href="#demo">Watch demo</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="/free/schema-validator">Free tools</a>
              </li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/macfgcdhiennkcmhhejbmcgifhbjjkcc"
                  target="_blank"
                  rel="noopener"
                >
                  Chrome extension
                </a>
              </li>
            </ul>
          </div>
          <div className="ftcol">
            <h4>Account</h4>
            <ul>
              <li>
                <a href="/login.html">Log in</a>
              </li>
              <li>
                <a href="/login.html?plan=free">Sign up free</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/login.html?plan=pro">Upgrade to Pro</a>
              </li>
              <li>
                <a href="#">Billing</a>
              </li>
            </ul>
          </div>
          <div className="ftcol">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Talk to sales</a>
              </li>
              <li>
                <a
                  href="https://stats.uptimerobot.com/"
                  target="_blank"
                  rel="noopener"
                >
                  System status
                </a>
              </li>
              <li>
                <a href="#">Feature requests</a>
              </li>
            </ul>
          </div>
          <div className="ftcol">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy.html">Privacy policy</a>
              </li>
              <li>
                <a href="/terms.html">Terms of service</a>
              </li>
              <li>
                <a href="/privacy.html#cookies">Cookies</a>
              </li>
              <li>
                <a href="#">GDPR &amp; data</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ftbottom">
          <div className="lp">
            <span>© 2026 MetricVault · All rights reserved.</span>
            <span className="ftbadge">All systems operational</span>
          </div>
          <div className="legal">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href="#">Support</a>
            <a
              href="https://stats.uptimerobot.com/"
              target="_blank"
              rel="noopener"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
