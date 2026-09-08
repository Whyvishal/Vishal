import { createFileRoute } from "@tanstack/react-router";
import * as motionReact from "motion/react";
import StageSet from "@/components/stage/StageSet";
import PopperButton from "@/components/stage/PopperButton";
import MarqueeTitle from "@/components/stage/MarqueeTitle";
import ActHeading from "@/components/stage/ActHeading";
import HorizontalReel from "@/components/stage/HorizontalReel";
import PhotoGrid from "@/components/stage/PhotoGrid";
import Interlude from "@/components/stage/Interlude";
import Bow from "@/components/stage/Bow";
import { ShowProvider } from "@/lib/show";
import { asset } from "@/lib/asset";
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
const LINKEDIN_URL = "https://linkedin.com/in/vishalchahar";
const RESUME_URL =
  "https://drive.google.com/file/d/1clJGoPfQ9YTcGW2ZM7NWeddnBrDAa983/view";
const INSTAGRAM_URL = "[INSTAGRAM_URL]";
const isToken = (s: string) => /^\[.*\]$/.test(s);

const sketches = [
  "IMG_4212.jpg",
  "IMG_4206.jpg",
  "IMG_4207.jpg",
  "IMG_4210.jpg",
  "20180717_062815.jpg",
  "20210612_230957.jpg",
  "20210614_222348.jpg",
  "20210615_215517.jpg",
  "20210616_224018.jpg",
  "20210617_220451.jpg",
  "20210630_212607.jpg",
  "20220202_222009.jpg",
  "IMG_4208.jpg",
  "IMG_4209.jpg",
  "IMG_4211.jpg",
].map((name) => ({ src: asset(`plates/sketches/${name}`), alt: "" }));

const photos = [
  "IMG_1278.jpeg",
  "IMG_1405.jpeg",
  "IMG_1918.jpeg",
  "IMG_1923.jpeg",
  "IMG_1978.jpeg",
  "IMG_2063.jpeg",
  "IMG_2265.jpeg",
  "IMG_2314.jpeg",
  "IMG_2390.jpeg",
  "IMG_2440.jpeg",
  "IMG_2935.jpeg",
  "IMG_2948.jpeg",
  "IMG_3005.jpeg",
  "IMG_3932.jpeg",
  "IMG_3933.jpeg",
].map((name) => ({ src: asset(`plates/photos/${name}`), alt: "" }));

const sports = [
  {
    event: "Long Jump",
    placing: "Third place",
    certificate: asset("plates/certificates/long_jump_upright.jpg"),
  },
  {
    event: "Kho-Kho",
    placing: "WINNER",
    certificate: asset("plates/certificates/kho_kho_upright.jpg"),
  },
  {
    event: "Kabaddi",
    placing: "WINNER",
    certificate: asset("plates/certificates/kabaddi_upright.jpg"),
  },
];

const roles = [
  {
    title: "Associate Software Engineer",
    org: "Cogoport · Mumbai, India · May 2022 – Sep 2022",
    summary: "Automated how a logistics team handled inbound supplier mail.",
    points: [
      "Built an RPA interpreter that read supplier emails and pulled structured data out of logistics documents.",
      "Shipped an Outlook classification pipeline that removed manual triage from the inbox entirely.",
    ],
  },
  {
    title: "Associate Product Manager",
    org: "Cogoport · Gurugram, India · Sep 2022 – Mar 2024",
    summary:
      "Owned the money-movement side of a B2B logistics and freight-financing platform.",
    points: [
      "Launched the Business Finance Suite: digital invoicing, IRN compliance, and payments across integrated gateways.",
      "Architected Treasury Chest, a multi-bank reconciliation system that automated outflow matching and took most of the manual load off Finance.",
      "Shipped an OCR-driven audit engine that replaced manual processing without a single compliance escalation.",
      "Owned the PayRuns roadmap and ran Agile ceremonies across Engineering, Sales, and Finance.",
    ],
  },
  {
    title: "Product Manager",
    org: "Way.com · Trivandrum, India · Apr 2024 – Jul 2026",
    summary:
      "Car-ownership super-app spanning parking, insurance, refinance, and car wash.",
    points: [
      "Moved customer support to an AI-first model: ran the LLM vendor evaluation against historical tickets, then owned the deflection-rule backlog and the human escalation path for billing and refunds.",
      "Ran a retention experiment that borrowed a hypothesis from flight and hotel booking behaviour and tested whether it held in auto services.",
      "Built an auto-refinance CRM from zero to a real revenue line, then recommended sunsetting it when servicing costs kept it unprofitable on its own. Ran the wind-down and redeployed the team.",
      "Landed an exclusive OEM distribution agreement with Hyundai Global, defining the API architecture for embedded infotainment.",
      'Architected "Virtual Garage," a unified user-profile layer that powers personalisation and cross-sell across product lines.',
      "Launched a B2B car-wash SaaS from operator discovery through enterprise pilots, with a GTM playbook Sales picked up for national rollout.",
    ],
  },
];

