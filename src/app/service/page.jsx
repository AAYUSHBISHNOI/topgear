// app/service/page.js
import dynamic from "next/dynamic";

// Dynamically load client-only components
const OurService = dynamic(() => import("../../Components/Ourservices"), {
  ssr: false,
});
const Campaigncards = dynamic(() => import("../../Components/Campaigncards"), {
  ssr: false,
});

// ✅ Server-only metadata (used by Next.js App Router)
export const metadata = {
  title: {
    template: "%s | Cynor Media",
    absolute: "Cynor Media - BTL Marketing Experts in India",
  },
  description:
    "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
  keywords:
    "BTL marketing, event management, promotional campaigns, branding solutions, Cynor Media",
  robots: "index, follow",
  openGraph: {
    title: "Cynor Media - BTL Marketing Experts in India",
    description:
      "Explore Cynor Media's expert BTL marketing services, including event management, promotional campaigns, and branding solutions across India and Australia.",
    url: "https://www.cynormedia.com/service",
    images: ["/images/og-services.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynor Media - BTL Marketing Experts in India",
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
