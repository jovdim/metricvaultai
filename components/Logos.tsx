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
          {LOGOS.map((l, i) => (
            <div className="ld" key={i}>
              {l}
            </div>
          ))}
          {LOGOS.map((l, i) => (
            <div className="ld" key={`dup-${i}`} aria-hidden="true">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
