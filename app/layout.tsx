import type { Metadata } from 'next';
import '@fontsource-variable/google-sans-flex/wght.css';
import './globals.css';
import { RouteTransition } from '@/components/layout/route-transition';

export const metadata: Metadata = {
  title: 'Wellderly — Care planning for families',
  description:
    'Personalized senior care guidance for family caregivers — practical next steps, cost context, and calm support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
