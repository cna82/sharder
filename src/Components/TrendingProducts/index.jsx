// imports
import Image from "next/image";
import Link from "next/link";

// Hero Comp
const TrendingProducts = async () => {
  // server side api call
  const res = await fetch(`${process.env.BASE_URL}/api/trending`, {
    cache: "force-cache",
  });
  const features = await res.json();
  // retuen of comp
  return (
    <section className="bg-gray-50 py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* متن بالا */}
        <div className="mb-8 space-y-2">
          <div className="w-full bg-gradient-to-r from-teal-100 via-white to-purple-100 py-4 shadow-inner border-y border-purple-300">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <span className="text-xl md:text-4xl font-bold tracking-wide">
                  محصولات
                  <span className="text-teal-600"> پرفروش </span>
                  شاردر
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 mt-4 text-gray-500">
                <span className="text-lg tracking-wide">
                  کیفیتی بی نظیر ، محبوبیتی افسانه ای‌
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm md:text-base">
            ای‌ محصولات ما طراحی شده‌اند تا نیازهای شما را با کیفیت بی‌نظیر و
            دوام بالا برآورده کنند.
          </p>
        </div>

        {/* تصاویر محصولات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/products/${num}`}>
                <Image
                  src={`/images/trending/trending-${num}.webp`}
                  alt={`product-${num}`}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* عنوان وسط */}
        <div className="text-center mt-14">
          <h3 className="text-teal-600 text-2xl md:text-3xl font-extrabold mb-2">
            آسودگی خاطر با محصولات شاردر
          </h3>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            هر محصول پیش از تحویل، ده‌ها مرحله کنترل کیفیت را طی می‌کند تا مطمئن
            شویم سال‌ها همراه مطمئن خانواده‌ی شما خواهد بود.
          </p>
        </div>

        {/* ویژگی‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-teal-900 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className="mb-4"
              />
              <span className="text-sm md:text-base font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
