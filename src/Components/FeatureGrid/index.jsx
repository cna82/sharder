"use client";

import { motion } from "framer-motion";
import {
  LuShield,
  LuTruck,
  LuCreditCard,
  LuHeadphones,
  LuRotateCcw,
  LuFactory,
} from "react-icons/lu";

const features = [
  {
    icon: <LuShield className="text-4xl text-purple-600" />,
    title: "خدمات پس از فروش عالی ",
    description:
      " تمامی محصولات دارای 555 روز ضمانت وارانتی (ضمانت عودت کالا) یعنی در صورت خرابی محصول ، محصول تعویض می گردد نه تعمیر  ",
  },
  {
    icon: <LuTruck className="text-4xl text-teal-600" />,
    title: "ارسال رایگان",
    description:
      "شاردر برای مشتریان خود محصولات را رایگان بدون هیچ نگرانی ارسال می نماید ",
  },
  {
    icon: <LuCreditCard className="text-4xl text-purple-600" />,
    title: "شرایط پرداخت عالی",
    description:
      "برای کسانی که عاملین خرید یا نماینده هستند ، منعطف یا قابل اجرا در نظر گرفته شده است ",
  },
  {
    icon: <LuHeadphones className="text-4xl text-teal-600" />,
    title: "پاسخگویی آنی و پشتیبانی درجه یک ",
    description:
      "در صورت تماس با مسئولین کارخانه و عوامل با بهترین نحو ممکن راهنمایی میشوید ",
  },
  {
    icon: <LuRotateCcw className="text-4xl text-purple-600" />,
    title: "بازگشت وجه",
    description:
      "شرکت شاردر به منظور تجربه خرید بدون نگرانی، تضمین بازگشت وجه را در نظر دارد.",
  },
  {
    icon: <LuFactory className="text-4xl text-teal-600" />,
    title: "تولید OEM",
    description:
      " بدون کارخانه تولید کنید! ما در کارخانه شاردر لوازم خانگی را با برند شما تولید می کنیم با بهترین مواد  و متریال عالی و درجه یک.",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {features.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, -1, 0],
            transition: { duration: 0.4 },
          }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer text-center"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
