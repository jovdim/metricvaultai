import type { ReactNode } from "react";

const LOGOS: ReactNode[] = [
  <>North<em>Stack</em></>,
  <>Pinnacle<em>.</em></>,
  <>Vivid&amp;Co</>,
  <>Cascade<em>·</em></>,
  <>Marlow</>,
  <>Quill House</>,
];

export default function Logos() {
  return (
    <section className="logos">
      <div className="lab">
        Used by marketing teams and agencies in 14 countries
      </div>
      <div className="logo-strip">
        <div className="logo-track">
          {Array.from({ length: 4 }).flatMap((_, copy) =>
            LOGOS.map((l, i) => (
              <div
                className="ld"
                key={`${copy}-${i}`}
                aria-hidden={copy > 0 ? true : undefined}
              >
                {l}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
