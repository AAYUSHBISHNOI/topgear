import { Poppins } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Cynor Media - Below the Line Marketing Company in India",
  description:
    "Cynor Media - Below the line Marketing Company in India, from activations to targeted promotions, to boost your brand’s visibility.",
  keywords: [
    "Cynor Media",
    "BTL Marketing",
    "Event Management",
    "Brand Activation",
    "Float Van",
    "India",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.cynormedia.com"),
  openGraph: {
    title: "Cynor Media - Below the line Marketing Company in India",
    description:
      "From activations to targeted promotions, boost your brand’s visibility with Cynor Media.",
    url: "https://www.cynormedia.com",
    images: [
      {
        url: "https://thumbs2.imgbox.com/df/42/aaVg3uNj_t.png",
        width: 1200,
        height: 630,
        alt: "Cynor Media",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cynor Media - Below the line Marketing Company in India",
    description:
      "From activations to targeted promotions, boost your brand’s visibility with Cynor Media.",
    images: ["https://thumbs2.imgbox.com/df/42/aaVg3uNj_t.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
