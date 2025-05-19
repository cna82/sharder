"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionSection = () => {
  return (
    <>
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        صفحه مورد نظر یافت نشد!
      </motion.h2>

      <motion.p
        className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        یا آدرس اشتباه وارد شده یا این صفحه حذف شده. بهتره برگردی به صفحه اصلی
        تا مسیرت رو پیدا کنی.
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link
          href="/"
          className="bg-white hover:bg-white text-purple-600 font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
        >
          بازگشت به خانه
        </Link>
      </motion.div>
    </>
  );
};

export default MotionSection;
