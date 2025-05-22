import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsAppButton from "@/Components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "شاردر | صفحه اصلی ",
  description: "صفحه اصلی سایت شاردر  و تولید کننده لوازم خانگی  ",
  icons: {
    icon: "/images/favicon.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ScrollToTopButton />
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
