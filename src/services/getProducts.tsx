import { GetProductsResponse } from "@/types/get-product-response";

interface Params {
  [key: string]: string;
}

export async function getProducts(
  params?: Params,
): Promise<GetProductsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
  const query = params ? new URLSearchParams(params).toString() : "";
  const url = `https://fakeapi.in/api/products${query ? "?" + query : ""}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
