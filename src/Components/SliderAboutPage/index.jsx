//imports
import Image from "next/image";
import ClientSliderAbout from "./ClientSliderAbout";
//slider about comp
const SliderAbout = () => {
  return (
    <>
      <section className="w-full px-4 md:px-20 bg-gray-100 py-16 flex flex-col md:flex-row flex-wrap items-center justify-between gap-10 overflow-hidden">
        {/* image section */}
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

        {/* text and features */}
        <div className="flex-1 text-center md:text-right min-w-[300px]">
          <h2 className="font-DimaYekanBold text-3xl md:text-4xl font-extrabold mb-4 text-orange-500">
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

          {/* features */}
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

      {/* slider */}
      <div className="w-full py-14 px-4 md:px-20 bg-gray-100 overflow-hidden">
        <ClientSliderAbout />
      </div>
    </>
  );
};

export default SliderAbout;
