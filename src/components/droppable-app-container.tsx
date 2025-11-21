"use client";

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { MiniApp } from "@/lib/data";
import { MiniAppCard } from "./mini-app-card";
import { cn } from "@/lib/utils";

interface DroppableAppContainerProps {
  id: string;
  apps: MiniApp[];
  className?: string;
}

export function DroppableAppContainer({ id, apps, className }: DroppableAppContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext items={apps.map(app => app.id)} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} className={cn("space-y-2 p-2 rounded-lg bg-muted/50 min-h-[100px]", className)}>
        {apps.map((app) => (
          <MiniAppCard key={app.id} app={app} />
        ))}
        {apps.length === 0 && (
            <div className="flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                <p className="text-sm text-muted-foreground">Drop apps here</p>
            </div>
        )}
      </div>
    </SortableContext>
  );
}