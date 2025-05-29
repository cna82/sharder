//imports
import { services, iconMap } from "@/lib/data/amazingAbout";
// Amazing about comp
const AmazingAbout = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-100 via-gray-100 to-gray-50 py-24 px-6 md:px-16 rtl text-right">
      <div className="max-w-7xl mx-auto">
        <section className="bg-sky-400  text-white py-20 px-6 text-center rounded-2xl mb-15 mt-1">
          <h1 className="font-cinema text-4xl font-extrabold mb-6 leading-snug border-b border-white pb-5">
            خدمات ما ظرافت
            <span className="text-yellow-300 inline-block mx-1.5 ">
              آشپزخانه
            </span>
            شماست
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            تجربه ای بی نظیر همراه با شاردر
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {services?.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={idx}
                className="group  relative bg-white border border-gray-300 rounded-2xl shadow-xl hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-400 text-white mb-4 shadow-md  transition-colors duration-300">
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
