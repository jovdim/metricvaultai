import type { ReactNode } from "react";

type Chapter = {
  tag: string;
  title: ReactNode;
  lede: string;
  chips: string[];
  link: string;
  num: string;
  badge: string;
  badgeLive: boolean;
  subtitle: string;
  duration: string;
};

const CHAPTERS: Chapter[] = [
  {
    tag: "AI Search Intelligence",
    title: (
      <>
        Know what <em>ChatGPT</em> says about you.{" "}
        <span className="gradient">Before anyone else.</span>
      </>
    ),
    lede: "Citations, sentiment, voice share, and prompt-by-prompt coverage across 4 AI engines.",
    chips: ["ChatGPT", "Gemini", "Perplexity"],
    link: "/login.html?plan=free",
    num: "i.",
    badge: "▶ AI Visibility",
    badgeLive: false,
    subtitle: "Citations across 4 engines",
    duration: "0:18",
  },
  {
    tag: "SEO Intelligence Suite",
    title: (
      <>
        Every SEO signal, <em>from one URL.</em>
      </>
    ),
    lede: "Domain Overview, Backlinks, Keyword Magic, Position Tracker, Site Audit, Local SEO — real DataForSEO.",
    chips: ["9 tools", "Real data", "4 exports"],
    link: "/login.html?plan=free",
    num: "ii.",
    badge: "● LIVE DATA",
    badgeLive: true,
    subtitle: "Domain Overview · live",
    duration: "0:22",
  },
  {
    tag: "Competitive Intelligence",
    title: (
      <>
        Head-to-head <em>teardowns</em> in{" "}
        <span className="gradient">92 seconds.</span>
      </>
    ),
    lede: "Competitor Battle, Keyword Gap, Bulk Analysis (200 domains), AI Competitor Research.",
    chips: ["5 tools", "Action plan"],
    link: "/login.html?plan=free",
    num: "iii.",
    badge: "▶ Competitor Battle",
    badgeLive: false,
    subtitle: "You vs them, every prompt",
    duration: "0:22",
  },
  {
    tag: "Content Engine",
    title: (
      <>
        One brief → <em>eight platforms.</em>
      </>
    ),
    lede: "SEO Brief, Article Writer, Optimizer, Press Pitch AI, Repurpose to 8 social formats in your brand voice.",
    chips: ["8 tools", "1 → 8 formats"],
    link: "/login.html?plan=free",
    num: "iv.",
    badge: "▶ Content Engine",
    badgeLive: false,
    subtitle: "Article + 8 platform adaptations",
    duration: "0:16",
  },
  {
    tag: "Technical SEO",
    title: (
      <>
        Ten technical tools. <em>Free forever.</em>
      </>
    ),
    lede: "Schema, robots.txt, PageSpeed, redirects, tech stack, headers, sitemap, hreflang, mixed content, OnPage.",
    chips: ["10 tools", "Unlimited"],
    link: "/free/schema-validator",
    num: "v.",
    badge: "● LIVE DATA",
    badgeLive: true,
    subtitle: "11 crawls in parallel",
    duration: "0:24",
  },
  {
    tag: "Brand & Sentiment",
    title: (
      <>
        Brand health, <em>across every channel.</em>
      </>
    ),
    lede: "Brand Performance, Brand Monitor, Media Monitoring, Press Pitch AI — sentiment and earned media.",
    chips: ["4 tools", "Press Pitch AI"],
    link: "/login.html?plan=free",
    num: "vi.",
    badge: "▶ Brand Performance",
    badgeLive: false,
    subtitle: "Sentiment + share of voice",
    duration: "0:20",
  },
  {
    tag: "Social & Audience",
    title: (
      <>
        Who&apos;s winning, <em>overlapping,</em> partnering.
      </>
    ),
    lede: "Social Tracker, Analytics, Influencer Analysis, Audience Overlap — every platform.",
    chips: ["4 tools", "Influencer DB"],
    link: "/login.html?plan=free",
    num: "vii.",
    badge: "▶ Social Analytics",
    badgeLive: false,
    subtitle: "Audience overlap heatmap",
    duration: "0:18",
  },
  {
    tag: "Advertising Intelligence",
    title: (
      <>
        Reverse-engineer <em>their paid strategy.</em>
      </>
    ),
    lede: "PPC Research, Advertising Research, PLA Research, Ad Launch Kit, AdClarity — keywords, creatives, SKUs.",
    chips: ["5 tools", "PPC + Shopping"],
    link: "/login.html?plan=free",
    num: "viii.",
    badge: "▶ PPC Research",
    badgeLive: false,
    subtitle: "Competitor ad creative library",
    duration: "0:20",
  },
  {
    tag: "Workflows + Analyst AI",
    title: (
      <>
        Five workflows. <em>One conversation.</em>
      </>
    ),
    lede: "5 workflow engines fire 5-6 tools at once. Analyst AI chat remembers everything and answers from your real data.",
    chips: ["5 workflows", "Analyst AI"],
    link: "/login.html?plan=free",
    num: "ix.",
    badge: "▶ Analyst AI",
    badgeLive: false,
    subtitle: '"Who\'s winning Q4?" answered live',
    duration: "0:24",
  },
];

export default function Chapters() {
  return (
    <>
      <section className="chapters-intro">
        <div className="section-head">
          <div className="section-kicker">The Platform</div>
          <h2>
            Nine chapters. <em>One platform.</em>
            <br />
            <span className="gradient">Every signal that matters.</span>
          </h2>
          <p>30+ tools across SEO, AI, content, social, ads, and brand monitoring.</p>
        </div>
      </section>

      <section className="chapters" id="chapters">
        <div className="chapters-timeline-wrap">
          <div className="chapter-timeline"></div>

          {CHAPTERS.map((ch, i) => {
            const reverse = i % 2 === 1;
            const text = (
              <div className="ch-text" key="text">
                <div className="ch-tag">{ch.tag}</div>
                <h3>{ch.title}</h3>
                <p className="ch-lede">{ch.lede}</p>
                <div className="chips">
                  {ch.chips.map((chip, ci) => (
                    <span key={ci} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
                <a className="ch-link" href={ch.link}>
                  See it in action →
                </a>
              </div>
            );
            const node = (
              <div className="timeline-node" key="node">
                <div className="node-dot"></div>
                <div className="node-num">{ch.num}</div>
              </div>
            );
            const video = (
              <div className="ch-video" key="video">
                <div className="vframe">
                  <div className="vinner">
                    <div className={ch.badgeLive ? "vbadge live" : "vbadge"}>
                      {ch.badge}
                    </div>
                    <div className="play-sm"></div>
                    <div className="vsubtitle">{ch.subtitle}</div>
                    <div className="vduration">{ch.duration}</div>
                  </div>
                </div>
              </div>
            );
            return (
              <div
                key={ch.num}
                className={reverse ? "chapter reverse" : "chapter"}
              >
                {/* Match the original DOM order: normal = text,node,video;
                    reverse = video,node,text (so mobile stacks video above text). */}
                {reverse ? [video, node, text] : [text, node, video]}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
