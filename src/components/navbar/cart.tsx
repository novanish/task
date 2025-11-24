import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Cart() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <Button variant="ghost" size="icon" className="relative h-9 w-9">
      <ShoppingCart className="size-4" />
      {cartCount > 0 && (
        <Badge
          variant="secondary"
          className="absolute -right-1 -top-1 size-5 rounded-full p-0 text-xs flex items-center justify-center"
        >
          {cartCount}
        </Badge>
      )}
      <span className="sr-only">Shopping cart</span>
    </Button>
  );
}
