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

const images = [
  "/images/imageGalleryFactory/factory-env (1).webp",
  "/images/imageGalleryFactory/factory-env (2).webp",
  "/images/imageGalleryFactory/factory-env (3).webp",
  "/images/imageGalleryFactory/factory-env (4).webp",
  "/images/imageGalleryFactory/factory-env (5).webp",
  "/images/imageGalleryFactory/factory-env (6).webp",
];

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-100 via-white to-teal-100">
      {/* بخش بالایی: تصویر و متن */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/HeroAbout/haro.webp"
            alt="چرخ گوشت صنعتی"
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="text-center md:text-right text-black">
          <Image
            src="/images/logo/logo.png"
            alt="لوگو"
            width={180}
            height={180}
            className="mx-auto md:mx-0 mb-6 drop-shadow-xl"
          />

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-8">
            این مجموعه با هدف تولید لوازم خانگی برقی آشپزخانه، در شرایط دشوار
            اقتصادی و دوران تحریم،
            <br />
            با اتکا به دانش و همت متخصصان ایرانی شکل گرفته و تلاش می‌کند
            محصولاتی با کیفیت، قیمت مناسب و خدماتی شایسته به مردم ایران ارائه
            دهد.
            <br />
            <br />
            حمایت از تولید ملی، نقش مهمی در اشتغال‌زایی و رشد اقتصادی کشور دارد.
            با ما همراه باشید.
          </p>
        </div>
      </div>

      {/* اسلایدر پیشرفته با فوکوس مرکزی */}
      <div className="w-full py-14 px-4 md:px-20">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3500,
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
          className="max-w-7xl"
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
                  className="object-cover rounded-2xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
