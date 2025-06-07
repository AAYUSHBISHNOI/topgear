import LetsTalkContactUs from "../../Components/Letstalkcontactus";
import Mapcontactus from "../../Components/Mapcontactus";

export const metadata = {
  title: "Contact BTL Marketing Experts India | Cynor Media",
  description:
    "Get in touch with Cynor Media for event management, BTL marketing, and promotional campaigns across India and Australia.",
  keywords: [
    "Contact Cynor Media",
    "BTL Marketing Contact",
    "Event Management India",
    "Marketing Campaigns India",
  ],
  robots: "index, follow",
  authors: [{ name: "Cynor Media", url: "https://www.cynormedia.com" }],
  alternates: {
    canonical: "https://www.cynormedia.com/contact-us",
  },
  openGraph: {
    title: "Contact BTL Marketing Experts India | Cynor Media",
    description:
      "Contact Cynor Media for expert event planning, marketing, and branding solutions.",
    url: "https://www.cynormedia.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://thumbs2.imgbox.com/e1/32/pwedpBYM_t.png",
        width: 1200,
        height: 630,
        alt: "Contact Cynor Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BTL Marketing Experts India | Cynor Media",
    description:
      "Get in touch with Cynor Media for your next marketing or event campaign.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/e1/32/pwedpBYM_t.png",
        alt: "Contact Cynor Media",
      },
    ],
  },
};

export default function contactus() {
  return (
    <main className="bg-[#fbfbfb]">
      <LetsTalkContactUs />
      <Mapcontactus />
    </main>
  );
}
