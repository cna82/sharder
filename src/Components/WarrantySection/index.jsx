import Image from "next/image";
import {
  FaTools,
  FaTruck,
  FaBolt,
  FaFileSignature,
  FaRegTimesCircle,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const WarrantySection = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 px-4 sm:px-8 md:px-16"
    >
      {/* تزئینات زمینه */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* هدر و تصویر لوگو */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* متن معرفی */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-600 leading-snug">
              ضمانت‌نامه رسمی <span className="text-teal-600">شاردر</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              با ما خیالت از خرید راحت باشه. ضمانت‌نامه محصولات شاردر با اعتبار
              بالا و پوشش خدمات واقعی، آرامش خیال رو برای شما تضمین می‌کنه.
            </p>
          </div>

          {/* تصویر لوگو گارانتی */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[260px] md:w-[280px] sm:h-[280px] relative  flex items-center justify-center">
              <Image
                src="/images/Gurantee/گارانتی.jpg"
                alt="لوگوی گارانتی"
                fill
                className=" "
              />
            </div>
          </div>
        </div>

        {/* بخش شرایط ضمانت */}
        <div className="grid gap-8">
          <h3 className="text-2xl md:text-3xl font-bold text-teal-600 flex items-center gap-3">
            <FaCheckCircle className="text-purple-600" />
            شرایط و مدت اعتبار ضمانت
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaFileSignature className="text-teal-600 text-xl" />,
                text: "ضمانت‌نامه به مدت ۲۴ ماه از زمان نصب معتبر است.",
              },
              {
                icon: <FaTools className="text-teal-600 text-xl" />,
                text: "خدمات رایگان فقط در نمایندگی‌های مجاز شاردر ارائه می‌گردد.",
              },
              {
                icon: <FaTruck className="text-teal-600 text-xl" />,
                text: "هزینه حمل دستگاه در صورت ارسال با گارانتی‌کننده است.",
              },
              {
                icon: <FaBolt className="text-teal-600 text-xl" />,
                text: "قطعات تعمیر شده در دوره ضمانت، ۶ ماه گارانتی جداگانه دارند.",
              },
            ].map(({ icon, text }, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl shadow-md border-l-4 border-teal-600 p-5 transition hover:scale-[1.02] hover:shadow-lg"
              >
                <span>{icon}</span>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* استثناها و اطلاعات */}
        <div className="bg-gradient-to-tr from-teal-600 to-purple-600 text-white rounded-3xl p-10 space-y-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <FaRegTimesCircle className="text-white" />
            مواردی که شامل گارانتی نمی‌شود
          </h3>

          <ul className="space-y-4 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <FaRegTimesCircle className="mt-1" />
              تعمیرات قبلی توسط افراد یا مراکز غیرمجاز.
            </li>
            <li className="flex items-start gap-3">
              <FaRegTimesCircle className="mt-1" />
              خسارات ناشی از حمل نامناسب، بلایای طبیعی، نوسانات برق، یا استفاده
              نادرست.
            </li>
          </ul>

          <div className="pt-6 border-t border-white/30 space-y-3 text-sm sm:text-base text-white/90">
            <p>
              <FaInfoCircle className="inline mr-2" />
              ثبت شماره سریال در <strong>وب‌سایت رسمی شاردر</strong> الزامی است.
            </p>
            <p>
              <FaInfoCircle className="inline mr-2" />
              ارسال کد شهر به <strong>10003132253797</strong> برای دریافت
              اطلاعات نمایندگی.
            </p>
            <p>
              <FaInfoCircle className="inline mr-2" />
              برای مشاهده آموزش محصول، به وب‌سایت{" "}
              <a href="https://www.kahler.ir" className="underline font-bold">
                www.kahler.ir
              </a>{" "}
              مراجعه کنید.
            </p>
            <p>
              <FaInfoCircle className="inline mr-2" />
              شماره تماس خدمات مرکزی: <strong>03132253797</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
