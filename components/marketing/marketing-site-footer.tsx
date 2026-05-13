import Link from 'next/link';
import { primaryButtonClass } from '@/components/ui/button';

/**
 * Shared marketing footer — navy band, logo, legal, and primary CTA.
 * Used on public marketing surfaces (home, about, terms, etc.).
 */
export function MarketingSiteFooter() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#09162A] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      role="contentinfo"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/shapes/curved%20Lines.png"
          alt=""
          className="absolute -right-24 -bottom-20 w-[24rem] max-w-none opacity-[0.08] mix-blend-screen sm:-right-20 sm:w-[30rem] lg:-right-14 lg:-bottom-24 lg:w-[38rem]"
        />
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
            <nav className="mt-6 text-sm text-white/70" aria-label="Legal">
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
  );
}
