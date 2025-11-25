"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onRetry: () => void;
}

export function ProductError({ onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-20">
      <div className="bg-destructive/10 rounded-full p-6">
        <AlertTriangle className="text-destructive h-12 w-12" />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-semibold">Failed to load products</h3>
        <p className="text-muted-foreground max-w-md">
          Something went wrong while fetching products.
        </p>
      </div>
      <Button
        onClick={onRetry}
        variant="outline"
        className="gap-2 bg-transparent"
      >
        <RefreshCw className="h-4 w-4" />
        Try again
      </Button>
    </div>
  );
}
