import { useEffect, useRef } from "react";
import { useShow } from "@/lib/show";

export default function ScoreModal({ id, question }: { id: string; question: string }) {
  const { askingId, record, close } = useShow();
  const open = askingId === id;
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    first.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        record(id, null);
        close();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = panel.current.querySelectorAll<HTMLElement>("button, a[href]");
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
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
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
      <div ref={panel} className="judge-card w-full max-w-[560px] p-6 text-center">
        <p className="font-display text-[22px] leading-snug text-paper">{question}</p>
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
