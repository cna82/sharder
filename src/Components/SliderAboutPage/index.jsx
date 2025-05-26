'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/HeroSection/Hero-section-2.webp",
  "/images/HeroSection/Hero-section-3.webp",
  "/images/HeroSection/Hero-section-4.webp",
  "/images/HeroSection/Hero-section-5.webp",
];



export default function ContactSection() {
  return (
    <>
    <section className="w-full px-4 bg-gray-100 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* تصویر سمت چپ */}
      <div className="flex-1 flex justify-center">
        <div className="w-full h-auto max-w-md">
          <Image
            src="/images/HeroAbout/hero-section-about.png"
            alt="Top Illustration"
            layout="responsive"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* متن و امکانات */}
      <div className="flex-1 text-center md:text-right">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-900">
          با هم در{" "}
          <span className="text-sky-500  decoration-teal-500">ارتباطیم!</span>
        </h2>

        <p className="text-gray-800 leading-loose mb-4 text-sm md:text-base">
          این مجموعه با هدف تولید لوازم خانگی برقی آشپزخانه، در شرایط دشوار
          اقتصادی و دوران تحریم، با اتکا به دانش و همت متخصصان ایرانی شکل گرفته
          و تلاش می‌کند محصولاتی با کیفیت، قیمت مناسب و خدماتی شایسته به مردم
          ایران ارائه دهد.
          <br />
          <br />
          حمایت از تولید ملی، نقش مهمی در اشتغال‌زایی و رشد اقتصادی کشور دارد.
          با ما همراه باشید.
        </p>

        {/* امکانات */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-center md:items-stretch justify-center mb-8">
          {/* کارت‌ها */}
          {[
            { src: "icon-1.svg", label: "ارسال رایگان محصول" },
            { src: "icon-2.svg", label: "ضمانت بازگشت محصول" },
            { src: "icon-3.svg", label: "بازگشت بخشی از مبلغ" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 w-full md:w-64 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="mx-auto mb-3 w-10 h-10 relative">
                <Image
                  src={`/images/HeroAbout/${item.src}`}
                  alt={item.label}
                  width={40}
                  height={40}
                />
              </div>
              <p className="font-medium text-gray-700 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

     
    </section>
     {/* اسلایدر گالری کارخانه */}
     <div className="w-full py-14 px-4 bg-gray-100 md:px-20">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="max-w-10xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[80%] sm:!w-[500px] md:!w-[600px] lg:!w-[700px] transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl group shadow-2xl">
                <Image
                  src={src}
                  alt={`اسلاید ${idx + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 80vw, 600px"
                  className="object-cover rounded-2xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

