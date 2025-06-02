"use client";

import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 p-3 opacity-70 rounded-full bg-gradient-to-r from-sky-800 to-blue-500 text-white shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out animate-fade-in"
          aria-label="Scroll to top"
        >
          <HiChevronDoubleUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
