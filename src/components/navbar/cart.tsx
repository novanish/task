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
          className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full p-0 text-xs"
        >
          {cartCount}
        </Badge>
      )}
      <span className="sr-only">Shopping cart</span>
    </Button>
  );
}
