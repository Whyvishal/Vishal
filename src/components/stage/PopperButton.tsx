import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import { asset } from "@/lib/asset";

// The CTA gif carries real alpha, so it composites normally. The success and
// fail clips are video exports on a solid black canvas, so those two get
// `mix-blend-screen` to drop the black against the dark stage.
const CTA_SRC = asset("plates/confetti/popper_cta.gif");
const SUCCESS_SRC = asset("plates/confetti/animation_of_success.gif");
const FAIL_SRC = asset("plates/confetti/animation_of_failed.gif");
const CLIP_DURATION_MS = 2600;

export default function PopperButton() {
  const [hovering, setHovering] = useState(false);
  const [clip, setClip] = useState<{ id: number; src: string } | null>(null);

  useEffect(() => {
    if (!clip) return;
    const t = setTimeout(() => setClip(null), CLIP_DURATION_MS);
    return () => clearTimeout(t);
  }, [clip]);

  const pop = () => {
    const src = Math.random() < 0.5 ? SUCCESS_SRC : FAIL_SRC;
    setClip({ id: Date.now(), src });
  };

  return (
    <>
      {!clip && (
        <button
          type="button"
          onClick={pop}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          aria-label="Pop some confetti"
          className="fixed bottom-[110px] right-[112px] z-[35] flex h-[92px] w-[92px] items-center justify-center max-[820px]:hidden"
        >
          {hovering ? (
            <img
              src={CTA_SRC}
              alt=""
              className="h-full w-full object-contain"
            />
          ) : (
            <PartyPopper
              aria-hidden="true"
              size={32}
              strokeWidth={2}
              className="text-gold-accent"
            />
          )}
        </button>
      )}
      {clip && (
        <img
          key={clip.id}
          src={clip.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-1/2 z-[36] h-[368px] w-[368px] -translate-x-1/2 mix-blend-screen object-contain max-[820px]:hidden"
        />
      )}
    </>
  );
}
