"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useDebounce } from "@/hooks/use-debounce";
import { useProductFilters } from "@/hooks/use-product-filters";
import { LucideSearch } from "lucide-react";

export function ProductsSearch() {
  const [filters, setFilters] = useProductFilters();
  const debouncedSetFilters = useDebounce(setFilters, 500);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    if (value) {
      debouncedSetFilters({ q: value });
    } else {
      setFilters({ q: null });
    }
  }

  return (
    <div className="mx-auto">
      <InputGroup>
        <InputGroupInput
          placeholder="Search Products..."
          defaultValue={filters.q || ""}
          onChange={handleSearch}
        />
        <InputGroupAddon>
          <LucideSearch />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
