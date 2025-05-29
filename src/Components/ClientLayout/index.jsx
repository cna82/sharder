// src/components/ClientLayout.js
"use client";

import dynamic from "next/dynamic";
import { Vazirmatn, Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "../ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ScrollToTopButton = dynamic(
  () => import("@/Components/ScrollToTopButton"),
  { ssr: false }
);
const WhatsAppButton = dynamic(() => import("@/Components/WhatsAppButton"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Components/Header"));
const Footer = dynamic(() => import("@/Components/Footer"));

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazir",
});

export default function ClientLayout({ children }) {
  return (
    <div
      className={`${vazir.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <ScrollProgress/>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
