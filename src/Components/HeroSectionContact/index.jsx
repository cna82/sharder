import ClientMotionBox from "../ClientMotionBox";

const HeroSectionContact = ({ container }) => {
  return (
    <section className="relative py-25 px-6 md:px-16 overflow-hidden bg-gray-100 text-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      {/* Main contents */}
      <div className="relative max-w-6xl mx-auto z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-sky-500 mb-6 drop-shadow-sm">
          تماس با ما
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          جهت دریافت مشاوره یا خرید محصولات، از طریق اطلاعات زیر با ما در ارتباط
          باشید.
        </p>

        {/* با حفظ انیمیشن‌های فرانت فقط برای کلاینت */}
        <ClientMotionBox container={container} />
      </div>
    </section>
  );
};

export default HeroSectionContact;
