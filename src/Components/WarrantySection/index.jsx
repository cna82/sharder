
// imports
import Image from "next/image";
import { FaCheckCircle, FaRegTimesCircle, FaInfoCircle } from "react-icons/fa";

// warranty comp
const WarrantySection = () => {
  const terms = [
    ["ضمانت‌نامه به مدت ۲۴ ماه از زمان نصب معتبر است.", "📜"],
    ["خدمات رایگان فقط در نمایندگی‌های مجاز شاردر ارائه می‌گردد.", "🛠️"],
    ["هزینه حمل دستگاه در صورت ارسال با گارانتی‌کننده است.", "🚚"],
    ["قطعات تعمیر شده در دوره ضمانت، ۶ ماه گارانتی جداگانه دارند.", "⚡"],
  ];

  const exceptions = [
    "تعمیرات قبلی توسط افراد یا مراکز غیرمجاز.",
    "خسارات ناشی از حمل نامناسب، بلایای طبیعی، نوسانات برق، یا استفاده نادرست.",
  ];

  return (
    <section dir="rtl" className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* معرفی */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl font-extrabold text-purple-600">
              ضمانت‌نامه رسمی <span className="text-teal-600">شاردر</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              با ما خیالت از خرید راحت باشه. ضمانت‌نامه محصولات شاردر با اعتبار
              بالا و پوشش خدمات واقعی، آرامش خیال رو برای شما تضمین می‌کنه.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/Gurantee/گارانتی.jpg"
              alt="لوگوی گارانتی"
              width={260}
              height={260}
              loading="lazy"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* شرایط ضمانت */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-teal-600 flex items-center gap-2">
            <FaCheckCircle className="text-purple-600" />
            شرایط و مدت اعتبار ضمانت
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {terms.map(([text, icon], i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border-l-4 border-teal-600 shadow-sm"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-gray-700 text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* استثناها */}
        <div className="bg-gradient-to-tr from-teal-600 to-purple-600 text-white rounded-2xl p-8 space-y-6 shadow-md">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <FaRegTimesCircle />
            مواردی که شامل گارانتی نمی‌شود
          </h3>
          <ul className="space-y-3 text-sm">
            {exceptions.map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaRegTimesCircle className="mt-1" />
                {text}
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/30 space-y-2 text-sm text-white/90">
            <p>
              <FaInfoCircle className="inline mr-1" /> ثبت شماره سریال در{" "}
              <strong>وب‌سایت رسمی شاردر</strong> الزامی است.
            </p>
            <p>
              <FaInfoCircle className="inline mr-1" /> ارسال کد شهر به{" "}
              <strong>10003132253797</strong> برای دریافت اطلاعات نمایندگی.
            </p>
            <p>
              <FaInfoCircle className="inline mr-1" /> مشاهده آموزش در{" "}
              <a href="https://www.sharder.ir" className="underline font-bold">
                www.kahler.ir
              </a>
            </p>
            <p>
              <FaInfoCircle className="inline mr-1" /> تماس با خدمات:{" "}
              <strong>03132253797</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
