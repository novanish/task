import { useCartStore } from "@/store/use-cart-store";
import Image from "next/image";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, X } from "lucide-react";
import { formatCurrency } from "@/lib/format-currency";

export function CartItems() {
  const { cart, removeItem, updateQuantity } = useCartStore();

  return (
    <ScrollArea className="-mr-4 h-[calc(100vh-390px)] flex-1 pr-4">
      <div className="space-y-4 py-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="bg-muted relative h-24 w-24 overflow-hidden rounded-lg border">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between py-1">
              <div>
                <h4 className="line-clamp-2 text-sm leading-tight font-medium">
                  {item.name}
                </h4>
                <p className="text-muted-foreground mt-1 text-xs">
                  {item.category}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <p className="text-sm font-semibold">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-destructive h-7 w-7"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove item</span>
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
