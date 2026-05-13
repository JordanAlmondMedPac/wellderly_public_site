import {
  type AboutCopy,
} from '@/lib/about-copy';
import { AboutHero } from './about-hero';
import { AboutOurStory } from './about-our-story';
import { AboutOurApproach } from './about-our-approach';
import { AboutTheChallenge } from './about-the-challenge';
import { AboutOurVision } from './about-our-vision';
import { AboutHowWellderlyWorks } from './about-how-wellderly-works';
import { OurPromiseSection } from '../our-promise-section';
import { MarketingSiteFooter } from '@/components/marketing/marketing-site-footer';

type AboutMarketingViewProps = {
  copy: AboutCopy;
};

export function AboutMarketingView({ copy }: AboutMarketingViewProps) {
  return (
    <>
      <main className="overflow-x-hidden bg-canvas">
        <AboutHero hero={copy.hero} />

        <AboutOurStory
          narrativeIntro={copy.story[0] ?? ''}
          coFounderLine={copy.story[1] ?? ''}
          amyBio={copy.story[2] ?? ''}
          klayBio={copy.story[3] ?? ''}
          closingStatement={copy.story[4] ?? ''}
        />

        <AboutOurVision />

        <AboutTheChallenge />

        <AboutOurApproach />

        <AboutHowWellderlyWorks />
        <OurPromiseSection />
      </main>

      <MarketingSiteFooter />
    </>
  );
}
