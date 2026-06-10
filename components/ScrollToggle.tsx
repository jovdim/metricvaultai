"use client";

import { useEffect, useState } from "react";

export default function ScrollToggle() {
  // When in the top half of the page the button points DOWN (scroll to bottom);
  // in the bottom half it points UP (scroll to top) — the "vice versa" toggle.
  const [pointDown, setPointDown] = useState(true);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setPointDown(max <= 0 ? true : scrolled < max / 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleClick = () => {
    const target = pointDown
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="scroll-toggle"
      onClick={handleClick}
      aria-label={pointDown ? "Scroll to bottom" : "Scroll to top"}
      title={pointDown ? "Scroll to bottom" : "Scroll to top"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: pointDown ? "none" : "rotate(180deg)" }}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
