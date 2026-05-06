import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { CarePlanPreview } from '@/components/marketing/care-plan-preview';

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-b border-line/40 bg-sand px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="how-heading"
    >
      <ScrollReveal className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy/40 sm:text-[0.6875rem]">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-4 text-[1.3125rem] font-semibold leading-[1.2] tracking-tight text-navy sm:mt-5 sm:text-[1.4375rem] lg:text-[1.8125rem]"
          >
            How Wellderly Works
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 lg:mt-16 lg:gap-10">
          <div className="w-full max-w-4xl lg:max-w-none">
            <CarePlanPreview />
          </div>

          <aside
            aria-label="Example plan preview placeholder"
            className="rounded-shell border border-line/40 bg-[#fdfaf5] p-5 shadow-[0_14px_28px_-24px_rgba(9,22,42,0.22)] sm:p-6 lg:p-7"
          >
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy/42 sm:text-[0.6875rem]">
              Plan Preview
            </p>
            <h3 className="mt-3 text-[1.0625rem] font-semibold leading-snug text-navy sm:text-[1.125rem]">
              Example Plan Preview
            </h3>
            <div className="mt-6 overflow-hidden rounded-shell border border-line/40 bg-white sm:mt-7">
              <Image
                src="/images/illustrations/Deskop_Paid_Plan.png"
                alt="Example care plan preview"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </section>
  );
}
