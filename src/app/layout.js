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

export const metadata = {
  title: {
    default: "Cynor Media - BTL Marketing Experts in India",
    template: "%s | Cynor Media",
  },
  description:
    "India's most agile BTL marketing partner for brands who want real visibility. Expert below-the-line marketing, brand activations, event management, and promotional campaigns across India.",
  keywords: [
    "Cynor Media",
    "BTL Marketing",
    "Event Management",
    "Brand Activation",
    "Float Van",
  ],
  metadataBase: new URL("https://www.cynormedia.com"),

  // 🔥 FORCE GOOGLE TO USE YOUR DESCRIPTIONS
  robots: {
    index: true,
    follow: true,
    "max-snippet": 160,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    title: {
      default: "Cynor Media - BTL Marketing Experts in India",
      template: "%s | Cynor Media",
    },
    description:
      "India's most agile BTL marketing partner for brands who want real visibility. Expert below-the-line marketing, brand activations, event management, and promotional campaigns across India.",
    url: "https://www.cynormedia.com",
    siteName: "Cynor Media",
    images: [
      {
        url: "https://www.cynormedia.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cynor Media",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: {
      default: "Cynor Media - BTL Marketing Experts in India",
      template: "%s | Cynor Media",
    },
    description:
      "India's most agile BTL marketing partner for brands who want real visibility. Expert below-the-line marketing, brand activations, event management, and promotional campaigns across India.",
    images: ["https://www.cynormedia.com/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "m5nGJS4HTwDSjd1aH7CUOU4RlQPbFWxoo5P5s17tX3A",
  },

  // 🔥 ADDITIONAL GOOGLE CONTROL
  other: {
    googlebot: "index, follow, max-snippet:160",
    bingbot: "index, follow, max-snippet:160",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* 🔥 FORCE GOOGLE TO USE YOUR DESCRIPTIONS */}
        <meta
          name="robots"
          content="index, follow, max-snippet:160, max-image-preview:large"
        />
        <meta name="googlebot" content="index, follow, max-snippet:160" />
        <meta name="bingbot" content="index, follow, max-snippet:160" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MFSSPQ8C');
            `,
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
              description:
                "India's most agile BTL marketing partner for brands who want real visibility. Expert below-the-line marketing, brand activations, event management, and promotional campaigns across India.",
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
              openingHoursSpecification: [
                {
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
              ],
              sameAs: [
                "https://www.facebook.com/cynormedia/",
                "https://www.instagram.com/cynor.media/",
                "https://in.linkedin.com/company/cynormedia",
                "https://www.cynormedia.com/",
              ],
            }),
          }}
        />

        <Navbar />
        {children}
        <Footer />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFSSPQ8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      </body>
    </html>
  );
}
