//Client side Slider
"use client";
//imports
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
import Image from "next/image";

const images = [
  "/images/HeroSection/Hero-section-2.webp",
  "/images/HeroSection/Hero-section-3.webp",
  "/images/HeroSection/Hero-section-4.webp",
  "/images/HeroSection/Hero-section-5.webp",
];
// ClientSliderAbout comp
const ClientSliderAbout = () => {
  return (
    <>
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
        className="w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[90vw] sm:!w-[500px] md:!w-[600px] lg:!w-[700px] transition-all duration-300"
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
    </>
  );
};
export default ClientSliderAbout;
