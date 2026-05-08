import Image from 'next/image';

const PARADE_IMAGE = '/images/Beetle.jpg';

type AboutOurStoryProps = {
  /** Section heading from the JSON copy, e.g. `"Our Story: The Heart Behind Wellderly"`. */
  narrativeIntro: string;
  /** Body paragraphs (intro line + Amy bio + Klay bio + closing). */
  narrativeBody: string[];
};

/** Split each authored paragraph at sentence boundaries so dense bios read as
 *  several short paragraphs instead of one wall of text. Wording is preserved. */
function readableParagraphs(text: string): string[] {
  const t = text.replace(/\u00a0/g, ' ').trim();
  if (!t) return [];
  const parts = t.split(/(?<=[.!?])\s+(?=[“"A-Z0-9])/);
  const out = parts.map((p) => p.trim()).filter(Boolean);
  return out.length > 0 ? out : [t];
}

/** Split `"Our Story: The Heart Behind Wellderly"` into a quiet eyebrow + a
 *  large editorial headline. Falls back gracefully if the intro is malformed. */
function parseIntroHeading(intro: string): { eyebrow: string; headline: string } {
  const normalized = intro.replace(/\u00a0/g, ' ').trim();
  const colon = normalized.indexOf(':');
  if (colon === -1) {
    return { eyebrow: 'Our Story', headline: normalized };
  }
  return {
    eyebrow: normalized.slice(0, colon).trim(),
    headline: normalized.slice(colon + 1).trim(),
  };
}

/**
 * About page — "Our Story" editorial section.
 *
 * Single-column article layout:
 *   1. Section intro (eyebrow + headline), left-aligned in the page container.
 *   2. Large parade image, near full container width — the emotional anchor.
 *   3. Narrow editorial text column (~672px) with the founder story below.
 *
 * Mobile stacks naturally: eyebrow → headline → image → story.
 *
 * Copy is sourced from `aboutUsContent.json` via the `narrativeIntro` and
 * `narrativeBody` props, so any wording change lives in one place.
 */
export function AboutOurStory({ narrativeIntro, narrativeBody }: AboutOurStoryProps) {
  const { eyebrow, headline } = parseIntroHeading(narrativeIntro);

  return (
    <section
      className="border-b border-line/20 py-20 sm:py-24 lg:py-32"
      aria-labelledby="our-story-heading"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        {/* 1. Section intro — left-aligned within the page container */}
        <div className="max-w-[44rem]">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-navy/55">
            {eyebrow}
          </p>
          <h2
            id="our-story-heading"
            className="mt-5 text-[2.125rem] font-semibold leading-[1.06] tracking-tight text-navy text-balance sm:text-[2.35rem] lg:text-[2.6rem] lg:leading-[1.06]"
          >
            {headline}
          </h2>
        </div>

        {/* 2. Image — full container width, the emotional anchor of the
            section. Source aspect (3:2) is preserved so the parade scene isn't
            aggressively cropped. */}
        <div className="relative mt-12 aspect-[3/2] w-full overflow-hidden rounded-[1rem] border border-line/30 sm:mt-14 lg:mt-16">
          <Image
            src={PARADE_IMAGE}
            alt="Amy waving from a Home Instead Senior Care VW Beetle in a community parade, alongside a banner reading “Honoring Our Nation’s CAREGivers Past, Present, and Future”"
            fill
            sizes="(min-width: 1280px) 72rem, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* 3. Story — narrow editorial column (~672px) with generous rhythm.
            `space-y-8` between authored paragraphs gives a calm reading cadence;
            `space-y-6` between sentence-split chunks within one paragraph keeps
            related sentences closer together. */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="mx-auto max-w-[42rem] space-y-8 text-[1.0625rem] font-normal leading-[1.85] text-navy/78 sm:text-[1.125rem]">
            {narrativeBody.map((paragraph, i) => (
              <div key={`our-story-${i}`} className="space-y-6">
                {readableParagraphs(paragraph).map((chunk, j) => (
                  <p key={`our-story-${i}-${j}`}>{chunk}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
