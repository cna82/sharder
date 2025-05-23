"use client";

import Script from "next/script";

export default function ClientLayoutAbout() {
  return (
    <>
      {/* Structured Data: Organization */}
      <Script
        id="ld-json-org"
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
              "شرکت شاردر، تولیدکننده انواع چرخ گوشت خانگی و قطعات صنعتی با کیفیت.",
            sameAs: [
              "https://instagram.com/sharder",
              "https://linkedin.com/company/sharder",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+98-21-12345678",
                contactType: "customer service",
                areaServed: "IR",
                availableLanguage: ["fa", "en"],
              },
            ],
          }),
        }}
      />

      {/* Structured Data: WebSite + SearchAction */}
      <Script
        id="ld-json-site"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "شاردر",
            url: "https://sharder.ir",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://sharder.ir/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
