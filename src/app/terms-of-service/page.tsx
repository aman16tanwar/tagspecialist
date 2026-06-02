import type { Metadata } from 'next';
import TermsOfService from '@/components/legal/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'TagSpecialist Terms of Service - Terms and conditions for using our services.',
  alternates: {
    canonical: 'https://tagspecialist.ca/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
