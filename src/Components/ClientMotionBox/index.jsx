"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, User } from "lucide-react";

const ClientMotionBox = ({ container }) => {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      {container?.map(({ title, address, phones, fax }, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-purple-300 flex-col gap-15 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-sky-500 mb-10">{title}</h2>
          <div className="flex items-start gap-3 mb-2 text-gray-700 text-sm">
            <MapPin className="text-sky-500 mt-1" />
            <span>{address}</span>
          </div>
          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            {phones.map((phone, i) => (
              <div className="flex items-center gap-3" key={i}>
                <Phone className="text-sky-500" />
                <span>{phone}</span>
              </div>
            ))}
            {fax && (
              <div className="flex items-center gap-3">
                <User className="text-sky-500" />
                <span>{fax}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ClientMotionBox;
