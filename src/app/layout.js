"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { usePathname } from "next/navigation"; // optional, remove if not used
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // No need to check pathname if Navbar/Footer on all pages
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
