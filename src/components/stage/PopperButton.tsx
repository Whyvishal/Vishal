import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";

// Both clips render on a solid black canvas (no alpha channel), so we play
// them inside a full-bleed black scrim rather than floating the raw <img> —
// otherwise the clip's own background reads as a hard-edged black box over
// whatever is behind it.
const BURST_SRC =
  "/plates/confetti/Redo_the_animation_of_failed_s-ezgif.com-crop.gif";
const FAIL_SRC = "/plates/confetti/animation_of_failed.gif";
const CONFETTI_DURATION_MS = 2600;

export default function PopperButton() {
  const [clip, setClip] = useState<{ id: number; src: string } | null>(null);

  useEffect(() => {
    if (!clip) return;
    const t = setTimeout(() => setClip(null), CONFETTI_DURATION_MS);
    return () => clearTimeout(t);
  }, [clip]);

  const pop = () => {
    const src = Math.random() < 0.5 ? BURST_SRC : FAIL_SRC;
    setClip({ id: Date.now(), src });
  };

  return (
    <>
      <button
        type="button"
        onClick={pop}
        aria-label="Pop some confetti"
        className="fixed bottom-[110px] right-[112px] z-[35] text-gold-accent transition-transform hover:scale-110 max-[820px]:hidden"
      >
        <PartyPopper aria-hidden="true" size={32} strokeWidth={2} />
      </button>
      {clip && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-black"
        >
          <img
            key={clip.id}
            src={clip.src}
            alt=""
            className="h-auto max-h-[70vh] w-auto max-w-[70vw]"
          />
        </div>
      )}
    </>
  );
}
