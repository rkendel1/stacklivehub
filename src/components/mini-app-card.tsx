"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MiniAppCardProps {
  app: MiniApp;
  isOverlay?: boolean;
}

export function MiniAppCard({ app, isOverlay }: MiniAppCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: app.id, data: { app } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "relative",
        isDragging && "opacity-50 z-50",
        isOverlay && "shadow-lg"
      )}
    >
      <Card>
        <div className="flex items-center p-4">
          <div {...attributes} {...listeners} className="cursor-grab touch-none p-2">
            <GripVertical className="h-5 w-5 text-muted-foreground" />
          </div>
          <app.icon className="h-8 w-8 mr-4 text-primary" />
          <div className="flex-1">
            <CardTitle className="text-sm font-medium">{app.name}</CardTitle>
            <CardDescription className="text-xs">{app.description}</CardDescription>
          </div>
        </div>
      </Card>
    </div>
  );
}