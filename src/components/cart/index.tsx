import { EmptyCart } from "@/components/cart/empty";
import { CartItems } from "@/components/cart/items";
import { CartSummary } from "@/components/cart/summary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/use-cart-store";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export function Cart() {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <ShoppingCart className="size-4" />
          {cartCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
            >
              {cartCount > 99 ? "99+" : cartCount}
            </Badge>
          )}
          <span className="sr-only">Shopping cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col px-4 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {cartCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {cartCount} {cartCount === 1 ? "item" : "items"}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {cartCount === 0 ? <EmptyCart /> : <CartItems />}
        {cartCount === 0 ? null : <CartSummary />}
      </SheetContent>
    </Sheet>
  );
}
