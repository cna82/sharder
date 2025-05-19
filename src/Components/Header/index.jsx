
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const shouldShowHeader = /^\/($|products(?:\/.*)?|about|contact)$/.test(
    pathname
  );

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setIsDark(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  if (!shouldShowHeader) return null;

  return (
    <header
      className="sticky top-0 xs:pb-5 md:pb-0 z-50 backdrop-blur-lg bg-white border-b border-teal-600 shadow-sm"
    >
      <div className="w-full mx-auto flex items-center justify-between px-6 py-3 rtl:flex-row-reverse">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-6">
          <div className="w-[130px] h-[50px] relative">
            <a href="/" aria-label="Homepage" className="block w-full h-full">
              <Image
                src="/images/logo/logo.png"
                alt="لوگو"
                fill
                style={{ objectFit: "contain" }}
                className="hover:scale-110 transition-transform duration-500"
                priority
              />
            </a>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className={`relative flex items-center gap-2 px-3 py-2 rounded-full shadow-md transition-all duration-500 group overflow-hidden
              ${
                isDark
                  ? "bg-purple-600 text-white"
                  : "bg-white text-teal-600 border border-teal-600 hover:bg-teal-50"
              }`}
          >
            <span className="text-sm font-semibold hidden sm:inline">
              {isDark ? "روشن" : "تاریک"}
            </span>
            <span className="transition-transform duration-500 group-hover:rotate-180">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </span>
            <span
              className={`absolute -inset-[2px] rounded-full blur-md opacity-40 transition-all duration-500 ${
                isDark
                  ? "bg-purple-500 group-hover:opacity-70"
                  : "bg-teal-500 group-hover:opacity-60"
              }`}
            ></span>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-[16px] font-semibold text-teal-600 rtl:flex-row">
          <Link
            href="/"
            className={`relative group transition-all duration-300 px-1 ${
              pathname === "/" ? "text-purple-600" : ""
            }`}
          >
            صفحه اصلی
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300 ${
                pathname === "/" ? "w-full" : ""
              } rounded-full`}
            ></span>
          </Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-purple-600 transition-colors"
              onClick={() => setProductMenuOpen(!productMenuOpen)}
            >
              محصولات <ChevronDown size={16} />
            </button>
            <div className="absolute top-full right-0 bg-white border border-teal-200 rounded-lg shadow-md mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-2 z-20 min-w-[160px]">
              <Link
                href="/products"
                className="block px-4 py-2 hover:bg-purple-50 text-sm text-teal-700"
              >
                لیست محصولات
              </Link>
              <Link
                href="/pdf"
                className="block px-4 py-2 hover:bg-purple-50 text-sm text-teal-700"
              >
                کاتالوگ محصولات
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className={`relative group transition-all duration-300 px-1 ${
              pathname === "/about" ? "text-purple-600" : ""
            }`}
          >
            درباره ما
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300 ${
                pathname === "/about" ? "w-full" : ""
              } rounded-full`}
            ></span>
          </Link>

          <Link
            href="/contact"
            className={`relative group transition-all duration-300 px-1 ${
              pathname === "/contact" ? "text-purple-600" : ""
            }`}
          >
            تماس با ما
            <span
              className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300 ${
                pathname === "/contact" ? "w-full" : ""
              } rounded-full`}
            ></span>
          </Link>
        </nav>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pb-3 flex items-center justify-center gap-6">
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle Dark Mode"
          className={`relative flex items-center gap-2 px-3 py-2 rounded-full shadow-md transition-all duration-500 group overflow-hidden
            ${
              isDark
                ? "bg-purple-600 text-white"
                : "bg-white text-teal-600 border border-teal-600 hover:bg-teal-50"
            }`}
        >
          <span className="text-sm font-semibold hidden sm:inline">
            {isDark ? "روشن" : "تاریک"}
          </span>
          <span className="transition-transform duration-500 group-hover:rotate-180">
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </span>
        </button>

        <div className="w-[130px] h-[50px] relative">
          <a href="/" aria-label="Homepage" className="block w-full h-full">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو"
              fill
              style={{ objectFit: "contain" }}
              className="hover:scale-110 transition-transform duration-500"
              priority
            />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-teal-600 hover:bg-teal-100 transition-colors"
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

      {/* Mobile Nav */}
      <div
       
       className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-teal-600 ${
          menuOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
        } flex justify-end items-center`}
      >
        <nav className="px-6 py-4 flex flex-col justify-start gap-3 text-[15px] font-medium text-teal-600 w-full ">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`py-2 px-4 rounded-md hover:bg-purple-100 transition-all ${
              pathname === "/" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            صفحه اصلی
          </Link>
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className={`py-2 px-4 rounded-md hover:bg-purple-100 transition-all ${
              pathname === "/products" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            لیست محصولات
          </Link>
          <Link
            href="/pdf"
            onClick={() => setMenuOpen(false)}
            className={`py-2 px-4 rounded-md hover:bg-purple-100 transition-all ${
              pathname === "/pdf" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            کاتالوگ محصولات
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`py-2 px-4 rounded-md hover:bg-purple-100 transition-all ${
              pathname === "/about" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`py-2 px-4 rounded-md hover:bg-purple-100 transition-all ${
              pathname === "/contact" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            تماس با ما
          </Link>
        </nav>
      </div>
    </header>
  );
}
