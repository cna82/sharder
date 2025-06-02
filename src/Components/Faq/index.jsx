import { FaChevronDown } from "react-icons/fa";
import faqs from "@/lib/data/faq";
// Metadata
export const metadata = {
  title: "شاردره | چرخ گوشت صنعتی",
  description: "پرسش‌های متداول درباره محصولات چرخ گوشت صنعتی شاردره",
};

// faq Component
const Faq = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-DimaYekanBold font-extrabold mb-6 leading-snug border-b border-white pb-5">
          <span className="text-5xl md:tetx-6xl text-yellow-200   ">
            شـاردر
          </span>
          ؛ جـایـی کـه
          <span className="text-5xl md:tetx-6xl text-yellow-200 inline-block mx-1.5">قدرت</span>
          بـی‌ صـدا مـی‌ چـرخـه !
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          انتخابی مطمئن برای کسانی که کیفیت، پشتیبانی و دوام را در
          کنار هم می‌خواهند.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">
          سوالات متداول
        </h2>

        <div className="space-y-6">
          {faqs?.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-white shadow-sm p-5 transition-all duration-300"
            >
              <summary className="flex justify-between items-center cursor-pointer text-sky-500 text-lg font-semibold">
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
