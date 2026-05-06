import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { primaryButtonClass } from '@/components/ui/button';
import {
  type AboutCopy,
  splitPromiseValue,
} from '@/lib/about-copy';

const AMY_PARADE = '/assets/marketing/Amy.jpg';
const HERO_IMAGE = '/assets/marketing/handholding.jpg';
const AMY_HEADSHOT = '/assets/marketing/Amy_faceshot_wewebsize.jpg';
const KLAY_HEADSHOT = '/assets/marketing/klay-huddleston.jpg';

/** Max-width + horizontal padding aligned with `SectionContainer` (as `div` to avoid nested `<section>`). */
function ContentWidth({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={[
        'mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

/** Split long founder copy into paragraphs at sentence boundaries only (no wording changes). */
function readableParagraphs(text: string): string[] {
  const t = text.replace(/\u00a0/g, ' ').trim();
  if (!t) return [];
  const parts = t.split(/(?<=[.!?])\s+(?=[“"A-Z0-9])/);
  const out = parts.map((p) => p.trim()).filter(Boolean);
  return out.length > 0 ? out : [t];
}

type AboutMarketingViewProps = {
  copy: AboutCopy;
};

export function AboutMarketingView({ copy }: AboutMarketingViewProps) {
  const narrativeIntro = copy.story[0] ?? '';
  const narrativeBody = copy.story.slice(1, 5);
  const amyBio = copy.story[2] ?? '';
  const klayBio = copy.story[3] ?? '';

  return (
    <main className="overflow-x-hidden bg-canvas">
      {/* 1. Hero — true full-bleed image (viewport width + underlay behind nav) */}
      <section
        className="relative isolate left-1/2 min-h-[min(100svh,56rem)] w-screen max-w-[100vw] -translate-x-1/2 border-b border-line/25"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Two people holding hands in a gentle, supportive gesture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#09162A]/88 via-[#09162A]/45 to-[#09162A]/20 sm:from-[#09162A]/82 sm:via-[#09162A]/35 sm:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#09162A]/55 to-transparent sm:from-[#09162A]/40 md:w-[70%]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex min-h-[min(100svh,56rem)] flex-col">
          <div className="relative z-20 shrink-0">
            <SiteHeader variant="marketing" />
          </div>
          <div className="relative z-10 flex flex-1 flex-col justify-end pb-14 pt-4 sm:pb-16 lg:pb-20">
            <ContentWidth>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/70">
                About Wellderly
              </p>
              <h1
                id="about-hero-heading"
                className="mt-4 max-w-[16ch] text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.35rem] lg:text-[2.65rem]"
              >
                {copy.hero.title}
              </h1>
              <p className="mt-5 max-w-[36ch] text-[0.9375rem] font-normal leading-[1.58] text-white/88 sm:text-[1rem]">
                {copy.hero.subtitle}
              </p>
              <div className="mt-8 max-w-[40rem] space-y-5 text-[0.9375rem] font-normal leading-[1.78] text-white/90 sm:text-[1.03rem] sm:leading-[1.76]">
                {copy.hero.supporting.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/assessment/relationship"
                  className={[
                    primaryButtonClass,
                    'min-h-[3rem] px-7 text-[0.9375rem] shadow-none',
                  ].join(' ')}
                >
                  {copy.hero.cta}
                </Link>
              </div>
            </ContentWidth>
          </div>
        </div>
      </section>

      {/* 2. Narrative / why this exists — single story column, no cards */}
      <section
        className="border-b border-line/20 py-20 sm:py-24 lg:py-28"
        aria-labelledby="narrative-heading"
      >
        <ContentWidth>
            <div className="mx-auto max-w-[62ch]">
              <h2
                id="narrative-heading"
                className="text-[1.35rem] font-semibold leading-[1.22] tracking-tight text-navy sm:text-[1.5rem] lg:text-[1.65rem]"
              >
                {narrativeIntro}
              </h2>
              <div className="mt-10 space-y-7 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem] sm:leading-[1.82]">
                {narrativeBody.map((paragraph, i) => (
                  <div key={`narrative-${i}`} className="space-y-7">
                    {readableParagraphs(paragraph).map((chunk, j) => (
                      <p key={`narrative-${i}-${j}`}>{chunk}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
        </ContentWidth>
      </section>

      {/* Vision — editorial continuation (founder copy only) */}
      <section
        className="border-b border-line/20 bg-sand/80 py-20 sm:py-24 lg:py-28"
        aria-labelledby="vision-heading"
      >
        <ContentWidth>
            <div className="mx-auto max-w-[62ch]">
              <h2
                id="vision-heading"
                className="text-[1.35rem] font-semibold leading-[1.22] tracking-tight text-navy sm:text-[1.5rem]"
              >
                {copy.vision[0]}
              </h2>
              <div className="mt-10 space-y-7 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.vision.slice(1).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
        </ContentWidth>
      </section>

      {/* 3. What we’re building / approach — vertical blocks, typography hierarchy only */}
      <section
        className="border-b border-line/20 py-20 sm:py-24 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <ContentWidth className="space-y-20 lg:space-y-24">
            <div className="mx-auto max-w-[62ch]">
              <h2
                id="approach-heading"
                className="text-[1.35rem] font-semibold leading-[1.22] tracking-tight text-navy sm:text-[1.5rem]"
              >
                {copy.approach.heading}
              </h2>
              <p className="mt-8 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.approach.intro}
              </p>
            </div>

            <div className="mx-auto max-w-[62ch] space-y-6">
              <h3 className="text-[1.05rem] font-semibold tracking-tight text-navy sm:text-[1.125rem]">
                {copy.approach.categoriesHeading}
              </h3>
              <ul className="space-y-3.5 text-[0.98rem] leading-[1.72] text-navy/78 sm:text-[1.02rem]">
                {copy.approach.categories.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pt-4 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.approach.closing}
              </p>
            </div>

            <div className="mx-auto max-w-[62ch] space-y-8 border-t border-line/25 pt-16 lg:pt-20">
              <h3 className="text-[1.35rem] font-semibold leading-[1.22] tracking-tight text-navy sm:text-[1.5rem]">
                {copy.how.heading}
              </h3>
              <p className="text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.how.intro}
              </p>
              <ol className="list-decimal space-y-4 pl-5 text-[0.98rem] leading-[1.75] text-navy/78 marker:text-navy/45 sm:text-[1.02rem]">
                {copy.how.steps.map((step) => (
                  <li key={step} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
              <ul className="space-y-2.5 pl-1 text-[0.96rem] leading-[1.72] text-navy/75 sm:text-[1rem]">
                {copy.how.subBullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.how.closing}
              </p>
            </div>
        </ContentWidth>
      </section>

      {/* 4. Amy — trust anchor, image + text, no card chrome */}
      <section
        className="border-b border-line/20 bg-sand/80 py-20 sm:py-24 lg:py-28"
        aria-labelledby="amy-heading"
      >
        <ContentWidth>
            <div className="mx-auto grid max-w-[72rem] gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
              <div className="order-1 lg:order-1">
                <div className="overflow-hidden rounded-[1.25rem] bg-mist/40">
                  <Image
                    src={AMY_HEADSHOT}
                    alt="Amy Huddleston, professional portrait"
                    width={1024}
                    height={683}
                    sizes="(min-width: 1024px) 320px, 88vw"
                    className="aspect-[4/3] w-full object-cover object-[50%_18%]"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-navy/38">
                  Amy
                </p>
                <h2
                  id="amy-heading"
                  className="sr-only"
                >
                  Amy
                </h2>
                <div className="mt-6 space-y-7 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                  {readableParagraphs(amyBio).map((chunk, i) => (
                    <p key={`amy-${i}`}>{chunk}</p>
                  ))}
                </div>
              </div>
            </div>
        </ContentWidth>
      </section>

      {/* 5. Lived experience — wide emotional visual (story copy lives in the narrative above) */}
      <section
        className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-b border-line/20"
        aria-labelledby="lived-experience-heading"
      >
        <h2 id="lived-experience-heading" className="sr-only">
          Caregiving context
        </h2>
        <figure className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9] lg:min-h-[min(20rem,56vw)]">
          <Image
            src={AMY_PARADE}
            alt="Community caregiving parade — Amy representing senior care in the neighborhood"
            fill
            className="object-cover object-[50%_40%]"
            sizes="100vw"
          />
        </figure>
      </section>

      {/* 6. Klay — mirrors Amy; grounded, not spotlight */}
      <section
        className="border-b border-line/20 py-20 sm:py-24 lg:py-28"
        aria-labelledby="klay-heading"
      >
        <ContentWidth>
            <div className="mx-auto grid max-w-[72rem] gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
              <div className="order-1">
                <div className="overflow-hidden rounded-[1.25rem] bg-mist/40">
                  <Image
                    src={KLAY_HEADSHOT}
                    alt="Klay Huddleston, portrait"
                    width={316}
                    height={474}
                    sizes="(min-width: 1024px) 280px, 88vw"
                    className="aspect-[3/4] w-full max-w-[20rem] object-cover object-top lg:max-w-none"
                  />
                </div>
              </div>
              <div className="order-2">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-navy/38">
                  Klay
                </p>
                <h2 id="klay-heading" className="sr-only">
                  Klay
                </h2>
                <div className="mt-6 space-y-7 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                  {readableParagraphs(klayBio).map((chunk, i) => (
                    <p key={`klay-${i}`}>{chunk}</p>
                  ))}
                </div>
              </div>
            </div>
        </ContentWidth>
      </section>

      {/* 7. Values / beliefs + challenge — minimal grid, no heavy cards */}
      <section
        className="border-b border-line/20 bg-sand/80 py-20 sm:py-24 lg:py-28"
        aria-labelledby="promise-heading"
      >
        <ContentWidth className="space-y-16 lg:space-y-20">
            <div className="mx-auto max-w-[62ch]">
              <h2
                id="promise-heading"
                className="text-[1.35rem] font-semibold leading-[1.22] tracking-tight text-navy sm:text-[1.5rem]"
              >
                {copy.promise.heading}
              </h2>
            </div>

            <div className="mx-auto grid max-w-[72rem] gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
              {copy.promise.values.map((line) => {
                const { title, body } = splitPromiseValue(line);
                return (
                  <div key={line} className="max-w-[36ch]">
                    {title ? (
                      <p className="text-[0.9375rem] font-semibold tracking-tight text-navy">
                        {title}
                      </p>
                    ) : null}
                    <p
                      className={[
                        'text-[0.98rem] leading-[1.75] text-navy/76 sm:text-[1.02rem]',
                        title ? 'mt-3' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto max-w-[62ch]">
              <p className="text-[1.05rem] leading-[1.82] text-navy/82 sm:text-[1.1rem]">
                {copy.promise.becauseLine}
              </p>
            </div>

            <div className="mx-auto max-w-[62ch] border-t border-line/25 pt-16 lg:pt-20">
              <h3 className="text-[1.25rem] font-semibold leading-[1.25] tracking-tight text-navy sm:text-[1.35rem]">
                {copy.challenge.heading}
              </h3>
              <ul className="mt-8 space-y-3.5 text-[0.98rem] leading-[1.72] text-navy/76 sm:text-[1.02rem]">
                {copy.challenge.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-8 text-[1.02rem] leading-[1.85] text-navy/80 sm:text-[1.0625rem]">
                {copy.challenge.closing}
              </p>
            </div>
        </ContentWidth>
      </section>

      {/* 8. Closing CTA — soft, supportive; existing button patterns */}
      <section
        className="bg-mist/50 py-20 sm:py-24 lg:py-28"
        aria-labelledby="about-cta-heading"
      >
        <ContentWidth>
            <div className="mx-auto flex max-w-[48ch] flex-col items-start text-left">
              <h2
                id="about-cta-heading"
                className="text-[1.35rem] font-semibold leading-[1.3] tracking-tight text-navy sm:text-[1.45rem]"
              >
                {copy.finalCta.heading}
              </h2>
              <Link
                href="/assessment/relationship"
                className={[
                  primaryButtonClass,
                  'mt-10 min-h-[2.875rem] px-7 text-[0.9375rem] shadow-none',
                ].join(' ')}
              >
                {copy.finalCta.button}
              </Link>
              <p className="mt-12 text-[0.8125rem] leading-[1.65] text-navy/48">
                {copy.finalCta.copyright}
              </p>
            </div>
        </ContentWidth>
      </section>
    </main>
  );
}
