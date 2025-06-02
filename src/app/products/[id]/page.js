import { getProductById } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, CheckCircle, XCircle, Check } from "lucide-react";

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "محصول یافت نشد - شاردر",
      description:
        "این محصول در شاردر یافت نشد. لطفا محصولات دیگر را مشاهده کنید.",
      robots: "noindex, nofollow",
      alternates: {
        canonical: "https://sharder.ir/products",
      },
    };
  }

  const descriptionText = product.description
    .map((feature) => feature.title)
    .join("، ")
    .slice(0, 160);

  return {
    title: `${product.title} | شاردر`,
    description: descriptionText,
    authors: [{ name: "شاردر | Sharder" }],
    charset: "utf-8",
    robots: "index, follow",
    alternates: {
      canonical: `https://sharder.ir/products/${id}`,
    },
    openGraph: {
      type: "website",
      title: `${product.title} | شاردر`,
      description: descriptionText,
      url: `https://sharder.ir/products/${id}`,
      siteName: "شاردر",
      images: [
        {
          url: product.imgSrc,
          width: 600,
          height: 600,
          alt: product.title,
        },
      ],
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | شاردر`,
      description: descriptionText,
      images: [product.imgSrc],
      creator: "@sharder_ir",
    },
  };
}

const ProductPage = async ({ params: paramsPromise }) => {
  const params = await paramsPromise; // مهم: await کردن params
  const product = await getProductById(params.id);
  if (!product) return redirect("/products");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-sky-400 to-sky-200 mt-10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-0" dir="ltr">
            {/* Image Section */}
            <div className="p-8 flex items-center justify-center bg-gray-100">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-white shadow-inner border-4 border-white">
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

            {/* Product Info Section */}
            <div className="p-8 flex flex-col gap-6 text-right border-r-2 border-sky-100">
              <div>
                <h1 className="font-DimaYekanBold md:text-3xl text-2xl text-center font-bold text-sky-500 mb-2">
                  {product.title}
                </h1>
                <div className="h-[2px] w-full bg-sky-200 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="flex-col items-center gap-2">
                  <span className="text-gray-700 inline-block mx-2">
                    {product.color}
                  </span>
                  <span className="font-semibold text-teal-600">: رنگ</span>
                </div>
                <div className="flex-col items-center gap-2">
                  <span className="text-gray-700 inline-block mx-2">
                    {product.category}
                  </span>
                  <span className="font-semibold text-teal-600">
                    : دسته‌بندی
                  </span>
                </div>
              </div>

              <div className="mt-2">
                {product.isAvaiable ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 ml-1" />
                    موجود در انبار
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <XCircle className="w-4 h-4 ml-1" />
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
                      <Check className="flex-shrink-0 w-5 h-5 text-teal-600 ml-2 mt-0.5" />
                      <span className="text-gray-700">{feature.title}</span>
                    </li>
                  ))}
                </ul>

                {/* Return to products button */}
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white bg-sky-400 hover:bg-sky-700 transition rounded-full shadow-md"
                  >
                    <ArrowLeft className="w-5 h-5" />
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
