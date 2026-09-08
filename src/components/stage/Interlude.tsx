import { useEffect, useRef } from "react";
import { useShow } from "@/lib/show";
import ScoreModal from "./ScoreModal";

export default function Interlude({
  id,
  question,
}: {
  id: string;
  question: string;
}) {
  const { ask } = useShow();
  const anchor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = anchor.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          ask(id);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ask, id]);

  return (
    <div ref={anchor} className="relative z-[40] py-[14vh]">
      <ScoreModal id={id} question={question} />
    </div>
  );
}
