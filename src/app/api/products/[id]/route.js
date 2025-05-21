// api for dynamic id of product
// imports
import { products } from "@/lib/data/products";
// api  handler
const GetItems = async (req, { params }) => {
  const id = String(params.id); // تبدیل id به رشته
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return new Response(JSON.stringify({ error: "محصول پیدا نشد" }), {
      status: 404,
    });
  }

  return Response.json(product);
};

export default GetItems;
