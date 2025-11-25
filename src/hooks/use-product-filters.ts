import {
  parseAsString,
  parseAsStringEnum,
  useQueryStates,
  type UrlKeys,
} from "nuqs";

const productFilterParsers = {
  search: parseAsString,
  sortField: parseAsStringEnum(["price", "rating"]),
  sortOrder: parseAsStringEnum(["asc", "desc"]),
  category: parseAsString,
};

const productFilterUrlKeys: UrlKeys<typeof productFilterParsers> = {
  search: "q",
  sortField: "sortBy",
  sortOrder: "order",
  category: "cat",
};

export function useProductFilters() {
  return useQueryStates(productFilterParsers, {
    urlKeys: productFilterUrlKeys,
    shallow: true,
    scroll: false,
  });
}
