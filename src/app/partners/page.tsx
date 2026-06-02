import type { Metadata } from 'next';
import PartnersSection from '@/components/partners/PartnersSection';

export const metadata: Metadata = {
  title: 'Agency Partner Program | White-Label Data Engineering',
  description: 'Become a TagSpecialist partner. We offer white-label server-side tracking, BigQuery pipelines, and attribution modeling for marketing agencies.',
  alternates: {
    canonical: 'https://tagspecialist.ca/partners',
  },
};

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <PartnersSection />
    </div>
  );
}
