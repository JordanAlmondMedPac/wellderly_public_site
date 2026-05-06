import { AboutMarketingView } from '@/components/marketing/about/about-marketing-view';
import { loadAboutCopy } from '@/lib/about-copy';

export default async function AboutPage() {
  const copy = await loadAboutCopy();
  return <AboutMarketingView copy={copy} />;
}
