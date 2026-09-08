import HorizontalReel from "./HorizontalReel";

export type Plate = {
  src: string;
  alt: string;
  title: string;
  meta: string;
};

export default function Reel({
  plates,
  id,
  bare = false,
}: {
  plates: Plate[];
  id: string;
  bare?: boolean;
}) {
  return (
    <HorizontalReel id={id} count={plates.length}>
      {plates.map((p, i) => (
        <figure
          key={p.src}
          className={
            bare
              ? "w-[62vw] max-w-[460px] shrink-0"
              : "plate w-[62vw] max-w-[460px] shrink-0"
          }
        >
          <img
            src={p.src}
            alt={p.alt}
            loading={i < 2 ? "eager" : "lazy"}
            className={
              bare
                ? "block w-full object-cover"
                : "block w-full border-4 border-ink object-cover"
            }
          />
          {!bare && (
            <figcaption className="pt-4">
              <span className="block font-display text-[19px] leading-tight text-ink">
                {p.title}
              </span>
              <span className="block text-[15px] text-ink/70">{p.meta}</span>
            </figcaption>
          )}
        </figure>
      ))}
    </HorizontalReel>
  );
}
