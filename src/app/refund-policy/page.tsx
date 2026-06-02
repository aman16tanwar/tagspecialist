import type { Metadata } from 'next';
import RefundPolicy from '@/components/legal/RefundPolicy';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'TagSpecialist Refund Policy - Our refund and cancellation terms.',
  alternates: {
    canonical: 'https://tagspecialist.ca/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
