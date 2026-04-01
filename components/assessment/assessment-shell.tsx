type AssessmentShellProps = {
  children: React.ReactNode;
};

/**
 * Canvas + soft light — matches landing hero atmosphere so the flow feels like one product.
 */
export function AssessmentShell({ children }: AssessmentShellProps) {
  return (
    <div className="relative min-h-screen bg-sand">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[22rem] w-[22rem] rounded-full bg-mist/55 blur-3xl sm:right-0 sm:h-[26rem] sm:w-[26rem]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-assess flex-col px-4 pb-14 pt-2 sm:px-5 sm:pb-16 sm:pt-4">
        {children}
      </div>
    </div>
  );
}
