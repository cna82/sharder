import { getAllProducts } from "@/lib/data/products";
import ProductsClient from "./ProductsClient";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div>
      {/* Search & Filter - Handled Client Side */}
      <ProductsClient products={products} />
    </div>
  );
};
export default ProductsPage;
