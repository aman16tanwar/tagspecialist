'use client';

import Script from 'next/script';

// Silktide Consent Manager, self-hosted and pinned so a CDN or upstream change
// can't alter the banner. Upgrade by adding a new version folder under /public/vendor.
const STCM_VERSION = '2.0.1';
const STCM_BASE = `/vendor/silktide-consent-manager/${STCM_VERSION}`;

declare global {
  interface Window {
    silktideConsentManager?: { init: (config: unknown) => void };
  }
}

// The consent type ids below are read back from localStorage (stcm.consent.<id>) by the
// consent default script in app/layout.tsx. Rename one and update it there too.
const config = {
  backdrop: { show: true },
  icon: { position: 'bottomLeft' },
  prompt: { position: 'bottomRight' },
  consentTypes: [
    {
      id: 'essential',
      label: 'Essential',
      description:
        '<p>Needed for the site to work and to remember your cookie choice. These can\'t be switched off.</p>',
      required: true,
      gtag: ['functionality_storage', 'security_storage'],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      description:
        '<p>Google Analytics and Microsoft Clarity help me see which pages are useful and where the site is confusing. Clarity records anonymised sessions.</p>',
      gtag: 'analytics_storage',
    },
    {
      id: 'marketing',
      label: 'Marketing',
      description:
        '<p>Google Ads cookies let me measure whether my ads lead to bookings and enquiries. I don\'t show ads on this site.</p>',
      gtag: ['ad_storage', 'ad_user_data', 'ad_personalization'],
    },
  ],
  text: {
    prompt: {
      description:
        '<p>I use cookies to understand how the site is used and whether my ads work. You choose what\'s allowed. See the <a href="/privacy-policy">privacy policy</a>.</p>',
      acceptAllButtonText: 'Accept all',
      acceptAllButtonAccessibleLabel: 'Accept all cookies',
      rejectNonEssentialButtonText: 'Reject non-essential',
      rejectNonEssentialButtonAccessibleLabel: 'Reject all non-essential cookies',
      preferencesButtonText: 'Preferences',
      preferencesButtonAccessibleLabel: 'Toggle preferences',
    },
    preferences: {
      title: 'Your cookie preferences',
      description:
        '<p>Choose which cookies this site may use. You can change this any time with the cookie icon in the bottom-left corner.</p>',
      saveButtonText: 'Save and close',
      saveButtonAccessibleLabel: 'Save your cookie preferences',
      creditLinkText: 'Get this banner for free',
      creditLinkAccessibleLabel: 'Get this banner for free',
    },
  },
};

export default function ConsentBanner() {
  return (
    <>
      <link rel="stylesheet" href={`${STCM_BASE}/silktide-consent-manager.css`} />
      <Script
        id="silktide-consent-manager"
        src={`${STCM_BASE}/silktide-consent-manager.js`}
        strategy="afterInteractive"
        onReady={() => {
          // onReady also fires on remount; the wrapper existing means init already ran.
          if (document.getElementById('stcm-wrapper')) return;
          window.silktideConsentManager?.init(config);
        }}
      />
    </>
  );
}
