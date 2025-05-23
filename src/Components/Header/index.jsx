"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routeRegex = /^\/($|products($|\/.+)|contact|about$)/;
  if (!routeRegex.test(pathname)) return null;

  return (
    <header
      className="sticky top-0 z-50 bg-gray-100 border-b border-sky-600 shadow-md"
      dir="ltr"
    >
      {/* موبایل: متن شرکت بالای همه */}
      <div className="md:hidden bg-gray-100 border-b border-sky-600 text-center py-2">
        <span className="text-sm font-semibold text-gray-600">
          شرکت فیدار تجارت هیوا سازنده لوازم خانگی برقی
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3 relative">
        {/* لوگو دسکتاپ */}
        <div className="hidden md:block w-[120px] h-[50px] relative">
          <Link href="/" className="block w-full h-full relative">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو"
              fill
              style={{ objectFit: "contain" }}
              className="hover:scale-110 transition-transform duration-500"
              priority
            />
          </Link>
        </div>

        {/* متن وسط دسکتاپ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-center">
          <span className="text-base font-semibold text-gray-600 whitespace-nowrap">
            شرکت فیدار تجارت هیوا سازنده لوازم خانگی برقی
          </span>
        </div>

        {/* منو دسکتاپ */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-semibold text-sky-600 ltr:flex-row-reverse">
          <Link
            href="/"
            className={`relative group px-1 ${
              pathname === "/" ? "text-gray-700" : ""
            }`}
          >
            صفحه اصلی
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-700 group-hover:w-full transition-all duration-300 ${
                pathname === "/" ? "w-full" : ""
              } rounded-full`}
            />
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">
              محصولات <ChevronDown size={16} />
            </button>
            <div className="absolute top-full right-0 bg-white border border-sky-200 rounded-lg shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-2 z-20 min-w-[160px]">
              <Link
                href="/products"
                className="block px-4 py-2 hover:bg-sky-50 text-sm text-sky-600"
              >
                لیست محصولات
              </Link>
              <Link
                href="/pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-sky-50 text-sm text-sky-600"
              >
                کاتالوگ محصولات
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className={`relative group px-1 ${
              pathname === "/about" ? "text-gray-700" : ""
            }`}
          >
            درباره ما
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-700 group-hover:w-full transition-all duration-300 ${
                pathname === "/about" ? "w-full" : ""
              } rounded-full`}
            />
          </Link>

          <Link
            href="/contact"
            className={`relative group px-1 ${
              pathname === "/contact" ? "text-gray-700" : ""
            }`}
          >
            تماس با ما
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-700 group-hover:w-full transition-all duration-300 ${
                pathname === "/contact" ? "w-full" : ""
              } rounded-full`}
            />
          </Link>
        </nav>

        {/* موبایل: لوگو و دکمه منو کنار هم سمت راست */}
        <div className="md:hidden flex items-center gap-2 w-full px-3 justify-center">
          <Link href="/" className="w-[110px] h-[36px] relative flex-shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-sky-600 hover:bg-sky-100 transition-colors flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* موبایل منو کشویی */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-sky-600 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-6 py-4 flex flex-col gap-3 text-[15px] font-medium text-sky-600 w-full"
          dir="rtl"
        >
          {[
            { href: "/", label: "صفحه اصلی" },
            { href: "/products", label: "لیست محصولات" },
            { href: "/pdf", label: "کاتالوگ محصولات" },
            { href: "/about", label: "درباره ما" },
            { href: "/contact", label: "تماس با ما" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-4 rounded-md hover:bg-gray-700 transition-all ${
                pathname === href ? "bg-gray-300/50 text-sky-700" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
