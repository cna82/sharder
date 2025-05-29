"use client";
//imports
import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiUser, FiInstagram, FiMail } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
// functions 
const getSocialIcon = (type) => {
  const props = { size: 22, className: "min-w-[22px]" }; // ارث‌بری از رنگ parent
  switch (type) {
    case "instagram":
      return <FiInstagram {...props} />;
    case "whatsapp":
      return <RiWhatsappLine {...props} />;
    case "email":
      return <FiMail {...props} />;
    default:
      return null;
  }
};
// ClinetMotionBox comp 
const ClientMotionBox = ({ container }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
      {container?.map(({ title, address, phones, fax, social }, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-5 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-sky-500 text-center">
            {title}
          </h2>

          {!social && address && (
            <div className="flex items-center gap-3 text-sky-500 hover:text-purple-600 text-sm transition-colors">
              <FiMapPin size={22} className="min-w-[22px]" />
              <span className="text-black">{address}</span>
            </div>
          )}

          <div className="flex flex-col gap-4 text-sm">
            {social
              ? social.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sky-500 hover:${
                      item.type === "instagram"
                        ? "text-purple-600"
                        : item.type === "whatsapp"
                        ? "text-green-600"
                        : "text-red-600"
                    } transition-colors`}
                  >
                    {getSocialIcon(item.type)}
                    <span className="text-black">{item.label}</span>
                  </a>
                ))
              : phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sky-500 hover:text-purple-600 transition-colors"
                  >
                    <FiPhone size={22} className="min-w-[22px]" />
                    <span className="text-black">{phone}</span>
                  </a>
                ))}
          </div>

          {!social && fax && (
            <div className="flex items-center gap-3 text-sky-500 hover:text-purple-600 text-sm transition-colors">
              <FiUser size={22} className="min-w-[22px]" />
              <span className="text-black">{fax}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ClientMotionBox;
