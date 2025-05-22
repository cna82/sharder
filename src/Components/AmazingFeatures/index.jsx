import {
  LuShield,
  LuTruck,
  LuCreditCard,
  LuHeadphones,
  LuRotateCcw,
  LuFactory,
} from "react-icons/lu";
import AmazingFeaturesSlider from "./AmazingSlider";

const features = [
  {
    icon: LuShield,
    color: "text-sky-500",
    title: "خدمات پس از فروش عالی",
    description:
      "تمامی محصولات دارای ۵۵۵ روز وارانتی تعویض هستند؛ یعنی در صورت خرابی، محصول تعویض می‌شود نه تعمیر.",
  },
  {
    icon: LuTruck,
    color: "text-orange-500",
    title: "ارسال رایگان",
    description:
      "شاردر محصولات را با ارسال کاملاً رایگان و بدون نگرانی به مشتریان تحویل می‌دهد.",
  },
  {
    icon: LuCreditCard,
    color: "text-sky-500",
    title: "شرایط پرداخت عالی",
    description:
      "برای عاملین خرید و نمایندگان، شرایط پرداخت بسیار منعطف و قابل اجرا در نظر گرفته شده است.",
  },
  {
    icon: LuHeadphones,
    color: "text-orange-500",
    title: "پشتیبانی درجه یک",
    description:
      "پاسخگویی سریع و راهنمایی کامل توسط کارشناسان و مسئولین کارخانه شاردر.",
  },
  {
    icon: LuRotateCcw,
    color: "text-sky-500",
    title: "تضمین بازگشت وجه",
    description:
      "برای تجربه خرید مطمئن، شاردر تضمین بازگشت وجه را فراهم کرده است.",
  },
  {
    icon: LuFactory,
    color: "text-orange-500",
    title: "تولید OEM با برند شما",
    description:
      "در کارخانه شاردر با بهترین متریال، محصول خود را با برند اختصاصی تولید کنید.",
  },
];

const AmazingFeatures = () => {
  return (
    <section
      dir="rtl"
      className="relative py-16 px-4 sm:px-10 bg-gray-100 overflow-hidden"
    >
      {/* پس‌زمینه‌های ملایم */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-sky-200 opacity-20 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none select-none" />
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-teal-300 opacity-10 blur-3xl rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="inline-block text-base font-medium px-4 py-2 bg-gradient-to-b from-sky-400 to-gray-600 text-white rounded-2xl shadow-sm select-none">
            شاردر ، انتخاب هر خانم ایرانی برای آشپزخانه
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-6 leading-tight">
            چرخ گوشت های خانگی
            <span className="text-sky-600 inline-block mx-3">شاردر</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl mx-auto">
            &nbsp; ترکیبی از
            <span className="text-sky-500 font-bold text-lg sm:text-xl">
              نوآوری&nbsp;
            </span>
            و&nbsp;
            <span className="text-orange-500 font-bold text-lg sm:text-xl">
              کیفیت&nbsp;
            </span>
            برای آشپزخانه‌ای آینده‌نگر
          </p>
        </div>

        {/* لیست ویژگی‌ها و اسلایدر */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* لیست ویژگی‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-13 gap-x-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow py-6 px-5 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-5 mb-2">
                  <item.icon
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`}
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* اسلایدر */}
          <div className="mt-6 lg:mt-0">
            <AmazingFeaturesSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
