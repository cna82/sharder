//imports
import { products } from "@/lib/data/products";
// api handler
export const GET = () => {
  try {
    if (!products || products.length === 0) {
      //undefiend datas
      return new Response(JSON.stringify({ message: "No products found." }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // successfully
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // internal server erors
    return new Response(JSON.stringify({ message: "Internal server error." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
