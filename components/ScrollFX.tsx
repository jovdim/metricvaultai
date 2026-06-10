"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement motion layer. All effects are added from JS, so if JS
 * is off (or the user prefers reduced motion) the page renders fully and static.
 */
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: Array<() => void> = [];

    // ── Scroll progress bar ─────────────────────────────────────────────
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    const fill = document.createElement("span");
    bar.appendChild(fill);
    document.body.appendChild(bar);
    cleanups.push(() => bar.remove());

    // ── Reveal-on-scroll ────────────────────────────────────────────────
    const groups: Array<[string, string, boolean]> = [
      [".product-section .ps-head", "reveal-up", false],
      [".pkpi", "reveal-up", true],
      [".chart-box", "reveal-left", false],
      [".engines", "reveal-right", false],
      [".logos .lab", "reveal-up", false],
      [".logo-strip .ld", "reveal-up", true],
      [".problem-kicker", "reveal-up", false],
      [".manifesto", "reveal-up", false],
      [".problem-cell", "reveal-up", true],
      [".chapters-intro .section-head", "reveal-up", false],
      [".chapter .ch-text", "reveal-up", false],
      [".chapter .ch-video", "reveal-scale", false],
      [".social .section-head", "reveal-up", false],
      [".story", "reveal-up", false],
      [".test-mini", "reveal-up", true],
      [".bridge-stat", "reveal-left", false],
      [".bridge-text", "reveal-right", false],
      [".pricing .section-head", "reveal-up", false],
      [".pricing-explainer", "reveal-up", false],
      [".plan", "reveal-up", true],
      [".final-eyebrow", "reveal-up", false],
      [".final h2", "reveal-up", false],
      [".final p", "reveal-up", false],
      [".final .btn-primary", "reveal-up", false],
      [".final-trust", "reveal-up", false],
      ["footer .ftcol", "reveal-up", true],
    ];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    groups.forEach(([sel, variant, stagger]) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
        el.classList.add("reveal", variant);
        if (stagger) el.style.transitionDelay = `${Math.min(i, 7) * 0.07}s`;
        io.observe(el);
      });
    });
    cleanups.push(() => io.disconnect());

    // ── Generic "play once when visible" observer ───────────────────────
    const playOnce = (el: Element, threshold: number) => {
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              ob.unobserve(e.target);
            }
          });
        },
        { threshold }
      );
      ob.observe(el);
      cleanups.push(() => ob.disconnect());
    };

    // ── SVG chart draw-on ───────────────────────────────────────────────
    const chartSvg = document.querySelector<SVGSVGElement>(".chart-box svg");
    if (chartSvg) {
      chartSvg.classList.add("fx-chart");
      chartSvg.querySelectorAll("path").forEach((p) => {
        if ((p.getAttribute("fill") || "") === "none") {
          p.setAttribute("pathLength", "1");
          p.classList.add("fx-draw");
        } else {
          p.classList.add("fx-fill");
        }
      });
      chartSvg.querySelectorAll("circle").forEach((c) => c.classList.add("fx-pop"));
      playOnce(chartSvg, 0.35);
    }

    // ── Engine meter bars fill ──────────────────────────────────────────
    const engines = document.querySelector(".engines");
    if (engines) {
      engines.classList.add("fx-meters");
      playOnce(engines, 0.4);
    }

    // ── Count-up numbers ────────────────────────────────────────────────
    const countEls = document.querySelectorAll<HTMLElement>(
      ".pkpi .v, .story-stat .num, .bridge-stat .big"
    );
    const runCount = (el: HTMLElement) => {
      const text = (el.textContent || "").trim();
      const m = text.match(/^(\D*)(\d[\d,]*)(.*)$/);
      if (!m) return;
      const prefix = m[1];
      const hasComma = m[2].includes(",");
      const target = parseInt(m[2].replace(/,/g, ""), 10);
      const suffix = m[3];
      if (isNaN(target)) return;
      const fmt = (n: number) =>
        hasComma ? n.toLocaleString("en-US") : String(n);
      const dur = 1200;
      let startTs = 0;
      const tick = (ts: number) => {
        if (!startTs) startTs = ts;
        const prog = Math.min((ts - startTs) / dur, 1);
        const eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = prefix + fmt(Math.round(target * eased)) + suffix;
        if (prog < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + fmt(target) + suffix;
      };
      requestAnimationFrame(tick);
    };
    const nio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement);
            nio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    countEls.forEach((el) => nio.observe(el));
    cleanups.push(() => nio.disconnect());

    // ── Scroll-linked timeline fill ─────────────────────────────────────
    const wrap = document.querySelector(".chapters-timeline-wrap");
    const line = document.querySelector(".chapter-timeline");
    let tlFill: HTMLElement | null = null;
    if (wrap && line) {
      tlFill = document.createElement("span");
      tlFill.className = "timeline-fill";
      line.appendChild(tlFill);
      cleanups.push(() => tlFill?.remove());
    }

    // ── Scroll handler: progress bar + timeline fill ────────────────────
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        fill.style.transform = `scaleX(${
          max > 0 ? Math.min(scrolled / max, 1) : 0
        })`;
        if (wrap && tlFill) {
          const r = wrap.getBoundingClientRect();
          const total = r.height;
          const done = Math.min(
            Math.max(window.innerHeight * 0.5 - r.top, 0),
            total
          );
          tlFill.style.height = total > 0 ? `${(done / total) * 100}%` : "0%";
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
