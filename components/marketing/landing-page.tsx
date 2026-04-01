import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import {
  HeroReveal,
  HoverCard,
  ScrollReveal,
} from '@/components/ui/motion-primitives';
import { primaryButtonClass } from '@/components/ui/button';
import { SectionContainer } from '@/components/ui/section';

const SCREENS = '/assets/illustrations/wellderly-screens.png';
const FATHER_SON = '/assets/marketing/paperwork.png';
const HERO_BG = '/assets/marketing/sunset.png';

const ICON = (name: string) => `/assets/icons/${name}`;

export function LandingPage() {
  return (
    <>
      <main>
        <section
          id="assessment"
          className="relative isolate min-h-screen overflow-hidden border-b border-line/35"
          aria-labelledby="hero-heading"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_BG}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/40 via-black/14 to-transparent sm:from-black/34 sm:via-black/10"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 top-0 z-30 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-10">
            <div className="mx-auto max-w-content rounded-2xl border border-line/55 bg-sand shadow-[0_10px_24px_-22px_rgba(9,22,42,0.2)]">
              <div className="flex min-h-[4.5rem] items-center justify-between gap-10 px-6 sm:min-h-[4.875rem] sm:px-8 lg:min-h-[5rem] lg:px-10">
                <Link
                  href="/"
                  className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
                >
                  <BrandLogo alt="Wellderly home" size="header" />
                </Link>
                <div className="ml-4 flex items-center gap-9 sm:ml-6 sm:gap-10 lg:ml-10 lg:gap-12">
                  <nav className="hidden items-center gap-7 text-sm font-medium text-navy/80 md:flex lg:gap-8">
                    <Link href="#how-it-works" className="hover:text-navy">
                      How it works
                    </Link>
                    <Link href="#what-you-get" className="hover:text-navy">
                      What you get
                    </Link>
                    <Link href="#stories" className="hover:text-navy">
                      Stories
                    </Link>
                  </nav>
                  <Link
                    href="/assessment/relationship"
                    className={[
                      primaryButtonClass,
                      'min-h-10 px-4 py-2 text-sm shadow-none sm:min-h-11 sm:px-5 lg:ml-3',
                    ].join(' ')}
                  >
                    Start assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex min-h-screen items-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-36">
            <div className="mx-auto w-full max-w-content">
              <div className="max-w-[42rem] text-center text-white sm:text-left">
                <HeroReveal delay={0}>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                    Senior care guidance
                  </p>
                </HeroReveal>
                <HeroReveal delay={0.08}>
                  <h1
                    id="hero-heading"
                    className="mt-4 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:mt-5 sm:text-[2.25rem] sm:leading-[1.1] lg:text-[2.875rem] lg:leading-[1.08]"
                  >
                    Helping you care for the ones who took care of you.
                  </h1>
                </HeroReveal>
                <HeroReveal delay={0.16}>
                  <p className="mt-7 text-[1.0625rem] leading-[1.68] text-white/90 sm:max-w-[34rem]">
                    Answer a short guided assessment to get practical priorities,
                    cost context, and clear next steps you can act on with your
                    family.
                  </p>
                </HeroReveal>
                <HeroReveal delay={0.24}>
                  <div className="mt-10 flex flex-col items-center gap-5 sm:mt-11 sm:items-start">
                    <Link
                      href="/assessment/relationship"
                      className={[
                        primaryButtonClass,
                        'w-full max-w-xs justify-center px-7',
                      ].join(' ')}
                    >
                      Begin your assessment
                    </Link>
                    <p className="text-sm font-medium leading-relaxed text-white/80">
                      Free · ~90 seconds · No card
                    </p>
                  </div>
                </HeroReveal>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-line/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="benefits-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <div className="max-w-xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Outcomes
              </p>
              <h2
                id="benefits-heading"
                className="mt-2 text-[1.25rem] font-semibold tracking-tight text-navy sm:text-[1.375rem] lg:text-2xl"
              >
                After your first session
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-navy/72 sm:text-base sm:leading-[1.62]">
                Concrete outputs you can act on — not a generic checklist.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3 lg:gap-6">
              {[
                {
                  icon: 'Receipt.svg',
                  title: 'Care plan preview',
                  body: 'Needs grouped by category — home, health, mobility, support.',
                },
                {
                  icon: 'Users.svg',
                  title: 'Fits your role',
                  body: 'Guidance tied to how you’re connected to the person you support.',
                },
                {
                  icon: 'Percent-2.svg',
                  title: 'Cost & resource context',
                  body: 'Framing for honest conversations — not false precision.',
                },
              ].map((item) => (
                <HoverCard key={item.title}>
                  <article className="flex flex-col rounded-card border border-line/35 bg-sand/45 p-5 transition-shadow duration-200 sm:p-6">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-control bg-white/90 ring-1 ring-line/35"
                      aria-hidden="true"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ICON(item.icon)}
                        alt=""
                        width={22}
                        height={22}
                        className="h-[1.375rem] w-[1.375rem] object-contain"
                      />
                    </div>
                    <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-navy sm:mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.62] text-navy/70">
                      {item.body}
                    </p>
                  </article>
                </HoverCard>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <SectionContainer className="border-b border-line/35 bg-canvas py-16 sm:py-20 lg:py-24" aria-labelledby="pain-heading">
          <ScrollReveal className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-xl lg:order-1">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Why this exists
              </p>
              <h2
                id="pain-heading"
                className="mt-2 text-[1.25rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.375rem] lg:text-[1.75rem]"
              >
                Caring for a parent is hard enough without having to figure
                everything out alone.
              </h2>
              <p className="mt-5 text-[0.9375rem] leading-[1.66] text-navy/82 sm:mt-6 sm:text-base sm:leading-[1.64]">
                Health, home, money, logistics — it stacks fast. Wellderly helps
                you see what to tackle first. It doesn’t replace your clinician;
                it helps you show up prepared.
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
                  <figcaption className="border-t border-line/45 bg-white px-4 py-3.5 sm:px-5 sm:py-4">
                    <p className="text-[0.8125rem] font-semibold text-navy/78">
                      This is who the plan is for.
                    </p>
                    <p className="mt-1.5 text-[0.75rem] leading-[1.55] text-navy/50 sm:text-[0.8125rem]">
                      Clarity so you can be present for what won’t wait.
                    </p>
                  </figcaption>
                </div>
              </HoverCard>
            </figure>
          </ScrollReveal>
        </SectionContainer>

        <section
          id="how-it-works"
          className="border-b border-line/40 bg-sand px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="how-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <div className="max-w-xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Product
              </p>
              <h2
                id="how-heading"
                className="mt-2 text-[1.25rem] font-semibold tracking-tight text-navy sm:text-[1.375rem] lg:text-[1.75rem]"
              >
                How Wellderly works
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-navy/74 sm:text-base sm:leading-[1.62]">
                The flow you see here continues in the live assessment — one
                system, no handoff.
              </p>
            </div>
            <p className="mt-4 max-w-xl text-[0.8125rem] leading-[1.55] text-navy/48 lg:mt-3">
              Guided questions and category preview — same patterns as the
              assessment flow.
            </p>

            <div className="mt-12 flex flex-col gap-12 lg:mt-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
              <div className="w-full lg:col-span-7">
                <HoverCard>
                  <div className="overflow-hidden rounded-[1.125rem] border border-line/35 bg-white p-2 transition-shadow duration-200 sm:rounded-shell sm:p-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SCREENS}
                      width={720}
                      height={440}
                      alt="Wellderly — guided questions and care categories in the app"
                      className="h-auto w-full rounded-[0.875rem] object-cover object-top sm:rounded-[1rem]"
                    />
                  </div>
                </HoverCard>
              </div>
              <div className="w-full lg:col-span-5">
                <ol className="space-y-6 sm:space-y-7">
                  {[
                    {
                      n: '1',
                      t: 'Answer guided questions',
                      d: 'Short, respectful prompts — identical structure to the assessment.',
                    },
                    {
                      n: '2',
                      t: 'See needs across categories',
                      d: 'Home, health, mobility, support — so gaps don’t stay invisible.',
                    },
                    {
                      n: '3',
                      t: 'Leave with a clearer plan',
                      d: 'Priorities you can revisit, share, and adjust as things change.',
                    },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-3 sm:gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-navy ring-1 ring-coral/20 sm:h-10 sm:w-10">
                        {step.n}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-navy">
                          {step.t}
                        </p>
                        <p className="mt-1.5 text-sm leading-[1.62] text-navy/65">
                          {step.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/assessment/relationship"
                  className={[
                    primaryButtonClass,
                    'mt-9 w-full min-h-12 justify-center sm:mt-11 lg:max-w-xs',
                  ].join(' ')}
                >
                  Start assessment
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section
          id="what-you-get"
          className="border-b border-line/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="get-heading"
        >
          <ScrollReveal className="mx-auto max-w-content">
            <div className="max-w-xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Deliverables
              </p>
              <h2
                id="get-heading"
                className="mt-2 text-[1.25rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.375rem] lg:text-2xl"
              >
                What you walk away with
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-navy/72 sm:mt-4 sm:text-base sm:leading-[1.62]">
                A structured snapshot you can use this week — with family or
                care providers — not a pile of bookmarks.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-5">
              {[
                'Personalized recommendations across care categories',
                'Home, health, mobility, and daily support in one view',
                'Cost and planning context for real conversations',
                'Actionable next steps to share or delegate',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist"
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
                  <span className="text-[0.9375rem] leading-[1.58] text-navy/82">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        <SectionContainer id="stories" className="border-b border-line/35 bg-canvas py-16 sm:py-20 lg:py-24" aria-labelledby="stories-heading">
          <ScrollReveal>
          <div className="max-w-xl">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
              Proof
            </p>
            <h2
              id="stories-heading"
              className="mt-2 text-[1.25rem] font-semibold tracking-tight text-navy sm:text-[1.375rem] lg:text-2xl"
            >
              From caregivers
            </h2>
            <p className="mt-3 text-sm leading-[1.62] text-navy/50">
              Early feedback — direct, not cherry-picked for ratings.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
            <HoverCard>
              <figure className="rounded-card border border-line/35 bg-white/90 p-5 transition-shadow duration-200 sm:p-6">
                <blockquote className="text-base font-normal leading-[1.62] text-navy/88 sm:text-[1.0625rem]">
                  <p>
                    “Wellderly helped me stop spiraling and finally understand what
                    to do first.”
                  </p>
                </blockquote>
                <figcaption className="mt-4 text-sm text-navy/45">
                  — Sarah, 52
                </figcaption>
              </figure>
            </HoverCard>
            <HoverCard>
              <figure className="rounded-card border border-line/35 bg-white/90 p-5 transition-shadow duration-200 sm:p-6">
                <blockquote className="text-base font-normal leading-[1.62] text-navy/88 sm:text-[1.0625rem]">
                  <p>
                    “Someone turned a messy problem into a plan I could follow.”
                  </p>
                </blockquote>
                <figcaption className="mt-4 text-sm text-navy/45">
                  — Mike, caring for his mom
                </figcaption>
              </figure>
            </HoverCard>
          </div>
          </ScrollReveal>
        </SectionContainer>

        <section
          className="border-t border-line/40 bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto max-w-lg px-1 text-center sm:px-0">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/42 sm:text-[0.6875rem]">
              Next step
            </p>
            <h2
              id="final-cta-heading"
              className="mt-2 text-[1.25rem] font-semibold leading-snug tracking-tight text-navy sm:mt-3 sm:text-[1.375rem] lg:text-2xl"
            >
              Ready for a clearer next step?
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-[1.65] text-navy/62 sm:text-base sm:leading-[1.62]">
              Open the assessment — same calm system you’ve been reading.
            </p>
            <Link
              href="/assessment/relationship"
              className={[
                primaryButtonClass,
                'mt-9 w-full min-h-12 justify-center px-8 sm:mt-10 sm:max-w-xs sm:self-center',
                'focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-mist',
              ].join(' ')}
            >
              Begin your assessment
            </Link>
          </div>
        </section>
      </main>

      <footer
        className="border-t border-line/50 bg-sand px-4 py-12 sm:px-6 sm:py-14 lg:px-10"
        role="contentinfo"
      >
        <div className="mx-auto flex max-w-content flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
            >
              <BrandLogo alt="Wellderly home" size="footer" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy/50">
              Practical support for families — not another endless to-do list.
            </p>
          </div>
          <nav className="text-sm" aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link
                  href="#"
                  className="font-medium text-navy/65 underline-offset-4 hover:text-navy hover:underline"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-navy/65 underline-offset-4 hover:text-navy hover:underline"
                >
                  Terms
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-navy/40">
              &copy; {new Date().getFullYear()} Wellderly
            </p>
          </nav>
        </div>
      </footer>
    </>
  );
}
