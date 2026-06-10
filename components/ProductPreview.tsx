export default function ProductPreview() {
  return (
    <section className="product-section">
      <div className="ps-head">
        <div className="ps-kicker">A glimpse inside the platform</div>
        <h2>
          Your <em>AI Visibility</em> dashboard.{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg,var(--purple-bright),var(--magenta))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Live data, every day.
          </span>
        </h2>
        <p>
          This is what your brand looks like across ChatGPT, Gemini, Perplexity,
          and AI Overviews — refreshed every 24 hours.
        </p>
      </div>
      <div className="product-frame">
        <div className="pframe">
          <div className="product-inner">
            <div className="product-top">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="url">metricvaultai.com/dashboard/ai-visibility</div>
              <div className="live-pill">
                <span className="d"></span> Live data
              </div>
            </div>
            <div className="product-grid">
              <aside className="psidebar">
                <h6>Workflows</h6>
                <div className="psitem act">
                  <div className="icn"></div> AI Visibility{" "}
                  <span className="bdg">1cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Domain Overview{" "}
                  <span className="bdg">6cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Backlink Profile{" "}
                  <span className="bdg">5cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Keyword Magic{" "}
                  <span className="bdg">1cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Competitor Battle{" "}
                  <span className="bdg">3cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Content Engine{" "}
                  <span className="bdg">1cr</span>
                </div>
                <div className="psitem">
                  <div className="icn"></div> Press Pitch AI{" "}
                  <span className="bdg">1cr</span>
                </div>
              </aside>
              <main className="pmain">
                <h4>AI Visibility · Last 30 days · metricvaultai.com</h4>
                <div className="pkpis">
                  <div className="pkpi p">
                    <div className="l">AI Citations</div>
                    <div className="v">94</div>
                    <div className="d">↑ +318%</div>
                  </div>
                  <div className="pkpi m">
                    <div className="l">Voice Share</div>
                    <div className="v">28%</div>
                    <div className="d">↑ +12pts</div>
                  </div>
                  <div className="pkpi g">
                    <div className="l">Sentiment</div>
                    <div className="v">+72</div>
                    <div className="d">positive</div>
                  </div>
                  <div className="pkpi a">
                    <div className="l">Prompts Won</div>
                    <div className="v">41/68</div>
                    <div className="d">60% win</div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-box">
                    <h6>Citation Growth</h6>
                    <p>Across ChatGPT, Gemini, Perplexity, AI Overviews</p>
                    <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#b09cff"
                            stopOpacity="0.55"
                          />
                          <stop
                            offset="100%"
                            stopColor="#b09cff"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient id="gradB" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#d946a8"
                            stopOpacity="0.40"
                          />
                          <stop
                            offset="100%"
                            stopColor="#d946a8"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,170 C60,160 120,140 180,125 C240,108 300,85 360,65 C420,48 480,32 540,18 L600,10 L600,200 L0,200 Z"
                        fill="url(#gradA)"
                      />
                      <path
                        d="M0,170 C60,160 120,140 180,125 C240,108 300,85 360,65 C420,48 480,32 540,18 L600,10"
                        fill="none"
                        stroke="#b09cff"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0,185 C60,180 120,170 180,158 C240,144 300,130 360,108 C420,90 480,78 540,62 L600,54 L600,200 L0,200 Z"
                        fill="url(#gradB)"
                      />
                      <path
                        d="M0,185 C60,180 120,170 180,158 C240,144 300,130 360,108 C420,90 480,78 540,62 L600,54"
                        fill="none"
                        stroke="#d946a8"
                        strokeWidth="2"
                      />
                      <circle cx="600" cy="10" r="6" fill="#b09cff" />
                      <circle cx="600" cy="54" r="5" fill="#d946a8" />
                    </svg>
                  </div>
                  <div className="engines">
                    <h6>By Engine</h6>
                    <div className="engine gpt">
                      <span className="name">ChatGPT</span>
                      <span className="meter"></span>
                      <span className="val">88</span>
                    </div>
                    <div className="engine gem">
                      <span className="name">Gemini</span>
                      <span className="meter"></span>
                      <span className="val">64</span>
                    </div>
                    <div className="engine per">
                      <span className="name">Perplexity</span>
                      <span className="meter"></span>
                      <span className="val">72</span>
                    </div>
                    <div className="engine aio">
                      <span className="name">AI Overview</span>
                      <span className="meter"></span>
                      <span className="val">38</span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
