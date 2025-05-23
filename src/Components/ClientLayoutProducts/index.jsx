"use client";

import Script from "next/script";

export default function ClientLayoutProducts() {
  return (
    <>
      {/* Structured Data: Organization */}
      <Script
        id="ld-json-products-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "شرکت شاردر",
            url: "https://sharder.ir",
            logo: "https://sharder.ir/images/logo.png",
            description:
              "تولیدکننده چرخ گوشت‌های خانگی و قطعات صنعتی با کیفیت بالا.",
            sameAs: [
              "https://instagram.com/sharder",
              "https://linkedin.com/company/sharder",
            ],
          }),
        }}
      />

      {/* Structured Data: CollectionPage برای محصولات */}
      <Script
        id="ld-json-products-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "محصولات شرکت شاردر",
            url: "https://sharder.ir/products",
            description:
              "لیست کامل چرخ گوشت‌های خانگی و قطعات صنعتی تولید شده توسط شرکت شاردر.",
          }),
        }}
      />
    </>
  );
}
