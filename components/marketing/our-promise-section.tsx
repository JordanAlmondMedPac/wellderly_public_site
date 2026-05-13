/**
 * Landing page — “Our Promise”
 *
 * Quiet trust moment: editorial headline, soft divider, three pillars — no cards,
 * no icon grid; white field with a whisper of paper texture and coral accents.
 */

import type { CSSProperties } from 'react';

const paperTextureStyle: CSSProperties = {
  backgroundImage: [
    'radial-gradient(circle at 20% 18%, rgba(241, 137, 137, 0.045), transparent 52%)',
    'radial-gradient(circle at 78% 88%, rgba(9, 22, 42, 0.028), transparent 55%)',
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.05  0 0 0 0 0.08  0 0 0 0.035 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
  ].join(', '),
  backgroundSize: '100% 100%, 100% 100%, 220px 220px',
};

const PILLARS = [
  {
    title: 'Unbiased',
    body: 'We never accept referral fees or push specific providers.',
  },
  {
    title: 'AI-Powered',
    body: 'Lightning-fast, data-driven personalization.',
  },
  {
    title: 'Human Activated',
    body: 'Real experts who care as much as you do.',
  },
] as const;

export function OurPromiseSection() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-line/20 bg-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="our-promise-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.55]"
        style={paperTextureStyle}
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <header className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-navy/48">
            Our promise
          </p>
          <h2
            id="our-promise-heading"
            className="mt-6 text-balance text-[1.65rem] font-semibold leading-[1.26] tracking-tight text-navy sm:mt-7 sm:text-[1.9rem] sm:leading-[1.22] lg:mt-8 lg:text-[2.25rem] lg:leading-[1.2]"
          >
            Because aging should be a journey of dignity,
            <span className="mt-1.5 block sm:mt-2">
              not a maze of stress.
            </span>
          </h2>
        </header>

        <div
          className="mx-auto mt-14 h-px max-w-[7rem] bg-gradient-to-r from-transparent via-[rgba(241,137,137,0.38)] to-transparent sm:mt-16 sm:max-w-[8rem] lg:mt-20"
          aria-hidden
        />

        <div className="mx-auto mt-16 grid max-w-[72rem] gap-14 sm:mt-20 sm:gap-16 lg:mt-24 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-0">
          {PILLARS.map(({ title, body }) => (
            <div
              key={title}
              className="mx-auto max-w-[30ch] text-center lg:max-w-none"
            >
              <div
                className="mx-auto mb-5 h-1.5 w-1.5 rounded-full bg-[rgba(241,137,137,0.55)] sm:mb-6"
                aria-hidden
              />
              <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-navy sm:text-[1.125rem]">
                {title}
              </h3>
              <p className="mt-3.5 text-[0.98rem] font-normal leading-[1.78] text-navy/72 sm:mt-4 sm:text-[1.02rem] sm:leading-[1.76]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
