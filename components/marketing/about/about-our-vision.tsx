/**
 * About page — "Our Vision" reflective section.
 *
 * A centered, typography-led pause after the longer Our Story section. Inspired
 * by Monzo's vision statement layout: small eyebrow, confident centered
 * headline, calm body copy — no images, cards, icons, CTAs, or decorative
 * dividers beyond the existing subtle border-b that the page already uses
 * between sections.
 *
 * Copy is authored here intentionally because this is a brand-level vision
 * statement, distinct from the founder narrative loaded from the JSON copy.
 */
export function AboutOurVision() {
  return (
    <section
      className="border-b border-line/20 bg-white py-24 sm:py-32 lg:py-36"
      aria-labelledby="vision-heading"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-navy/55">
            Our Vision
          </p>
          <h2
            id="vision-heading"
            className="mt-6 text-[2.125rem] font-semibold leading-[1.1] tracking-tight text-navy text-balance sm:text-[2.35rem] sm:leading-[1.08] lg:text-[2.6rem] lg:leading-[1.06]"
          >
            We believe navigating care should feel clearer, calmer, and more
            human.
          </h2>
          <div className="mx-auto mt-10 max-w-[42rem] space-y-7 text-[1.0625rem] font-normal leading-[1.85] text-navy/78 sm:mt-12 sm:text-[1.125rem]">
            <p>
              For too long, families have been left to navigate aging through
              fragmented systems, overwhelming decisions, and uncertainty about
              what comes next.
            </p>
            <p>
              We’re building Wellderly to change that—bringing together
              compassionate guidance, real-world expertise, and thoughtful
              technology to help families move forward with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
