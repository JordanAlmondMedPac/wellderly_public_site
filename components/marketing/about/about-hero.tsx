import Image from 'next/image';
import { SiteHeader } from '@/components/layout/site-header';
import type { AboutCopy } from '@/lib/about-copy';

const CAREGIVING_MOMENT_IMAGE = '/images/aboutus_hero_image_1.jpeg';
const FAMILY_PLANNING_MOMENT_IMAGE = '/images/about_us_img_2.png';

/**
 * Subtle warm paper texture for editorial hero background.
 * Three very low-opacity radial gradients layered over the warm cream `bg-sand`
 * — reads as paper grain, not pattern. Stays under 6% intensity at any point.
 */
const paperTextureStyle: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(circle at 18% 22%, rgba(241, 137, 137, 0.06), transparent 55%)',
    'radial-gradient(circle at 82% 14%, rgba(9, 22, 42, 0.035), transparent 60%)',
    'radial-gradient(circle at 55% 92%, rgba(241, 137, 137, 0.04), transparent 65%)',
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.05  0 0 0 0 0.08  0 0 0 0.045 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
  ].join(', '),
  backgroundSize: '100% 100%, 100% 100%, 100% 100%, 220px 220px',
};

/**
 * Editorial wrap for the hero headline.
 * Renders the same text with intentional line breaks at `lg+` only — below `lg`
 * the spans are inline so the copy wraps naturally. If the source string ever
 * changes, falls back to a single plain string (no broken layout).
 */
function renderEditorialHeadline(text: string) {
  const knownHeadline = 'Reimagining care planning for older adults.';
  if (text.trim() !== knownHeadline) {
    return text;
  }
  return (
    <>
      <span className="lg:block">Reimagining</span>{' '}
      <span className="lg:block">care planning</span>{' '}
      <span className="lg:block">for older adults.</span>
    </>
  );
}

type AboutHeroProps = {
  hero: AboutCopy['hero'];
};

/**
 * About page hero — calm editorial layout on warm paper texture.
 *
 * Composition:
 *   - Left column: large caregiving moment placeholder (visual anchor, ~32rem on lg+)
 *   - Right column: eyebrow → headline → supporting line → body
 *   - Lower placeholder: tucked under the text column with subtle overlap into the left image
 *
 * Owns its own `SiteHeader` so the marketing nav sits visually inside the hero surface.
 */
export function AboutHero({ hero }: AboutHeroProps) {
  const headline = hero.supporting[0] ?? hero.title;
  const supportingLine = hero.subtitle;
  const body = hero.supporting[1] ?? '';

  return (
    <section
      className="relative isolate left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-b border-line/25 bg-sand"
      aria-labelledby="about-hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={paperTextureStyle}
      />

      <div className="relative z-10 flex flex-col">
        <div className="relative z-20 shrink-0">
          <SiteHeader variant="marketing" />
        </div>

        <div className="relative z-10 pb-16 pt-6 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-10">
              {/* Left — caregiving moment image, the visual anchor of the composition */}
              <div className="order-2 lg:order-1 lg:col-start-1 lg:col-span-7 lg:row-start-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-line/40 bg-mist/35 shadow-soft sm:aspect-[5/6] lg:aspect-auto lg:h-[32rem]">
                  <Image
                    src={CAREGIVING_MOMENT_IMAGE}
                    alt="A caregiver in scrubs sitting attentively with an older woman in a warm, home-like living room"
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right top — editorial text block */}
              <div className="order-1 lg:order-2 lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:pt-4">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-navy/55">
                  About Wellderly
                </p>
                <h1
                  id="about-hero-heading"
                  className="mt-5 text-[2.125rem] font-semibold leading-[1.06] tracking-tight text-navy text-balance sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.04]"
                >
                  {renderEditorialHeadline(headline)}
                </h1>
                {supportingLine ? (
                  <p className="mt-5 text-[0.95rem] font-medium tracking-[0.01em] text-navy/60 sm:text-[1rem]">
                    {supportingLine}
                  </p>
                ) : null}
                {body ? (
                  <p className="mt-7 max-w-[34ch] text-[1.0625rem] font-normal leading-[1.78] text-navy/78 sm:text-[1.125rem]">
                    {body}
                  </p>
                ) : null}
              </div>

              {/* Right bottom — second image, tucked under the text column with subtle overlap into the left image. Hidden on mobile to keep the phone composition light. */}
              <div className="order-3 hidden sm:block lg:col-start-7 lg:col-span-5 lg:row-start-2 lg:-mt-12 lg:-translate-x-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] border border-line/40 bg-warm-100 shadow-soft">
                  <Image
                    src={FAMILY_PLANNING_MOMENT_IMAGE}
                    alt="A daughter and her older mother reviewing care planning paperwork together at a sunlit dining table"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
