import Heroaboutus from "../Components/Heroaboutus";
import Ourvision from "../Components/Ourvision";
import Experienceaboutus from "../Components/Experinceaboutus";
import Customeraboutus from "../Components/Customeraboutus";
import WhyChooseUs from "../Components/Whychooseusaboutus";
import Ourmissionaboutus from "../Components/Ourmissionaboutus";
import Enoughtalks from "../Common/Enoughtalks";

export const dynamic = "force-static";

export const metadata = {
  title: "About Us - Leading BTL Marketing Agency | Cynor Media",
  description:
    "Learn about Cynor Media - India's leading BTL marketing agency with expertise in brand activations, event management, and promotional campaigns. Trusted by Tata, Maruti Suzuki, Hero, and John Deere.",
  keywords: [
    "about Cynor Media",
    "BTL marketing agency",
    "event management company",
    "brand activation experts",
    "marketing agency India",
    "promotional campaigns",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About Us - Leading BTL Marketing Agency | Cynor Media",
    description:
      "Learn about Cynor Media - India's leading BTL marketing agency with expertise in brand activations, event management, and promotional campaigns. Trusted by Tata, Maruti Suzuki, Hero, and John Deere.",
    url: "https://www.cynormedia.com/about-us",
    siteName: "Cynor Media",
    images: [
      {
        url: "https://www.cynormedia.com/images/about-og-image.png",
        width: 1200,
        height: 630,
        alt: "About Cynor Media",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Leading BTL Marketing Agency | Cynor Media",
    description:
      "Learn about Cynor Media - India's leading BTL marketing agency with expertise in brand activations, event management, and promotional campaigns. Trusted by Tata, Maruti Suzuki, Hero, and John Deere.",
    images: ["https://www.cynormedia.com/images/about-og-image.png"],
  },
  alternates: {
    canonical: "https://www.cynormedia.com/about-us",
  },
};

const AboutUs = () => {
  return (
    <main>
      <Heroaboutus />
      <Ourvision />
      <Experienceaboutus />
      <Customeraboutus />
      <WhyChooseUs />
      <Ourmissionaboutus />
      <Enoughtalks />
    </main>
  );
};

export default AboutUs;
