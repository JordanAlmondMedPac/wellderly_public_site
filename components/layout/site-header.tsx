'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import { primaryButtonClass } from '@/components/ui/button';

type SiteHeaderProps = {
  variant: 'marketing' | 'assessment';
  /**
   * Visual chrome for the pill card. Defaults to 'standard'.
   * - `'standard'` — bg-white/95 pill, used on cream/sand surfaces (About, Terms).
   * - `'elevated'` — bg-sand pill with slightly heftier dimensions, used over
   *   the dark image hero on the landing page.
   */
  chrome?: 'standard' | 'elevated';
};

const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#what-you-get', label: 'What you get' },
  { href: '/about', label: 'About Us' },
] as const;

const navLinkClasses =
  'transition hover:text-navy focus:outline-none focus-visible:text-navy focus-visible:underline';

/** Two-line hamburger that morphs to an X when open. Editorial, calm, no rotation flourish. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="block"
    >
      {open ? (
        <>
          <line x1="5" y1="5" x2="15" y2="15" />
          <line x1="15" y1="5" x2="5" y2="15" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="17" y2="7" />
          <line x1="3" y1="13" x2="17" y2="13" />
        </>
      )}
    </svg>
  );
}

/**
 * Shared top bar — used by every marketing surface (landing, about, terms) and the
 * assessment flow. The marketing variant supports a hamburger disclosure menu on
 * mobile so all primary nav is reachable without wrapping or text-on-image styling.
 */
export function SiteHeader({ variant, chrome = 'standard' }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC, return focus to the hamburger button.
  // Close on outside-click anywhere not inside the panel or the trigger.
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setIsOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [isOpen]);

  const pillSurface =
    chrome === 'elevated'
      ? 'border-line/55 bg-sand shadow-[0_10px_24px_-22px_rgba(9,22,42,0.2)]'
      : 'border-line/75 bg-white/95 shadow-soft backdrop-blur-md';

  const pillRow =
    chrome === 'elevated'
      ? 'min-h-[3.5rem] px-4 py-2.5 sm:min-h-[4.5rem] sm:px-8 sm:py-0 lg:min-h-[5rem] lg:px-10'
      : 'min-h-[3rem] px-4 py-3 sm:min-h-[3.25rem] sm:px-5 sm:py-3.5';

  if (variant === 'assessment') {
    return (
      <header className="relative z-20 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-10">
        <div
          className={[
            'mx-auto max-w-content rounded-2xl border',
            pillSurface,
          ].join(' ')}
        >
          <div
            className={[
              'flex items-center justify-between gap-4',
              pillRow,
            ].join(' ')}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
            >
              <BrandLogo alt="Wellderly home" />
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-10 items-center justify-center rounded-control border border-line/90 bg-white px-4 text-sm font-semibold text-navy/85 shadow-sm transition hover:bg-mist/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Exit
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative z-20 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-10">
      <div
        className={[
          'mx-auto max-w-content rounded-2xl border',
          pillSurface,
        ].join(' ')}
      >
        <nav
          className={[
            'flex items-center justify-between gap-x-4',
            pillRow,
          ].join(' ')}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
          >
            <BrandLogo alt="Wellderly" />
          </Link>

          {/* Desktop — inline links + CTA */}
          <div className="hidden items-center gap-x-6 text-sm font-medium text-navy/78 md:flex lg:gap-x-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/assessment/relationship"
              className={[
                primaryButtonClass,
                'min-h-10 px-4 py-2 text-[0.875rem] shadow-none sm:px-5',
              ].join(' ')}
            >
              Start Assessment
            </Link>
          </div>

          {/* Mobile — hamburger trigger only */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-control border border-line/70 bg-white/70 text-navy transition hover:bg-mist/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 md:hidden"
          >
            <MenuIcon open={isOpen} />
          </button>
        </nav>
      </div>

      {/* Mobile slide-down disclosure panel — absolutely positioned so it never reserves layout space */}
      <div
        id={menuId}
        ref={panelRef}
        aria-hidden={!isOpen}
        className={[
          'absolute inset-x-4 top-full mt-3 md:hidden sm:inset-x-6 lg:inset-x-10',
          'transition-[opacity,transform] duration-200 ease-out',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto max-w-content">
          <div
            className={[
              'rounded-2xl border px-5 py-4',
              pillSurface,
            ].join(' ')}
          >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="block rounded-lg px-2 py-3 text-[0.9375rem] font-medium text-navy/85 transition hover:bg-mist/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/assessment/relationship"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className={[
              primaryButtonClass,
              'mt-3 w-full justify-center px-5 text-[0.9375rem] shadow-none',
            ].join(' ')}
          >
            Start Assessment
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
