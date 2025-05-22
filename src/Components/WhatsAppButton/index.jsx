"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+989128433187"; // شماره موبایل با پیش‌شماره کشور (بدون +)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 opacity-80 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      aria-label="تماس با واتساپ"
      title="ارتباط با مدیر فروش مجموعه"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
