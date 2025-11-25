"use client";

import { ProductCard } from "@/components/product/card";
import { NoProducts } from "@/components/product/empty";
import { ProductCardSkeleton } from "@/components/product/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useProductFilters } from "@/hooks/use-product-filters";
import { getProducts } from "@/services/getProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "react-intersection-observer";

export function ProductList() {
  const [filters] = useProductFilters();

  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products", filters],
      queryFn: async ({ pageParam = 1 }) =>
        getProducts({ page: pageParam.toString(), limit: "6", ...filters }),

      getNextPageParam: (lastPage) => {
        const hasMore = lastPage.page * lastPage.limit < lastPage.total;
        return hasMore ? lastPage.page + 1 : undefined;
      },
      initialPageParam: 1,
      refetchOnWindowFocus: false,
    });

  const products = data?.pages.flatMap((page) => page.products) || [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <InView
      rootMargin="300px"
      onChange={(inView) => {
        if (inView && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
    >
      {({ ref }) => {
        return (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })}

              <div ref={ref} />
            </div>
            {isFetchingNextPage ? (
              <Spinner className="mx-auto size-10" />
            ) : null}
          </>
        );
      }}
    </InView>
  );
}
