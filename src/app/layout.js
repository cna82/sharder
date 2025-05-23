// imports
import "./globals.css";
import ClientLayout from "@/Components/ClientLayout";
import { dir } from "i18next";
import Head from "next/head";
import Script from "next/script";

// meta datas
export const metadata = {
  title: "شاردر | بهترین تولیدکننده چرخ گوشت و لوازم خانگی ایرانی",
  description:
    "شاردر، برند معتبر ایرانی در تولید لوازم خانگی و چرخ گوشت با کیفیت بالا، طراحی مدرن و قیمت مناسب. خرید آنلاین و ارسال سریع در سراسر ایران.",
  keywords: [
    "چرخ گوشت ایرانی",
    "لوازم خانگی ایرانی",
    "شاردر",
    "تولیدکننده چرخ گوشت",
    "خرید آنلاین لوازم خانگی",
    "چرخ گوشت با کیفیت",
    "لوازم خانگی برقی",
    "شاردر محصولات",
    "شاردر لوازم خانگی",
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0056b3",
  charset: "utf-8",
  alternates: {
    canonical: "https://sharder.ir",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "شاردر | بهترین تولیدکننده چرخ گوشت و لوازم خانگی ایرانی",
    description:
      "خرید چرخ گوشت و لوازم خانگی با کیفیت ساخت ایران از شاردر. محصولات با گارانتی و ارسال سریع به سراسر کشور.",
    url: "https://sharder.ir",
    siteName: "شاردر",
    images: [
      {
        url: "https://sharder.ir/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "لوگوی شاردر - تولیدکننده چرخ گوشت و لوازم خانگی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sharder_ir",
    creator: "@sharder_ir",
    title: "شاردر | بهترین چرخ گوشت و لوازم خانگی ایرانی",
    description:
      "شاردر، انتخاب اول شما برای خرید چرخ گوشت و لوازم خانگی برقی با کیفیت و گارانتی معتبر.",
    images: ["https://sharder.ir/images/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// JSON-LD برای Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "شاردر",
  url: "https://sharder.ir",
  logo: "https://sharder.ir/images/logo.png",
  sameAs: ["https://instagram.com/sharder.co", "https://t.me/+988433187"],
  description:
    "شاردر تولیدکننده تخصصی چرخ گوشت و لوازم خانگی ایرانی با کیفیت بالا، طراحی حرفه‌ای و خدمات پس از فروش.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressLocality: " تهران قرچک",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+98-21-36917603",
      contactType: "customer service",
      areaServed: "IR",
    },
  ],
};

// JSON-LD برای FaqSection
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "آیا محصولات شما تست کیفیت می‌شوند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، تمامی محصولات ما قبل از ارسال از نظر کیفیت بررسی و تست می‌شوند.",
      },
    },
    {
      "@type": "Question",
      name: "چگونه محصولات شاردر را خریداری کنم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "شما می‌توانید از طریق تماس مستقیم با واحد فروش ما خرید خود را انجام دهید.",
      },
    },
    {
      "@type": "Question",
      name: "شرایط گارانتی محصولات چگونه است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تمامی محصولات دارای 555 روز وارانتی بی قید و شرط می‌باشند.",
      },
    },
    {
      "@type": "Question",
      name: "نحوه استفاده صحیح از محصولات را از کجا یاد بگیرم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "راهنمای استفاده در جعبه محصول قرار دارد و همچنین کاتالوگ محصولات در سایت موجود است.",
      },
    },
    {
      "@type": "Question",
      name: "برای وارانتی محصولات به کجا مراجعه کنم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "می‌توانید با خدمات پس از فروش ما تماس بگیرید تا شما را راهنمایی کنند.",
      },
    },
    {
      "@type": "Question",
      name: "جنس تیغه ها از چه متریالی هستند ؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تمامی تیغه های محصولات ما از جنس فولاد ضد زنگ و وارداتی هستند.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir={dir("fa")}>
      <Head>
        {/* Font (اختیاری اما زیبا) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        {/* Structured Data */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
