import type { Metadata } from 'next';
import ServiceLevelAgreement from '@/components/legal/ServiceLevelAgreement';

export const metadata: Metadata = {
  title: 'Service Level Agreement',
  description: 'TagSpecialist SLA - Our commitment to service quality and uptime guarantees.',
};

export default function SLAPage() {
  return <ServiceLevelAgreement />;
}
