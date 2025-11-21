"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CollectionAppCard } from "./collection-app-card";
import { MiniApp } from "@/lib/data";

interface SortableCollectionAppCardProps {
  app: MiniApp;
}

export function SortableCollectionAppCard({ app }: SortableCollectionAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <CollectionAppCard app={app} />
    </div>
  );
}