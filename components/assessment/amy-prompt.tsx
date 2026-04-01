type AmyPromptProps = {
  message: string;
};

/**
 * Guide row — Amy’s voice, same radii and paper tone as the rest of the product.
 */
export function AmyPrompt({ message }: AmyPromptProps) {
  return (
    <div className="flex items-start gap-3.5 rounded-card border border-line/60 bg-gradient-to-br from-white to-mist/30 px-4 py-3.5 shadow-sm sm:gap-4 sm:px-5 sm:py-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/illustrations/amy-avatar.svg"
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
      />
      <div className="min-w-0 pt-0.5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-navy/48">
          Amy · your guide
        </p>
        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-navy sm:text-base">
          {message}
        </p>
      </div>
    </div>
  );
}
