/**
 * About page — "The Challenge" immersive section.
 *
 * Dark, editorial treatment: centered intro, four stat panels in one row on
 * large screens (connected narrative band), muted coral and warm grain over
 * Wellderly navy. Human-centered tone — not dashboard metrics.
 *
 * Body copy uses explicit `rgba(247,246,244,…)` (design sand #f7f6f4) instead of
 * `text-sand/…`: Tailwind opacity on CSS-variable colors is implemented with
 * `color-mix(…, transparent)` in OKLab, which pulls warm cream toward a cool,
 * muted blue-gray — especially on dark navy backgrounds.
 */

import type { ComponentType, SVGProps } from 'react';
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  HeartIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const GRAIN_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#g)" opacity="0.55"/></svg>`,
);

type OutlineIcon = ComponentType<SVGProps<SVGSVGElement>>;

const CHALLENGE_CARDS: readonly {
  stat: string;
  rest: string;
  Icon: OutlineIcon;
}[] = [
  {
    stat: '76 million',
    rest: 'Baby Boomers are aging, straining every resource for older adults.',
    Icon: UserGroupIcon,
  },
  {
    stat: '11,000+',
    rest: 'Boomers turn 65 every single day, with the peak hitting in 2028.',
    Icon: CalendarDaysIcon,
  },
  {
    stat: '44%',
    rest: 'of family caregivers report serious emotional strain from fragmented, overwhelming care planning.',
    Icon: HeartIcon,
  },
  {
    stat: '$25 billion',
    rest: 'lost in productivity each year by Millennial and Gen X “sandwich generation” caregivers trying to juggle kids, careers, and aging parents.',
    Icon: BriefcaseIcon,
  },
];

const ICON_CLASS =
  'h-[1.375rem] w-[1.375rem] shrink-0 text-[rgba(241,137,137,0.42)] sm:h-6 sm:w-6 sm:text-[rgba(241,137,137,0.38)]';

export function AboutTheChallenge() {
  return (
    <section
      className="relative overflow-hidden border-b border-[rgba(241,137,137,0.08)] py-20 sm:py-24 lg:py-28"
      aria-labelledby="challenge-heading"
    >
      {/* Layered depth: warm-shifted navy, soft vignette, whisper of coral */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#0c1a30_0%,#09162a_42%,#0a182c_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,rgba(241,137,137,0.055),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_108%,rgba(0,0,0,0.32),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_60%_at_50%_40%,rgba(58,69,85,0.28),transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(247,246,244,0.025),transparent_65%)]"
        aria-hidden
      />
      {/* Warm paper grain — very low contrast */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.045] sm:opacity-[0.038]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${GRAIN_SVG}")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[rgba(241,137,137,0.78)]">
            <span className="text-[rgba(241,137,137,0.48)]" aria-hidden>
              —{' '}
            </span>
            The Challenge
            <span className="text-[rgba(241,137,137,0.48)]" aria-hidden>
              {' '}
              —
            </span>
          </p>
          <h2
            id="challenge-heading"
            className="mt-5 text-balance text-[2rem] font-semibold leading-[1.12] tracking-tight text-sand sm:mt-6 sm:text-[2.25rem] sm:leading-[1.1] lg:text-[2.5rem] lg:leading-[1.08]"
          >
            A Grey Tsunami Is Building
          </h2>
          <div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[rgba(241,137,137,0.34)] to-transparent sm:mt-7"
            aria-hidden
          />
          <p className="mx-auto mt-6 max-w-[40rem] text-[1.0625rem] font-normal leading-[1.82] text-[rgba(247,246,244,0.96)] sm:mt-7 sm:text-[1.125rem] sm:leading-[1.8]">
            America is approaching a caregiving crisis at a scale most families
            are unprepared for.
          </p>
        </header>

        {/*
          One editorial band on lg+: shared frame and soft dividers (societal
          narrative, not a metric grid). Stacked with dividers below lg.
        */}
        <ul
          className={[
            'mx-auto mt-12 w-full max-w-[72rem] list-none sm:mt-14',
            'flex flex-col divide-y divide-[rgba(247,246,244,0.09)]',
            'rounded-[1rem] border border-[rgba(247,246,244,0.09)] bg-[rgba(247,246,244,0.055)]',
            'shadow-[inset_0_1px_0_0_rgba(241,137,137,0.05)]',
            'lg:mt-16 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-[rgba(247,246,244,0.09)]',
            'lg:rounded-[1.0625rem] lg:border-[rgba(247,246,244,0.1)] lg:bg-[rgba(247,246,244,0.06)]',
          ].join(' ')}
        >
          {CHALLENGE_CARDS.map(({ stat, rest, Icon }) => (
            <li key={stat} className="min-w-0">
              <article className="h-full px-5 py-4 sm:px-6 sm:py-5 lg:px-6 lg:py-5">
                <Icon className={ICON_CLASS} aria-hidden />
                <p className="mt-2 text-[1.28rem] font-semibold leading-[1.15] tracking-[-0.02em] text-sand sm:text-[1.32rem] lg:text-[1.26rem] xl:text-[1.34rem]">
                  {stat}
                </p>
                <p className="mt-2 text-[0.9125rem] font-normal leading-[1.76] text-[rgba(247,246,244,0.88)] sm:text-[0.93rem] sm:leading-[1.74] lg:text-[0.9rem] lg:leading-[1.72] xl:text-[0.925rem] xl:leading-[1.73]">
                  {rest}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-16 max-w-[34rem] text-center text-[1.44rem] font-normal leading-[1.62] tracking-[-0.01em] text-[rgba(247,246,244,0.97)] sm:mt-20 sm:text-[1.52rem] sm:leading-[1.6] lg:mt-24 lg:max-w-[36rem] lg:text-[1.62rem] lg:leading-[1.58]">
          The system is broken. Families are exhausted. We’re here to fix it.
        </p>
      </div>
    </section>
  );
}
