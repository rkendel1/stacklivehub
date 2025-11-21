"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FeaturedAppCard } from "./featured-app-card";
import { MiniApp } from "@/lib/data";

interface SortableFeaturedAppCardProps {
  app: MiniApp;
}

export function SortableFeaturedAppCard({ app }: SortableFeaturedAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className="flex-shrink-0 w-[280px] cursor-grab touch-none"
    >
      <FeaturedAppCard app={app} />
    </div>
  );
}