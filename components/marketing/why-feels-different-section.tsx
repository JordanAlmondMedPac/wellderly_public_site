import { HoverCard, ScrollReveal } from '@/components/ui/motion-primitives';

type WhyFeelsDifferentSectionProps = {
  imageSrc: string;
};

export function WhyFeelsDifferentSection({
  imageSrc,
}: WhyFeelsDifferentSectionProps) {
  return (
    <section
      className="border-b border-line/35 bg-white py-20 sm:py-24 lg:py-32"
      aria-labelledby="pain-heading"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <ScrollReveal className="grid grid-cols-1 gap-9 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <article className="flex h-full flex-col rounded-shell bg-[#F7F6F4] p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-navy/28"
                fill="none"
              >
                <path
                  d="M4.5 10h11M10 4.5v11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="6.25"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
                Why this feels different
              </p>
            </div>
            <h2
              id="pain-heading"
              className="mt-4 text-[1.3125rem] font-semibold leading-[1.22] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.75rem] lg:leading-[1.18]"
            >
              Caregiving is hard enough without having to figure everything out
              alone.
            </h2>
            <p className="mt-7 max-w-prose text-[0.9375rem] leading-[1.74] text-navy/78 sm:mt-8 sm:text-base sm:leading-[1.76]">
              You&apos;re already juggling work, kids, and life — now you&apos;re
              also responsible for your parent&apos;s care. Wellderly gives you
              clarity, reduces overwhelm, and puts you back in control.
            </p>
          </article>

          <figure className="h-full min-w-0">
            <HoverCard className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-shell border border-line/20 bg-white">
                <div className="aspect-[4/3] w-full overflow-hidden bg-mist/30 lg:flex-1 lg:aspect-auto lg:min-h-[20rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt="Father and son — family caregiving"
                    width={815}
                    height={556}
                    className="h-full w-full object-cover object-[center_28%]"
                  />
                </div>
                <figcaption className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4.5">
                  <p className="max-w-[34ch] text-[0.75rem] leading-[1.68] text-navy/58 sm:text-[0.8125rem] sm:leading-[1.65]">
                    <span className="block">This is how the plan is built —</span>
                    <span className="mt-1 block text-navy/54">
                      25 years of expertise + AI = decisions you can trust.
                    </span>
                  </p>
                </figcaption>
              </div>
            </HoverCard>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
