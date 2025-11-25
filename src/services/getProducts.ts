import { GetProductsResponse } from "@/types/get-product-response";

interface Params {
  [key: string]: string | undefined | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!BASE_URL) {
  throw new Error("API base URL is not defined");
}

export async function getProducts(
  params: Params,
): Promise<GetProductsResponse> {
  const query = buildQueryString(params);
  const url = `${BASE_URL}/products${query ? "?" + query : ""}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

function buildQueryString(params: Params): string {
  const queries = Object.entries(params).filter(
    ([, value]) => value != null,
  ) as Array<[string, string]>;
  return queries.length > 0 ? new URLSearchParams(queries).toString() : "";
}
