"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaChevronLeft,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const slides = [
  "/images/HeroSection/Hero-section-1.webp",
  "/images/HeroSection/Hero-section-2.webp",
  "/images/HeroSection/Hero-section-3.webp",
  "/images/HeroSection/Hero-section-4.webp",
  "/images/HeroSection/Hero-section-5.webp",
];

const features = [
  {
    icon: FaBolt,
    title: "قدرت موتور بی‌نظیر",
    desc: "عملکرد صنعتی در ابعاد خانگی",
  },
  {
    icon: FaShieldAlt,
    title: "بدنه مقاوم فولادی",
    desc: "ساخته شده برای سال‌ها دوام",
  },
  {
    icon: FaTools,
    title: "خدمات پس از فروش",
    desc: "در دسترس، سریع، مطمئن",
  },
  {
    icon: FaCogs,
    title: "طراحی مهندسی‌شده",
    desc: "امن، زیبا و کاربردی",
  },
];

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const swiperRef = useRef(null);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-vazir ">
      {dimensions.width > 0 && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/20"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                opacity: 0,
              }}
              animate={{
                x: [null, Math.random() * dimensions.width],
                y: [null, Math.random() * dimensions.height],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        speed={1000}
        loop
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                priority
                className="object-cover object-center md:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-purple-800/20 z-10" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.15 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -z-10 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"
                />

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 text-white text-center leading-tight"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                    شاردر؛ قدرتی که اعتماد می‌سازه
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0.6 }}
                  className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl text-gray-200 backdrop-blur-[1px] px-3 py-2 rounded-lg bg-black/20 text-center"
                >
                  نسل جدید چرخ‌گوشت‌های صنعتی و خانگی با تکنولوژی روز دنیا
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 0.9 }}
                >
                  <Link href="#products">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(128, 90, 213, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        مشاهده محصولات
                        <FaChevronLeft className="text-xs sm:text-sm mt-0.5" />
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="mt-10 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 sm:gap-6 max-w-6xl w-full px-4"
                >
                  {features.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
                      }}
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md text-center transition-all duration-300 border border-white/10"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/30">
                        <Icon className="text-xl sm:text-2xl text-purple-300" />
                      </div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 z-30 !text-[6px] !text-purple-600 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full" />
      <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 z-30 !text-[6px] !text-purple-600 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full" />

      <div className="swiper-pagination !bottom-6 !left-1/2 !-translate-x-1/2 !w-auto space-x-2" />
    </section>
  );
}
