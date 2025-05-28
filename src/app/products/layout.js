import ClientLayoutProducts from "@/Components/ClientLayoutProducts";

export const metadata = {
  title: "محصولات | شرکت شاردر - چرخ گوشت و قطعات صنعتی",
  description:
    "لیست کامل محصولات شرکت شاردر، شامل چرخ گوشت‌های خانگی با طراحی ایرانی و قطعات صنعتی با کیفیت بالا. از تولید ملی حمایت کنید.",
  keywords: [
    "محصولات شاردر",
    "چرخ گوشت خانگی",
    "قطعات صنعتی",
    "لوازم خانگی ایرانی",
    "خرید چرخ گوشت",
    "تولید ملی",
    "شاردر",
    "چرخ گوشت با کیفیت",
    "چرخ گوشت صنعتی",
    "ساخت ایران",
  ],
  metadataBase: new URL("https://sharder.ir"),
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "محصولات | شرکت شاردر",
    description:
      "چرخ گوشت‌های خانگی، قطعات صنعتی و محصولات ایرانی با کیفیت از شرکت شاردر.",
    url: "https://sharder.ir/products",
    siteName: "شاردر",
    type: "website",
    images: [
      {
        url: "https://sharder.ir/images/seo/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "محصولات شرکت شاردر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sharder_ir",
    title: "محصولات | شرکت شاردر",
    description:
      "با محصولات شرکت شاردر آشنا شوید. چرخ گوشت خانگی، صنعتی و قطعات با کیفیت ایرانی.",
    images: ["https://sharder.ir/images/seo/products-og.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
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

const ProductsLayout = ({ children }) => {
  return (
    <>
      <ClientLayoutProducts />
      {children}
    </>
  );
};

export default ProductsLayout;
