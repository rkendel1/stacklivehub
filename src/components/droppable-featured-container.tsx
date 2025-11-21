"use client";

import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SortableFeaturedAppCard } from "./sortable-featured-app-card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface DroppableFeaturedContainerProps {
  id: string;
  apps: MiniApp[];
  className?: string;
  setApi?: (api: CarouselApi) => void;
}

export function DroppableFeaturedContainer({
  id,
  apps,
  className,
  setApi,
}: DroppableFeaturedContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={cn("w-full", className)}>
      <SortableContext
        items={apps.map((app) => app.id)}
        strategy={horizontalListSortingStrategy}
      >
        {apps.length > 0 ? (
          <Carousel setApi={setApi} className="w-full -mx-4" opts={{
            align: "start",
          }}>
            <CarouselContent className="pl-4">
              {apps.map((app) => (
                <CarouselItem key={app.id} className="pl-4 basis-auto">
                  <SortableFeaturedAppCard app={app} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="flex items-center justify-center h-44 border-2 border-dashed rounded-2xl">
            <p className="text-sm text-muted-foreground">
              Drop featured app here
            </p>
          </div>
        )}
      </SortableContext>
    </div>
  );
}