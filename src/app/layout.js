// app/layout.js
import { Poppins } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
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
  metadataBase: new URL("https://www.cynormedia.com"),
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
