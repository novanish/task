"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Product } from "@/types/product.types";

export function ProductCard({
  id,
  name,
  description,
  price,
  category,
  rating,
  image,
}: Product) {
  const isInCart = false;
  function onAddToCart(id: number) {}

  function onRemoveFromCart(id: number) {}

  return (
    <div className="bg-card border-border flex h-full flex-col overflow-hidden rounded-lg border transition-shadow duration-300 hover:shadow-lg">
      <div className="bg-muted relative h-32 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.png"}
          alt={name}
          fill
          className="h-full w-full object-cover object-center"
        />

        <div className="bg-primary/90 text-primary-foreground absolute top-2 left-2 rounded px-2 py-1 text-xs font-medium">
          {category}
        </div>

        <div className="bg-secondary absolute top-2 right-2 flex items-center gap-1 rounded px-2 py-1 text-xs font-medium">
          <Star className="size-3 text-yellow-400" /> {rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-card-foreground mb-1 line-clamp-2 text-base font-semibold">
          {name}
        </h3>

        <p className="text-muted-foreground mb-2 line-clamp-3 flex-1 text-xs">
          {description}
        </p>

        <div className="mb-2">
          <span className="text-foreground text-lg font-bold">
            ${price.toFixed(2)}
          </span>
        </div>

        <Button
          onClick={() => (isInCart ? onRemoveFromCart(id) : onAddToCart(id))}
          variant={isInCart ? "destructive" : "default"}
          className="w-full"
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
