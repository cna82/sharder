import {
  Building2,
  Copyright,
  Truck,
  Headphones,
  DollarSign,
} from "lucide-react";

const iconMap = {
  building: Building2,
  copyright: Copyright,
  truck: Truck,
  headphones: Headphones,
  dollar: DollarSign,
};

const services = [
  {
    icon: "building",
    title: "خدمات تولید",
    description:
      "خدمات تزریق، رنگ و پرس با دستگاه‌های پیشرفته و تیم حرفه‌ای ما انجام می‌پذیرد.",
  },
  {
    icon: "copyright",
    title: "طراحی و تولید قطعات",
    description:
      "توان تولید انواع قطعات لوازم خانگی به‌صورت تیراژی و دقیق در اختیار شماست.",
  },
  {
    icon: "building",
    title: "تولید OEM",
    description:
      "برند شما، تولید از ما! کارخانه کاختر آماده تولید محصولات با نام تجاری شماست.",
  },
  {
    icon: "headphones",
    title: "پشتیبانی ۷/۲۴",
    description:
      "پشتیبانی هوشمند، سریع و پاسخ‌گو در تمام ساعات شبانه‌روز برای مشتریان وفادار.",
  },
  {
    icon: "dollar",
    title: "بازگشت وجه",
    description:
      "با تضمین رضایت ۱۰۰٪، وجه پرداختی در صورت نارضایتی به‌صورت کامل عودت می‌گردد.",
  },
  {
    icon: "truck",
    title: "ارسال رایگان",
    description:
      "تمامی سفارشات در کمترین زمان ممکن، رایگان و ایمن به دست شما خواهد رسید.",
  },
];

const AmazingAbout = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 py-24 px-6 md:px-16 rtl text-right">
      <div className="max-w-7xl mx-auto">
        <section className="bg-sky-500 text-white py-20 px-6 text-center rounded-2xl mb-15 mt-1">
          <h1 className="text-4xl font-extrabold mb-6 leading-snug">
            خدمات ما قدرت آشپزخانه شماست
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            تجربه ای بی نظیر همراه با شاردر
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={idx}
                className="group  relative bg-white border border-gray-300 rounded-2xl shadow-xl hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-600 text-white mb-4 shadow-md  transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-sky-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmazingAbout;
