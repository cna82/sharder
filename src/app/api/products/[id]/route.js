// // 📁 src/app/api/products/[id]/route.js
// const products = [
//   {
//     id: 1,
//     title: "چرخ گوشت نقره ای شاردر",
//     color: "نقره ای",
//     category: "ساده",
//     imgSrc: "/images/products/product (1).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 2,
//     title: "چرخ گوشت طرح دریا شاردر",
//     color: "چند رنگ",
//     category: "طرح دار",
//     imgSrc: "/images/products/product (2).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 3,
//     title: "چرخ گوشت رز گلد شاردر",
//     color: "رزگلد",
//     category: "ساده",
//     imgSrc: "/images/products/product (3).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 4,
//     title: "چرخ گوشت قرمز شاردر",
//     color: "قرمز",
//     category: "ساده",
//     imgSrc: "/images/products/product (4).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 5,
//     title: "چرخ گوشت طرح گل دار شاردر",
//     color: "چندرنگ",
//     category: "طرح دار",
//     imgSrc: "/images/products/product (5).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 6,
//     title: "چرخ گوشت بژ شاردر",
//     color: "بژ",
//     category: "ساده",
//     imgSrc: "/images/products/product (6).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 7,
//     title: "چرخ گوشت طلایی شاردر",
//     color: "طلایی",
//     category: "ساده",
//     imgSrc: "/images/products/product (7).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 8,
//     title: "چرخ گوشت نارنجی شاردر",
//     color: "نارنجی",
//     category: "ساده",
//     imgSrc: "/images/products/product (8).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 9,
//     title: "چرخ گوشت مشکی شاردر",
//     color: "مشکی",
//     category: "ساده",
//     imgSrc: "/images/products/product (9).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 10,
//     title: "چرخ گوشت پلنگی شاردر",
//     color: "چند رنگ",
//     category: "طرح دار",
//     imgSrc: "/images/products/product (10).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 11,
//     title: "چرخ گوشت طوسی شاردر",
//     color: "طوسی",
//     category: "ساده",
//     imgSrc: "/images/products/product (11).jpg",
//     isAvaiable: true,
//   },
//   {
//     id: 12,
//     title: "چرخ گوشت سبز شاردر",
//     color: "سبز",
//     category: "ساده",
//     imgSrc: "/images/products/product (12).jpg",
//     isAvaiable: true,
//   },
// ];
// export async function GET(req, context) {
//   const { params } = context;
//   const id = parseInt(params.id);

//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return NextResponse.json(
//       { error: 'محصول پیدا نشد' },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json(product, { status: 200 });
// }


// src/app/api/products/[id]/route.js
// ✅ 1. فایل محصولات: src/lib/data/products.js


import { products } from '@/lib/data/products';

export async function GET(request, { params }) {
  const id = String(params.id); // تبدیل id به رشته
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return new Response(JSON.stringify({ error: 'محصول پیدا نشد' }), {
      status: 404,
    });
  }

  return Response.json(product);
}
