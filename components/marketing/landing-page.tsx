import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import {
  HeroReveal,
  HoverCard,
  ScrollReveal,
} from '@/components/ui/motion-primitives';
import { primaryButtonClass } from '@/components/ui/button';
import { SectionContainer } from '@/components/ui/section';
import { CarePlanPreview } from '@/components/marketing/care-plan-preview';

const FATHER_SON = '/assets/marketing/paperwork.png';
const HERO_BG_DESKTOP = '/assets/marketing/sunset.png';
const HERO_BG_MOBILE =
  '/assets/marketing/sunset.png';

const ICON = (name: string) => `/assets/icons/${name}`;

const THREE_CARDS = [
  {
    title: 'Clear Recommendations Across the Categories That Matter Most',
    body: 'Home Setting • Enriching Care • Wellness & Social • Transportation • Life Easing Tools • Legal & Financial',
  },
  {
    title: 'Private, Secure & Truly Unbiased',
    body: 'Your information stays private. We accept zero sponsorships or referral fees from providers.',
  },
  {
    title: 'Easy to Share with Your Care Team',
    body: 'Collaborate seamlessly with family, friends, and care providers.',
  },
] as const;

const WALK_AWAY_BULLETS = [
  'Tailored recommendations across all key care categories',
  'Local resources and vetted provider options',
  'Realistic cost estimates and funding guidance',
  'Clear, prioritized next steps with human-supported activation',
  'Secure, updatable plan you can share with family and providers',
] as const;

