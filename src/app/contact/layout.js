import ClientLayoutContact from "@/Components/ClientLayoutContact";

export const metadata = {
  title: "تماس با ما | شرکت شاردر - تولیدکننده چرخ‌گوشت خانگی",
  description:
    "با شرکت شاردر تماس بگیرید؛ تولیدکننده چرخ‌گوشت‌های خانگی و قطعات صنعتی با پشتیبانی سریع و مشاوره رایگان.",
  keywords: [
    "تماس با شاردر",
    "پشتیبانی شاردر",
    "شرکت شاردر",
    "شماره تماس چرخ گوشت",
    "آدرس کارخانه شاردر",
    "فرم تماس با ما",
    "پشتیبانی لوازم خانگی",
    "سرویس شاردر",
  ],
  metadataBase: new URL("https://sharder.ir"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "تماس با ما | شرکت شاردر",
    description:
      "از طریق شماره تلفن، فرم تماس یا شبکه‌های اجتماعی با شرکت شاردر در ارتباط باشید.",
    url: "https://sharder.ir/contact",
    siteName: "شاردر",
    type: "website",
    images: [
      {
        url: "https://sharder.ir/images/seo/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "تماس با شرکت شاردر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sharder_ir",
    title: "تماس با ما | شرکت شاردر",
    description:
      "شرکت شاردر؛ ارتباط سریع با تیم پشتیبانی، شماره تماس، آدرس و فرم تماس آنلاین.",
    images: ["https://sharder.ir/images/seo/contact-og.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  authors: [{ name: "شرکت شاردر | Sharder", url: "https://sharder.ir" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <ClientLayoutContact />
      {children}
    </>
  );
}
