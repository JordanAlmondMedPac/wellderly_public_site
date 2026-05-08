import { HoverCard, ScrollReveal } from '@/components/ui/motion-primitives';

export function VoicesSection() {
  return (
    <section
      id="stories"
      className="border-b border-line/35 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="stories-heading"
    >
      <ScrollReveal className="mx-auto w-full max-w-content">
        <div className="max-w-xl">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
            Voices
          </p>
          <h2
            id="stories-heading"
            className="mt-4 text-[1.3125rem] font-semibold leading-snug tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.625rem]"
          >
            From Caregivers
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <HoverCard>
            <figure className="h-full rounded-card border border-line/35 bg-white/90 p-6 transition-shadow duration-200 sm:p-7">
              <blockquote className="flex h-full flex-col justify-between text-base font-normal leading-[1.72] text-navy/85 sm:text-[1.0625rem] sm:leading-[1.74]">
                <p>
                  &ldquo;Wellderly helped me stop spiraling and finally
                  understand what to do first.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-navy/45">
                  — Sarah, 52
                </footer>
              </blockquote>
            </figure>
          </HoverCard>
          <HoverCard>
            <figure className="h-full rounded-card border border-line/35 bg-white/90 p-6 transition-shadow duration-200 sm:p-7">
              <blockquote className="flex h-full flex-col justify-between text-base font-normal leading-[1.72] text-navy/85 sm:text-[1.0625rem] sm:leading-[1.74]">
                <p>
                  &ldquo;Someone turned a messy problem into a plan I could
                  follow.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-navy/45">
                  — Mike, 48
                </footer>
              </blockquote>
            </figure>
          </HoverCard>
        </div>
      </ScrollReveal>
    </section>
  );
}
