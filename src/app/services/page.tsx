import type { Metadata } from 'next';
import ServicesSection from '@/components/services/ServicesSection';
import CapabilitiesSection from '@/components/services/CapabilitiesSection';
import PricingSection from '@/components/pricing/PricingSection';
import RetainerServices from '@/components/services/RetainerServices';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Data Engineering, Analytics Implementation, and AI Automation services.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
      <CapabilitiesSection />
      <PricingSection />
      <RetainerServices />
      <TestimonialsSection />
    </div>
  );
}
