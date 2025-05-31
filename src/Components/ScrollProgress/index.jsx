"use client";
import { usePathname } from "next/navigation";
//imports
import { useEffect, useState } from "react";
// ScrollProgress Comp
const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // conditional rendering for pdf page
  if (pathname === "/pdf") {
    return null;
  }
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-2   bg-gray-200  z-50`}
      dir="ltr"
    >
      <div
        className="h-full bg-sky-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
export default ScrollProgress;
