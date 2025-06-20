import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";

export const dynamic = "force-static";

export const metadata = {
  title: "BTL Marketing & Event Management Services",
  description:
    "Cynor Media is India’s trusted BTL marketing company for impactful events, branding, and on-ground activations that connect directly with your audience.",
  keywords: [
    "BTL marketing",
    "event management",
    "promotional campaigns",
    "branding solutions",
    "Cynor Media",
  ],
  robots: "index, follow",
  openGraph: {
    title: "BTL Marketing & Event Management Services",
    description:
      "Cynor Media is India’s trusted BTL marketing company for impactful events, branding, and on-ground activations that connect directly with your audience.",
    url: "https://www.cynormedia.com/service",
    images: [
      {
        url: "https://thumbs2.imgbox.com/c7/4c/CtsxVpHR_t.png",
        width: 1200,
        height: 630,
        alt: "Cynor Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTL Marketing & Event Management Services",
    description:
      "Cynor Media is India’s trusted BTL marketing company for impactful events, branding, and on-ground activations that connect directly with your audience.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/c7/4c/CtsxVpHR_t.png",
        alt: "Cynor Media Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/service",
  },
};

export default function service() {
  return (
    <main>
      <OurService />
      <Campaigncards />
    </main>
  );
}
