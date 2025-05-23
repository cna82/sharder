"use client";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HeroSectionAbout() {
  const stats = [
    { img: "/images/AboutUs/1.webp", label: "۵۶۰۰ متر فضای تولیدی" },
    { img: "/images/AboutUs/2.webp", label: "۵۰ نماینده فروش" },
    { img: "/images/AboutUs/3.webp", label: "۱۱۳ مرکز خدمات پس از فروش" },
    { img: "/images/AboutUs/4.webp", label: "۱۳۴ نیروی متخصص" },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* متن سمت راست */}
        <div className="text-right space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-relaxed bg-gradient-to-r from-sky-500 to-sky-500 bg-clip-text text-transparent drop-shadow-md">
            تولیدی
            <span className="text-gray-800 inline-block mx-2 text-3xl sm:text-3xl md:text-5xl">
              شاردر
            </span>
            <br />
            کیفیت ایرانی با استاندارد جهانی
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-black ">
            شاردر تولیدکننده چرخ گوشت های خانگی با تمرکز بر
            <span className="text-black font-semibold">
            کنترل کیفیت و بازدهی بالا 
            </span>
            است که تمامی محصولات با
            <span className="text-black font-bold"> استاندارد ISO 9001 </span>
            و کیفیت ممتاز تولید می‌شوند.
          </p>

          <div>
            <p className="text-xl font-bold text-sky-600">
              اصول بنیادین شاردر:
            </p>
            <ul className="list-disc pr-5 mt-3 text-gray-800 space-y-2 text-base">
              <li>تضمین کیفیت و اصالت کالا</li>
              <li>نوآوری بر پایه نیاز واقعی مشتری</li>
              <li>خدمات VIP و احترام به مصرف‌کننده</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold text-sky-600">
              ویژگی‌های خاص ما:
            </p>
            <ul className="list-disc pr-5 mt-3 text-gray-800 space-y-2 text-base">
              <li>تولید بومی با استانداردهای جهانی</li>
              <li>خدمات پس از فروش سراسری، حرفه‌ای و سریع</li>
              <li>555 روز وارانتی بی قید و شرط</li>

            </ul>
          </div>
        </div>

        {/* آمارها با افکت شیشه‌ای جدید */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out group overflow-hidden"
            >
              {/* افکت هاور گرادینت لطیف */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-br from-sky-100 via-white to-gray-100 z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                />
                <p className="mt-4 text-center font-semibold text-sky-700 text-lg">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
