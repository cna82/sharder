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
  "/images/HeroSection/Hero-section-2.webp",
  "/images/HeroSection/Hero-section-3.webp",
  "/images/HeroSection/Hero-section-4.webp",
  "/images/HeroSection/Hero-section-5.webp",
];

const SliderAbout = () => {
  return (
    <>
      <section className="w-full px-4 md:px-20 bg-gray-100 py-16 flex flex-col md:flex-row flex-wrap items-center justify-between gap-10 overflow-hidden">
        {/* تصویر سمت چپ */}
        <div className="flex-1 flex justify-center min-w-[300px]">
          <div className="w-full h-auto max-w-md">
            <Image
              src="/images/HeroAbout/hero-section-about.png"
              alt="Top Illustration"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* متن و امکانات */}
        <div className="flex-1 text-center md:text-right min-w-[300px]">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-orange-500">
            با هم در
            <span className="text-sky-500  decoration-teal-500 inline-block mx-1.5">
              ارتباطیم!
            </span>
          </h2>

          <p className="text-gray-800 leading-loose mb-4 text-sm md:text-base">
            برند شاردر با افتخار یکی از تولیدکنندگان تخصصی لوازم خانگی برقی در
            ایران است که با تکیه بر دانش فنی، تجربه‌ی سال‌ها فعالیت و توجه ویژه
            به کیفیت، توانسته جایگاه ویژه‌ای در میان خریداران عمده و
            مصرف‌کنندگان خانگی پیدا کند. ما در شاردر با ارائه‌ی محصولات باکیفیت،
            طراحی به‌روز و عملکرد قدرتمند، همواره تلاش کرده‌ایم تا تجربه‌ای
            متفاوت از خرید یک کالای ایرانی را رقم بزنیم. پشتیبانی از محصولات با
            ۵۵۵ روز وارانتی واقعی، نه‌تنها نشان‌دهنده‌ی اعتماد ما به کیفیت
            تولیدات‌مان است، بلکه تضمینی برای آرامش خاطر مشتریان ما نیز به شمار
            می‌آید. امکان خرید مستقیم به‌صورت عمده با ارتباط با نمایندگان فروش
            ما در سراسر کشور فراهم است. تیم پشتیبانی و کارشناسان ما همواره
            آماده‌اند تا با پاسخگویی سریع و دقیق، شما را در انتخاب و استفاده
            بهتر از محصولات شاردر همراهی کنند.
            <br />
            <br />
            حمایت از تولید ملی، نقش مهمی در اشتغال‌زایی و رشد اقتصادی کشور دارد.
            با ما همراه باشید.
          </p>

          {/* امکانات */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-center md:items-stretch justify-center mb-8">
            {[
              { src: "icon-1.svg", label: "ارسال رایگان محصول" },
              { src: "icon-2.svg", label: "ضمانت بازگشت محصول" },
              { src: "icon-3.svg", label: "ضمانت نامه ۵۵۵ روزه" },
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
                <p className="font-medium text-gray-700 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* اسلایدر گالری کارخانه */}
      <div className="w-full py-14 px-4 md:px-20 bg-gray-100 overflow-hidden">
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
      </div>
    </>
  );
};

export default SliderAbout;
