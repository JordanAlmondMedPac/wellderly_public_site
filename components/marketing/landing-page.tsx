import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import {
  HeroReveal,
} from '@/components/ui/motion-primitives';
import { primaryButtonClass } from '@/components/ui/button';
import { FeatureCardsSection } from '@/components/marketing/feature-cards-section';
import { WhyFeelsDifferentSection } from '@/components/marketing/why-feels-different-section';
import { VoicesSection } from '@/components/marketing/voices-section';
import { SupportCategoriesSection } from '@/components/marketing/support-categories-section';
import { OutcomesSection } from '@/components/marketing/outcomes-section';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';

const FATHER_SON = '/assets/marketing/paperwork.png';
const HERO_BG_DESKTOP = '/assets/marketing/sunset.png';
const HERO_BG_MOBILE =
  '/assets/marketing/sunset.png';

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
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="inline-block w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 [&_img]:h-8 [&_img]:max-h-8 [&_img]:w-auto [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-95"
              >
                <BrandLogo alt="Wellderly home" size="header" />
              </Link>
              <nav
                className="text-[0.6875rem] font-medium text-white/85"
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
                  <Link
                    href="/assessment/relationship"
                    className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white/60"
                  >
                    Start Assessment
                  </Link>
                </div>
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
            <div className="mx-auto flex w-full max-w-content flex-1 flex-col px-5 pb-24 pt-14 md:flex-none md:px-6 md:pb-32 md:pt-32 lg:px-10 lg:pb-36 lg:pt-36">
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
                    <p className="mx-auto mt-7 max-w-[22rem] text-balance text-center text-[0.8125rem] font-medium leading-[1.62] tracking-[0.01em] text-white/76 sm:mt-8 sm:max-w-[26rem] md:mx-0 md:mt-8 md:max-w-[36rem] md:text-left md:text-[0.875rem] md:leading-[1.65]">
                      Empowered by expertise. Activated with heart. Always
                      unbiased.
                    </p>
                  </HeroReveal>
                  <HeroReveal delay={0.16}>
                    <p className="mx-auto mt-7 max-w-[22.5rem] text-balance text-center text-[0.875rem] font-normal leading-[1.78] text-white/86 sm:mt-8 sm:max-w-[26rem] md:mx-0 md:mt-8 md:max-w-[36rem] md:text-left md:text-[1.0625rem] md:leading-[1.76]">
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
                        <p className="mx-auto max-w-[21rem] text-center text-[0.75rem] font-medium leading-[1.75] text-white/70 sm:max-w-none sm:text-[0.8125rem] md:mx-0 md:text-left">
                          Takes 3–5 minutes • Private &amp; secure • No credit
                          card required
                        </p>
                      </div>
                    </div>
                  </HeroReveal>
                  <HeroReveal delay={0.26}>
                    <div className="mx-auto mt-11 max-w-[22.5rem] space-y-4 text-center text-[0.75rem] font-normal leading-[1.75] text-white/68 sm:mt-14 sm:max-w-[26rem] sm:text-[0.8125rem] md:mx-0 md:mt-14 md:max-w-[36rem] md:text-left md:leading-[1.72]">
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

        <FeatureCardsSection />

        <WhyFeelsDifferentSection imageSrc={FATHER_SON} />

        <HowItWorksSection />

        <SupportCategoriesSection />

        {/* <OutcomesSection /> */}

        <VoicesSection />

      </main>

      <footer
        className="relative isolate overflow-hidden border-t border-white/10 bg-[#09162A] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        role="contentinfo"
        aria-labelledby="final-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          {/* Bottom-right line motif: subtle, tone-on-tone brand texture */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shapes/curved%20Lines.png"
            alt=""
            className="absolute -right-24 -bottom-20 w-[24rem] max-w-none opacity-[0.08] mix-blend-screen sm:-right-20 sm:w-[30rem] lg:-right-14 lg:-bottom-24 lg:w-[38rem]"
          />
          {/* Top-left rounded motif: very low-opacity atmospheric lift */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shapes/Rounded%20Shapes.png"
            alt=""
            className="absolute -left-20 -top-20 w-[14rem] max-w-none opacity-[0.05] mix-blend-screen sm:w-[18rem] lg:-left-16 lg:-top-24 lg:w-[22rem]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-content">
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
              <nav
                className="mt-6 text-sm text-white/70"
                aria-label="Legal"
              >
                <Link
                  href="/terms"
                  className="underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/60 focus:outline-none focus-visible:text-white focus-visible:decoration-white focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09162A]"
                >
                  Terms &amp; Conditions
                </Link>
              </nav>
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
