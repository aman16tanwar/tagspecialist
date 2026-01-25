import type { Metadata } from 'next';
import DataSecurity from '@/components/legal/DataSecurity';

export const metadata: Metadata = {
  title: 'Data Security',
  description: 'TagSpecialist Data Security - How we protect your data and maintain security standards.',
};

export default function DataSecurityPage() {
  return <DataSecurity />;
}
