'use client';

type AssessmentOptionButtonProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

const base =
  'w-full min-h-[3.25rem] rounded-control border px-5 py-4 text-left text-[0.9375rem] font-semibold leading-snug transition focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 active:scale-[0.99] sm:min-h-[3.5rem] sm:px-5 sm:py-[1.125rem] sm:text-base';

/**
 * Large touch-friendly choice control — shared across assessment steps.
 */
export function AssessmentOptionButton({
  label,
  selected,
  onSelect,
}: AssessmentOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        base,
        selected
          ? 'border-coral bg-white shadow-card ring-1 ring-coral/25'
          : 'border-line/90 bg-white shadow-sm hover:border-navy/12 hover:bg-mist/25 hover:shadow-soft',
        'text-navy',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
