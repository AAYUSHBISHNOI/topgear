 
import dynamic from "next/dynamic";

 
const OurService = dynamic(() => import("../../Components/Ourservices"), {
  ssr: false,
});
const Campaigncards = dynamic(() => import("../../Components/Campaigncards"), {
  ssr: false,
});

 
export async function generateMetadata() {
  return {
    title: "Services - BTL Marketing & Event Management | Cynor Media",
    description:
      "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.",
    openGraph: {
      title: "Services - BTL Marketing & Event Management | Cynor Media",
      description:
        "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.",
      url: "https://www.cynormedia.com/service",
      images: ["/images/og-services.jpg"],
    },
    twitter: {
      title: "Services - BTL Marketing & Event Management | Cynor Media",
      description:
        "Discover Cynor Media's top-notch services in BTL marketing, event management, exhibitions, portable displays, and float van promotions.",
      images: ["/images/og-services.jpg"],
    },
    alternates: {
      canonical: "https://www.cynormedia.com/service",
    },
  };
}

export default function ServicePage() {
  return (
    <main>
      <OurService />
      <Campaigncards />
    </main>
  );
}
