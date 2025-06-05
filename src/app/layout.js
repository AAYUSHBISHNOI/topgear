"use client";

import { Poppins } from "next/font/google";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import "./globals.css";

// Load Poppins with selected weights and variable font support
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
