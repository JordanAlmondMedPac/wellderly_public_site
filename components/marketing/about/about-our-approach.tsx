/**
 * About page — "Our Approach" section.
 *
 * Light, spacious block after the dark Challenge section: centered intro,
 * icon-led category grid (Gerber-style structure, Wellderly palette). No heavy
 * cards — editorial rhythm, navy trust, coral accents only where noted.
 */

import type { ComponentType, SVGProps } from 'react';
import {
  DocumentTextIcon,
  HandRaisedIcon,
  HomeIcon,
  SparklesIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

type OutlineIcon = ComponentType<SVGProps<SVGSVGElement>>;

const PLAN_CATEGORIES: readonly {
  title: string;
  description: string;
  Icon: OutlineIcon;
}[] = [
  {
    title: 'Home Setting',
    description:
      'Best living options — independent, assisted, memory care, or stay at home.',
    Icon: HomeIcon,
  },
  {
    title: 'Enriching Care',
    description:
      'Home care, hospice, palliative care, and adult day programs.',
    Icon: HandRaisedIcon,
  },
  {
    title: 'Wellness & Social',
    description:
      'Activity support, Silver Sneakers, clubs, and read-to-kids programs.',
    Icon: SparklesIcon,
  },
  {
    title: 'Transportation',
    description: 'Doctor trips, hair appointments, and grocery runs.',
    Icon: TruckIcon,
  },
  {
    title: 'Life Easing Tools',
    description:
      'Safety solutions, chair lifts, grab bars, and pill dispensers.',
    Icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Legal & Financial',
    description:
      'Living wills, DNRs, power of attorney, and Medicaid planning.',
    Icon: DocumentTextIcon,
  },
];

const ICON_RING =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(9,22,42,0.08)] bg-sand shadow-[inset_0_0_0_1px_rgba(241,137,137,0.09)] sm:h-12 sm:w-12';

export function AboutOurApproach() {
  return (
    <section
      className="border-b border-line/20 bg-sand py-24 sm:py-28 lg:py-32"
      aria-labelledby="our-approach-heading"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[rgba(241,137,137,0.82)]">
            <span className="text-[rgba(241,137,137,0.45)]" aria-hidden>
              —{' '}
            </span>
            Our Approach
            <span className="text-[rgba(241,137,137,0.45)]" aria-hidden>
              {' '}
              —
            </span>
          </p>
          <h2
            id="our-approach-heading"
            className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.14] tracking-tight text-navy sm:mt-7 sm:text-[2.05rem] sm:leading-[1.12] lg:text-[2.2rem] lg:leading-[1.1]"
          >
            Tailored Care Planning Focused on What Matters
          </h2>
          <p className="mx-auto mt-8 max-w-[42rem] text-[1.0625rem] font-normal leading-[1.82] text-[rgba(9,22,42,0.82)] sm:mt-9 sm:text-[1.125rem] sm:leading-[1.8]">
            Powered by 20+ years of senior care expertise and AI innovation,
            Wellderly creates holistic plans that address all the key needs to
            thrive.
          </p>
          <p className="mx-auto mt-12 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-[rgba(9,22,42,0.45)] sm:mt-14">
            Plan Categories
          </p>
        </header>

        <ul className="mx-auto mt-12 grid max-w-[64rem] list-none grid-cols-1 gap-x-10 gap-y-12 sm:mt-14 sm:gap-y-14 md:grid-cols-2 md:gap-x-12 lg:mt-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-16">
          {PLAN_CATEGORIES.map(({ title, description, Icon }) => (
            <li key={title} className="min-w-0">
              <div className="flex gap-4 sm:gap-5">
                <div className={ICON_RING} aria-hidden>
                  <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-[1.05rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.0625rem]">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[0.98rem] font-normal leading-[1.72] text-[rgba(9,22,42,0.78)] sm:text-[1rem] sm:leading-[1.74]">
                    {description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-16 max-w-[46rem] text-center text-[1.0625rem] font-normal leading-[1.78] text-[rgba(9,22,42,0.84)] sm:mt-20 sm:text-[1.125rem] sm:leading-[1.76] lg:mt-24">
          Every plan is activated via human support — local Care Advisors who
          know your community and walk beside you.
        </p>
      </div>
    </section>
  );
}
