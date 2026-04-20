'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/motion-primitives';

type Category = {
  id: string;
  title: string;
  descriptor: string;
  description: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
};

const CATEGORIES: Category[] = [
  {
    id: 'home-setting',
    title: 'Home Setting',
    descriptor: 'Explore the right living environment',
    description:
      'Find a living arrangement that supports safety, dignity, and long-term stability as needs change.',
    bullets: [
      'Aging in place planning for safer routines at home',
      'Assisted living comparisons based on care needs',
      'Memory care options for cognitive support',
      'Living setup recommendations that fit family priorities',
    ],
    image: '/assets/marketing/assisted_living.png',
    imageAlt:
      'Elderly woman being supported with medication by a caregiver in a calm environment',
  },
  {
    id: 'enriching-care',
    title: 'Enriching Care',
    descriptor: 'Support for care, recovery, and daily needs',
    description:
      'Map care pathways that improve quality of life while reducing day-to-day strain on family caregivers.',
    bullets: [
      'In-home care support for daily assistance',
      'Adult day care options for structure and respite',
      'Palliative and hospice pathways when appropriate',
      'Care intensity matched to the current stage of need',
    ],
  },
  {
    id: 'wellness-social',
    title: 'Wellness & Social',
    descriptor: 'Stay active, engaged, and connected',
    description:
      'Protect emotional and physical wellbeing through meaningful activity, social rhythm, and everyday connection.',
    bullets: [
      'Community activities and clubs that reduce isolation',
      'SilverSneakers and movement programs by ability',
      'Nutrition and exercise support for daily energy',
      'Simple social routines that strengthen mood and resilience',
    ],
  },
  {
    id: 'transportation',
    title: 'Transportation',
    descriptor: 'Reliable ways to get where you need to go',
    description:
      'Build a reliable transportation plan so appointments, errands, and social activities stay realistic and stress-free.',
    bullets: [
      'Doctor visit transportation coordination',
      'Grocery and pharmacy ride options',
      'Community shuttle and local mobility services',
      'Driving transition support with backup travel plans',
    ],
  },
  {
    id: 'life-easing-tools',
    title: 'Life Easing Tools',
    descriptor: 'Simple solutions that make daily life safer',
    description:
      'Use practical home supports and devices that reduce risk, simplify routines, and increase daily confidence.',
    bullets: [
      'Grab bars and home safety adaptations',
      'Chair lifts and mobility support equipment',
      'Smart pill dispensers and medication reminders',
      'Fall-monitoring tools that support independence',
    ],
  },
  {
    id: 'legal-financial',
    title: 'Legal & Financial',
    descriptor: 'Planning tools for important decisions',
    description:
      'Navigate legal and financial planning with clarity so key family decisions are made proactively, not reactively.',
    bullets: [
      'Living will and DNR planning conversations',
      'Power of attorney documentation support',
      'Medicaid and VA benefit pathway guidance',
      'Care cost planning for near- and long-term needs',
    ],
  },
];

