import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { ModalProvider } from "@/contexts/ModalContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/modals/ContactForm";
import SuccessModal from "@/components/modals/SuccessModal";

const GTM_ID = "GTM-PTBVKBHB";

export const metadata: Metadata = {
  title: {
    default: "TagSpecialist | Server-Side Tracking & Data Engineering Experts",
    template: "%s | Tag Specialist"
  },
  description: "Expert server-side tagging, GTM implementation, and data engineering services. We build tracking infrastructure and BigQuery data warehouses for agencies and brands.",
  metadataBase: new URL("https://tagspecialist.ca"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tagspecialist.ca",
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
    description: "Expert server-side tagging, GTM implementation, and data engineering services. We build tracking infrastructure and BigQuery data warehouses for agencies and brands."
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
      </body>
    </html>
  );
}
