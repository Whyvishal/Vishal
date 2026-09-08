export default function ActHeading({
  lead,
  gold,
  tail,
  sub,
}: {
  lead: string;
  gold: string;
  tail?: string;
  sub: string;
}) {
  return (
    <header className="column relative z-[40] pt-[14vh]">
      <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
        {lead}
        <span className="text-gold-accent">{gold}</span>
        {tail}
      </h2>
      <p className="mt-4 max-w-[62ch] text-paper-muted">{sub}</p>
    </header>
  );
}
