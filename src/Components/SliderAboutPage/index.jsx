"use client";
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

// تصاویر گالری کارخانه
const images = [
  "/images/HeroSection/Hero-section-1.webp",
  "/images/HeroSection/Hero-section-2.webp",
  "/images/HeroSection/Hero-section-3.webp",
  "/images/HeroSection/Hero-section-4.webp",
  "/images/HeroSection/Hero-section-5.webp",
];

const AboutHero = () => {
  return (
    <section className="w-full bg-gray-200">
      {/* بخش معرفی */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* تصویر اصلی */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/HeroAbout/haro.webp"
            alt="چرخ گوشت صنعتی"
            fill
            priority // مهم برای LCP
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-3xl object-cover"
          />
        </div>

        {/* توضیحات و لوگو */}
        <div className="text-center md:text-right text-black">
          <div className="w-[180px] h-[180px] relative mx-auto md:mx-0  drop-shadow-xl">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو شاردر"
              fill
              sizes="180px"
              className="object-contain"
              priority // چون بالاست
            />
          </div>

          <p className=" text-base sm:text-lg md:text-xl text-gray-700 leading-8">
            این مجموعه با هدف تولید لوازم خانگی برقی آشپزخانه، در شرایط دشوار
            اقتصادی و دوران تحریم، با اتکا به دانش و همت متخصصان ایرانی شکل
            گرفته و تلاش می‌کند محصولاتی با کیفیت، قیمت مناسب و خدماتی شایسته به
            مردم ایران ارائه دهد.
            <br />
            <br />
            حمایت از تولید ملی، نقش مهمی در اشتغال‌زایی و رشد اقتصادی کشور دارد.
            با ما همراه باشید.
          </p>
        </div>
      </div>

      {/* اسلایدر گالری کارخانه (دست‌نخورده از نظر طراحی) */}
      <div className="w-full py-14 px-4 md:px-20">
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
    </section>
  );
};

export default AboutHero;
