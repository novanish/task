import { Product } from "@/types/product.types";

export interface GetProductsResponse {
  products: Array<Product>;
  total: number;
  page: number;
  limit: number;
}
