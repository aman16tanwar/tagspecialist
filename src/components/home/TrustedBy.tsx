'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  src?: string; // logo asset; when absent, render a styled text wordmark
}

// Direct clients — brands whose tracking we built/manage directly.
const directClients: Brand[] = [
  { name: 'Sku.io', src: '/logos/sku-io.svg' },
  { name: 'Monster Fairings', src: '/logos/monster-fairings.png' },
  { name: 'PetsOnMe', src: '/logos/petsonme.svg' },
];

// Agency partners — agencies we deliver tracking work for.
const agencyPartners: Brand[] = [
  { name: 'Dayer Digital', src: '/logos/dayer-digital.svg' },
  { name: 'King & Partners', src: '/logos/king-and-partners.svg' },
  { name: 'Envision' }, // wordmark until a logo URL is supplied
];

const BrandMark: React.FC<{ brand: Brand; index: number }> = ({ brand, index }) => {
  const anim = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay: index * 0.1 },
  };

  if (brand.src) {
    return (
      <motion.img
        {...anim}
        src={brand.src}
        alt={brand.name}
        title={brand.name}
        style={{ filter: 'brightness(0)' }}
        className="h-7 md:h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
      />
    );
  }

  return (
    <motion.span
      {...anim}
      className="text-lg md:text-xl font-black uppercase tracking-tight text-gray-400 hover:text-gray-600 transition-colors duration-300"
    >
      {brand.name}
    </motion.span>
  );
};

const TrustedBy: React.FC = () => {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mb-12"
        >
          Trusted by brands &amp; agencies who rely on accurate tracking
        </motion.p>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Direct clients */}
          <div>
            <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/70 mb-6">
              Direct Clients
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {directClients.map((brand, index) => (
                <BrandMark key={brand.name} brand={brand} index={index} />
              ))}
            </div>
          </div>

          {/* Agency partners */}
          <div>
            <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/70 mb-6">
              Agency Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {agencyPartners.map((brand, index) => (
                <BrandMark key={brand.name} brand={brand} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
