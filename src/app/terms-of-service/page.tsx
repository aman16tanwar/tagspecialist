import type { Metadata } from 'next';
import TermsOfService from '@/components/legal/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'TagSpecialist Terms of Service - Terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
