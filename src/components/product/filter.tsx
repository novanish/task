"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES } from "@/constants/categories.const";
import { SORT_MAPS, SORT_OPTIONS } from "@/constants/product-sort.const";
import { useProductFilters } from "@/hooks/use-product-filters";

export function ProductsFilter() {
  const [filters, setFilters] = useProductFilters();

  function handleSortChange(value: keyof typeof SORT_MAPS) {
    setFilters(SORT_MAPS[value]);
  }

  function handleCategoryChange(value: string) {
    setFilters({ category: value === "all" ? null : value });
  }

  const sortBy =
    SORT_OPTIONS.find((options) => {
      const map = SORT_MAPS[options.value];

      return (
        map.sortField === filters.sortField &&
        map.sortOrder === filters.sortOrder
      );
    })?.value || "default";

  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <span className="text-muted-foreground text-sm font-medium">
        Filter by:
      </span>
      <Select
        value={filters.category || "all"}
        onValueChange={handleCategoryChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"all"}>All Categories</SelectItem>
          {CATEGORIES.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-muted-foreground text-sm font-medium">
        Sort by:
      </span>
      <Select value={sortBy} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
