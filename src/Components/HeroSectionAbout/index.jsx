

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
    <section className="w-full bg-gradient-to-br from-white via-purple-50 to-teal-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* متن سمت راست */}
        <div className="text-right space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-relaxed bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            تولیدی  <span className="text-rose-600 inline-block mx-2 text-3xl sm:text-3xl  md:text-5xl">شاردر</span> <br />کیفیت ایرانی با استاندارد جهانی
          </h2>

          <p className="text-lg sm:text-xl leading-loose text-purple-900">
            شاردر تولیدکننده لوازم خانگی کوچک با تمرکز بر:
            <span className="text-teal-600 font-semibold"> چرخ گوشت، آبمیوه‌گیری، غذاساز، پلوپز، جاروبرقی و... </span>
            است که تمامی محصولات با
            <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent font-bold">
              {" "}استاندارد ISO 9001
            </span>
            {" "}و کیفیت ممتاز تولید می‌شوند.
          </p>

          <div>
            <p className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              اصول بنیادین شاردر:
            </p>
            <ul className="list-disc pr-5 mt-3 text-gray-800 space-y-2 text-base">
              <li>تضمین کیفیت و اصالت کالا</li>
              <li>نوآوری بر پایه نیاز واقعی مشتری</li>
              <li>خدمات VIP و احترام به مصرف‌کننده</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              ویژگی‌های خاص ما:
            </p>
            <ul className="list-disc pr-5 mt-3 text-gray-800 space-y-2 text-base">
              <li>تولید بومی با استانداردهای جهانی</li>
              <li>خدمات پس از فروش سراسری، حرفه‌ای و سریع</li>
            </ul>
          </div>
        </div>

        {/* آمارها با افکت شیشه‌ای */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-purple-200/50 bg-white/30 backdrop-blur-xl p-6 flex flex-col items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out group overflow-hidden"
            >
              {/* گرادینت پس‌زمینه در هاور */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-br from-purple-100 via-teal-100 to-red-100 z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={72}
                  height={72}
                  className="object-contain"
                />
                <p className="mt-4 text-center font-semibold text-purple-800 text-lg">
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
