// // app/components/HeroSection.tsx
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaBolt,
//   FaShieldAlt,
//   FaTools,
//   FaCogs,
//   FaChevronLeft,
// } from "react-icons/fa";

// const slides = [
//   {
//     src: "/images/HeroSection/Hero-section-1.webp",
//     alt: "قدرت و دوام شاردر",
//     priority: true,
//   },
//   {
//     src: "/images/HeroSection/Hero-section-2.webp",
//     alt: "قدرت و دوام شاردر",
//     priority: true,
//   },
//   {
//     src: "/images/HeroSection/Hero-section-3.webp",
//     alt: "قدرت و دوام شاردر",
//     priority: true,
//   },
//   {
//     src: "/images/HeroSection/Hero-section-4.webp",
//     alt: "قدرت و دوام شاردر",
//     priority: true,
//   },
//   {
//     src: "/images/HeroSection/Hero-section-5.webp",
//     alt: "قدرت و دوام شاردر",
//     priority: true,
//   },
// ];

// const features = [
//   {
//     icon: FaBolt,
//     title: "قدرت موتور بی‌ نظیر",
//     desc: "عملکرد صنعتی در ابعاد خانگی",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "بدنه مقاوم پلاستیکی",
//     desc: "ساخته شده برای سال‌ها دوام",
//   },
//   {
//     icon: FaTools,
//     title: "خدمات پس از فروش",
//     desc: "555 روز وارانتی بی قید و شرط",
//   },
//   { icon: FaCogs, title: "طراحی مهندسی‌ شده", desc: "امن ، زیبا و کاربردی" },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen bg-gray-500 overflow-hidden">
//       {slides?.map((slide, i) => (
//         <div key={i} className="absolute inset-0 w-full h-full">
//           <Image
//             src={slide.src}
//             alt={slide.alt}
//             fill
//             className="object-cover"
//             priority={slide.priority}
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-tr from-gray/80 via-gray-800/50 to-sky-500/20 z-10" />
//         </div>
//       ))}

//       <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
//         <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
//           شاردر؛ قدرتی که اعتماد می‌سازه
//         </h1>
//         <p className="text-sm md:text-lg max-w-xl text-gray-200 bg-black/30 px-4 py-2 rounded mt-4">
//           نسل جدید چرخ‌ گوشت‌های خانگی با تکنولوژی روز دنیا
//         </p>
//         <Link
//           href="/products"
//           className="mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-700 text-white font-bold rounded-full transition"
//         >
//           مشاهده محصولات <FaChevronLeft className="inline-block ml-1" />
//         </Link>

//         <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
//           {features?.map(({ icon: Icon, title, desc }, idx) => (
//             <div
//               key={idx}
//               className="bg-white/10 p-4 rounded-lg text-white text-center backdrop-blur-md"
//             >
//               <div className="flex items-center justify-center w-12 h-12 mx-auto bg-sky-400/50 rounded-full mb-6">
//                 <Icon className="text-lg" />
//               </div>
//               <h3 className="font-bold text-sm">{title}</h3>
//               <p className="text-xs text-gray-300 mt-1">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const slides = [
  {
    src: "/images/HeroSection/Hero-section-1.webp",
    alt: "قدرت و دوام شاردر - اسلاید ۱",
    priority: true,
  },
  {
    src: "/images/HeroSection/Hero-section-2.webp",
    alt: "قدرت و دوام شاردر - اسلاید ۲",
  },
  {
    src: "/images/HeroSection/Hero-section-3.webp",
    alt: "قدرت و دوام شاردر - اسلاید ۳",
  },
  {
    src: "/images/HeroSection/Hero-section-4.webp",
    alt: "قدرت و دوام شاردر - اسلاید ۴",
  },
  {
    src: "/images/HeroSection/Hero-section-5.webp",
    alt: "قدرت و دوام شاردر - اسلاید ۵",
  },
];

const features = [
  {
    icon: FaBolt,
    title: "قدرت موتور بی‌ نظیر",
    desc: "عملکرد صنعتی در ابعاد خانگی",
  },
  {
    icon: FaShieldAlt,
    title: "بدنه مقاوم پلاستیکی",
    desc: "ساخته شده برای سال‌ها دوام",
  },
  {
    icon: FaTools,
    title: "خدمات پس از فروش",
    desc: "555 روز وارانتی بی قید و شرط",
  },
  {
    icon: FaCogs,
    title: "طراحی مهندسی‌ شده",
    desc: "امن ، زیبا و کاربردی",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // اسلاید بعدی هر 6 ثانیه
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section
      aria-label="اسلایدر تصاویر و معرفی شاردر"
      className="relative w-full h-full bg-gray-900 overflow-hidden py-13"
    >
      {/* اسلاید فعال */}
      <div className="absolute inset-0 w-full h-full select-none">
        <Image
          src={slides[activeIndex].src}
          alt={slides[activeIndex].alt}
          fill
          className="object-cover"
          priority={slides[activeIndex].priority ?? false}
          sizes="100vw"
          loading={activeIndex === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/50 via-gray-900/70 to-blue-600/30 z-10" />
      </div>

      {/* محتوای متنی روی اسلایدر */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12 w-full mx-auto">
        <h1 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white leading-tight">
          شاردر؛ قدرتی که اعتماد می‌سازه
        </h1>
        <p className="text-base md:text-xl max-w-xl text-gray-300 bg-black/40 px-5 py-3 rounded-lg mt-6">
          نسل جدید چرخ‌ گوشت‌های خانگی با تکنولوژی روز دنیا
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-700 text-white font-bold rounded-full transition focus:outline-none focus:ring-4 focus:ring-sky-400"
          aria-label="مشاهده محصولات شاردر"
        >
          مشاهده محصولات <FaChevronLeft />
        </Link>

        {/* دکمه‌های تغییر اسلاید */}
        <div className="flex w-full justify-between mt-[-1.8rem]">
          <button
            aria-label="اسلاید قبلی"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
              )
            }
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaChevronRight />
          </button>
          <button
            aria-label="اسلاید بعدی"
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaChevronLeft />
          </button>
        </div>

        {/* ویژگی‌ها */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <article
              key={idx}
              className="bg-white/10 p-5 rounded-lg text-white text-center backdrop-blur-md"
              role="group"
              aria-labelledby={`feature-title-${idx}`}
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-sky-400/60 rounded-full mb-5">
                <Icon className="text-2xl" aria-hidden="true" />
              </div>
              <h3 id={`feature-title-${idx}`} className="font-bold text-base">
                {title}
              </h3>
              <p className="text-xs text-gray-300 mt-2">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
