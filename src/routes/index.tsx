import { createFileRoute } from "@tanstack/react-router";
import * as motionReact from "motion/react";
import StageSet from "@/components/stage/StageSet";
import PopperButton from "@/components/stage/PopperButton";
import MarqueeTitle from "@/components/stage/MarqueeTitle";
import ActHeading from "@/components/stage/ActHeading";
import Reel from "@/components/stage/Reel";
import HorizontalReel from "@/components/stage/HorizontalReel";
import Interlude from "@/components/stage/Interlude";
import Bow from "@/components/stage/Bow";
import { ShowProvider } from "@/lib/show";
import { reveal, useStageScrollListener } from "@/hooks/useStageScroll";

const m = motionReact.motion;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal — Product Manager, Artist, Photographer" },
      {
        name: "description",
        content:
          "A talent-show staged portfolio: sketches, photographs, a rap, intramural certificates, and a product career. Scroll to open the curtains.",
      },
      {
        property: "og:title",
        content: "Vishal — Product Manager, Artist, Photographer",
      },
      {
        property: "og:description",
        content:
          "Sketches, photographs, a rap, and a product career, staged as a talent show.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StagePage,
});

const VIDEO_URL = "[VIDEO_URL]";
const LINKEDIN_URL = "[LINKEDIN_URL]";
const INSTAGRAM_URL = "[INSTAGRAM_URL]";
const isToken = (s: string) => /^\[.*\]$/.test(s);

