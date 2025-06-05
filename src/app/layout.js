"use client";

import { Poppins } from "next/font/google";
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
      <head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="m5nGJS4HTwDSjd1aH7CUOU4RlQPbFWxoo5P5s17tX3A"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.cynormedia.com/" />
        <meta
          name="description"
          content="Cynor Media - Below the line Marketing Company in India, from activations to targeted promotions, to boost your brand’s visibility."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cynormedia.com/" />
        <meta
          property="og:title"
          content="Cynor Media - Below the line Marketing Company in India"
        />
        <meta
          property="og:description"
          content="From activations to targeted promotions, boost your brand’s visibility with Cynor Media."
        />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/df/42/aaVg3uNj_t.png"
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.cynormedia.com/" />
        <meta
          name="twitter:title"
          content="Cynor Media - Below the line Marketing Company in India"
        />
        <meta
          name="twitter:description"
          content="From activations to targeted promotions, boost your brand’s visibility with Cynor Media."
        />
        <meta
          name="twitter:image"
          content="https://thumbs2.imgbox.com/df/42/aaVg3uNj_t.png"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFSSPQ8C');
          `,
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
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
                opens: "09:00",
                closes: "20:00",
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

        {/* Structured Data - Corporation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Cynor Media",
              url: "https://www.cynormedia.com/",
              logo: "https://www.cynormedia.com/static/media/Footer-Logo.9968d6256f29a31ba30636a386b19238.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 89013 99629",
                contactType: "customer service",
                contactOption: "HearingImpairedSupported",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/cynormedia/",
                "https://www.instagram.com/cynor.media/",
                "https://in.linkedin.com/company/cynormedia",
                "https://www.youtube.com/@cynormedia3388",
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cynor Media",
              url: "https://www.cynormedia.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.cynormedia.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What kind of events do you manage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We manage everything from corporate events, product launches, Float Van services and campaigns, and test drive events to residential and mall activations across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are your services available outside Chandigarh?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we offer PAN India services and activations with strong operational networks across multiple cities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you customize marketing solutions based on our brand requirements?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! We specialize in tailor-made, brand-specific activations and marketing services that align with your goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you ensure the success of a campaign?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We combine creative ideas with strategic planning, data-backed insights, and seamless execution to deliver measurable, result-driven campaigns.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide branding materials like hoardings, banners, and merchandise?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes- we provide end-to-end services including hoardings, wall wraps, flex banners, mug and t-shirt printing, leaflets, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I get started with Cynor Media?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply reach out to us via our website, call, or email, and let’s discuss how we can ignite your next marketing campaign!",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFSSPQ8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
