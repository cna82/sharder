//imports
import ClientImageSlider from "./ClientImageSlider";
// AboutSection comp
const AboutSection = () => {
  //function for handling images src
  const images = Array.from(
    { length: 6 },
    (_, i) => `/images/imageGalleryFactory/factory-env (${i + 1}).webp`
  );
  // return of comp
  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      {/* Hero Section */}
      <section className="bg-sky-400/80 text-white py-20 mb-25 px-6 text-center rounded-lg">
        <h1 className="text-4xl font-cinema font-extrabold mb-6 leading-snug border-b border-white pb-3">
          <span className="text-yellow-200">شاردر</span> ؛ قدرت در قلب آشپزخانه
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
          چرخ گوشت خانگی شاردر، ترکیبی از قدرت، آرامش و اعتماد برای خانواده‌هایی
          که کیفیت براشون مهمه.
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* about us  */}
        <div className="text-gray-800 space-y-8 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 relative inline-block border-b w-full p-5">
            <span className="relative z-10">لوازم خانگی شاردر</span>
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            در کارخانه <strong className="text-sky-700">شاردر</strong>، ما تنها
            یک ابزار تولید نمی‌کنیم؛ بلکه چرخ گوشت را به نمادی از اعتماد، ایمنی
            و دوام تبدیل کرده‌ایم.
          </p>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            با بهره‌گیری از سال‌ها تجربه، کیفیت بالا و نوآوری مداوم، جایگاه
            ویژه‌ای در میان خانواده‌ها و بازار حرفه‌ای یافته‌ایم. محصولات ما با
            استفاده از بهترین متریال و تکنولوژی روز طراحی شده‌اند.
          </p>

          <p className="text-xl font-bold text-sky-700">
            شاردر، همراه مطمئن آشپزخانه‌ی شما
          </p>
        </div>

        {/* client side slider  */}
        <ClientImageSlider images={images} />
      </div>
    </section>
  );
};

export default AboutSection;
