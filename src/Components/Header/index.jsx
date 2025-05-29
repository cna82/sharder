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
      className=" fixed w-full top-2 z-50 bg-gray-100 border-b py-1 border-sky-600 shadow-md"
      dir="ltr"
    >
      {/* حذف لوگوی بزرگ موبایل بالا */}

      {/* نوار اصلی */}
      <div className="max-w-full mx-auto flex items-center justify-between px-4 py-2 lg:py-3 relative">
        {/* دسکتاپ: لوگو چپ */}
        <div className="hidden lg:block w-[120px] h-[50px] relative">
          <Link href="/" className="block w-full h-full relative">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو"
              fill
              sizes="(min-width: 1024px) 120px"
              style={{ objectFit: "contain" }}
              priority
              className="hover:scale-110 transition-transform duration-500"
            />
          </Link>
        </div>

        {/* دسکتاپ: لوگوی شرکت در وسط */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-center">
          <h2 className="text-sky-700 font-IranNastaliq mt-6 font-bold  text-3xl">
            شـرکـت <span className="text-slate-900">فـیدار</span> تجارت{" "}
            <span className="text-slate-900">هـیوا</span>{" "}
          </h2>
        </div>

        {/* دسکتاپ: منو */}
        <nav className="hidden lg:flex items-center gap-4 text-[15px] font-semibold text-sky-600 ltr:flex-row-reverse">
          <NavLink href="/" label="صفحه اصلی" currentPath={pathname} />
          <DropdownMenu />
          <NavLink href="/about" label="درباره ما" currentPath={pathname} />
          <NavLink href="/contact" label="تماس با ما" currentPath={pathname} />
        </nav>

        {/* موبایل: لوگو و دکمه منو */}
        <div className="lg:hidden flex items-center justify-end w-full px-3">
          <Link href="/" className="w-[110px] h-[36px] relative flex-shrink-0">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو"
              fill
              sizes="(max-width: 1023px) 110px"
              style={{ objectFit: "contain" }}
              className="hover:scale-110 transition-transform duration-500"
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 p-2 rounded-md text-sky-600 hover:bg-sky-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* موبایل: منوی بازشونده */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-sky-600 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-6 py-4 flex flex-col gap-3 text-[15px] font-medium text-sky-600 w-full"
          dir="rtl"
        >
          {/* لوگوی بالایی در منوی بازشونده */}
          <div className="flex justify-center mb-4 border-b border-slate-600 pb-3">
            <h2 className="text-sky-700 font-IranNastaliq mt-6 font-bold  text-2xl">
              شـرکت <span className="text-slate-900">فیدار</span> تجارت{" "}
              <span className="text-slate-900">هـیوا</span>{" "}
            </h2>
          </div>

          {[
            // لینک‌ها
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
              className={`py-2 px-4 rounded-md hover:bg-gray-700 text-center transition-all ${
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

const NavLink = ({ href, label, currentPath }) => (
  <Link
    href={href}
    className={`relative group px-1 ${
      currentPath === href ? "text-gray-700" : ""
    }`}
  >
    {label}
    <span
      className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gray-700 group-hover:w-full transition-all duration-300 ${
        currentPath === href ? "w-full" : ""
      } rounded-full`}
    />
  </Link>
);

const DropdownMenu = () => (
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-gray-700 transition-colors">
      محصولات <ChevronDown size={16} />
    </button>
    <div className="absolute top-full right-0 bg-white border border-sky-200 rounded-lg shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-2 z-20 min-w-[160px]">
      <Link
        href="/products"
        className="block px-4 py-2 text-center hover:bg-sky-50 text-sm text-sky-600"
      >
        لیست محصولات
      </Link>
      <Link
        href="/pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 hover:bg-sky-50 text-center text-sm text-sky-600"
      >
        کاتالوگ محصولات
      </Link>
    </div>
  </div>
);

export default Header;
