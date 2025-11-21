"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AppGridCard } from "./app-grid-card";
import { MiniApp } from "@/lib/data";

interface SortableAppGridCardProps {
  app: MiniApp;
}

export function SortableAppGridCard({ app }: SortableAppGridCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <AppGridCard app={app} />
    </div>
  );
}