"use client";

import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFSSPQ8C');`,
          }}
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cynor Media",
              image:
                "https://www.cynormedia.com/static/media/Footer-Logo.9968d6256f29a31ba30636a386b19238.svg",
              url: "https://www.cynormedia.com/",
              telephone: "+91 89013 99629",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opposite Nabha Sahib Gurudwara, VIP road",
                addressLocality: "Zirakpur",
                postalCode: "140603",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.63390065271064,
                longitude: 76.80212167301315,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00:00",
                closes: "20:00:00",
              },
              sameAs: [
                "https://www.facebook.com/cynormedia/",
                "https://www.instagram.com/cynor.media/",
                "https://in.linkedin.com/company/cynormedia",
                "https://www.cynormedia.com/",
              ],
            }),
          }}
        />

        {/* Similarly add other structured data with their own Script components */}

        <Navbar />
        {children}
        <Footer />

        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFSSPQ8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm-noscript"
          />
        </noscript>
      </body>
    </html>
  );
}