export function LandingPage() {
  return (
    <>
      <main>
        <section
          id="assessment"
          className="relative isolate min-h-[100dvh] overflow-hidden border-b border-line/35"
          aria-labelledby="hero-heading"
        >
          <picture className="pointer-events-none absolute inset-0 -z-20 block h-full w-full">
            <source media="(min-width: 768px)" srcSet={HERO_BG_DESKTOP} />
            <img
              src={HERO_BG_MOBILE}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[76%_58%] md:object-center"
            />
          </picture>
          {/* Mobile: stronger legibility; md+: softer horizontal falloff */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/62 via-black/38 to-black/28 md:bg-gradient-to-r md:from-black/40 md:via-black/14 md:to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/35 to-transparent md:hidden"
            aria-hidden="true"
          />

          {/* Mobile: logo + compact nav */}
          <header className="relative z-30 px-5 pt-6 md:hidden">
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="inline-block w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 [&_img]:h-8 [&_img]:max-h-8 [&_img]:w-auto [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-95"
              >
                <BrandLogo alt="Wellderly home" size="header" />
              </Link>
              <nav
                className="flex flex-col gap-5 text-[0.6875rem] font-medium text-white/85"
                aria-label="Page sections"
              >
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                  <Link href="#how-it-works" className="hover:text-white">
                    How it works
                  </Link>
                  <Link href="#what-you-get" className="hover:text-white">
                    What you get
                  </Link>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </div>
                <Link
                  href="/assessment/relationship"
                  className={[
                    primaryButtonClass,
                    'min-h-11 w-full px-4 py-2.5 text-center text-[0.8125rem] shadow-none',
                  ].join(' ')}
                >
                  Start Assessment
                </Link>
              </nav>
            </div>
          </header>

          {/* Desktop: full sand nav */}
          <div className="absolute inset-x-0 top-0 z-30 hidden px-6 pt-4 md:block lg:px-10">
            <div className="mx-auto max-w-content rounded-2xl border border-line/55 bg-sand shadow-[0_10px_24px_-22px_rgba(9,22,42,0.2)]">
              <div className="flex min-h-[4.5rem] items-center justify-between gap-10 px-6 sm:min-h-[4.875rem] sm:px-8 lg:min-h-[5rem] lg:px-10">
                <Link
                  href="/"
                  className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
                >
                  <BrandLogo alt="Wellderly home" size="header" />
                </Link>
                <div className="ml-4 flex items-center gap-9 sm:ml-6 sm:gap-10 lg:ml-10 lg:gap-12">
                  <nav
                    className="flex items-center gap-7 text-sm font-medium text-navy/80 lg:gap-8"
                    aria-label="Page sections"
                  >
                    <Link href="#how-it-works" className="hover:text-navy">
                      How it works
                    </Link>
                    <Link href="#what-you-get" className="hover:text-navy">
                      What you get
                    </Link>
                    <Link href="/about" className="hover:text-navy">
                      About Us
                    </Link>
                  </nav>
                  <Link
                    href="/assessment/relationship"
                    className={[
                      primaryButtonClass,
                      'min-h-10 px-4 py-2 text-sm shadow-none sm:min-h-11 sm:px-5 lg:ml-3',
                    ].join(' ')}
                  >
                    Start Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex min-h-[100dvh] flex-col md:min-h-screen md:items-center md:justify-center">
            <div className="mx-auto flex w-full max-w-content flex-1 flex-col px-5 pb-24 pt-10 md:flex-none md:px-6 md:pb-32 md:pt-32 lg:px-10 lg:pb-36 lg:pt-36">
              <div className="flex w-full max-w-[24rem] flex-1 flex-col text-white sm:max-w-[26rem] md:max-w-[40rem] md:text-left lg:max-w-[42rem]">
                <div className="flex flex-1 flex-col justify-start gap-0 md:block md:flex-none">
                  <HeroReveal delay={0.08}>
                    <h1
                      id="hero-heading"
                      className="mx-auto max-w-[21.5rem] text-balance text-center text-[1.4375rem] font-semibold leading-[1.14] tracking-[-0.02em] sm:max-w-[26rem] sm:text-[1.5625rem] sm:leading-[1.12] md:mx-0 md:max-w-[38rem] md:text-left md:text-[2.125rem] md:leading-[1.08] lg:max-w-[40rem] lg:text-[2.5rem] lg:leading-[1.06]"
                    >
                      You&apos;re caring for the older adult who matters to you
                      — while still juggling everything else.
                    </h1>
                  </HeroReveal>
                  <HeroReveal delay={0.12}>
                    <p className="mx-auto mt-7 max-w-[22rem] text-center text-[0.8125rem] font-medium leading-[1.62] tracking-[0.01em] text-white/76 sm:mt-8 sm:max-w-[26rem] md:mx-0 md:mt-8 md:max-w-[36rem] md:text-left md:text-[0.875rem] md:leading-[1.65]">
                      Empowered by expertise. Activated with heart. Always
                      unbiased.
                    </p>
                  </HeroReveal>
                  <HeroReveal delay={0.16}>
                    <p className="mx-auto mt-7 max-w-[23rem] text-center text-[0.875rem] font-normal leading-[1.78] text-white/86 sm:mt-8 sm:max-w-[26rem] md:mx-0 md:mt-8 md:max-w-[36rem] md:text-left md:text-[1.0625rem] md:leading-[1.76]">
                      Answer a short guided assessment and instantly receive a
                      clear preview of practical priorities and next steps you
                      can actually act on.
                    </p>
                  </HeroReveal>
                  <HeroReveal delay={0.22}>
                    <div className="mx-auto mt-12 w-full max-w-[22rem] sm:mt-14 sm:max-w-md md:mx-0 md:mt-16 md:max-w-lg">
                      <div className="flex flex-col gap-3.5">
                        <Link
                          href="/assessment/relationship"
                          className={[
                            primaryButtonClass,
                            'min-h-[3.375rem] w-full justify-center rounded-control px-5 py-3.5 text-[0.9375rem] leading-snug sm:px-7 sm:text-base',
                          ].join(' ')}
                        >
                          Start Free Preview
                        </Link>
                        <p className="text-center text-[0.75rem] font-medium leading-[1.7] text-white/70 sm:text-[0.8125rem] md:text-left">
                          Takes 3–5 minutes • Private &amp; secure • No credit
                          card required
                        </p>
                      </div>
                    </div>
                  </HeroReveal>
                  <HeroReveal delay={0.26}>
                    <div className="mx-auto mt-12 max-w-[23rem] space-y-4 text-center text-[0.75rem] font-normal leading-[1.75] text-white/68 sm:mt-14 sm:max-w-[26rem] sm:text-[0.8125rem] md:mx-0 md:mt-14 md:max-w-[36rem] md:text-left md:leading-[1.72]">
                      <p className="text-white/72">
                        Built with 25 Years of Real Expertise • Powered by AI
                      </p>
                      <p className="text-white/62">
                        Reducing your burden with a personalized, unbiased care
                        plan you can actually use — not a generic checklist.
                      </p>
                    </div>
                  </HeroReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-line/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="three-cards-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <h2
              id="three-cards-heading"
              className="sr-only"
            >
              What you can expect
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:gap-8">
              {THREE_CARDS.map((card) => (
                <HoverCard key={card.title}>
                  <article className="flex h-full flex-col rounded-card border border-line/40 bg-sand/40 p-6 transition-shadow duration-200 sm:p-7">
                    <h3 className="text-[0.9375rem] font-semibold leading-[1.35] text-navy sm:text-base sm:leading-[1.32]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[0.875rem] leading-[1.68] text-navy/72 sm:mt-5 sm:text-[0.9375rem] sm:leading-[1.65]">
                      {card.body}
                    </p>
                  </article>
                </HoverCard>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <SectionContainer className="border-b border-line/35 bg-canvas py-20 sm:py-24 lg:py-32" aria-labelledby="pain-heading">
          <ScrollReveal className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="max-w-xl lg:order-1">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Why this feels different
              </p>
              <h2
                id="pain-heading"
                className="mt-4 text-[1.3125rem] font-semibold leading-[1.22] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.8125rem] lg:leading-[1.18]"
              >
                Caregiving is hard enough without having to figure everything out
                alone.
              </h2>
              <p className="mt-7 max-w-prose text-[0.9375rem] leading-[1.74] text-navy/78 sm:mt-8 sm:text-base sm:leading-[1.76]">
                You&apos;re already juggling work, kids, and life — now you&apos;re
                also responsible for your parent&apos;s care. Wellderly gives you
                clarity, reduces overwhelm, and puts you back in control.
              </p>
            </div>
            <figure className="w-full min-w-0 lg:order-2">
              <HoverCard>
                <div className="overflow-hidden rounded-[1.125rem] border border-line/35 bg-white transition-shadow duration-200 sm:rounded-shell">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-mist/30 lg:aspect-[815/556]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={FATHER_SON}
                      alt="Father and son — family caregiving"
                      width={815}
                      height={556}
                      className="h-full w-full object-cover object-[center_28%]"
                    />
                  </div>
                  <figcaption className="border-t border-line/45 bg-white px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-[0.8125rem] font-semibold leading-[1.55] text-navy/78 sm:text-[0.875rem] sm:leading-[1.5]">
                      This is how the plan is built — 25 years of expertise + AI
                      = decisions you can trust.
                    </p>
                  </figcaption>
                </div>
              </HoverCard>
            </figure>
          </ScrollReveal>
        </SectionContainer>

        <section
          id="how-it-works"
          className="border-b border-line/40 bg-sand px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
          aria-labelledby="how-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <div className="max-w-2xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                How it works
              </p>
              <h2
                id="how-heading"
                className="mt-4 text-[1.3125rem] font-semibold leading-[1.2] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.8125rem]"
              >
                How Wellderly Works
              </h2>
            </div>

            <div className="mt-12 max-w-4xl sm:mt-14 lg:mt-16">
              <CarePlanPreview />
            </div>
          </ScrollReveal>
        </section>

        <section
          id="what-you-get"
          className="border-b border-line/40 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
          aria-labelledby="get-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <div className="max-w-2xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Outcomes
              </p>
              <h2
                id="get-heading"
                className="mt-4 text-[1.3125rem] font-semibold leading-[1.22] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.625rem]"
              >
                What You Walk Away With
              </h2>
              <p className="mt-5 max-w-prose text-[0.9375rem] leading-[1.74] text-navy/72 sm:mt-6 sm:text-base sm:leading-[1.76]">
                A comprehensive, unbiased care plan you can actually use — not
                another pile of bookmarks.
              </p>
            </div>
            <ul className="mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:mt-14 sm:gap-7 lg:max-w-4xl">
              {WALK_AWAY_BULLETS.map((item) => (
                <li key={item} className="flex gap-3.5 sm:gap-4">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ICON('Tick.svg')}
                      alt=""
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 object-contain opacity-90"
                    />
                  </span>
                  <span className="min-w-0 text-[0.9375rem] leading-[1.72] text-navy/82 sm:text-base sm:leading-[1.74]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-14 sm:mt-16">
              <Link
                href="/assessment/relationship"
                className={[
                  primaryButtonClass,
                  'inline-flex min-h-[3.25rem] w-full justify-center px-8 sm:w-auto sm:min-w-[12rem]',
                ].join(' ')}
              >
                Start Free Preview
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <SectionContainer id="stories" className="border-b border-line/35 bg-canvas py-20 sm:py-24 lg:py-32" aria-labelledby="stories-heading">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Voices
              </p>
              <h2
                id="stories-heading"
                className="mt-4 text-[1.3125rem] font-semibold leading-snug tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.625rem]"
              >
                From Caregivers
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
              <HoverCard>
                <figure className="rounded-card border border-line/35 bg-white/90 p-6 transition-shadow duration-200 sm:p-7">
                  <blockquote className="text-base font-normal leading-[1.72] text-navy/85 sm:text-[1.0625rem] sm:leading-[1.74]">
                    <p>
                      &ldquo;Wellderly helped me stop spiraling and finally
                      understand what to do first.&rdquo;
                    </p>
                    <footer className="mt-4 text-sm text-navy/45">
                      — Sarah, 52
                    </footer>
                  </blockquote>
                </figure>
              </HoverCard>
              <HoverCard>
                <figure className="rounded-card border border-line/35 bg-white/90 p-6 transition-shadow duration-200 sm:p-7">
                  <blockquote className="text-base font-normal leading-[1.72] text-navy/85 sm:text-[1.0625rem] sm:leading-[1.74]">
                    <p>
                      &ldquo;Someone turned a messy problem into a plan I could
                      follow.&rdquo;
                    </p>
                    <footer className="mt-4 text-sm text-navy/45">
                      — Mike, 48
                    </footer>
                  </blockquote>
                </figure>
              </HoverCard>
            </div>
          </ScrollReveal>
        </SectionContainer>

      </main>

      <footer
        className="border-t border-white/10 bg-[#09162A] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        role="contentinfo"
        aria-labelledby="final-cta-heading"
      >
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Link
                href="/"
                className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#09162A]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logo/Wellderly-horizontal-v1.png"
                  alt="Wellderly Wayfinder"
                  width={320}
                  height={64}
                  className="h-10 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-11 md:h-12 md:max-w-[min(100%,320px)]"
                />
              </Link>
              <p className="mt-8 text-sm leading-relaxed text-white/90 sm:mt-9">
                © 2026 Wellderly Wayfinder
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Proprietary &amp; Confidential • Secure &amp; Private
              </p>
            </div>

            <div className="flex w-full max-w-md flex-col items-center self-center text-center lg:max-w-lg lg:items-start lg:self-start lg:text-left">
              <h2
                id="final-cta-heading"
                className="text-[1.3125rem] font-semibold leading-[1.3] tracking-tight text-white sm:text-[1.4375rem] lg:text-[1.5rem]"
              >
                Ready to feel less alone in this?
              </h2>
              <Link
                href="/assessment/relationship"
                className={[
                  primaryButtonClass,
                  'mt-8 w-full min-h-[3.25rem] justify-center rounded-control px-8 py-3.5 text-[0.9375rem] leading-snug sm:mt-9 sm:max-w-xs sm:text-base',
                  'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#09162A]',
                ].join(' ')}
              >
                Start Free Preview
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
