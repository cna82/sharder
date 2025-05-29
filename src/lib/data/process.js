// imports
import {
  Package,
  Factory,
  Hammer,
  Warehouse,
  ShoppingCart,
} from "lucide-react";
// steps arr
const steps = [
  {
    title: "درخواست مواد خام اولیه",
    description: "ثبت سفارش مواد اولیه مورد نیاز برای شروع فرآیند تولید",
    icon: <Package className=" md:w-8 md:h-8 w-7 h-7  text-white " />,
  },
  {
    title: "تحویل به خط تولید مجموعه",
    description: "انتقال مواد اولیه به خطوط تولید جهت پردازش",
    icon: <Factory className="md:w-8 md:h-8 w-7 h-7 text-white " />,
  },
  {
    title: "تولید قطعه",
    description: "ساخت قطعات مورد نظر با استفاده از تجهیزات پیشرفته",
    icon: <Hammer className="md:w-8 md:h-8 w-7 h-7 text-white " />,
  },
  {
    title: "ارسال به انبار جهت بسته بندی",
    description: "انتقال قطعات تولید شده به انبار برای بسته‌بندی نهایی",
    icon: <Warehouse className="md:w-8 md:h-8 w-7 h-7 text-white " />,
  },
  {
    title: "تحویل به واحد فروش",
    description: "تحویل بسته‌بندی‌های نهایی به تیم فروش برای عرضه",
    icon: <ShoppingCart className="md:w-8 md:h-8 w-7 h-7 text-white " />,
  },
];
export default steps;
