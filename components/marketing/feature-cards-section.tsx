import { ScrollReveal } from '@/components/ui/motion-primitives';

const THREE_CARDS = [
  {
    icon: '/assets/icons/Category-5.svg',
    title: 'Clear Recommendations Across the Categories That Matter Most',
    body: 'Home Setting • Enriching Care • Wellness & Social • Transportation • Life Easing Tools • Legal & Financial',
  },
  {
    icon: '/assets/icons/Sheild-Star.svg',
    title: 'Private, Secure & Truly Unbiased',
    body: 'Your information stays private. We accept zero sponsorships or referral fees from providers.',
  },
  {
    icon: '/assets/icons/Users-4.svg',
    title: 'Easy to Share with Your Care Team',
    body: 'Collaborate seamlessly with family, friends, and care providers.',
  },
] as const;

export function FeatureCardsSection() {
  return (
    <section
      className="border-b border-line/35 bg-[#F7F6F4] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="three-cards-heading"
    >
      <ScrollReveal className="mx-auto max-w-content">
        <h2
          id="three-cards-heading"
          className="sr-only"
        >
          What you can expect
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:gap-9 md:grid-cols-3 md:gap-0">
          {THREE_CARDS.map((card, idx) => (
            <article
              key={card.title}
              className={[
                'flex h-full flex-col pt-2',
                idx > 0
                  ? 'border-t border-[rgba(9,22,42,0.07)] pt-8 sm:pt-9 md:border-t-0 md:border-l md:pl-8 md:pt-1 lg:pl-10'
                  : 'md:pr-8 lg:pr-10',
              ].join(' ')}
            >
              <div className="flex gap-3.5 sm:gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mt-0.5 h-8 w-8 shrink-0 object-contain opacity-[0.88]"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-[1.4] text-[#09162A] sm:text-base sm:leading-[1.35]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[0.875rem] leading-[1.75] text-[rgba(9,22,42,0.8)] sm:mt-5 sm:text-[0.9375rem] sm:leading-[1.72]">
                    {card.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
