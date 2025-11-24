import { ProductList } from "@/components/product/list";
import type { Metadata } from "next";

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

      <ProductList />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Shop",
  description: "A shopping app built with Next.js and Tailwind CSS",
};
