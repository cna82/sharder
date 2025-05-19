import {
  Building2,
  Copyright,
  Truck,
  Headphones,
  DollarSign,
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "خدمات تولید",
    description:
      "خدمات تزریق، رنگ و پرس با دستگاه‌های پیشرفته و تیم حرفه‌ای ما انجام می‌پذیرد.",
  },
  {
    icon: <Copyright className="w-8 h-8 text-white" />,
    title: "طراحی و تولید قطعات",
    description:
      "توان تولید انواع قطعات لوازم خانگی به‌صورت تیراژی و دقیق در اختیار شماست.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "تولید OEM",
    description:
      "برند شما، تولید از ما! کارخانه کاختر آماده تولید محصولات با نام تجاری شماست.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "پشتیبانی ۷/۲۴",
    description:
      "پشتیبانی هوشمند، سریع و پاسخ‌گو در تمام ساعات شبانه‌روز برای مشتریان وفادار.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "بازگشت وجه",
    description:
      "با تضمین رضایت ۱۰۰٪، وجه پرداختی در صورت نارضایتی به‌صورت کامل عودت می‌گردد.",
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "ارسال رایگان",
    description:
      "تمامی سفارشات در کمترین زمان ممکن، رایگان و ایمن به دست شما خواهد رسید.",
  },
];

export const dynamic = "force-dynamic";

const AmazingAbout = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-purple-50 to-teal-50 py-24 px-6 md:px-16  rtl text-right">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-transparent bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text mb-12 drop-shadow-lg">
          خدمات ما ، قدرت{" "}
          <span className="text-rose-600 inline-block mx-2">آشپزخانه</span>{" "}
          شماست
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                  group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-purple-100 shadow-xl
                  transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                  hover:bg-gradient-to-br hover:from-sky-50 hover:to-rose-50 flex flex-col justify-center items-center
                "
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg transition-all group-hover:rotate-3 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingAbout;
