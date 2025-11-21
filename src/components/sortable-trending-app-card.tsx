"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrendingAppCard } from "./trending-app-card";
import { MiniApp } from "@/lib/data";

interface SortableTrendingAppCardProps {
  app: MiniApp;
  rank: number;
}

export function SortableTrendingAppCard({ app, rank }: SortableTrendingAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <TrendingAppCard app={app} rank={rank} />
    </div>
  );
}