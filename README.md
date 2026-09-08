# The Talent Stage

Build a single-page personal portfolio for a product manager who is also an artist and photographer. It is themed as a talent-show stage performance. This is a scroll-driven experience, not a conventional portfolio layout — please read the whole brief before writing anything.

The concept

The page is a stage and the visitor is the audience. A laptop bezel frames the viewport as a proscenium arch. Two bald bouncers in black suits stand in the wings. Heavy red curtains hide everything until the visitor scrolls, at which point they part and the performance begins.

Three rules govern the entire build:

The set never moves; only the performer does. The bezel, curtains, bouncers, and floor spotlight are fixed to the viewport. Content scrolls behind and between them. This is what makes the page read as one continuous performance rather than a stack of sections.

Scrolling is the story, not the navigation. There is no navigation bar, no jump links, no scroll progress indicator. The only path is forward, and the order is the argument: drawings first, photographs second, A rap video third, Sports certification fouth, professional work Fifth and people recommendations sixth.

The joke is the punctuation. A cartoon host appears between sections  left to the RIght side bouncer with a party popper. Sometimes it fires. Sometimes it flops, deadpan. That running gag is the tonal centre of the whole thing.

The audience is recruiters and hiring managers who will decide in ninety seconds whether to keep reading. The theatrical framing is the hook; the case studies are the payload. Every decision should serve the sequence "amused, then curious, then convinced." If an animation ever gets in the way of reading a case study, the animation loses.

Stack and constraints

React with TypeScript, Tailwind, Framer Motion for the scroll-linked transforms. No component library chrome — do not use shadcn cards, default rounded panels, soft grey shadows, or gradient washes anywhere. This page has a hand-drawn poster aesthetic: hard black borders and hard offset shadows with zero blur. Everything is a single route. There is no backend, no database, no auth, no form submission.

Visual language

Colour palette, all named as CSS custom properties:

stage background #0B0507

curtain mid #6B0C13, curtain highlight #8A1119, curtain shadow #33040A

inner black drape #120A0C

structural gold #A9821F, accent gold #D3A32E

paper #EFE4CE, muted paper #C9BCA3

ink #140D0E

spotlight #FFF2D0

The palette is deliberately dark. This is a dim theatre with one floor spotlight, not a lit showroom. Anything not touched by the spotlight sits low in value.

Two typefaces, sharply distinct. Alfa Slab One for all display type — the marquee, section headings, popper captions, score buttons, the closing line. It is a heavy slab serif and it carries the variety-poster voice. Never use it for body text. Karla for body text at weights 400, 600, and 800. Body copy is 17px at 1.6 line height, capped near 62 characters per line.

Marquee title scales fluidly: the name line clamps between 34px and 86px, the word LATENT between 52px and 168px, roughly twice the size of the line above it, in accent gold with a hard offset shadow.

Content sits in a centred column about 720px wide, narrowed to leave roughly 92px of clear rail on each side for the bouncers. Body text is left-aligned inside that column. Only the landing and the closing section are centre-aligned, because those are moments rather than reading.

The fixed stage

Build the stage furniture first, as fixed-position layers behind the scrolling content:

Two curtain panels, one anchored to each edge, each about 46% of the viewport wide. Each panel needs vertical pleating built from repeating linear gradients with several tonal steps so it reads as fabric rather than stripes, a narrower black inner drape on the stage-facing side, a scalloped swag across the top, and a gold tieback at the outer edge. Heavy inset shadow top and bottom.

A soft elliptical spotlight pool on the floor at the bottom of the viewport.

The two bouncers, using guard.svg. Roughly 92px wide, anchored to the bottom of each rail, standing in front of the curtains. The artwork faces right, so mirror the left instance horizontally — both should look toward centre stage. Dim them slightly with a brightness filter so they sit inside the dark room rather than popping off it. Reference image provided we should be using that (removing the Whit background)

All of this is decorative and must be hidden from screen readers.

Scroll choreography

Everything runs off one scroll timeline. The reveal happens over the first 0.85 viewport heights, on a single smoothstep-eased curve so it feels like one motion rather than three separate animations:

The left curtain slides out to about minus 96% of its own width, the right curtain to plus 96%.

The title travels from centre stage to the top-left corner.

The title is the most important interaction on the page, so be precise about it. It is a single element, fixed, at the top of the stacking order — above the curtains, above the bouncers, above the bezel. It must never be behind anything at any scroll position. It does not fade out and get replaced by a separate logo; it is one element that continuously transforms.

Measure its natural size at runtime, compute the transform that lands its top-left corner near the top-left of the viewport at roughly 210px wide, and interpolate scale and position along the same eased curve as the curtains. Re-measure on window resize and after the webfont finishes loading, or it will dock to the wrong place. Past about 82% of the reveal it gains a plaque background — deep red with a thick accent-gold border and a heavy drop shadow — becomes clickable as a link back to the top, and takes keyboard focus. It then stays in the corner as the site logo for the entire remainder of the page.

The acts

Landing. Two lines of display type only, plus one line of instruction — "Sketches, photographs, and a product career. Scroll to open the curtains." — and a bobbing chevron. No social icons, no "hi, I'm". The curtain does the introducing. The instruction line fades out as the curtains part; the title does not.

Act one — the drawings. A heading reading "First, the drawing." with the word "drawing" in accent gold, plus one line of subtext. Then a horizontally scrolling reel of five framed plates.

