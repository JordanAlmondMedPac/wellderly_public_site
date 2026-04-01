import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Relationship — Wellderly Assessment',
  description: 'Tell us how you are connected so we can personalize your care plan.',
};

export default function RelationshipStepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
