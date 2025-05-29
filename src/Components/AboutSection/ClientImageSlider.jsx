"use client";
//imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// ClientImageSlider comp 
const ClientImageSlider = ({ images }) => (
  <div className="relative w-full h-[280px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-[10px] border-double border-sky-500">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full h-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Factory Image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ClientImageSlider;
