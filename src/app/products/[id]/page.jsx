import { getProductById } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const product = await getProductById(params.id);
  if (!product) return { title: "محصول یافت نشد" };
  return { title: product.title };
}

const ProductPage = async ({ params }) => {
  const product = await getProductById(params.id);

  if (!product) return redirect("/products"); // ریدایرکت در صورت نبود محصول

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-300 to-sky-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-0" dir="ltr">
            {/* بخش تصویر محصول */}
            <div className="p-8 flex items-center justify-center bg-gray-100">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-white  shadow-inner border-4 border-white">
                <Image
                  src={product.imgSrc}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* بخش اطلاعات محصول */}
            <div className="p-8 flex flex-col gap-6 text-right border-r-2 border-sky-100">
              <div>
                <h1 className="text-3xl text-center font-bold text-sky-600 mb-2">
                  {product.title}
                </h1>
                <div className="h-[2px] w-full bg-gray-600 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex-col items-center gap-2" dir="ltr">
                  <span className="font-semibold text-teal-600 ">رنگ:</span>
                  <span className="text-gray-700 inline-block mx-2">{product.color}</span>
                </div>
                <div className="flex-col items-center gap-2">
                  <span className="font-semibold text-teal-600">
                    دسته‌بندی : 
                  </span>
                  <span className="text-gray-700 inline-block mx-2">{product.category}</span>
                </div>
              </div>

              <div className="mt-2">
                {product.isAvaiable ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    موجود در انبار
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ناموجود
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-bold text-sky-600 mb-4 pb-2 border-b-2 border-sky-100">
                  ویژگی‌های محصول
                </h2>
                <ul className="space-y-3">
                  {product.description.map((feature, index) => (
                    <li key={index} className="flex items-start" dir="rtl">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-teal-600 ml-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature.title}</span>
                    </li>
                  ))}
                </ul>
                {/* دکمه بازگشت به محصولات */}
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-block px-6 py-3 text-white bg-sky-600 hover:bg-sky-700 transition rounded-full shadow-md"
                  >
                    بازگشت به محصولات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
