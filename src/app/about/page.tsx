import type { Metadata } from 'next';
import AboutSection from '@/components/about/AboutSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'TagSpecialist is a one-person practice. A senior data engineer with 10 years building tracking and data infrastructure — the engineer who scopes your project is the one who builds it.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
