// app/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaChevronLeft,
} from "react-icons/fa";
const features = [
  {
    icon: FaBolt,
    title: "قدرت موتور بی‌ نظیر",
    desc: "عملکرد صنعتی در ابعاد خانگی",
  },
  {
    icon: FaShieldAlt,
    title: "بدنه مقاوم پلاستیکی",
    desc: "ساخته شده برای سال‌ها دوام",
  },
  {
    icon: FaTools,
    title: "خدمات پس از فروش",
    desc: "555 روز وارانتی بی قید و شرط",
  },
  { icon: FaCogs, title: "طراحی مهندسی‌ شده", desc: "امن ، زیبا و کاربردی" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-500 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/HeroSection/Hero-section-2.webp"
          alt="قدرت و دوام شاردر | چرخ گوشت های حرفه ای "
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/50 via-gray-900/70 to-blue-600/30 z-10" />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
          شاردر؛ قدرتی که اعتماد می‌سازه
        </h1>
        <p className="text-sm md:text-lg max-w-xl text-gray-200 bg-black/30 px-4 py-2 rounded mt-4">
          نسل جدید چرخ‌ گوشت‌های خانگی با تکنولوژی روز دنیا
        </p>
        <Link
          href="/products"
          className="mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-700 text-white font-bold rounded-full transition"
        >
          مشاهده محصولات <FaChevronLeft className="inline-block ml-1" />
        </Link>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {features?.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-4 rounded-lg text-white text-center backdrop-blur-md"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-sky-400/50 rounded-full mb-6">
                <Icon className="text-lg" />
              </div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-gray-300 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
