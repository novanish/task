import { ProductsFilter } from "@/components/product/filter";
import { ProductList } from "@/components/product/list";
import { ProductsSearch } from "@/components/product/search";
import type { Metadata } from "next";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-20">
      <div className="mb-18 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Welcome to Our Store
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty">
          Discover amazing products with seamless shopping experience
        </p>
      </div>

      <Suspense>
        <div className="mx-auto mb-15 max-w-3xl space-y-6">
          <ProductsSearch />
          <ProductsFilter />
        </div>
        <ProductList />
      </Suspense>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Shop",
  description: "A shopping app built with Next.js and Tailwind CSS",
};
