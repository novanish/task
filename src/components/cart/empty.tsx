import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { SheetClose } from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";

export function EmptyCart() {
  return (
    <Empty className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
      <EmptyHeader className="text-center">
        <EmptyMedia variant="icon" className="bg-muted rounded-full p-10">
          <ShoppingBag className="text-muted-foreground size-10" />
        </EmptyMedia>
        <EmptyTitle className="text-lg font-semibold">
          Your cart is empty
        </EmptyTitle>
        <EmptyDescription className="text-muted-foreground mt-1 text-sm">
          Add items to your cart to see them here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <SheetClose asChild>
          <Button variant="outline">Continue Shopping</Button>
        </SheetClose>
      </EmptyContent>
    </Empty>
  );
}
