import Link from 'next/link';
import { BrandLogo } from '@/components/layout/brand-logo';
import { Card } from '@/components/ui/card';
import { primaryButtonClass } from '@/components/ui/button';

const PREVIEW_STEPS = [
  "Answer a few guided questions about your loved one's situation",
  'Our Human-Guided AI analyzes the details with 25+ years of senior care expertise',
  'You receive a clear, actionable plan you can share and update anytime',
] as const;

export function CarePlanPreview() {
  return (
    <Card className="overflow-hidden border-line/65 bg-white/95 p-5 shadow-card sm:p-6 lg:p-8">
      <div className="rounded-card border border-line/45 bg-sand/55 p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo alt="Wellderly" size="header" />
          <span className="rounded-full border border-line/70 bg-white px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy/55">
            Preview
          </span>
        </div>
      </div>

      <section
        aria-label="How Wellderly Works — preview steps"
        className="mt-6 rounded-card border border-line/55 bg-canvas p-5 sm:p-6 md:mt-7"
      >
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy/42">
          Steps
        </p>
        <ol className="mt-5 space-y-5">
          {PREVIEW_STEPS.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[0.6875rem] font-semibold text-navy ring-1 ring-line/70">
                {index + 1}
              </span>
              <span className="text-[0.875rem] leading-[1.65] text-navy/76 sm:leading-[1.62]">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-7 rounded-card border border-line/55 bg-mist/45 p-5 sm:mt-8 sm:p-6">
        <Link
          href="/assessment/relationship"
          className={[
            primaryButtonClass,
            'w-full min-h-[3.25rem] justify-center md:w-auto md:min-w-[15rem]',
          ].join(' ')}
        >
          Start Your Free Preview
        </Link>
      </div>
    </Card>
  );
}
