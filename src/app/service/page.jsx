 
import dynamic from "next/dynamic";

 
const OurService = dynamic(() => import("../../Components/Ourservices"), {
  ssr: false,
});
const Campaigncards = dynamic(() => import("../../Components/Campaigncards"), {
  ssr: false,
});

export const metadata = {
  title: "BTL Marketing & Event Management Services | Cynor Media",
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
    title: "BTL Marketing & Event Management Services | Cynor Media",
    description:
      "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
    url: "https://www.cynormedia.com/service",
    images: ["/images/og-services.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTL Marketing & Event Management Services | Cynor Media",
    description:
      "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
    images: ["/images/og-services.jpg"],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/service",
  },
};

export default function ServicePage() {
  return (
    <main>
      <OurService />
      <Campaigncards />
    </main>
  );
}
