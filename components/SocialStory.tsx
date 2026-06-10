export default function SocialStory() {
  return (
    <section className="social" id="story">
      <div className="section-head">
        <div className="section-kicker">A Story</div>
        <h2>
          <em>&quot;Found it Monday.</em>
          <br />
          Fixed it Friday.&quot;
        </h2>
      </div>
      <div className="story">
        <div>
          <div className="quote-mark">&quot;</div>
          <blockquote>
            We caught a competitor outranking us in ChatGPT recommendations for a{" "}
            <em>$40K/mo keyword</em>. Found it Monday. Fixed it Friday. That
            single insight paid for two years of MetricVault.
          </blockquote>
          <div className="story-author">
            <div className="avatar-big">JR</div>
            <div className="info">
              <div className="name">Jamie Reyes</div>
              <div className="role">Head of Growth, NorthStack</div>
            </div>
          </div>
        </div>
        <div className="story-stat">
          <div className="num">$960K</div>
          <div className="label">
            annualized revenue protected from the single insight surfaced in
            week one.
          </div>
        </div>
      </div>
      <div className="test-mini-row">
        <div className="test-mini">
          <blockquote>
            &quot;Replaced Ahrefs + Semrush + an AI tracker. $480/mo → $79. Same
            data, the AI engines included.&quot;
          </blockquote>
          <div className="author">
            <div className="avatar">AD</div>
            <div>
              <div className="name">Anna Diaz</div>
              <div className="role">Freelance SEO</div>
            </div>
          </div>
        </div>
        <div className="test-mini">
          <blockquote>
            &quot;The 92-second teardown is unfair advantage on sales calls.
            Every prospect, every time.&quot;
          </blockquote>
          <div className="author">
            <div className="avatar">MK</div>
            <div>
              <div className="name">Marc Klein</div>
              <div className="role">Director, Vivid&amp;Co</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
