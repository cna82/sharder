"use client";
//ye box ezafe kon balash baram kheili shik va ajlesii bashe
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const AboutSection = () => {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/images/imageGalleryFactory/factory-env (${i + 1}).webp`
  );

  return (
    <section className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-200 py-20 px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-gray-300 to-sky-200 text-white py-20 mb-25 px-6 text-center rounded-lg">
        <h1 className="text-4xl font-extrabold mb-6 leading-snug border-b border-gray-700 pb-3">
          <span className="text-orange-600 text-5xl">شاردر؛</span> قدرت در قلب
          آشپزخانه
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
          چرخ گوشت خانگی شاردر، ترکیبی از قدرت، آرامش و اعتماد برای خانواده‌هایی
          که کیفیت براشون مهمه.
        </p>
      </section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* متن درباره ما */}
        <div className="text-gray-800 space-y-8 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-600 relative inline-block border-b w-full p-5">
            <span className="relative z-10">لوازم خانگی شاردر</span>
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            در کارخانه <strong className="text-teal-600">شاردر</strong>، ما تنها یک
            ابزار تولید نمی‌کنیم؛ بلکه چرخ گوشت را به نمادی از اعتماد، ایمنی و
            دوام تبدیل کرده‌ایم.
          </p>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            با بهره‌گیری از سال‌ها تجربه، کیفیت بالا و نوآوری مداوم، جایگاه
            ویژه‌ای در میان خانواده‌ها و بازار حرفه‌ای یافته‌ایم. محصولات ما با
            استفاده از بهترین متریال و تکنولوژی روز طراحی شده‌اند.
          </p>

          <p className="text-xl font-bold text-teal-700">
            شاردر، همراه مطمئن آشپزخانه‌ی شما
          </p>
        </div>
        {/* Image slider */}
        <div className="relative w-full h-[280px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-[10px] border-double border-sky-500">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
      </div>
    </section>
  );
};

export default AboutSection;
