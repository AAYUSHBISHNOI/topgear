import { Poppins } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  // fallback meta only
  keywords: [
    "Cynor Media",
    "BTL Marketing",
    "Event Management",
    "Brand Activation",
    "Float Van",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: "https://www.cynormedia.com",
  openGraph: {
    title: "Cynor Media",
    description: "Leading BTL marketing and event solutions across India.",
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
    title: "Cynor Media",
    description: "BTL marketing agency for brand visibility and events.",
    images: [
      {
        url: "https://thumbs2.imgbox.com/df/42/aaVg3uNj_t.png",
        alt: "Cynor Media",
      },
    ],
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
