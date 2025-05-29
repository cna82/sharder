//imports
import AmazingFeaturesSlider from "./AmazingSlider";
import { memo } from "react";
import features from "@/lib/data/amazingFeatures";
// memo function for memozation
const FeatureCard = memo(({ icon: Icon, title, description, color }) => (
  <div
    className="bg-white shadow py-6 px-5 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300"
    role="region"
    aria-labelledby={`feature-${title}`}
  >
    <div className="flex items-center gap-5 mb-2">
      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${color}`} aria-hidden="true" />
      <h3
        id={`feature-${title}`}
        className="text-base sm:text-lg font-semibold text-gray-800"
      >
        {title}
      </h3>
    </div>
    <p className="text-sm sm:text-sm mt-3 text-gray-600 leading-6 sm:leading-relaxed">
      {description}
    </p>
  </div>
));
// AmazingFeatures comp
const AmazingFeatures = () => {
  return (
    <section
      dir="rtl"
      className="relative py-16 px-4 sm:px-10 bg-gray-100 overflow-hidden"
    >
      {/* bg for section */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-sky-200 opacity-20 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none select-none" />
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-teal-300 opacity-10 blur-3xl rounded-full pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* titles  */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="inline-block text-base font-medium px-4 py-2 bg-gradient-to-b from-sky-500 to-blue-300 text-white rounded-2xl shadow-sm select-none">
            شاردر ، انتخاب هر خانم ایرانی برای آشپزخانه
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-6 leading-tight">
            چرخ گوشت های خانگی
            <span className="text-sky-500 inline-block mx-3">شاردر</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl mx-auto leading-relaxed">
            ترکیبی از
            <span className="text-sky-500 font-bold text-lg sm:text-xl">
              &nbsp;نوآوری
            </span>
            &nbsp; و
            <span className="text-orange-500 font-bold text-lg sm:text-xl">
              &nbsp;کیفیت&nbsp;
            </span>
            برای آشپزخانه‌ای آینده‌نگر
          </p>
        </div>

        {/* features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-13 gap-x-5">
            {features.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>

          {/* client side slider */}
          <div className="mt-6 lg:mt-0">
            <AmazingFeaturesSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AmazingFeatures);
