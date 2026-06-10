const CELLS = [
  {
    num: "— 01",
    title: "Recommendations you'll never see",
    body: "ChatGPT recommends your competitor. No click. No referrer. Analytics blind.",
  },
  {
    num: "— 02",
    title: "Old tools, new game",
    body: "Ahrefs and Semrush bolted AI features onto products built for 2014. MetricVault was designed for this era.",
  },
  {
    num: "— 03",
    title: "The window is closing",
    body: "Citation share compounds. Every week you don't measure, the gap widens.",
  },
];

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap-tight">
        <div className="problem-kicker">The blind spot</div>
        <p className="manifesto">
          Your competitors are being recommended by{" "}
          <em>ChatGPT, Gemini, and Perplexity</em> — every hour, every day.{" "}
          <span className="gradient">And you have no idea.</span>
        </p>
        <div className="problem-row">
          {CELLS.map((c) => (
            <div className="problem-cell" key={c.num}>
              <svg
                className="cell-spark"
                viewBox="0 0 80 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path pathLength={1} d="M0 13 H20 l4 -9 l5 17 l4 -11 l3 5 H80" />
              </svg>
              <div className="num">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
