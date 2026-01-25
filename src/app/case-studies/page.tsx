import type { Metadata } from 'next';
import CaseStudiesSection from '@/components/casestudies/CaseStudiesSection';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world examples of data engineering and analytics success stories.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <CaseStudiesSection />
    </div>
  );
}
