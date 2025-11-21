"use client";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TrendingAppCard } from "./trending-app-card";

interface DroppableTrendingContainerProps {
  id: string;
  apps: MiniApp[];
  className?: string;
}

export function DroppableTrendingContainer({ id, apps, className }: DroppableTrendingContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext items={apps.map(app => app.id)} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} className={cn("space-y-3 min-h-[100px]", className)}>
        {apps.map((app, index) => (
          <TrendingAppCard key={app.id} app={app} rank={index + 1} />
        ))}
        {apps.length === 0 && (
            <div className="col-span-2 flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                <p className="text-sm text-muted-foreground">Drop trending apps here</p>
            </div>
        )}
      </div>
    </SortableContext>
  );
}