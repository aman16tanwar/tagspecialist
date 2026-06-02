import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TagSpecialist Privacy Policy - How we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://tagspecialist.ca/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
