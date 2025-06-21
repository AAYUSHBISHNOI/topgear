import Campaigncards from "../Components/Campaigncards";
import OurService from "../Components/Ourservices";

export const dynamic = "force-static";

export const metadata = {
  title:
    "BTL Marketing Services - Brand Activation & Event Management | Cynor Media",
  description:
    "Explore Cynor Media's comprehensive BTL marketing services including float van campaigns, brand activations, event management, promotional solutions, and targeted marketing campaigns across India.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": 160,
    "max-image-preview": "large",
  },
  openGraph: {
    title:
      "BTL Marketing Services - Brand Activation & Event Management | Cynor Media",
    description:
      "Explore Cynor Media's comprehensive BTL marketing services including float van campaigns, brand activations, event management, promotional solutions, and targeted marketing campaigns across India.",
    url: "https://www.cynormedia.com/service",
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
