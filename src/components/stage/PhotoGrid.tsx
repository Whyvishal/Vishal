import { useEffect, useState, type ReactNode } from "react";
import HorizontalReel from "./HorizontalReel";

export type Photo = { src: string; alt: string };

export default function PhotoGrid({
  photos,
  id,
  header,
  tileSize = 300,
  rows = 2,
}: {
  photos: Photo[];
  id: string;
  header?: ReactNode;
  tileSize?: number;
  rows?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      <HorizontalReel
        id={id}
        count={Math.ceil(photos.length / rows)}
        header={header}
        trackClassName="grid grid-flow-col gap-4 pl-[6vw] pr-[6vw] will-change-transform"
        trackStyle={{
          gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
          gridAutoColumns: `${tileSize}px`,
        }}
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            style={{ width: tileSize, height: tileSize }}
            className="border-4 border-ink shadow-[6px_6px_0_var(--ink)]"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading={i < rows * 2 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </HorizontalReel>
      {openIndex !== null && photos[openIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[80] flex cursor-pointer items-center justify-center bg-black/85 p-6"
        >
          <img
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            className="max-h-[86vh] max-w-[92vw] border-4 border-ink object-contain"
          />
        </div>
      )}
    </>
  );
}
