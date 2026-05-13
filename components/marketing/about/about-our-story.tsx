import Image from 'next/image';

const AMY_PARADE = '/assets/marketing/Amy.jpg';
const AMY_HEADSHOT = '/assets/marketing/Amy_faceshot_wewebsize.jpg';
const KLAY_HEADSHOT = '/assets/marketing/klay-huddleston.jpg';

type AboutOurStoryProps = {
  /** e.g. `"Our Story: The Heart Behind Wellderly"` — split into eyebrow + headline. */
  narrativeIntro: string;
  /** Standalone co-founder bridge line. */
  coFounderLine: string;
  amyBio: string;
  klayBio: string;
  closingStatement: string;
};

/** Split dense bios at sentence boundaries; wording preserved. */
function readableParagraphs(text: string): string[] {
  const t = text.replace(/\u00a0/g, ' ').trim();
  if (!t) return [];
  const parts = t.split(/(?<=[.!?])\s+(?=[“"A-Z0-9])/);
  const out = parts.map((p) => p.trim()).filter(Boolean);
  return out.length > 0 ? out : [t];
}

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

/** Intentional editorial break before the founders’ names; wording unchanged. */
function coFounderBridgeLines(line: string): { line1: string; line2: string } | null {
  const t = line.replace(/\u00a0/g, ' ').trim();
  const i = t.search(/\s+Amy\s+/i);
  if (i === -1) return null;
  const line1 = t.slice(0, i).trimEnd();
  const line2 = t.slice(i).trim();
  if (!line1 || !line2) return null;
  return { line1, line2 };
}

/**
 * About page — “Our Story” founder partnership narrative.
 *
 * Intro → editorial hero image → bridge line → two-column founders → closing thesis.
 * Copy flows from `aboutUsContent.json` via props.
 */
export function AboutOurStory({
  narrativeIntro,
  coFounderLine,
  amyBio,
  klayBio,
  closingStatement,
}: AboutOurStoryProps) {
  const { eyebrow, headline } = parseIntroHeading(narrativeIntro);
  const bridgeLines = coFounderBridgeLines(coFounderLine);

  return (
    <section
      className="border-b border-line/20 py-20 sm:py-24 lg:py-32"
      aria-labelledby="our-story-heading"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        {/* Section intro */}
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

        {/* Emotional hero — Amy parade; warm, lightly rounded, minimal chrome */}
        <figure className="relative mt-12 aspect-[16/11] w-full overflow-hidden rounded-[1rem] sm:mt-14 sm:aspect-[16/10] lg:mt-16 lg:rounded-[1.125rem]">
          <Image
            src={AMY_PARADE}
            alt="Community caregiving parade — Amy representing senior care in the neighborhood"
            fill
            sizes="(min-width: 1280px) 72rem, 100vw"
            className="object-cover object-[50%_42%]"
          />
        </figure>

        {/* Bridge + founders: shared editorial width; left-aligned bridge ties into columns */}
        <div className="mx-auto mt-20 w-full max-w-[72rem] sm:mt-24 lg:mt-[5.5rem]">
          <p className="max-w-[22rem] text-left text-[1.1875rem] font-medium leading-[1.42] tracking-[-0.012em] text-navy/92 sm:max-w-[26rem] sm:text-[1.3125rem] sm:leading-[1.4] lg:max-w-[28rem] lg:text-[1.375rem] lg:leading-[1.38]">
            {bridgeLines ? (
              <>
                <span className="block">{bridgeLines.line1}</span>
                <span className="mt-[0.35em] block">{bridgeLines.line2}</span>
              </>
            ) : (
              coFounderLine
            )}
          </p>

          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div className="grid gap-16 sm:gap-20 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28">
              <div className="min-w-0">
                <div className="overflow-hidden rounded-[1.25rem] bg-mist/40">
                  <Image
                    src={AMY_HEADSHOT}
                    alt="Amy Huddleston, professional portrait"
                    width={1024}
                    height={683}
                    sizes="(min-width: 1024px) min(36vw, 28rem), 88vw"
                    className="aspect-[4/3] w-full object-cover object-[50%_18%]"
                  />
                </div>
                <h3 className="mt-8 text-[1.125rem] font-semibold tracking-tight text-navy sm:text-[1.1875rem]">
                  Amy Huddleston
                </h3>
                <div className="mt-6 space-y-6 text-[1.02rem] font-normal leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                  {readableParagraphs(amyBio).map((chunk, i) => (
                    <p key={`amy-${i}`}>{chunk}</p>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <div className="overflow-hidden rounded-[1.25rem] bg-mist/40">
                  <Image
                    src={KLAY_HEADSHOT}
                    alt="Klay Huddleston, professional portrait"
                    width={316}
                    height={474}
                    sizes="(min-width: 1024px) min(36vw, 28rem), 88vw"
                    className="aspect-[4/3] w-full object-cover object-[50%_12%]"
                  />
                </div>
                <h3 className="mt-8 text-[1.125rem] font-semibold tracking-tight text-navy sm:text-[1.1875rem]">
                  Klay Huddleston
                </h3>
                <div className="mt-6 space-y-6 text-[1.02rem] font-normal leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                  {readableParagraphs(klayBio).map((chunk, i) => (
                    <p key={`klay-${i}`}>{chunk}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing thesis — visible hairlines + solid coral eyebrow (faint /opacity on coral can read as navy on cream) */}
        <div className="mx-auto mt-32 w-full pb-10 sm:mt-40 sm:pb-12 lg:mt-48 lg:pb-14 xl:mt-56">
          <div
            className="mx-auto h-[2px] max-w-[11rem] rounded-full bg-gradient-to-r from-transparent via-navy/28 to-transparent sm:max-w-[13rem] sm:via-navy/32"
            aria-hidden
          />
          <p className="mt-8 text-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-coral sm:mt-9 sm:text-[0.8125rem] sm:tracking-[0.22em]">
            The Wellderly difference
          </p>
          <div
            className="mx-auto mt-7 h-[2px] w-[5rem] rounded-full bg-gradient-to-r from-transparent via-coral to-transparent sm:mt-8 sm:w-[6rem] sm:opacity-90"
            aria-hidden
          />
          <p className="mx-auto mt-8 max-w-[47.5rem] text-center text-pretty text-[1.125rem] font-normal leading-[1.92] text-navy/82 sm:mt-9 sm:max-w-[50rem] sm:text-[1.1875rem] sm:leading-[1.94] lg:mt-10 lg:max-w-[55rem] lg:text-[1.2rem] lg:leading-[1.95]">
            {closingStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
