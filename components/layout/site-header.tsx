import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import { primaryButtonClass } from '@/components/ui/button';

type SiteHeaderProps = {
  variant: 'marketing' | 'assessment';
};

/**
 * Shared top bar — landing and assessment use the same surface, radius, and logo.
 */
export function SiteHeader({ variant }: SiteHeaderProps) {
  return (
    <header className="relative z-20 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-10">
      <div className="mx-auto max-w-content rounded-2xl border border-line/75 bg-white/95 px-4 py-3 shadow-soft backdrop-blur-md sm:px-5 sm:py-3.5">
        {variant === 'marketing' ? (
          <nav
            className="flex min-h-[3rem] flex-wrap items-center justify-between gap-x-4 gap-y-3 sm:min-h-[3.25rem]"
            aria-label="Primary"
          >
            <Link
              href="/"
              className="flex shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
            >
              <BrandLogo alt="Wellderly" />
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-navy/78 sm:gap-x-6">
              <Link
                href="/#how-it-works"
                className="transition hover:text-navy focus:outline-none focus-visible:text-navy focus-visible:underline"
              >
                How it works
              </Link>
              <Link
                href="/#what-you-get"
                className="transition hover:text-navy focus:outline-none focus-visible:text-navy focus-visible:underline"
              >
                What you get
              </Link>
              <Link
                href="/about"
                className="transition hover:text-navy focus:outline-none focus-visible:text-navy focus-visible:underline"
              >
                About Us
              </Link>
              <Link
                href="/assessment/relationship"
                className={[
                  primaryButtonClass,
                  'min-h-11 px-6 py-2.5 text-[0.9375rem] shadow-card ring-1 ring-navy/[0.06]',
                ].join(' ')}
              >
                Start Assessment
              </Link>
            </div>
          </nav>
        ) : (
          <div className="flex min-h-[3rem] items-center justify-between gap-4 sm:min-h-[3.25rem]">
            <Link
              href="/"
              className="flex shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
            >
              <BrandLogo alt="Wellderly home" />
            </Link>
            <Link
              href="/"
              className={[
                'inline-flex min-h-10 items-center justify-center rounded-control border border-line/90 bg-white px-4 text-sm font-semibold text-navy/85 shadow-sm transition hover:bg-mist/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
              ].join(' ')}
            >
              Exit
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
