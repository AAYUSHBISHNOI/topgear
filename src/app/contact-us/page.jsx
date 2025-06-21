import LetsTalkContactUs from "../Components/Letstalkcontactus";
import Mapcontactus from "../Components/Mapcontactus";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact Us - Expert BTL Marketing & Event Management",
  description:
    "Get in touch with Cynor Media for expert BTL marketing and event management solutions across India. Let's elevate your brand together.",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
    "contact cynor media",
    "btl marketing contact",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Expert BTL Marketing & Event Management",
    description:
      "Get in touch with Cynor Media for expert BTL marketing and event management solutions across India. Let's elevate your brand together.",
    url: "https://www.cynormedia.com/contact-us",
    siteName: "Cynor Media",
    images: [
      {
        url: "https://thumbs2.imgbox.com/38/07/bI8FwxmK_t.png",
        width: 1200,
        height: 630,
        alt: "Contact Cynor Media - BTL Marketing Experts",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Expert BTL Marketing & Event Management",
    description:
      "Get in touch with Cynor Media for expert BTL marketing and event management solutions across India. Let's elevate your brand together.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/38/07/bI8FwxmK_t.png",
        alt: "Contact Cynor Media - BTL Marketing Experts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/contact-us",
  },
 
  other: {
    "og:locale": "en_US",
    "article:author": "Cynor Media",
  },
};

const ContactUs = () => {
  return (
    <main className="bg-[#fbfbfb]">
      <LetsTalkContactUs />
      <Mapcontactus />
    </main>
  );
};

export default ContactUs;
