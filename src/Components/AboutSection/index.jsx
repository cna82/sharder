


import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-br from-teal-100 via-white to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* تصویر */}
        <div className="w-full md:w-[45%] h-[280px] md:h-[420px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/AboutSection/about-sectio.webp"
            alt="کارخانه لوازم خانگی شاردر"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* متن معرفی */}
        <div className="w-full md:w-[55%] space-y-8 text-center md:text-right text-gray-800">
          <h2 className="text-4xl font-extrabold text-purple-600 relative inline-block after:content-[''] after:block after:h-1 after:w-full after:bg-teal-600 after:rounded-full after:mt-3 mx-auto md:mx-0">
            لوازم خانگی شاردر
          </h2>

          <p className="text-lg md:text-xl leading-[2.2rem] text-gray-700">
            در شرکت <span className="text-teal-600 font-semibold">شاردر</span>، ما به چیزی فراتر از تولید یک ابزار ساده باور داریم؛ ما چرخ گوشت را به ابزاری قابل اعتماد، ایمن و ماندگار برای هر آشپزخانه تبدیل کرده‌ایم.
          </p>

          <p className="text-lg md:text-xl leading-[2.2rem] text-gray-700">
            با سال‌ها تجربه و تمرکز بر کیفیت، نوآوری و رضایت مشتری، توانسته‌ایم جایگاهی ویژه در میان خانواده‌ها و بازارهای تخصصی کسب کنیم. محصولات ما با بهره‌گیری از تکنولوژی روز دنیا و مواد اولیه مرغوب طراحی و تولید می‌شوند.
          </p>

          <p className="text-xl font-bold text-teal-700">
            شاردر، همراه مطمئن آشپزخانه‌ی شما 💚
          </p>
        </div>
      </div>
    </section>
  );
}
