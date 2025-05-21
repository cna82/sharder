"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  fullName: z.string().min(3, { message: "حداقل ۳ کاراکتر وارد کنید" }),
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
  phone: z.string().regex(/^09\d{9}$/, {
    message: "شماره موبایل معتبر وارد کنید (مثال: 09123456789)",
  }),
  subject: z.string().min(8, { message: "حداقل ۸ کاراکتر وارد کنید" }),
  message: z.string().min(10, { message: "حداقل ۱۰ کاراکتر وارد کنید" }),
  recaptcha: z.string().min(1, { message: "لطفاً تأیید کنید که ربات نیستید" }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      toast.success(
        "  پیام شما با موفقیت ارسال شد و در اسرع وقت  پاسخ داده خواهد شد"
      );
      reset();
    } catch (error) {
      toast.error(` ${error.message}`);
    }
  };

  return (
    <section dir="rtl" className="bg-gray-100/90 py-16 px-4 md:px-8 relative">
      {/* افکت خطوط مورب */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1e293b"
                strokeWidth="1.2"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ذرات نورانی */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="animate-pulse bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-40"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          فرم تماس با ما
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-black"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="نام و نام خانوادگی"
              name="fullName"
              register={register}
              error={errors.fullName}
            />
            <InputField
              label="ایمیل"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />
            <InputField
              label="شماره موبایل"
              name="phone"
              type="tel"
              register={register}
              error={errors.phone}
            />
            <InputField
              label="موضوع"
              name="subject"
              register={register}
              error={errors.subject}
            />
          </div>

          <FloatingTextarea
            label="توضیحات"
            name="message"
            register={register}
            error={errors.message}
          />

          <div className="flex justify-center">
            <div className="text-center">
              <ReCAPTCHA
                sitekey="6Lff9z0rAAAAAKi74k3Ug2lB4uWov1u8mkuX-Idm"
                onChange={(value) => setValue("recaptcha", value)}
                onExpired={() => setValue("recaptcha", "")}
              />
              {errors.recaptcha && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.recaptcha.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" px-5 py-3 mt-6 cursor-pointer bg-purple-600 text-white font-bold text-lg rounded-lg focus:outline-none disabled:opacity-50"
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer transition={Slide} />
    </section>
  );
}

function InputField({ label, name, type = "text", register, error }) {
  return (
    <div className="relative">
      <input
        {...register(name)}
        type={type}
        className={`peer w-full border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-purple-500 transition duration-200`}
        placeholder=""
      />
      <label className="absolute right-3 -top-2.5 text-xs text-gray-600 bg-white px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-purple-500">
        {label}
      </label>
      {error && <p className="text-red-600 text-xs mt-1">{error.message}</p>}
    </div>
  );
}

function FloatingTextarea({ label, name, register, error }) {
  return (
    <div className="relative">
      <textarea
        {...register(name)}
        className={`peer w-full border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg px-4 pt-5 pb-2 h-32 resize-none focus:outline-none focus:border-purple-500 transition duration-200`}
        placeholder=""
      />
      <label className="absolute right-3 -top-2.5 text-xs text-gray-600 bg-white px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-purple-500">
        {label}
      </label>
      {error && <p className="text-red-600 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
