"use client";

import { useState, type ReactNode } from "react";

type Plan = {
  name: string;
  desc: string;
  monthly: string;
  annual: string;
  staticNote?: string;
  note?: { monthly: string; annual: string };
  quota: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: ReactNode[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    desc: "Try the platform with no credit card. Perfect for testing or hobbyist site owners.",
    monthly: "0",
    annual: "0",
    staticNote: "No credit card · Forever free",
    quota: "5 premium reports / mo · unlimited light tools",
    cta: "Start free",
    href: "/login.html?plan=free",
    features: [
      <>
        <strong>Unlimited</strong> light tools (keyword research, SERP, content)
      </>,
      <>
        <strong>10 free technical SEO tools</strong> — unlimited
      </>,
      "5 premium reports/mo — Domain Overview or Backlink Profile",
      "AI Visibility on ChatGPT / Gemini / Perplexity",
      "1 seat · PDF / CSV exports",
      "Community support",
    ],
  },
  {
    name: "Starter",
    desc: "For solo marketers and founders running their first AI search audits.",
    monthly: "19",
    annual: "15",
    note: { monthly: "Billed monthly", annual: "Billed annually · Save $48/yr" },
    quota: "100 premium reports / mo · unlimited light tools",
    cta: "Start free 14-day trial",
    href: "/login.html?plan=starter",
    features: [
      <>
        <strong>Unlimited</strong> keyword research, SERP, content, technical
      </>,
      <>
        10 technical SEO tools <strong>FREE &amp; unlimited</strong>
      </>,
      "AI Visibility — ChatGPT / Gemini / Perplexity",
      "30+ AI & real-data SEO tools",
      "1 seat · PDF / CSV exports",
      "Email support",
    ],
  },
  {
    name: "Pro",
    desc: "For freelancers and small agencies running weekly client reports.",
    monthly: "79",
    annual: "63",
    note: { monthly: "Billed monthly", annual: "Billed annually · Save $192/yr" },
    quota: "500 premium reports / mo · unlimited light tools",
    cta: "Start free 14-day trial",
    href: "/login.html?plan=pro",
    features: [
      "Everything in Starter",
      "500 premium reports/mo (~80 Domain Overviews)",
      "White-label branded PDF reports",
      "Up to 5 team seats",
      "Chrome extension",
      "Priority email support",
    ],
  },
  {
    name: "Agency",
    desc: "Built for agencies managing 5-15 clients in one workspace.",
    monthly: "249",
    annual: "199",
    note: { monthly: "Billed monthly", annual: "Billed annually · Save $600/yr" },
    quota: "2,000 premium reports / mo · unlimited light tools",
    cta: "Start free 14-day trial",
    href: "/login.html?plan=agency",
    featured: true,
    features: [
      "Everything in Pro",
      "2,000 premium reports/mo (~330 Domain Overviews)",
      "Up to 15 team seats",
      "Scheduled briefs — daily / weekly digests",
      "Public share links & client portal",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    desc: "For in-house teams and large agencies running daily multi-client reports.",
    monthly: "749",
    annual: "599",
    note: {
      monthly: "Billed monthly",
      annual: "Billed annually · Save $1,800/yr",
    },
    quota: "10,000 premium reports / mo · unlimited light tools",
    cta: "Start free 14-day trial",
    href: "/login.html?plan=enterprise",
    features: [
      "Everything in Agency",
      "10,000 premium reports/mo (~1,600 Domain Overviews)",
      "Unlimited team seats & client workspaces",
      "API access — generate your own keys",
      "Dedicated account manager & SLA",
      "Custom integrations on request",
    ],
  },
];

export default function Pricing() {
  const [mode, setMode] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="pricing" id="pricing">
      <div className="section-head">
        <div className="section-kicker">Pricing</div>
        <h2>
          Plans that scale with <em>your ambition.</em>
        </h2>
        <p>
          Start free. Upgrade only when you need more premium reports, more
          seats, or more workflows. Cancel anytime.
        </p>
        <div
          className="pricing-toggle"
          role="tablist"
          aria-label="Billing period"
        >
          <div
            className={mode === "monthly" ? "opt active" : "opt"}
            role="tab"
            onClick={() => setMode("monthly")}
          >
            Monthly
          </div>
          <div
            className={mode === "annual" ? "opt active" : "opt"}
            role="tab"
            onClick={() => setMode("annual")}
          >
            Annual <span className="save">Save 20%</span>
          </div>
        </div>
      </div>
      <p className="pricing-explainer">
        <strong>
          Unlimited keyword research, SERP, content tools, and 10
          technical-SEO tools on every plan.
        </strong>{" "}
        Monthly quotas only meter <em>premium reports</em> — Domain Overview,
        Backlink Profile, Influencer Analysis, PLA Research, and Competitor
        Battle.
      </p>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={plan.featured ? "plan featured" : "plan"}
          >
            <h4>{plan.name}</h4>
            <p className="plan-desc">{plan.desc}</p>
            <div className="plan-price">
              <span className="cur">$</span>
              <span className="amt">
                {mode === "annual" ? plan.annual : plan.monthly}
              </span>
              <span className="per">/mo</span>
            </div>
            <div className="plan-annual-note">
              {plan.staticNote
                ? plan.staticNote
                : plan.note
                  ? plan.note[mode]
                  : null}
            </div>
            <div className="plan-quota">{plan.quota}</div>
            <a className="plan-cta" href={plan.href}>
              {plan.cta}
            </a>
            <ul className="plan-features">
              {plan.features.map((feat, fi) => (
                <li key={fi}>{feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="custom-link">
        Need something custom?{" "}
        <a href="#">Talk to us about custom pricing</a>
      </p>
    </section>
  );
}
