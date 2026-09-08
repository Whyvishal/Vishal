import { useEffect, useRef, useState } from "react";
import * as motionReact from "motion/react";
import { reveal } from "@/hooks/useStageScroll";

const m = motionReact.motion;
const DOCK_W = 210;
const DOCK_X = 20;
const DOCK_Y = 16;

export default function MarqueeTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const [nat, setNat] = useState({ w: 0, h: 0, vw: 0, vh: 0 });
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const prev = el.style.transform;
      el.style.transform = "none";
      const r = el.getBoundingClientRect();
      el.style.transform = prev;
      setNat({ w: r.width, h: r.height, vw: window.innerWidth, vh: window.innerHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    // re-measure once webfonts land, or the title docks to the wrong place
    if (document.fonts?.ready) void document.fonts.ready.then(measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const unsub = reveal.on("change", (p) => setDocked(p > 0.82));
    return () => unsub();
  }, []);

  const scale = nat.w ? DOCK_W / nat.w : 1;
  const startX = nat.w ? (nat.vw - nat.w) / 2 : 0;
  const startY = nat.h ? nat.vh * 0.5 - nat.h * 0.58 : 0;

  const x = motionReact.useTransform(reveal, [0, 1], [startX, DOCK_X]);
  const y = motionReact.useTransform(reveal, [0, 1], [startY, DOCK_Y]);
  const s = motionReact.useTransform(reveal, [0, 1], [1, scale]);

  const Tag = docked ? m.a : m.div;

  return (
    <Tag
      ref={ref as never}
      {...(docked ? { href: "#top", "aria-label": "Back to the top of the show" } : {})}
      style={{ x, y, scale: s, transformOrigin: "top left" }}
      className={
        "fixed left-0 top-0 z-[60] w-max select-none text-center " +
        (docked ? "title-plaque cursor-pointer" : "pointer-events-none")
      }
    >
      <span className="block font-display leading-[0.92] text-paper name-line">
        VISHAL PRESENTS
      </span>
      <span className="block font-display leading-[0.86] text-gold-accent latent-line">LATENT</span>
    </Tag>
  );
}
