"use client";

import Script from "next/script";

export default function ClientLayoutContact() {
  return (
    <>
      {/* Structured Data: Organization + ContactPage */}
      <Script
        id="ld-json-contact-org"
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
              "شرکت شاردر، تولیدکننده چرخ گوشت خانگی و قطعات صنعتی با کیفیت بالا.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+98-21-12345678",
                contactType: "customer support",
                areaServed: "IR",
                availableLanguage: ["fa", "en"],
              },
            ],
            sameAs: [
              "https://instagram.com/sharder",
              "https://linkedin.com/company/sharder",
            ],
          }),
        }}
      />

      {/* Structured Data: ContactPage */}
      <Script
        id="ld-json-contact-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "تماس با ما - شرکت شاردر",
            url: "https://sharder.ir/contact",
            description:
              "راه‌های تماس با شرکت شاردر؛ از طریق تلفن، آدرس یا فرم تماس با ما.",
          }),
        }}
      />
    </>
  );
}
