import Image from "next/image";
import FeatureGrid from "../FeatureGrid";

const AmazingFeatures = () => {
  return (
    <section dir="rtl" className="relative py-24 px-4 bg-gray-50 overflow-hidden">
      {/* Fancy background blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-300 opacity-20 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-400 opacity-20 blur-[150px] rounded-full z-0" />
      <div className="absolute top-[50%] left-[30%] w-[200px] h-[200px] bg-purple-100 opacity-10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="inline-block text-sm font-medium px-5 py-2 bg-gradient-to-b from-purple-600 to-teal-500 text-white rounded-full shadow">
            محصولات حرفه‌ای شاردر
          </h2>
          <h1 className="text-5xl font-extrabold text-gray-800 mt-6">
            چرخ گوشت <span className="text-teal-500">هوشمند</span> شاردر
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            ترکیبی از{" "}
            <span className="font-semibold text-purple-600">نوآوری</span> و{" "}
            <span className="font-semibold text-teal-600">کیفیت</span> برای
            آشپزخانه‌ای مدرن و آینده‌نگر
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <FeatureGrid />

          {/* Product image & CTA */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl">
            <Image
              src="/images/AmazingFeatures/amazing.webp"
              alt="چرخ گوشت هوشمند شاردر"
              width={250}
              height={250}
              className="mx-auto object-contain rounded-2xl"
              priority
            />
            <div className="text-center mt-8 space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-teal-600">شاردر</span>، انقلابی در
                آشپزخانه
              </h2>
              <p className="text-sm text-gray-500">
                همراه با گارانتی طلایی ۵ ساله و خدمات پس از فروش ممتاز
              </p>
              <span className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-full shadow hover:shadow-lg hover:scale-105 transition duration-300">
                شاردر ، نبض اشپزخانه هر ایرانی
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
