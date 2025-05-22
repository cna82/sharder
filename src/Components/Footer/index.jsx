"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const socialLinks = [
  {
    Icon: FaInstagram,
    color: "bg-pink-500/10",
    hover: "hover:bg-pink-500",
    href: "https://instagram.com/sharder.co",
    title: "ارتباط در اینستاگرام",
  },
  {
    Icon: FaTelegramPlane,
    color: "bg-blue-500/10",
    hover: "hover:bg-blue-500",
    href: "https://t.me/+989128433187",
    title: "ارتباط در تلگرام",
  },
  {
    Icon: FaWhatsapp,
    color: "bg-green-500/10",
    hover: "hover:bg-green-500",
    href: "https://wa.me/989128433187",
    title: "ارتباط در واتساپ",
  },
];

const quickLinks = [
  { href: "/products", label: "محصولات" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/about", label: "درباره ما" },
];

const contactItems = [
  {
    icon: <FaMapMarkerAlt className="ml-2 mt-1 text-teal-600 flex-shrink-0" />,
    content: "تهران، شهرک صنعتی قرچک، بلوار پیشرفت، پلاک ۳۰",
  },
  {
    icon: <FaPhone className="ml-2 text-teal-600 flex-shrink-0" />,
    content: <span dir="ltr">021-36917603</span>,
  },
  {
    icon: <FaPhone className="ml-2 text-teal-600 flex-shrink-0" />,
    content: (
      <>
        <span className="leading-[25px]">
          ارتباط با مدیر فروش مجموعه :
          <br />
          <span dir="ltr">0912 843 3187</span>
        </span>
      </>
    ),
  },
  {
    icon: <FaEnvelope className="ml-2 text-teal-600 flex-shrink-0" />,
    content: (
      <a
        href="mailto:Sharderlife@gmail.com"
        className="hover:text-teal-600 transition-colors"
      >
        Sharderlife@gmail.com
      </a>
    ),
  },
  {
    icon: <FaClock className="ml-2 text-teal-600 flex-shrink-0" />,
    content: "شنبه تا چهارشنبه 8:00 تا 17:00",
  },
];

const Footer = () => {
  const pathname = usePathname();
  const routeRegex = /^\/($|products($|\/.+)|contact|about$)/;
  const shouldShowLayout = routeRegex.test(pathname);
  if (!shouldShowLayout) {
    return null;
  }
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12">
      <div className="h-1 bg-gradient-to-r from-sky-600 to-blue-300 mb-8"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image
            src="/images/logo/logo.png"
            alt="لوگو شاردر"
            width={150}
            height={150}
            className="w-45 mb-4"
          />
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            کارخانه تولید لوازم خانگی شاردر، پیشرو در طراحی و تولید محصولات
            نوآورانه خانگی تاسیس شده در سال 1400 در صنعت لوازم خانگی و چرخ گوشت
            است چرخ گوشت هایی مطمئن و بدون خطر ، امضای کار ماست
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, color, hover, href, title }, i) => (
              <a
                key={i}
                href={href}
                className={`text-purple-600 ${color} ${hover} hover:text-white rounded-full w-13 h-13 flex items-center justify-center transition-colors duration-300 `}
                aria-label={`Social ${i}`}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sky-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            لینک‌های سریع
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(({ href, label }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="flex items-center py-1.5 text-gray-600 hover:text-teal-600 transition-colors"
                  prefetch={false}
                >
                  <FaAngleLeft className="ml-2 text-xs opacity-70" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sky-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            تماس با ما
          </h3>
          <div className="space-y-3 text-gray-600 text-sm">
            {contactItems.map(({ icon, content }, i) => (
              <div key={i} className="flex items-start">
                {icon}
                {content}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-sky-600 text-lg font-bold mb-4 pb-2 border-b border-purple-200">
            موقعیت مکانی
          </h3>
          <a
            href="https://maps.app.goo.gl/xafTZKWeAtoXJJw1A"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-48 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.6863196367945!2d51.535563!3d35.413025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91ed007e8b2941%3A0xed58ce917701db01!2z2qnYp9ix2K7Yp9mG2Ycg2KrZiNmE24zYryDZhNmI2KfYstmFINiu2KfZhtqv24wg2LTYp9ix2K_YsQ!5e0!3m2!1sen!2s!4v1747487283712!5m2!1sen!2s"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            برای مشاهده دقیق‌تر روی نقشه کلیک کنید
          </p>
        </div>
      </div>

      <div className="bg-gray-100 mt-12 py-4 text-center text-xs text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          کلیه حقوق و امتیازات این وبسایت متعلق به مجموعه
          <span className="font-bold text-sky-600 inline-block mx-1.5">
            شاردر
          </span>
          بوده و هرگونه استفاده از مطالب و مقالات این وبسایت، پیگرد قانونی دارد.
          <div className="mt-2">
            © {new Date().getFullYear()} توسعه یافته توسط تیم مهرسین (mehrSin) -
            <span className="text-md font-bold text-sky-600 ">
              <a
                href="mailto:mehrrsinn@gmail.com"
                className="hover:text-teal-600 transition-colors"
                target="_balnk"
                rel="noopener noreferrer"
              >
                mehrrsinn@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
