// app/page.tsx (or app/page.jsx)
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const metadata = {
  title: "شاردره | چرخ گوشت صنعتی",
  description: "پرسش‌های متداول درباره محصولات چرخ گوشت صنعتی شاردره",
};

async function getFAQs() {
  return [
    {
      question: "آیا محصولات شما تست کیفیت می‌شوند؟",
      answer:
        "بله، تمامی محصولات ما قبل از ارسال از نظر کیفیت بررسی و تست می‌شوند.",
    },
    {
      question: "چگونه محصولات شاردره را خریداری کنم؟",
      answer:
        "شما می‌توانید از طریق سایت یا تماس مستقیم با واحد فروش ما خرید خود را انجام دهید.",
    },
    {
      question: "شرایط گارانتی محصولات چگونه است؟",
      answer:
        "تمامی محصولات دارای ۱۲ ماه گارانتی تعویض یا تعمیر قطعات می‌باشند.",
    },
    {
      question: "نحوه استفاده صحیح از محصولات را از کجا یاد بگیرم؟",
      answer:
        "راهنمای استفاده در جعبه محصول قرار دارد و همچنین ویدئوهای آموزشی در سایت قابل مشاهده هستند.",
    },
    {
      question: "برای تعمیر محصولات به کجا مراجعه کنم؟",
      answer:
        "می‌توانید با خدمات پس از فروش ما تماس بگیرید تا شما را راهنمایی کنند.",
    },
    {
      question: "تفاوت مدل‌های مختلف یک محصول (مثل آمیوه‌گیری) چیست؟",
      answer:
        "هر مدل برای کاربردی خاص طراحی شده و دارای قدرت و ظرفیت متفاوتی است.",
    },
    {
      question: "آیا لوازم یدکی محصولات موجود است؟",
      answer: "بله، تمامی قطعات یدکی اصلی توسط شرکت شاردره تأمین می‌گردد.",
    },
  ];
}

export default async function Faq() {
  const faqs = await getFAQs();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-7">
          <span className="text-5xl text-amber-400">شاردر</span> ؛ جایی که <span className="text-lime-300 text-5xl">قدرت</span> ، بی‌صدا میچرخه !
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mx-auto">
          پیشرو در تولید و فروش چرخ گوشت‌های خانگی با کیفیت و بادوام
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          سوالات متداول
        </h2>
        <div className="space-y-7">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl p-6 transition-all bg-white shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer text-right text-teal-600 text-lg font-medium">
                <span>{faq.question}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed text-right">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
