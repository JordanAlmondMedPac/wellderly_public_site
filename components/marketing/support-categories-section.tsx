'use client';

import { useEffect, useRef, useState } from 'react';
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
    image: '/images/illustrations/home_settings.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
    image: '/images/illustrations/enriching_care.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
    image: '/images/illustrations/wellness_and_social.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
    image: '/images/illustrations/transportation.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
    image: '/images/illustrations/life_easing_tools.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
    image: '/images/illustrations/legal_and_financial.png',
    imageAlt:
      'Two women sitting together on a sunlit porch, sharing a calm moment at home',
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
            'relative mt-5 overflow-hidden rounded-shell border border-[rgba(9,22,42,0.05)] bg-[#F7F2EB] px-5 py-7 transition-all duration-200 ease-out sm:mt-4 sm:px-10 sm:py-10 lg:px-12 lg:py-12',
            panelVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
          ].join(' ')}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-[#D88C86]/55"
            aria-hidden="true"
          />

          {/* Embedded illustration — desktop only (drawn into the card, fades into the warm surface) */}
          {openCategory.image ? (
            <div
              key={`bg-${openCategory.id}`}
              aria-hidden="true"
              className={[
                'pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] transition-opacity duration-300 ease-out lg:block',
                panelVisible ? 'opacity-95' : 'opacity-0',
              ].join(' ')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={openCategory.image}
                alt=""
                className="block h-full w-full object-cover [filter:saturate(0.92)] [mask-image:linear-gradient(to_right,transparent_0%,black_45%)]"
              />
            </div>
          ) : null}

          {/* Text content — sits on top of the illustration layer */}
          <div className="relative z-10">
            {/* Full-bleed illustration — mobile + tablet only, fades into the card surface */}
            {openCategory.image ? (
              <div
                key={`m-${openCategory.id}`}
                className={[
                  'relative -mx-5 -mt-7 mb-2 overflow-hidden transition-all duration-300 ease-out sm:-mx-10 sm:-mt-10 sm:mb-3 lg:hidden',
                  panelVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-1 opacity-0',
                ].join(' ')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={openCategory.image}
                  alt={openCategory.imageAlt ?? ''}
                  className="block h-[220px] w-full object-cover object-center [filter:saturate(0.95)] sm:h-[260px]"
                />
                {/* Eyebrow badge — overlays the image top-left */}
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/60 bg-white/95 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#B45152] shadow-[0_4px_12px_-8px_rgba(9,22,42,0.35)] backdrop-blur-sm sm:left-5 sm:top-5 sm:text-[0.75rem] sm:tracking-[0.16em]">
                  Selected focus
                </span>
                {/* Bottom fade into the card surface */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F2EB] via-[#F7F2EB]/85 to-transparent sm:h-32"
                />
              </div>
            ) : null}

            <div
              className={openCategory.image ? 'lg:max-w-[30rem]' : ''}
            >
              <p
                className={[
                  'text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-navy/44',
                  openCategory.image ? 'hidden lg:block' : '',
                ].join(' ')}
              >
                Selected focus
              </p>
              <h3
                className={[
                  'text-[1.0625rem] font-semibold leading-[1.34] text-[#09162A] sm:text-[1.3125rem]',
                  openCategory.image
                    ? 'mt-0 sm:mt-1 lg:mt-3.5'
                    : 'mt-3 sm:mt-3.5',
                ].join(' ')}
              >
                {openCategory.title}
              </h3>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-[1.72] text-[rgba(9,22,42,0.82)] sm:mt-3.5 sm:text-base sm:leading-[1.76]">
                {openCategory.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:gap-3">
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
                    <span className="text-[0.9375rem] leading-[1.6] text-[rgba(9,22,42,0.84)] sm:text-base sm:leading-[1.62]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 max-w-prose text-[0.75rem] leading-[1.68] text-navy/60 sm:mt-8 sm:text-[0.8125rem] sm:leading-[1.72]">
                We tailor recommendations to local availability, your timeline, and the support your family can sustain.
              </p>
            </div>
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
