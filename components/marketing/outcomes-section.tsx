import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { primaryButtonClass } from '@/components/ui/button';

const WALK_AWAY_BULLETS = [
  'Tailored recommendations across all key care categories',
  'Local resources and vetted provider options',
  'Realistic cost estimates and funding guidance',
  'Clear, prioritized next steps with human-supported activation',
  'Secure, updatable plan you can share with family and providers',
] as const;

export function OutcomesSection() {
  return (
    <section
      id="what-you-get"
      className="relative isolate overflow-hidden border-b border-line/40 bg-[#F9F8F6] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="get-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/shapes/Rounded%20Shapes.png"
          alt=""
          className="absolute -bottom-24 -right-24 w-[14rem] max-w-none opacity-[0.03] sm:-bottom-28 sm:-right-28 sm:w-[18rem] sm:opacity-[0.04] lg:-bottom-32 lg:-right-24 lg:w-[26rem] lg:opacity-[0.05]"
        />
      </div>

      <ScrollReveal className="relative z-10 mx-auto max-w-content">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
              Outcomes
            </p>
            <h2
              id="get-heading"
              className="mt-4 text-[1.3125rem] font-semibold leading-[1.22] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.75rem]"
            >
              What You Walk Away With
            </h2>
            <p className="mt-5 max-w-prose text-[0.9375rem] leading-[1.74] text-navy/72 sm:mt-6 sm:text-base sm:leading-[1.76]">
              A comprehensive, unbiased care plan you can actually use — not
              another pile of bookmarks.
            </p>

            <ul className="mt-9 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6">
              {WALK_AWAY_BULLETS.map((item) => (
                <li key={item} className="flex gap-3.5 sm:gap-4">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/icons/Tick-2.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5 object-contain opacity-90"
                    />
                  </span>
                  <span className="min-w-0 text-[0.9375rem] leading-[1.68] text-navy/82 sm:text-base sm:leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 sm:mt-12">
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
          </div>

          <div className="relative lg:pl-2">
            <div className="relative overflow-hidden rounded-shell border border-line/40 bg-white p-6 shadow-[0_28px_60px_-40px_rgba(9,22,42,0.22)] sm:p-8 lg:p-9">
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
              >
                <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] animate-[outcomes-drift_18s_ease-in-out_infinite] bg-[radial-gradient(55%_55%_at_28%_30%,rgba(237,107,108,0.08),transparent_62%),radial-gradient(55%_55%_at_72%_72%,rgba(166,184,204,0.16),transparent_60%),radial-gradient(45%_45%_at_60%_20%,rgba(248,241,233,0.7),transparent_65%)] motion-reduce:animate-none" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-2.5 w-2.5 rounded-full bg-[#D88C86]/70"
                      aria-hidden="true"
                    />
                    <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/45">
                      Care plan preview
                    </span>
                  </div>
                  <span className="rounded-full border border-line/55 bg-white/70 px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy/45">
                    Coming soon
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div
                    className="h-3 w-2/3 rounded-full bg-navy/18"
                    aria-hidden="true"
                  />
                  <div
                    className="h-2.5 w-full rounded-full bg-navy/12"
                    aria-hidden="true"
                  />
                  <div
                    className="h-2.5 w-[86%] rounded-full bg-navy/12"
                    aria-hidden="true"
                  />
                  <div
                    className="h-2.5 w-[72%] rounded-full bg-navy/12"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-card border border-line/45 bg-white/80 p-3.5 shadow-[0_10px_26px_-22px_rgba(9,22,42,0.22)]">
                    <div
                      className="h-2 w-12 rounded-full bg-[#D88C86]/45"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-3 h-2.5 w-full rounded-full bg-navy/12"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-1.5 h-2.5 w-3/4 rounded-full bg-navy/12"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="rounded-card border border-line/45 bg-white/80 p-3.5 shadow-[0_10px_26px_-22px_rgba(9,22,42,0.22)]">
                    <div
                      className="h-2 w-14 rounded-full bg-[#D88C86]/45"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-3 h-2.5 w-full rounded-full bg-navy/12"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-1.5 h-2.5 w-2/3 rounded-full bg-navy/12"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-card border border-line/40 bg-white/60 p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-navy/25"
                      aria-hidden="true"
                    />
                    <div
                      className="h-2 w-20 rounded-full bg-navy/18"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <div
                      className="h-2 w-full rounded-full bg-navy/10"
                      aria-hidden="true"
                    />
                    <div
                      className="h-2 w-[88%] rounded-full bg-navy/10"
                      aria-hidden="true"
                    />
                    <div
                      className="h-2 w-[72%] rounded-full bg-navy/10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes outcomes-drift {
          0%, 100% { transform: translate3d(-2%, -1%, 0) scale(1); }
          50% { transform: translate3d(2%, 1%, 0) scale(1.03); }
        }
      `}</style>
    </section>
  );
}
