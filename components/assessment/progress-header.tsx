import Link from 'next/link';

type ProgressHeaderProps = {
  /** 1-based step index */
  currentStep: number;
  totalSteps: number;
  backHref: string;
  backLabel?: string;
};

/**
 * Back + slim segment progress — minimal, not gamified.
 */
export function ProgressHeader({
  currentStep,
  totalSteps,
  backHref,
  backLabel = 'Back',
}: ProgressHeaderProps) {
  const pct = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));
  const pctRounded = Math.round(pct);

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Link
        href={backHref}
        className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line/80 bg-white text-navy/80 shadow-sm transition hover:border-line hover:bg-mist/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        aria-label={backLabel}
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>
      <div className="min-w-0 flex-1">
        <div
          className="h-1 overflow-hidden rounded-full bg-line/90"
          role="progressbar"
          aria-valuenow={pctRounded}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Step ${currentStep} of ${totalSteps}`}
        >
          <div
            className="h-full rounded-full bg-navy/28 transition-[width] duration-300 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <span className="shrink-0 tabular-nums text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy/38">
        {currentStep}/{totalSteps}
      </span>
    </div>
  );
}
