import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { ModalProvider } from "@/contexts/ModalContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/modals/ContactForm";
import SuccessModal from "@/components/modals/SuccessModal";
import ConsentBanner from "@/components/consent/ConsentBanner";
import { SITE_URL } from '@/lib/site';

const GTM_ID = "GTM-PTBVKBHB";

// Consent defaults that must exist before GTM loads. Strict opt-in regions (EEA, UK,
// Switzerland, Quebec) start denied; everywhere else starts granted. The region-specific
// default wins over the global one for visitors in those regions. The banner
// (ConsentBanner) sends the visitor's choice as a consent update.
const CONSENT_DENIED_REGIONS = [
  // EU
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
  "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // Rest of EEA, UK, Switzerland, Quebec (Law 25)
  "IS", "LI", "NO", "GB", "CH", "CA-QC",
];

const CONSENT_DEFAULT_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){dataLayer.push(arguments);};
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
    region: ${JSON.stringify(CONSENT_DENIED_REGIONS)}
  });
  gtag('consent', 'default', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  // Apply a returning visitor's saved choice now, before GTM loads. The banner replays
  // it too, but only after gtm.js, which is too late for tags that fire on page load.
  try {
    var saved = {}, choice;
    choice = localStorage.getItem('stcm.consent.analytics');
    if (choice !== null) saved.analytics_storage = choice === 'true' ? 'granted' : 'denied';
    choice = localStorage.getItem('stcm.consent.marketing');
    if (choice !== null) {
      var ads = choice === 'true' ? 'granted' : 'denied';
      saved.ad_storage = ads; saved.ad_user_data = ads; saved.ad_personalization = ads;
    }
    if (Object.keys(saved).length) gtag('consent', 'update', saved);
  } catch (e) {}
`;

export const metadata: Metadata = {
  title: {
    default: "TagSpecialist | Server-Side Tracking & Data Engineering Experts",
    template: "%s | Tag Specialist"
  },
  description: "Expert server-side tagging, GTM implementation, and data engineering. A senior data engineer building tracking infrastructure and BigQuery data warehouses for agencies and brands.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TagSpecialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TagSpecialist - Server-Side Tracking & Data Engineering Experts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TagSpecialist | Server-Side Tracking & Data Engineering Experts",
    description: "Expert server-side tagging, GTM implementation, and data engineering. A senior data engineer building tracking infrastructure and BigQuery data warehouses for agencies and brands."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ModalProvider>
          <div className="bg-white text-navy-900 min-h-screen flex flex-col">
            <Navbar />
            <main className="pt-16 flex-grow">
              {children}
            </main>
            <Footer />
            <ContactForm />
            <SuccessModal />
          </div>
        </ModalProvider>
        <ConsentBanner />
      </body>
    </html>
  );
}
