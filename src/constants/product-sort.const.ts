export const SORT_MAPS = {
  default: { sortField: null, sortOrder: null },
  "price-low": { sortField: "price", sortOrder: "asc" },
  "price-high": { sortField: "price", sortOrder: "desc" },
  "rating-high": { sortField: "rating", sortOrder: "desc" },
  "rating-low": { sortField: "rating", sortOrder: "asc" },
} as const;

export const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Rating: High to Low", value: "rating-high" },
  { label: "Rating: Low to High", value: "rating-low" },
] satisfies Array<{
  label: string;
  value: keyof typeof SORT_MAPS;
}>;
