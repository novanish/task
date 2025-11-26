"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useDebounce } from "@/hooks/use-debounce";
import { useProductFilters } from "@/hooks/use-product-filters";
import { LucideSearch } from "lucide-react";
import { useEffect, useState } from "react";

export function ProductsSearch() {
  const [filters, setFilters] = useProductFilters();
  const debouncedSetFilters = useDebounce(setFilters, 500);
  const [search, setSearch] = useState(filters.q || "");

  useEffect(() => {
    function syncSearch() {
      setSearch(filters.q || "");
    }

    syncSearch();
  }, [filters.q]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    setSearch(e.target.value);
    debouncedSetFilters({ q: value ? value : null });
  }

  return (
    <form
      className="mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputGroup>
        <InputGroupInput
          placeholder="Search Products..."
          value={search}
          onChange={handleSearch}
          aria-label="Search Products"
          enterKeyHint="search"
        />
        <InputGroupAddon>
          <LucideSearch />
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