const sketches = [
  {
    src: "/plates/sketches/IMG_4212.jpg",
    alt: "",
    title: "[SKETCH_15_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4206.jpg",
    alt: "",
    title: "[SKETCH_9_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4207.jpg",
    alt: "",
    title: "[SKETCH_10_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4210.jpg",
    alt: "",
    title: "[SKETCH_13_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20180717_062815.jpg",
    alt: "",
    title: "[SKETCH_1_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210612_230957.jpg",
    alt: "",
    title: "[SKETCH_2_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210614_222348.jpg",
    alt: "",
    title: "[SKETCH_3_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210615_215517.jpg",
    alt: "",
    title: "[SKETCH_4_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210616_224018.jpg",
    alt: "",
    title: "[SKETCH_5_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210617_220451.jpg",
    alt: "",
    title: "[SKETCH_6_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20210630_212607.jpg",
    alt: "",
    title: "[SKETCH_7_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/20220202_222009.jpg",
    alt: "",
    title: "[SKETCH_8_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4208.jpg",
    alt: "",
    title: "[SKETCH_11_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4209.jpg",
    alt: "",
    title: "[SKETCH_12_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
  {
    src: "/plates/sketches/IMG_4211.jpg",
    alt: "",
    title: "[SKETCH_14_TITLE]",
    meta: "[MEDIUM], [YEAR]",
  },
];

const photographs = [
  {
    src: "/plates/photos/photo-01.jpg",
    alt: "",
    title: "[LOCATION / MOMENT]",
    meta: "[FOCAL LENGTH], [APERTURE]",
  },
  {
    src: "/plates/photos/photo-02.jpg",
    alt: "",
    title: "[LOCATION / MOMENT]",
    meta: "[FOCAL LENGTH], [APERTURE]",
  },
  {
    src: "/plates/photos/photo-03.jpg",
    alt: "",
    title: "[LOCATION / MOMENT]",
    meta: "[FOCAL LENGTH], [APERTURE]",
  },
  {
    src: "/plates/photos/photo-04.jpg",
    alt: "",
    title: "[LOCATION / MOMENT]",
    meta: "[FOCAL LENGTH], [APERTURE]",
  },
];

const sports = [
  {
    event: "Long Jump",
    placing: "Third place",
    certificate: "/plates/certificates/long_jump.jpg",
  },
  {
    event: "Kho-Kho",
    placing: "[WINNER or RUNNER-UP]",
    certificate: "/plates/certificates/kho_kho.jpg",
  },
  {
    event: "Kabaddi",
    placing: "[WINNER or RUNNER-UP]",
    certificate: "/plates/certificates/kabaddi.jpg",
  },
];

const recommendations = [
  {
    name: "Retesh Singh",
    role: "Senior Product Manager",
    company: "Cogoport Pvt Ltd",
    photo: "/plates/Recomendations/Retesh.png",
    content:
      "Vishal worked as a Product Analyst in my team at Cogoport for approx. an year. His technical acumen as well as the ability to take independent charge for few product initiatives impressed me a lot. His work played a key role in delivering Cogoport's shipment orchestrator platform successfully. I have seen Vishal perform well both as an individual contributor and as a part of a broader team. His work ethics are good and I found his temperament to be positive. I highly recommend him for product roles across levels. He'll be a great hire in your team.",
  },
  {
    name: "Suhas Latelwar",
    role: "Senior Product Manager",
    company: "Cogoport Pvt Ltd",
    photo: "/plates/Recomendations/Suhas.png",
    content:
      "I had the privilege of working closely with Vishal, where both of us were a part of the product team at cogoport. He displayed remarkable strategic foresight and exceptional execution skills. His ability to deeply understand user needs and translate them into actionable product roadmaps was truly impressive. His collaborative approach and focus on outcomes consistently boosted our team to deliver impactful solutions. A true asset to any organization, I highly recommend Vishal for his outstanding product skills and ability to drive results. Glad I got to work with him.",
  },
];

function Credential({ children }: { children: string }) {
  return <p className="mt-3 font-semibold text-paper-muted">{children}</p>;
}

function StagePage() {
  useStageScrollListener();
  const instrOpacity = motionReact.useTransform(reveal, [0, 0.35], [1, 0]);

  return (
    <ShowProvider>
      <main id="top" className="relative bg-stage">
        <StageSet />
        <PopperButton />
        <MarqueeTitle />

        {/* Landing */}
        <section className="flex h-screen flex-col items-center justify-end pb-[16vh] text-center">
          <m.div
            style={{ opacity: instrOpacity }}
            className="relative z-[45] px-6"
          >
            <p className="mx-auto max-w-[46ch] text-paper-muted">
              Sketches, photographs, a rap, and a product career. Scroll to open
              the curtains.
            </p>
            <div
              className="chevron-bob mt-6 text-3xl text-gold-accent"
              aria-hidden="true"
            >
              ▾
            </div>
          </m.div>
        </section>

        {/* Act one — the drawings */}
        <ActHeading
          lead="First, the "
          gold="drawing"
          tail="."
          sub="Ten years of sketchbooks, kept up through every job. Graphite, ink, charcoal."
        />
        <div className="column relative z-[40]">
          <Credential>
            First prize, Painting — Matrubhasha Diwas, NIT Andhra Pradesh, 2019.
          </Credential>
        </div>
        <Reel id="sketches" plates={sketches} bare />
        <Interlude
          id="sketches"
          question="The sketches — out of 10, how was it?"
        />

        {/* Act two — the photographs */}
        <ActHeading
          lead="Then, the "
          gold="looking"
          tail="."
          sub="Mostly upward. The camera was pointed at the same thing for years."
        />
        <div className="column relative z-[40]">
          <Credential>
            Executive, Painting &amp; Photography Club — NIT Andhra Pradesh,
            2018–19.
          </Credential>
        </div>
        <Reel id="photos" plates={photographs} />
        <Interlude id="photos" question="The photographs — out of 10?" />

        {/* Act three — the rap */}
        <section className="column relative z-[40] pt-[14vh]">
          <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
            Then, briefly, a <span className="text-gold-accent">rap</span>.
          </h2>
          <p className="mt-4 max-w-[62ch] text-paper-muted">
            It is on the internet. It is too late to do anything about that.
          </p>
          <figure className="plate mt-8">
            <div className="aspect-video w-full border-4 border-ink bg-paper">
              {isToken(VIDEO_URL) ? (
                <div className="flex h-full items-center justify-center p-4 text-center text-[15px] text-ink/70">
                  The video is not linked yet — {VIDEO_URL}
                </div>
              ) : (
                <iframe
                  src={VIDEO_URL}
                  title="Rap verse"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              )}
            </div>
            <figcaption className="pt-4">
              <span className="block font-display text-[19px] text-ink">
                [RAP_TITLE]
              </span>
              <span className="block text-[15px] text-ink/70">[RAP_META]</span>
            </figcaption>
          </figure>
        </section>
        <Interlude id="rap" question="The rap. Be honest. Out of 10." />

        {/* Act four — the sports */}
        <section className="column relative z-[40] pt-[14vh]">
          <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
            Briefly, an <span className="text-gold-accent">athlete</span>.
          </h2>
          <p className="mt-4 max-w-[62ch] text-paper-muted">
            First year. Intramural. The certificates are real and that is the
            whole argument.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-[820px]:grid-cols-1">
            {sports.map((s) => (
              <figure key={s.event} className="plate">
                <img
                  src={s.certificate}
                  alt=""
                  className="block aspect-[4/3] w-full border-4 border-ink object-cover"
                />
                <figcaption className="pt-4 text-center">
                  <span className="block font-display text-[20px] leading-tight text-ink">
                    {s.event}
                  </span>
                  <span className="mt-2 block font-display text-[16px] text-gold">
                    {s.placing}
                  </span>
                  <span className="mt-2 block text-[15px] text-ink/70">
                    Intramural Tournament, NIT Andhra Pradesh, 2018–19
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <Interlude id="sport" question="The athletic career — out of 10?" />

        {/* Act five — the product work */}
        <section className="column relative z-[40] pt-[14vh]">
          <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
            Now, let&apos;s talk{" "}
            <span className="text-gold-accent">business</span>.
          </h2>

          <ol className="timeline mt-10">
            <li>
              <span className="font-display text-[19px] text-paper">
                Associate Software Engineer — Cogoport, 2022
              </span>
              <span className="block text-[15px] text-paper-muted">
                Automation for inbound logistics mail: an RPA interpreter for
                supplier emails and a classification pipeline that removed
                manual triage.
              </span>
            </li>
            <li>
              <span className="font-display text-[19px] text-paper">
                Associate Product Manager — Cogoport, 2022–2024
              </span>
              <span className="block text-[15px] text-paper-muted">
                Finance products for a B2B freight platform: invoicing and
                compliance flows, a multi-bank reconciliation system, and an OCR
                audit engine.
              </span>
            </li>
            <li>
              <span className="font-display text-[19px] text-paper">
                Product Manager — Way.com, 2024–2026
              </span>
              <span className="block text-[15px] text-paper-muted">
                Car-ownership super-app. AI support, auto refinance, OEM
                distribution, and a unified user-profile layer.
              </span>
            </li>
          </ol>
        </section>
        <HorizontalReel id="product-cases" count={3}>
          <article className="plate w-[70vw] max-w-[560px] shrink-0 text-left">
            <h3 className="font-display text-[24px] text-ink">
              Support, rebuilt around a model
            </h3>
            <p className="mt-1 font-display text-[18px] text-gold">
              Every candidate model was tested against years of real tickets
              before a single customer met one.
            </p>
            <p className="mt-3 text-ink/70">
              Migrated an entire customer support organisation to an AI-first
              model. Directed the LLM vendor evaluation, scoring candidates on
              resolution quality, escalation correctness, and tone against
              historical tickets rather than demo transcripts. Owned the
              deflection-rule backlog after launch, and the human escalation
              path for the cases where being wrong costs money — billing and
              refunds.
            </p>
          </article>
          <article className="plate w-[70vw] max-w-[560px] shrink-0 text-left">
            <h3 className="font-display text-[24px] text-ink">
              A refinance business, built and then closed
            </h3>
            <p className="mt-1 font-display text-[18px] text-gold">
              Took it from nothing to a real revenue line, then argued it should
              be shut down.
            </p>
            <p className="mt-3 text-ink/70">
              Authored the PRD and ran sprint planning for a zero-to-one
              auto-refinance CRM, integrating real-time credit decisioning with
              automated customer comms. It worked — processing time fell and
              conversion climbed. It also never covered its own servicing cost
              standalone. Recommended the shutdown at eighteen months, ran the
              wind-down, and redeployed the squad.
            </p>
          </article>
          <article className="plate w-[70vw] max-w-[560px] shrink-0 text-left">
            <h3 className="font-display text-[24px] text-ink">
              Into the dashboard
            </h3>
            <p className="mt-1 font-display text-[18px] text-gold">
              The product ships inside the car, not just on the phone.
            </p>
            <p className="mt-3 text-ink/70">
              Defined the technical API architecture for an exclusive multi-year
              OEM distribution agreement with Hyundai Global and supported the
              commercial negotiation. Way ships as embedded infotainment, which
              opens a distribution channel that does not depend on anyone
              downloading anything.
            </p>
          </article>
        </HorizontalReel>
        <section className="column relative z-[40]">
          <p className="max-w-[62ch] text-paper-muted">
            Also: a unified vehicle-and-document profile layer powering
            cross-sell across three product lines, a B2B car-wash SaaS taken
            from operator interviews to enterprise pilots, and a retention
            experiment whose hypothesis was borrowed from flight and hotel
            booking behaviour.
          </p>
        </section>
        <Interlude id="product" question="The product work — out of 10?" />

        {/* Act six — recommendations */}
        <section className="column relative z-[40] pt-[14vh]">
          <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
            And people who worked with{" "}
            <span className="text-gold-accent">him</span>.
          </h2>
        </section>
        <HorizontalReel id="people-quotes" count={recommendations.length}>
          {recommendations.map((r) => (
            <blockquote
              key={r.name}
              className="quote w-[70vw] max-w-[560px] shrink-0"
            >
              <p>{r.content}</p>
              <footer className="mt-4 flex items-center gap-4">
                <img
                  src={r.photo}
                  alt=""
                  className="h-16 w-16 shrink-0 border-4 border-ink object-cover"
                />
                <div className="font-extrabold">
                  <span className="block text-ink">{r.name}</span>
                  <span className="block text-ink/70">
                    {r.role}, {r.company}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </HorizontalReel>
        <section className="column relative z-[40]">
          {isToken(LINKEDIN_URL) ? (
            <p className="text-[15px] text-paper-muted">
              More recommendations on LinkedIn — {LINKEDIN_URL}
            </p>
          ) : (
            <a
              className="poster-btn font-display inline-block"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              See more on LinkedIn
            </a>
          )}
        </section>
        <Interlude id="people" question="The references — out of 10?" />

        <Bow
          linkedin={isToken(LINKEDIN_URL) ? null : LINKEDIN_URL}
          instagram={isToken(INSTAGRAM_URL) ? null : INSTAGRAM_URL}
        />
      </main>
    </ShowProvider>
  );
}
