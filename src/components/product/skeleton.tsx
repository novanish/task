import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="bg-card border-border flex h-full flex-col overflow-hidden rounded-lg border">
      <div className="bg-muted relative h-32 w-full animate-pulse">
        {/* Category badge skeleton */}
        <div className="absolute top-2 left-2">
          <Skeleton className="h-5 w-16 rounded" />
        </div>

        {/* Rating badge skeleton */}
        <div className="absolute top-2 right-2">
          <Skeleton className="h-5 w-12 rounded" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3">
        {/* Title skeleton - 2 lines */}
        <div className="mb-1 space-y-2">
          <Skeleton className="h-4 w-full rounded" />
        </div>

        {/* Description skeleton - 3 lines */}
        <div className="mb-2 flex-1 space-y-1.5">
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-2/3 rounded" />
        </div>

        {/* Price skeleton */}
        <div className="mb-2">
          <Skeleton className="h-6 w-16 rounded" />
        </div>

        {/* Button skeleton */}
        <Skeleton className="h-9 w-full rounded" />
      </div>
    </div>
  );
}
