"use client";

import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AppGridCard } from "./app-grid-card";

interface DroppableAppGridProps {
  id: string;
  apps: MiniApp[];
  className?: string;
}

export function DroppableAppGrid({ id, apps, className }: DroppableAppGridProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext items={apps.map(app => app.id)} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} className={cn("grid grid-cols-2 gap-4 min-h-[100px]", className)}>
        {apps.map((app) => (
          <AppGridCard key={app.id} app={app} />
        ))}
        {apps.length === 0 && (
            <div className="col-span-2 flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                <p className="text-sm text-muted-foreground">Drop apps here</p>
            </div>
        )}
      </div>
    </SortableContext>
  );
}