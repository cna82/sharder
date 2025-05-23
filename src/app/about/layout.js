import ClientLayoutAbout from "@/Components/ClientLayoutAbout";

export const metadata = {
  title: "درباره ما | شرکت شاردر - تولیدکننده لوازم خانگی برقی",
  description:
    "شرکت شاردر، پیشرو در تولید چرخ‌گوشت‌های خانگی و قطعات صنعتی با کیفیت بالا. با ما بیشتر آشنا شوید.",
  keywords: [
    "درباره شاردر",
    "شرکت شاردر",
    "تولیدکننده چرخ گوشت",
    "چرخ گوشت خانگی",
    "قطعات صنعتی",
    "لوازم خانگی ایرانی",
    "چرخ گوشت های خانگی",
    "چرخ گوشت های صنعتی",
  ],
  metadataBase: new URL("https://sharder.ir"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "درباره ما | شرکت شاردر",
    description:
      "با ما بیشتر آشنا شوید. شرکت شاردر تولیدکننده چرخ‌گوشت خانگی با کیفیت و طراحی ایرانی.",
    url: "https://sharder.ir/about",
    siteName: "شاردر",
    type: "website",
    images: [
      {
        url: "https://sharder.ir/images/seo/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "شرکت شاردر - چرخ‌گوشت خانگی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sharder_ir",
    title: "درباره ما | شرکت شاردر",
    description:
      "با شرکت شاردر بیشتر آشنا شوید؛ تولیدکننده چرخ گوشت خانگی و لوازم صنعتی.",
    images: ["https://sharder.ir/images/seo/about-og.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  authors: [{ name: "شاردر | Sharder", url: "https://sharder.ir" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <ClientLayoutAbout />
      {children}
    </>
  );
}
