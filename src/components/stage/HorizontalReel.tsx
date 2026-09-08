import { useEffect, useRef, useState, type ReactNode } from "react";
import * as motionReact from "motion/react";
import { scrollY } from "@/hooks/useStageScroll";

const m = motionReact.motion;

/**
 * Shared scroll-linked horizontal reel mechanic (sticky track, translated in
 * proportion to scroll progress through the section). Reel.tsx uses this for
 * photo plates; other acts use it directly for arbitrary card content.
 */
export default function HorizontalReel({
  id,
  count,
  children,
}: {
  id: string;
  count: number;
  children: ReactNode;
}) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState({ start: 0, end: 1 });
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const measure = () => {
      const s = section.current;
      const t = track.current;
      if (!s || !t) return;
      const top = s.getBoundingClientRect().top + window.scrollY;
      const travel = s.offsetHeight - window.innerHeight;
      setRange({ start: top, end: top + Math.max(travel, 1) });
      setShift(Math.max(0, t.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [count]);

  const x = motionReact.useTransform(
    scrollY,
    [range.start, range.end],
    [0, -shift],
    {
      clamp: true,
    },
  );

  return (
    <div
      ref={section}
      id={id}
      style={{ height: `${100 + count * 60}vh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <m.div
          ref={track}
          style={{ x }}
          className="flex gap-10 pl-[6vw] pr-[6vw] will-change-transform"
        >
          {children}
        </m.div>
      </div>
    </div>
  );
}
