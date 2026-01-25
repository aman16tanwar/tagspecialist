import type { Metadata } from 'next';
import AboutSection from '@/components/about/AboutSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind Tag Specialist. Expert data engineers and campaign managers working together to grow your business.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
