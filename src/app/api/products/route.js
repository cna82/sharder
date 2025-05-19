import { products } from '@/lib/data/products';

export function GET() {
  return Response.json(products);
}
