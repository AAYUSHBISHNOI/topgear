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
  robots: {
    index: true,
    follow: true,
    "max-snippet": 160,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "About Us - Leading BTL Marketing Agency | Cynor Media",
    description:
      "Learn about Cynor Media - India's leading BTL marketing agency with expertise in brand activations, event management, and promotional campaigns. Trusted by Tata, Maruti Suzuki, Hero, and John Deere.",
    url: "https://www.cynormedia.com/about-us",
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
