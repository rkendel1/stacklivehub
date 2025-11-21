"use client";

import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SortableFeaturedAppCard } from "./sortable-featured-app-card";

interface DroppableFeaturedContainerProps {
  id: string;
  apps: MiniApp[];
  className?: string;
}

export function DroppableFeaturedContainer({
  id,
  apps,
  className,
}: DroppableFeaturedContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={cn("w-full", className)}>
      <SortableContext
        items={apps.map((app) => app.id)}
        strategy={horizontalListSortingStrategy}
      >
        {apps.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {apps.map((app) => (
              <SortableFeaturedAppCard key={app.id} app={app} />
            ))}
          </div>
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