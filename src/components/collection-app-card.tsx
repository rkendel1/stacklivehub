"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MiniApp } from "@/lib/data";

interface CollectionAppCardProps {
  app: MiniApp;
}

export function CollectionAppCard({ app }: CollectionAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
        <app.icon className="w-8 h-8 text-gray-700" />
      </div>
    </div>
  );
}