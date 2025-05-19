import ClientMotionBox from "../ClientMotionBox";

const HeroSectionContact = ({ container }) => {
  return (
    <section className="relative py-25 px-6 md:px-16 overflow-hidden bg-gray-200 text-white">
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
      {/* ... سایر بخش‌ها ... */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 text-center drop-shadow-sm">
          تماس با ما
        </h1>
        <p className="text-center text-black max-w-2xl mx-auto mb-12 leading-relaxed">
          جهت دریافت مشاوره یا خرید محصولات، از طریق اطلاعات زیر با ما در ارتباط
          باشید.
        </p>

        {/* این کامپوننت کلاینتیه */}
        <ClientMotionBox container={container} />
      </div>
    </section>
  );
};

export default HeroSectionContact;
