import {
  Package,
  Factory,
  Hammer,
  Warehouse,
  ShoppingCart,
} from "lucide-react";

const steps = [
  {
    title: "درخواست مواد خام اولیه",
    description: "ثبت سفارش مواد اولیه مورد نیاز برای شروع فرآیند تولید",
    icon: <Package className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "تحویل به خط تولید مجموعه",
    description: "انتقال مواد اولیه به خطوط تولید جهت پردازش",
    icon: <Factory className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "تولید قطعه",
    description: "ساخت قطعات مورد نظر با استفاده از تجهیزات پیشرفته",
    icon: <Hammer className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "ارسال به انبار جهت بسته بندی",
    description: "انتقال قطعات تولید شده به انبار برای بسته‌بندی نهایی",
    icon: <Warehouse className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "تحویل به واحد فروش",
    description: "تحویل بسته‌بندی‌های نهایی به تیم فروش برای عرضه",
    icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
  },
];

const Process = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-[80%] mx-auto py-40 px-10 text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-2">
          فرآیند تولید محصولات در{" "}
          <span className="text-5xl text-teal-500 mb-5">شاردر</span>
        </h2>
        <p className="text-xl mt-5 font-semibold text-gray-500 mb-12">
          مراحل انجام تولید قطعه در شاردر
        </p>

        <div className="relative w-full max-w-7xl mx-auto text-lg">
          {/* خطوط منحنی وسط */}
          <svg
            viewBox="0 0 100 600"
            preserveAspectRatio="none"
            className="block md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-8 z-0"
          >
            <path
              d="M50,0 C90,100 10,200 50,300 S90,400 50,500 10,600 50,700"
              fill="none"
              stroke="#302e2e"
              strokeWidth="2"
              strokeDasharray="5 6"
            />
          </svg>

          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="hidden md:block absolute top-14 left-0 w-full h-10 z-0"
          >
            <path
              d="M0,60 C150,0 150,120 300,60 S450,0 600,60 750,120 900,60 1050,0 1200,60"
              fill="none"
              stroke="#302e2e"
              strokeWidth="3"
              strokeDasharray="6 8"
            />
          </svg>

          {/* مراحل */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-15 relative z-10">
            {steps?.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center text-center w-full md:w-auto"
              >
                <div className="flex items-center justify-center w-16 h-16 mt-[-1rem] rounded-full bg-teal-100 mb-8 shadow-md">
                  {step.icon}
                </div>
                <h3 className="font-bold text-base text-gray-800 mb-1 !text-shadow-black">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-[160px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
