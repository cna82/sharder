"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaAngleLeft,
} from "react-icons/fa";
const shouldShowFooter = (pathname) => {
  return /^\/($|products(?:\/.*)?|about|contact)$/.test(pathname);
};

const Footer = () => {
  const pathname = usePathname();

  if (!shouldShowFooter(pathname)) return null;

  return (
    <footer className="bg-gray-100 text-gray-800 pt-12">
      <div className="h-1 bg-gradient-to-r from-purple-600 to-teal-600 mb-8"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src="/images/logo/logo.png"
            alt="لوگو شاردر"
            className="w-20 mb-4"
            width={100}
            height={100}
          />
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            شرکت تولید لوازم خانگی شاردر، پیشرو در طراحی و تولید محصولات
            نوآورانه خانگی با بیش از ۱۵ سال تجربه در صنعت لوازم خانگی است...
          </p>
          <div className="flex gap-3">
            {[
              {
                Icon: FaInstagram,
                color: "bg-pink-500/10",
                hover: "bg-pink-500",
              },
              {
                Icon: FaTelegramPlane,
                color: "bg-blue-500/10",
                hover: "bg-blue-500",
              },
              {
                Icon: FaLinkedinIn,
                color: "bg-blue-700/10",
                hover: "bg-blue-700",
              },
              {
                Icon: FaWhatsapp,
                color: "bg-green-500/10",
                hover: "bg-green-500",
              },
            ].map(({ Icon, color, hover }, index) => (
              <a
                key={index}
                href="#"
                className={`${color} hover:${hover} text-purple-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300`}
                aria-label={`Social media link ${index}`}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-purple-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            لینک‌های سریع
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/products", label: "محصولات" },
              { href: "/contact", label: "تماس با ما" },
              { href: "/about", label: "درباره ما" },
            ].map(({ href, label }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="flex items-center py-1.5 text-gray-600 hover:text-teal-600 transition-colors duration-200"
                  prefetch={false}
                >
                  <FaAngleLeft className="ml-2 text-xs opacity-70" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-purple-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            تماس با ما
          </h3>
          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-start">
              <FaMapMarkerAlt className="ml-2 mt-1 text-teal-600 flex-shrink-0" />
              <span>تهران، شهرک صنعتی قرچک، بلوار پیشرفت، پلاک ۳۰</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="ml-2 text-teal-600 flex-shrink-0" />
              <span dir="ltr" className="hover:text-teal-600 transition-colors">
                +۹۸ ۲۱ ۳۶۹۱۷۶۰۳
              </span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="ml-2 text-teal-600 flex-shrink-0" />
              <a
                href="mailto:Sharder.life@gmail.com"
                className="hover:text-teal-600 transition-colors"
              >
                Sharder.life@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaClock className="ml-2 text-teal-600 flex-shrink-0" />
              <span>شنبه تا چهارشنبه 8:00 تا 17:00</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-purple-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            موقعیت مکانی
          </h3>
          <a
            href="https://maps.app.goo.gl/xafTZKWeAtoXJJw1A"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-48 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.6863196367945!2d51.535563!3d35.413025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91ed007e8b2941%3A0xed58ce917701db01!2z2qnYp9ix2K7Yp9mG2Ycg2KrZiNmE24zYryDZhNmI2KfYstmFINiu2KfZhtqv24wg2LTYp9ix2K_YsQ!5e0!3m2!1sen!2s!4v1747487283712!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            برای مشاهده دقیق‌تر روی نقشه کلیک کنید
          </p>
        </div>
      </div>

      <div className="bg-gray-100 mt-12 py-4 text-center text-xs text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          کلیه حقوق و امتیازات این وبسایت متعلق به مجموعه
          <span className="font-bold text-purple-600 inline-block mx-1.5">
            شاردر
          </span>
          بوده و هرگونه استفاده از مطالب و مقالات این وبسایت، پیگرد قانونی دارد.
          <div className="mt-2">
            © {new Date().getFullYear()} توسعه یافته توسط تیم مهرسین
            (mehrSin)-mehrrsinn@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
