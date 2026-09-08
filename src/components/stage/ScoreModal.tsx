import { useEffect, useRef } from "react";
import { useShow } from "@/lib/show";
import { scrollY } from "@/hooks/useStageScroll";

/** How far back up the visitor has to scroll before the panel gets out of the way. */
const DISMISS_SCROLL_UP_PX = 60;

export default function ScoreModal({
  id,
  question,
}: {
  id: string;
  question: string;
}) {
  const { askingId, record, close } = useShow();
  const open = askingId === id;
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    first.current?.focus();

    // The act holds the visitor until they judge it: forward scroll is blocked
    // while the panel is up, but going back up is always allowed and dismisses
    // it. Answering or skipping releases the hold.
    const openedAt = scrollY.get();

    const blockForward = (e: WheelEvent) => {
      if (e.deltaY > 0) e.preventDefault();
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      // Finger moving up drags the page forward — that's the direction we hold.
      if (touchStartY - y > 0) e.preventDefault();
    };

    // Backstop for anything the event blocking misses (momentum, scrollbar
    // drags, find-in-page): never let the page settle past the open position.
    const unsubscribe = scrollY.on("change", (y) => {
      if (openedAt - y > DISMISS_SCROLL_UP_PX) {
        close();
        return;
      }
      if (y > openedAt) window.scrollTo(0, openedAt);
    });

    window.addEventListener("wheel", blockForward, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    const FORWARD_KEYS = new Set([
      "ArrowDown",
      "PageDown",
      "End",
      " ",
      "Spacebar",
    ]);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        record(id, null);
        close();
        return;
      }
      if (FORWARD_KEYS.has(e.key) && document.activeElement === document.body) {
        e.preventDefault();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items =
        panel.current.querySelectorAll<HTMLElement>("button, a[href]");
      if (!items.length) return;
      const list = Array.from(items);
      const firstEl = list[0]!;
      const lastEl = list[list.length - 1]!;
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", blockForward);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      unsubscribe();
      prevFocus?.focus?.();
    };
  }, [open, id, record, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={question}
    >
      <div
        ref={panel}
        className="judge-card w-full max-w-[560px] p-6 text-center"
      >
        <p className="font-display text-[22px] leading-snug text-paper">
          {question}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {Array.from({ length: 11 }, (_, n) => (
            <button
              key={n}
              ref={n === 0 ? first : undefined}
              onClick={() => record(id, n)}
              className="score-btn font-display"
            >
              {n}
            </button>
          ))}
        </div>
        <button
          onClick={() => record(id, null)}
          className="mt-5 text-[15px] text-paper-muted underline underline-offset-4"
        >
          Skip this one
        </button>
      </div>
    </div>
  );
}
