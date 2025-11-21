"use client";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FeaturedAppCard } from "./featured-app-card";

interface DroppableFeaturedContainerProps {
  id: string;
  apps: MiniApp[];
  className?: string;
}

export function DroppableFeaturedContainer({ id, apps, className }: DroppableFeaturedContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext items={apps.map(app => app.id)} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} className={cn("rounded-lg min-h-[176px]", className)}>
        {apps.map((app) => (
          <FeaturedAppCard key={app.id} app={app} />
        ))}
        {apps.length === 0 && (
            <div className="flex items-center justify-center h-44 border-2 border-dashed rounded-2xl">
                <p className="text-sm text-muted-foreground">Drop featured app here</p>
            </div>
        )}
      </div>
    </SortableContext>
  );
}