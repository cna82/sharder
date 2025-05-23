

"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const routeRegex = /^\/($|products($|\/.+)|contact|about$)/;
  const shouldShowLayout = routeRegex.test(pathname);

  if (!shouldShowLayout) return null;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-100 border-b border-sky-600 shadow-sm">
      <div className="w-full mx-auto flex items-center justify-between px-4 py-3">
        {/* Right logo */}
        <div className="hidden md:block w-[120px] h-[50px] relative">
          <Link href="/" className="block w-full h-full relative">
            <Image
              src="/images/logo/logo.png"
              alt="لوگو اصلی"
              fill
              style={{ objectFit: "contain" }}
              className="hover:scale-110 transition-transform duration-500"
              priority
            />
          </Link>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[16px] font-semibold text-sky-600 rtl:flex-row">
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
            ></span>
          </Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-gray-700 transition-colors"
              onClick={() => setProductMenuOpen(!productMenuOpen)}
            >
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
            ></span>
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
            ></span>
          </Link>
        </nav>

        {/* Left heart logo */}
        <div className="hidden md:block text-left w-[120px] h-[50px] relative">
          <Image
            src="/images/logo/fidaLogo.png" 
            alt="لوگوی قلبی"
            fill
            style={{ objectFit: "contain" }}
            className="hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Mobile Hamburger & Logo */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="w-[50px] h-[40px] relative">
            <Image
              src="/images/logo/fidaLogo.png"
              alt="لوگوی قلبی"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-[120px] h-[40px] relative">
            <Link href="/" className="block w-full h-full relative">
              <Image
                src="/images/logo/logo.png"
                alt="لوگو"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-sky-600 hover:bg-sky-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-sky-600 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col justify-start gap-3 text-[15px] font-medium text-sky-600 w-full">
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




// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [productMenuOpen, setProductMenuOpen] = useState(false);
//   const routeRegex = /^\/($|products($|\/.+)|contact|about$)/;
//   const shouldShowLayout = routeRegex.test(pathname);

//   if (!shouldShowLayout) return null;

//   return (
//     <header className="sticky top-0 z-50 bg-gray-400 text-sky-300 shadow-md border-b border-sky-200">
//       <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-3">
//         {/* Nav - Right */}
//         <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-sky-200">
//           <Link href="/" className={pathname === "/" ? "text-white underline" : "hover:text-white transition"}>
//             صفحه اصلی
//           </Link>
//           <div className="relative group">
//             <button
//               onClick={() => setProductMenuOpen(!productMenuOpen)}
//               className="flex items-center gap-1 hover:text-white transition"
//             >
//               محصولات <ChevronDown size={16} />
//             </button>
//             {productMenuOpen && (
//               <div className="absolute top-full right-0 mt-2 bg-white text-sky-700 rounded-md shadow-md z-30 w-44">
//                 <Link href="/products" className="block px-4 py-2 hover:bg-sky-50 text-sm">
//                   لیست محصولات
//                 </Link>
//                 <Link
//                   href="/pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block px-4 py-2 hover:bg-sky-50 text-sm"
//                 >
//                   کاتالوگ محصولات
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link href="/about" className={pathname === "/about" ? "text-white underline" : "hover:text-white transition"}>
//             درباره ما
//           </Link>
//           <Link href="/contact" className={pathname === "/contact" ? "text-white underline" : "hover:text-white transition"}>
//             تماس با ما
//           </Link>
//         </nav>

//         {/* Center Text */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-xl  text-sky-200 font-bold whitespace-nowrap">
//             شرکت فیدار تجارت هیوا سازنده لوازم خانگی برقی
//           </p>
//         </div>

//         {/* Logo - Left */}
//         <div className="w-[120px] h-[50px] relative hidden md:block">
//           <Link href="/" className="block w-full h-full relative">
//             <Image
//               src="/images/logo/logo.png"
//               alt="لوگو"
//               fill
//               style={{ objectFit: "contain" }}
//               className="hover:scale-105 transition-transform duration-300"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Mobile Header */}
//         <div className="md:hidden flex justify-between items-center w-full">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 rounded-md text-sky-100 hover:bg-sky-300/20 transition"
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//           <p className="text-[13px] text-blue-200 font-semibold text-center">
//             فیدار تجارت هیوا
//           </p>
//           <div className="w-[40px] h-[40px] relative">
//             <Link href="/" className="block w-full h-full relative">
//               <Image
//                 src="/images/logo/logo.png"
//                 alt="لوگو"
//                 fill
//                 style={{ objectFit: "contain" }}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-gray-300 text-sky-100 ${
//           menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="px-6 py-4 flex flex-col gap-3 text-[15px] font-medium">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">
//             صفحه اصلی
//           </Link>
//           <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-white">
//             لیست محصولات
//           </Link>
//           <Link href="/pdf" onClick={() => setMenuOpen(false)} className="hover:text-white">
//             کاتالوگ محصولات
//           </Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">
//             درباره ما
//           </Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white">
//             تماس با ما
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
