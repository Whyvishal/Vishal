import { useTransform } from "motion/react";
import * as motionReact from "motion/react";
import { reveal } from "@/hooks/useStageScroll";
import guard from "@/assets/guard.png";

const m = motionReact.motion;

function Curtain({ side }: { side: "left" | "right" }) {
  const dir = side === "left" ? -1 : 1;
  const x = useTransform(reveal, [0, 1], ["0%", `${dir * 96}%`]);

  return (
    <m.div
      style={{ x }}
      className={
        "pointer-events-none absolute top-0 h-full w-[46%] max-[820px]:w-[52%] " +
        (side === "left" ? "left-0" : "right-0")
      }
    >
      <div className="relative h-full w-full curtain-fabric">
        {/* scalloped swag */}
        <div className="absolute inset-x-0 top-0 h-[70px] curtain-swag" />
        {/* gold tieback at the outer edge */}
        <div
          className={
            "absolute top-[46%] h-[26px] w-[74px] curtain-tieback " +
            (side === "left" ? "left-[6%]" : "right-[6%]")
          }
        />
        {/* inner black drape on the stage-facing side */}
        <div
          className={
            "absolute top-0 h-full w-[16%] drape " +
            (side === "left" ? "right-0" : "left-0 scale-x-[-1]")
          }
        />
      </div>
    </m.div>
  );
}

export default function StageSet() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* floor spotlight pool */}
      <div className="spotlight-pool" />

      <Curtain side="left" />
      <Curtain side="right" />

      {/* bouncers, in front of the curtains, one per rail */}
      <img
        src={guard}
        alt=""
        width={576}
        height={1152}
        className="guard absolute bottom-0 left-[10px] w-[92px] scale-x-[-1] max-[820px]:hidden"
      />
      <img
        src={guard}
        alt=""
        width={576}
        height={1152}
        className="guard absolute bottom-0 right-[10px] w-[92px] max-[820px]:hidden"
      />

      {/* laptop bezel = proscenium arch */}
      <div className="bezel" />
    </div>
  );
}
