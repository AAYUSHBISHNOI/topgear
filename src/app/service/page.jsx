import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";

export const dynamic = "force-static";

export const metadata = {
  title: "BTL Marketing & Event Management Services",
  description:
    "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
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
      "Cynor Media delivers top-notch BTL marketing, event management, and promotional campaign services across India to boost your brand visibility and engagement.",
    url: "https://www.cynormedia.com/service",
    images: ["/images/og-services.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTL Marketing & Event Management Services",
    description:
      "Cynor Media delivers top-notch BTL marketing, event management, and promotional campaign services across India to boost your brand visibility and engagement.",
    images: ["/images/og-services.jpg"],
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
