import { Button } from "@/components/ui/button";
import { useProductFilters } from "@/hooks/use-product-filters";
import { PackageSearch } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function NoProducts() {
  const [filters, setFilters] = useProductFilters();
  const showClearButton = Boolean(filters.q || filters.category !== "all");

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-muted rounded-full p-12">
          <PackageSearch className="text-muted-foreground size-12" />
        </EmptyMedia>
        <EmptyTitle>No products found</EmptyTitle>
        <EmptyDescription>
          {filters.q && filters.category !== "all" && filters.category != null
            ? `No products match "${filters.q}" in ${filters.category}.`
            : filters.q
              ? `No products match "${filters.q}".`
              : filters.category !== "all"
                ? `No products found in ${filters.category}.`
                : "No products available at the moment."}
        </EmptyDescription>
      </EmptyHeader>
      {showClearButton ? (
        <EmptyContent>
          <Button
            variant="outline"
            onClick={() => {
              setFilters(null);
            }}
          >
            Clear all filters
          </Button>
        </EmptyContent>
      ) : null}
    </Empty>
  );
}
