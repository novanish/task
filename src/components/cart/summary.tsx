import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { formatCurrency } from "@/lib/format-currency";
import { useCartStore } from "@/store/use-cart-store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Trash2 } from "lucide-react";

export function CartSummary() {
  const { cart, clearCart } = useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="space-y-4 pt-4">
      <Separator />
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600 dark:text-green-500">Free</span>
            ) : (
              formatCurrency(shipping)
            )}
          </span>
        </div>
        {subtotal < 100 && (
          <p className="text-muted-foreground text-xs">
            Add {formatCurrency(100 - subtotal)} more for free shipping
          </p>
        )}
        <Separator />
        <div className="flex items-center justify-between font-semibold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <SheetFooter className="flex-col gap-2 sm:flex-col">
        <Button className="w-full" size="lg">
          Checkout
        </Button>
        <div className="flex gap-2">
          <SheetClose asChild>
            <Button variant="outline" className="flex-1 bg-transparent">
              Continue Shopping
            </Button>
          </SheetClose>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive"
            onClick={clearCart}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Clear cart</span>
          </Button>
        </div>
      </SheetFooter>
    </div>
  );
}
