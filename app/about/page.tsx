import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SectionContainer } from '@/components/ui/section';

export default function AboutPage() {
  return (
    <>
      <SiteHeader variant="marketing" />
      <main>
        <SectionContainer className="border-b border-line/40 bg-canvas py-16 sm:py-20 lg:py-24">
          <h1 className="text-[1.5rem] font-semibold tracking-tight text-navy sm:text-[1.75rem]">
            About Us
          </h1>
          <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.7] text-navy/75 sm:text-base">
            More about Wellderly Wayfinder is coming soon.{' '}
            <Link
              href="/"
              className="font-semibold text-navy underline decoration-line underline-offset-4 hover:text-navy/80"
            >
              Return home
            </Link>
          </p>
        </SectionContainer>
      </main>
    </>
  );
}
