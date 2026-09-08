import { useEffect, useRef, useState } from "react";
import { averageOf, useShow } from "@/lib/show";

const GUESS = 7;

export default function Bow({
  linkedin = null,
  instagram = null,
}: {
  linkedin?: string | null;
  instagram?: string | null;
}) {
  const { scores } = useShow();
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [result, setResult] = useState<{ avg: number | null; rounded: number | null }>({
    avg: null,
    rounded: null,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          const avg = averageOf(scores);
          setResult({ avg, rounded: avg === null ? null : Math.round(avg) });
          setOpened(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scores]);

  const won = opened && result.rounded === GUESS;

  return (
    <section
      ref={ref}
      className="relative z-[40] flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="sealed-guess mx-auto max-w-[62ch] p-5 text-left">
        <p className="font-display text-[18px] text-gold-accent">The sealed guess</p>
        <p className="mt-2 text-paper-muted">
          Before you started, a guess was sealed at what you would give on average. The number
          is <span className="font-display text-paper">7</span>.
        </p>
        {opened && (
          <p className="mt-3 text-paper">
            {result.avg === null ? (
              <>You scored nothing at all. The envelope opens on an empty room. The guess loses.</>
            ) : (
              <>
                You averaged <span className="font-display">{result.avg.toFixed(1)}</span>. That
                rounds to <span className="font-display">{result.rounded}</span>.{" "}
                {won ? "The guess wins." : "The guess loses."}
              </>
            )}
          </p>
        )}
      </div>

      <h2 className="mt-14 font-display text-[clamp(38px,8vw,92px)] leading-[1] text-paper">
        That&apos;s the <span className="text-gold-accent">act</span>.
      </h2>
      <p className="mt-4 text-paper-muted">If any of it was useful, the rest is a conversation.</p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a className="poster-btn font-display" href="mailto:vishalchahar17@gmail.com">
          Email
        </a>
        {linkedin && (
          <a className="poster-btn font-display" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {instagram && (
          <a className="poster-btn font-display" href={instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        )}
      </div>
    </section>
  );
}