export function SupportCategoriesSection() {
  const [openId, setOpenId] = useState<string>(CATEGORIES[0].id);
  const [panelVisible, setPanelVisible] = useState(true);
  const isFirstRender = useRef(true);
  const openCategory =
    CATEGORIES.find((item) => item.id === openId) ?? CATEGORIES[0];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPanelVisible(false);
    const rafId = requestAnimationFrame(() => {
      setPanelVisible(true);
    });

    if (typeof window !== 'undefined') {
      const activeTab = document.getElementById(`support-tab-${openId}`);
      activeTab?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }

    return () => cancelAnimationFrame(rafId);
  }, [openId]);

  const handleArrowNavigation = (idx: number, key: string) => {
    const horizontalKeys = ['ArrowRight', 'ArrowLeft'];
    const verticalKeys = ['ArrowDown', 'ArrowUp'];
    if (!horizontalKeys.includes(key) && !verticalKeys.includes(key)) {
      return;
    }

    let nextIndex = idx;
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      nextIndex = (idx + 1) % CATEGORIES.length;
    }
    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      nextIndex = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
    }

    const nextCategory = CATEGORIES[nextIndex];
    setOpenId(nextCategory.id);
    const nextTab = document.getElementById(`support-tab-${nextCategory.id}`);
    nextTab?.focus();
  };

  return (
    <section
      className="border-b border-line/35 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      aria-labelledby="support-categories-heading"
    >
      <ScrollReveal className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/42 sm:text-[0.6875rem]">
            Start with what matters most
          </p>
          <h2
            id="support-categories-heading"
            className="mt-4 text-[1.3125rem] font-semibold leading-[1.22] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.75rem]"
          >
            What kind of support are you looking for?
          </h2>
          <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.72] text-navy/74 sm:mt-5 sm:text-base sm:leading-[1.74]">
            Start with what matters most — your plan will adapt around it.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Support categories"
          className={[
            '-mx-4 mt-10 flex flex-nowrap items-center gap-2.5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            'sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-2 sm:overflow-visible sm:rounded-shell sm:border sm:border-[rgba(9,22,42,0.1)] sm:bg-[#F7F6F4]/70 sm:p-3 sm:pb-3',
            'lg:grid-cols-3',
          ].join(' ')}
        >
          {CATEGORIES.map((category, idx) => {
            const isOpen = category.id === openCategory.id;
            return (
              <button
                key={category.id}
                type="button"
                id={`support-tab-${category.id}`}
                role="tab"
                aria-selected={isOpen}
                tabIndex={isOpen ? 0 : -1}
                aria-controls={`support-panel-${category.id}`}
                onClick={() => setOpenId(category.id)}
                onKeyDown={(event) => handleArrowNavigation(idx, event.key)}
                className={[
                  'group relative inline-flex w-auto shrink-0 grow-0 basis-auto items-center whitespace-nowrap rounded-full border px-4 py-2 text-[0.875rem] font-medium transition-all duration-200 ease-out',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A5B]/55 focus-visible:ring-offset-2',
                  'active:scale-[0.995]',
                  'sm:block sm:h-full sm:min-h-[132px] sm:w-auto sm:shrink sm:grow sm:whitespace-normal sm:rounded-card sm:px-5 sm:py-5 sm:text-left sm:text-[1rem] sm:font-normal',
                  isOpen
                    ? 'border-[rgba(176,128,124,0.32)] bg-[#FBF3F0] text-[#8C4041] sm:text-[#09162A]'
                    : 'border-[rgba(9,22,42,0.12)] bg-white text-navy/80 sm:text-[#09162A] md:hover:-translate-y-0.5 md:hover:border-[rgba(9,22,42,0.24)] md:hover:shadow-[0_14px_26px_-24px_rgba(9,22,42,0.45)]',
                ].join(' ')}
              >
                <span
                  className={[
                    'hidden sm:mb-2 sm:inline-flex sm:items-center sm:rounded-full sm:border sm:px-2.5 sm:py-1 sm:text-[0.625rem] sm:font-semibold sm:uppercase sm:tracking-[0.14em] sm:transition-colors sm:duration-200',
                    isOpen
                      ? 'sm:border-[rgba(176,128,124,0.28)] sm:bg-white/70 sm:text-[#8C4041]'
                      : 'sm:border-[rgba(9,22,42,0.12)] sm:bg-[#F9F8F6] sm:text-navy/55',
                  ].join(' ')}
                >
                  Focus area
                </span>
                <p className="leading-snug sm:text-[1rem] sm:font-semibold sm:text-[#09162A]">
                  {category.title}
                </p>
                <p className="hidden sm:mt-1.5 sm:block sm:text-[0.875rem] sm:leading-[1.55] sm:text-[rgba(9,22,42,0.78)]">
                  {category.descriptor}
                </p>
              </button>
            );
          })}
        </div>

        <div
          id={`support-panel-${openCategory.id}`}
          role="tabpanel"
          aria-labelledby={`support-tab-${openCategory.id}`}
          className={[
            'relative mt-5 overflow-hidden rounded-shell border border-[rgba(9,22,42,0.09)] bg-[#F7F2EB] p-5 transition-all duration-200 ease-out sm:mt-4 sm:p-8 lg:p-10',
            panelVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
          ].join(' ')}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[#D88C86]/80"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className={openCategory.image ? 'order-last lg:order-first' : ''}>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy/44">
                Selected focus
              </p>
              <h3 className="mt-2.5 text-[1.0625rem] font-semibold leading-[1.34] text-[#09162A] sm:mt-3 sm:text-[1.3125rem]">
                {openCategory.title}
              </h3>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.7] text-[rgba(9,22,42,0.8)] sm:mt-4 sm:text-base sm:leading-[1.74]">
                {openCategory.description}
              </p>
              {openCategory.image ? (
                <>
                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:gap-3">
                    {openCategory.bullets.map((item, i) => (
                      <li
                        key={item}
                        className={[
                          'flex items-start gap-3',
                          i >= 3 ? 'hidden sm:flex' : '',
                        ].join(' ')}
                      >
                        <span
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D88C86]"
                          aria-hidden="true"
                        />
                        <span className="text-[0.9375rem] leading-[1.6] text-[rgba(9,22,42,0.82)] sm:text-base sm:leading-[1.62]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              <Link
                href="/assessment/relationship"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(200,90,91,0.32)] bg-[rgba(200,90,91,0.1)] px-5 py-2.5 text-[0.875rem] font-semibold text-[#B45152] shadow-[0_10px_24px_-22px_rgba(184,81,82,0.6)] transition hover:-translate-y-0.5 hover:border-[rgba(200,90,91,0.45)] hover:bg-[rgba(200,90,91,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A5B]/55 focus-visible:ring-offset-2 sm:mt-8 sm:px-6 sm:py-3 sm:text-[0.9375rem]"
              >
                See how this fits into your plan
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {openCategory.image ? (
              <div
                key={openCategory.id}
                className={[
                  'order-first mx-auto w-full max-w-[280px] transition-all duration-300 ease-out lg:order-last lg:mx-0 lg:self-start',
                  panelVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-1 opacity-0',
                ].join(' ')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={openCategory.image}
                  alt={openCategory.imageAlt ?? ''}
                  className="block h-full w-full translate-y-1 rounded-2xl object-cover opacity-95 [filter:sepia(0.08)_saturate(0.9)]"
                />
              </div>
            ) : (
              <div>
                <ul className="grid grid-cols-1 gap-2.5 sm:gap-3.5">
                  {openCategory.bullets.map((item, i) => (
                    <li
                      key={item}
                      className={[
                        'flex items-start gap-3',
                        i >= 3 ? 'hidden sm:flex' : '',
                      ].join(' ')}
                    >
                      <span
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D88C86]"
                        aria-hidden="true"
                      />
                      <span className="text-[0.9375rem] leading-[1.6] text-[rgba(9,22,42,0.82)] sm:text-base sm:leading-[1.62]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-prose text-[0.75rem] leading-[1.68] text-navy/55 sm:mt-7 sm:text-[0.8125rem] sm:leading-[1.72]">
                  We tailor recommendations to local availability, your timeline, and the support your family can sustain.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-7 max-w-2xl text-[0.8125rem] leading-[1.7] text-navy/58 sm:mt-9 sm:text-[0.9375rem] sm:leading-[1.72]">
          Every plan is activated with human support — local Care Advisors who
          know your community and guide you every step of the way.
        </p>
      </ScrollReveal>
    </section>
  );
}
