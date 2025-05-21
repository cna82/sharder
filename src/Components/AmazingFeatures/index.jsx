const features = [
  {
    icon: LuShield,
    color: "text-purple-600",
    title: "خدمات پس از فروش عالی",
    description:
      "تمامی محصولات دارای ۵۵۵ روز وارانتی تعویض هستند؛ یعنی در صورت خرابی، محصول تعویض می‌شود نه تعمیر.",
  },
  {
    icon: LuTruck,
    color: "text-teal-600",
    title: "ارسال رایگان",
    description:
      "شاردر محصولات را با ارسال کاملاً رایگان و بدون نگرانی به مشتریان تحویل می‌دهد.",
  },
  {
    icon: LuCreditCard,
    color: "text-purple-600",
    title: "شرایط پرداخت عالی",
    description:
      "برای عاملین خرید و نمایندگان، شرایط پرداخت بسیار منعطف و قابل اجرا در نظر گرفته شده است.",
  },
  {
    icon: LuHeadphones,
    color: "text-teal-600",
    title: "پشتیبانی درجه یک",
    description:
      "پاسخگویی سریع و راهنمایی کامل توسط کارشناسان و مسئولین کارخانه شاردر.",
  },
  {
    icon: LuRotateCcw,
    color: "text-purple-600",
    title: "تضمین بازگشت وجه",
    description:
      "برای تجربه خرید مطمئن، شاردر تضمین بازگشت وجه را فراهم کرده است.",
  },
  {
    icon: LuFactory,
    color: "text-teal-600",
    title: "تولید OEM با برند شما",
    description:
      "در کارخانه شاردر با بهترین متریال، محصول خود را با برند اختصاصی تولید کنید.",
  },
];
import Image from "next/image";

import {
  LuShield,
  LuTruck,
  LuCreditCard,
  LuHeadphones,
  LuRotateCcw,
  LuFactory,
} from "react-icons/lu";

export default function AmazingFeatures() {
  return (
    <section
      dir="rtl"
      className="relative py-24 px-4 bg-gray-50 overflow-hidden"
    >
      {/* پس‌زمینه بسیار سبک */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-purple-200 opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-300 opacity-10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان و توضیحات */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-medium px-4 py-1.5 bg-gradient-to-b from-purple-600 to-teal-500 text-white rounded-full shadow-sm">
            محصولات حرفه‌ای شاردر
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-800 mt-5 leading-tight">
            چرخ گوشت <span className="text-teal-500">هوشمند</span> شاردر
          </h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto mt-3">
            ترکیبی از{" "}
            <span className="text-purple-600 font-semibold">نوآوری</span> و{" "}
            <span className="text-teal-600 font-semibold">کیفیت</span> برای
            آشپزخانه‌ای آینده‌نگر
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ویژگی‌ها */}
          <div className="grid sm:grid-cols-2 gap-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow py-10 px-6 rounded-xl border border-gray-100 hover:shadow-md transition duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          {/* تصویر و متن */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white shadow-xl">
            <Image
              src="/images/AmazingFeatures/amazing.webp"
              alt="چرخ گوشت هوشمند شاردر"
              width={300}
              height={300}
              className="mx-auto rounded-xl"
              priority
            />
            <div className="text-center mt-6 space-y-2">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                <span className="text-teal-600">شاردر</span>، انقلابی در
                آشپزخانه
              </h2>
              <p className="text-sm text-gray-500">
                گارانتی ۵ ساله + خدمات پس از فروش ممتاز
              </p>
              <span className="inline-block mt-3 px-6 py-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200">
                شاردر، نبض آشپزخانه هر ایرانی
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
