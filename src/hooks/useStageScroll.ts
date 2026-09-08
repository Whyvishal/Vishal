import { useEffect } from "react";
import { motionValue, type MotionValue } from "motion/react";

/** Single global scroll timeline — one throttled listener for the whole page. */
export const scrollY: MotionValue<number> = motionValue(0);
/** 0 -> 1 over the first 0.85 viewport heights (curtain reveal + title dock). */
export const revealRaw: MotionValue<number> = motionValue(0);
/** Same curve, smoothstep eased. */
export const reveal: MotionValue<number> = motionValue(0);

const smoothstep = (t: number) => t * t * (3 - 2 * t);

let mounted = 0;

export function useStageScrollListener() {
  useEffect(() => {
    mounted += 1;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const span = window.innerHeight * 0.85;
      const p = Math.min(1, Math.max(0, y / span));
      scrollY.set(y);
      revealRaw.set(p);
      reveal.set(smoothstep(p));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      mounted -= 1;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

export function usePrefersReducedMotion() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

export { mounted };
