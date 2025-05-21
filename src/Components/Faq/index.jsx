import { FaChevronDown } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "شاردره | چرخ گوشت صنعتی",
  description: "پرسش‌های متداول درباره محصولات چرخ گوشت صنعتی شاردره",
};

// Server Component
const Faq = () => {
  // const res = await fetch(`${process.env.BASE_URL}/api/faq`, {
  //   cache: "force-cache", // Change to "no-store" if always fresh data is needed
  // });
  // const faqs = await res.json();
  const faqs = [
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
      answer: "تمامی محصولات دارای ۱۲ ماه گارانتی تعویض یا تعمیر قطعات می‌باشند.",
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
  
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 leading-snug">
          <span className="text-5xl text-amber-400">شاردر</span>؛ جایی که{" "}
          <span className="text-5xl text-lime-300">قدرت</span> بی‌صدا می‌چرخه!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          پیشرو در تولید و فروش چرخ‌گوشت‌های صنعتی و خانگی با کیفیت و بادوام
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
          سوالات متداول
        </h2>

        <div className="space-y-6">
          {faqs?.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-white shadow-sm p-5 transition-all duration-300"
            >
              <summary className="flex justify-between items-center cursor-pointer text-teal-600 text-lg font-semibold">
                <span>{faq.question}</span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
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
};

export default Faq;