The reel mechanic: a tall outer section, roughly 340 viewport heights' worth of scroll budget for five plates, containing a sticky inner container that is full viewport height with hidden overflow. As the visitor scrolls down, the inner track translates horizontally in proportion to their progress through the section. The rule of thumb for sizing is one viewport height plus about 60% of a viewport height per plate — too short and the reel whips past, too long and the visitor feels trapped.

Each plate is a framed card: thick black border, hard offset drop shadow with no blur, cream mount, the artwork, and a caption block underneath with a bold title and a muted line of medium and year, in the form "Portrait, no. 4 / Graphite on cartridge, 2024". Captions must be real selectable text, never baked into an image.

Act two — the photographs. Heading "Then, the looking." Same reel mechanic, four plates, roughly 300 viewport heights of budget. Captions carry camera data instead of medium — "Blue hour, Bandra / 35mm, f/2". Keeping the two galleries structurally identical but caption-differentiated signals "same person, two disciplines" without a paragraph saying so.

Act three — the product work. The tonal pivot. No reel here; the visitor stops moving sideways and reads. Heading "Now, let's talk business."

First a career timeline — a vertical gold rule with dots, three stops in sequence: machine learning engineer, then associate product manager, then product manager at Way.com. This is the one place on the page where sequential markers are justified, because it genuinely is a sequence.

Then three case study blocks. Each has a title, a single result line in accent gold, and a short paragraph. The result line is what a skimmer reads, so it must carry a concrete claim rather than a category label — "Scores every interaction, not a 2% sample" works, "AI-powered quality assurance" does not. The three are a support QA copilot, an AI voice automation programme, and a support taxonomy rebuild.

The bow. Full viewport. Heading "That's the act." One line: "If any of it was useful, the rest is a conversation." Three links — email, LinkedIn, Instagram — styled as accent-gold buttons with hard black borders and offset shadows, matching the plate style.

The scoring game

This is the interactive spine and it should feel like the show's judging panel.

At the end of each of the 6 acts, a modal opens over the page. It asks the visitor to score the act out of 10 — "The sketches — out of 10, how was it?" — with eleven buttons, 0 through 10, laid out in a row that wraps on narrow screens. Buttons are square, transparent with a gold border, filling with gold on hover and focus. The modal is a deep red and black checker cloth like card with a thick gold border on a dark blurred backdrop. It can be dismissed with Escape or a small "Skip this one" link, which records no score.

Scores are held in memory for the session only. There is no persistence and no storage of any kind.

The payoff: a sealed guess. In the closing section, visible from the moment the page loads, a dashed-border block states that before the visitor started, a guess was sealed at what they would give on average — the number is 7. When they reach that section, the envelope opens: their average is computed, rounded to the nearest whole number, and compared to 7. Exact match and the guess wins; anything else and it loses. Show the actual average to one decimal alongside the rounded figure so the near-misses sting. If the visitor scored nothing at all, say so and call it a loss.

The popper gag

Between each act, in the space where the score modal appeared, sits the host character. He starts in the host-ready.svg pose, popper raised (reference provided). Once the visitor has scored that act — or skipped it — there is a short beat of anticipation, about 400ms, and then the image swaps to either host-burst.svg or host-flop.svg with a small overshoot pop, and a caption line fades up beneath.

Whether it fires is random, but weighted by the score just given: roughly a one-in-three chance of firing at a score of zero, rising to about four-in-five at a score of ten. It is never certain in either direction — a ten can still flop, and that is precisely the joke. Write two or three caption variants for each outcome and pick randomly; keep the flop lines dry rather than sad. The outcome resolves once per section per page load and must not re-fire when the visitor scrolls back up.

Motion discipline

There are exactly three orchestrated motion moments on this page: the curtain reveal, the reel translation, and the popper resolution. Do not add fade-and-slide-up entrances to individual cards, hover lift effects on plates, parallax on backgrounds, or staggered reveals on list items. Scattered micro-animation is what makes a page read as machine-generated; concentrating the motion is what makes the three real moments land.

Animate only transform and opacity. Never animate width, height, top, left, or background position. Run all scroll work through a single throttled handler, not one listener per section.

Accessibility and quality floor

Respect prefers-reduced-motion by disabling smooth scrolling, the chevron bob, the popper delay, and the pop animation — but keep the curtains and reels responding to scroll, since those are direct manipulation rather than autonomous motion.

Every interactive element needs a visible focus ring in the spotlight colour with an offset. The score modal must trap focus while open, move focus to the first button when it opens, and close on Escape. Decorative illustrations get empty alt text and the fixed stage set is hidden from assistive technology entirely.

Below 820px the rails collapse and the bouncers are hidden, since there is no room for them beside a phone-width column. Curtains widen slightly. Reel plates cap at about 62% of viewport width so the next plate peeks in and signals that there is more sideways.

Target first paint under 1.5 seconds. Lazy-load everything past the first two plates in each reel.

What would make this fail

Turning it into a novelty. Letting the theatre theme eat the content. Chopping the case studies into identical rounded cards. Adding a navigation bar "for usability". Making the popper fire every time, which kills the joke. Letting the title dock to the wrong position because it was measured before the font loaded.

Start with the fixed stage and the curtain reveal only. Do not build any content sections until the reveal and the title dock feel right — if that first moment isn't good, nothing after it matters.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
