/**
 * About page — “How Wellderly Works”
 *
 * Emotional progression on the same warm paper surface as the About hero;
 * white panels read as calm editorial steps (not tinted cards).
 */

import type { CSSProperties } from 'react';
import {
  CheckIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

/** Same warm paper treatment as `about-hero.tsx` heading area. */
const paperTextureStyle: CSSProperties = {
  backgroundImage: [
    'radial-gradient(circle at 18% 22%, rgba(241, 137, 137, 0.06), transparent 55%)',
    'radial-gradient(circle at 82% 14%, rgba(9, 22, 42, 0.035), transparent 60%)',
    'radial-gradient(circle at 55% 92%, rgba(241, 137, 137, 0.04), transparent 65%)',
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.05  0 0 0 0 0.08  0 0 0 0.045 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
  ].join(', '),
  backgroundSize: '100% 100%, 100% 100%, 100% 100%, 220px 220px',
};

const HEADLINE = 'How Wellderly Works';

const INTRO =
  'AI-driven freemium model designed for busy families.';

const STEP1_TITLE = 'Free Light Plan';

const STEP1_BODY =
  'Answer a few quick questions and instantly see a preview of your loved one’s personalized roadmap.';

const STEP2_TITLE = 'Unlock the Full Plan';

const STEP2_BENEFITS = [
  'Comprehensive local recommendations',
  'Human Care Advisor support',
  'Family sharing',
  'Secure document storage',
  'Service integrations',
  'Living, updateable plans',
] as const;

const STEP2_SUPPORT_LINE =
  'Guided by real humans who understand your community.';

const CLOSING =
  'We remove the guesswork so you can move forward with clarity and confidence.';

const ICON_SM =
  'mx-auto mb-2.5 h-5 w-5 sm:mb-3 sm:h-5 sm:w-5';

const ICON_LG =
  'mx-auto mb-3 h-7 w-7 sm:mb-4 sm:h-8 sm:w-8';

function StageArrow() {
  return (
    <div className="flex justify-center py-5 sm:py-6 lg:py-7" aria-hidden>
      <div className="flex flex-col items-center gap-1">
        <div className="h-5 w-px bg-gradient-to-b from-transparent via-[rgba(241,137,137,0.35)] to-[rgba(241,137,137,0.55)]" />
        <div className="rounded-full bg-[rgba(241,137,137,0.12)] p-2 ring-1 ring-[rgba(241,137,137,0.18)]">
          <ChevronDownIcon
            className="h-6 w-6 text-[rgba(241,137,137,0.72)] sm:h-[1.45rem] sm:w-[1.45rem]"
            strokeWidth={1.65}
          />
        </div>
        <div className="h-5 w-px bg-gradient-to-b from-[rgba(241,137,137,0.45)] via-[rgba(241,137,137,0.28)] to-transparent" />
      </div>
    </div>
  );
}

export function AboutHowWellderlyWorks() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-line/25 bg-sand py-20 sm:py-24 lg:py-28"
      aria-labelledby="how-wellderly-works-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={paperTextureStyle}
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-[40rem] text-center">
          <h2
            id="how-wellderly-works-heading"
            className="text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-[1.85rem] lg:text-[2rem]"
          >
            {HEADLINE}
          </h2>
          <p className="mt-4 text-[1.0625rem] font-normal leading-[1.82] text-navy/80 sm:mt-5 sm:text-[1.125rem] sm:leading-[1.8]">
            {INTRO}
          </p>
        </header>

        <div className="mx-auto mt-10 flex flex-col items-center sm:mt-12 lg:mt-14">
          {/* Stage 1 — small, exploratory, low visual weight */}
          <article className="w-full max-w-[28rem] rounded-[1.125rem] border border-line/35 bg-white px-6 py-6 text-center shadow-soft sm:rounded-[1.2rem] sm:px-7 sm:py-7">
            <DocumentTextIcon
              className={`${ICON_SM} text-navy/38`}
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="text-[1.15rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.25rem]">
              {STEP1_TITLE}
            </h3>
            <p className="mx-auto mt-3 max-w-[34ch] text-pretty text-[0.98rem] font-normal leading-[1.82] text-navy/74 sm:text-[1.02rem] sm:leading-[1.85]">
              {STEP1_BODY}
            </p>
          </article>

          <StageArrow />

          {/* Stage 2 — focal: white card, slightly stronger frame + shadow */}
          <div className="relative w-full max-w-[40rem]">
            <article className="relative overflow-hidden rounded-[1.35rem] border border-line/40 bg-white shadow-soft sm:rounded-[1.5rem]">
              <div className="relative z-10 px-8 py-10 text-center sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <LifebuoyIcon
                  className={`${ICON_LG} text-[rgba(241,137,137,0.72)]`}
                  strokeWidth={1.25}
                  aria-hidden
                />
                <h3 className="text-[1.45rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-[1.6rem] lg:text-[1.75rem]">
                  {STEP2_TITLE}
                </h3>

                <ul className="mx-auto mt-8 max-w-[32rem] list-none space-y-3.5 text-left sm:mt-9 sm:space-y-4">
                  {STEP2_BENEFITS.map((line) => (
                    <li key={line} className="flex gap-3 sm:gap-3.5">
                      <CheckIcon
                        className="mt-0.5 h-5 w-5 shrink-0 text-[rgba(241,137,137,0.72)] sm:h-[1.125rem] sm:w-[1.125rem]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span className="text-[1.02rem] font-normal leading-[1.55] text-navy/82 sm:text-[1.0625rem] sm:leading-[1.52]">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mx-auto mt-9 max-w-[32rem] text-[0.9375rem] font-normal leading-[1.65] text-navy/58 sm:mt-10 sm:text-[0.96875rem] sm:leading-[1.68]">
                  {STEP2_SUPPORT_LINE}
                </p>
              </div>
            </article>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[40rem] text-center text-pretty text-[1.0625rem] font-normal leading-[1.9] text-navy/74 sm:mt-14 sm:text-[1.1rem] sm:leading-[1.92] lg:mt-16 lg:text-[1.125rem] lg:leading-[1.94]">
          {CLOSING}
        </p>
      </div>
    </section>
  );
}