const recommendations = [
  {
    name: "Retesh Singh",
    role: "Senior Product Manager",
    company: "Cogoport Pvt Ltd",
    photo: asset("plates/Recomendations/Retesh.png"),
    content:
      "Vishal worked as a Product Analyst in my team at Cogoport for approx. an year. His technical acumen as well as the ability to take independent charge for few product initiatives impressed me a lot. His work played a key role in delivering Cogoport's shipment orchestrator platform successfully. I have seen Vishal perform well both as an individual contributor and as a part of a broader team. His work ethics are good and I found his temperament to be positive. I highly recommend him for product roles across levels. He'll be a great hire in your team.",
  },
  {
    name: "Suhas Latelwar",
    role: "Senior Product Manager",
    company: "Cogoport Pvt Ltd",
    photo: asset("plates/Recomendations/Suhas.png"),
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
        <PhotoGrid
          id="sketches"
          photos={sketches}
          tileSize={400}
          rows={1}
          header={
            <>
              <ActHeading
                lead="First, the "
                gold="drawing"
                tail="."
                sub="Ten years of sketchbooks, kept up through every job. Graphite, ink, charcoal."
              />
              <div className="column relative z-[40]">
                <Credential>
                  First prize, Painting — Matrubhasha Diwas, NIT Andhra Pradesh,
                  2019.
                </Credential>
              </div>
            </>
          }
        />
        <Interlude
          id="sketches"
          question="The sketches — out of 10, how was it?"
        />

        {/* Act two — the photographs */}
        <PhotoGrid
          id="photos"
          photos={photos}
          header={
            <>
              <ActHeading
                lead="Then, the "
                gold="looking"
                tail="."
                sub="Mostly upward. The camera was pointed at the same thing for years."
              />
              <div className="column relative z-[40]">
                <Credential>
                  Executive, Painting &amp; Photography Club — NIT Andhra
                  Pradesh, 2018–19.
                </Credential>
              </div>
            </>
          }
        />
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
            <div className="aspect-video w-full overflow-hidden border-4 border-ink bg-paper">
              {isToken(VIDEO_URL) ? (
                <img
                  src={asset("plates/Rap/Rap.png")}
                  alt=""
                  className="h-full w-full object-cover"
                />
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
                Apna Time Aayega — Gully Boy cover
              </span>
              <span className="block text-[15px] text-ink/70">
                Vulcanzy 2020, NIT Andhra Pradesh
              </span>
            </figcaption>
          </figure>
        </section>
        <Interlude id="rap" question="The rap. Be honest. Out of 10." />

        {/* Act four — the sports */}
        <HorizontalReel
          id="certificates"
          count={sports.length}
          header={
            <section className="column relative z-[40] pt-[4vh]">
              <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
                Briefly, an <span className="text-gold-accent">athlete</span>.
              </h2>
              <p className="mt-2 max-w-[62ch] text-paper-muted">
                First year. Intramural. The certificates are real and that is
                the whole argument.
              </p>
            </section>
          }
        >
          {sports.map((s) => (
            <figure key={s.event} className="plate w-[720px] shrink-0">
              <div className="h-[500px] w-[720px] overflow-hidden border-4 border-ink">
                <img
                  src={s.certificate}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="pt-3 text-center">
                <span className="block font-display text-[20px] leading-tight text-ink">
                  {s.event}
                </span>
                <span className="mt-1 block font-display text-[16px] text-gold">
                  {s.placing}
                </span>
                <span className="mt-1 block text-[15px] text-ink/70">
                  Intramural Tournament, NIT Andhra Pradesh, 2018–19
                </span>
              </figcaption>
            </figure>
          ))}
        </HorizontalReel>
        <Interlude id="sport" question="The athletic career — out of 10?" />

        {/* Act five — the product work */}
        <HorizontalReel
          id="product-cases"
          count={roles.length}
          header={
            <section className="column relative z-[40] pt-[5vh]">
              <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
                Now, let&apos;s talk{" "}
                <span className="text-gold-accent">business</span>.
              </h2>
            </section>
          }
        >
          {roles.map((r) => (
            <article
              key={r.title}
              className="plate w-[76vw] max-w-[620px] shrink-0 text-left"
            >
              <h3 className="font-display text-[24px] leading-tight text-ink">
                {r.title}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-ink/70">
                {r.org}
              </p>
              <p className="mt-3 font-display text-[18px] text-gold">
                {r.summary}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-ink/70 marker:text-gold">
                {r.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </HorizontalReel>
        <Interlude id="product" question="The product work — out of 10?" />

        {/* Act six — recommendations */}
        <HorizontalReel
          id="people-quotes"
          count={recommendations.length}
          header={
            <section className="column relative z-[40] pt-[14vh]">
              <h2 className="font-display text-[clamp(30px,5vw,54px)] leading-[1.05] text-paper">
                And people who worked with{" "}
                <span className="text-gold-accent">him</span>.
              </h2>
            </section>
          }
        >
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
          resume={isToken(RESUME_URL) ? null : RESUME_URL}
          linkedin={isToken(LINKEDIN_URL) ? null : LINKEDIN_URL}
          instagram={isToken(INSTAGRAM_URL) ? null : INSTAGRAM_URL}
        />
      </main>
    </ShowProvider>
  );
}
