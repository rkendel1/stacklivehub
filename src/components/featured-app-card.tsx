"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FeaturedAppCardProps {
  app: MiniApp;
}

export function FeaturedAppCard({ app }: FeaturedAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <Card
        className={cn(
          "p-5 rounded-3xl text-white relative overflow-hidden h-44 flex flex-col justify-between",
          app.backgroundColor
        )}
      >
        <div>
          <div className="bg-white/30 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block mb-3">
            Featured
          </div>
          <app.icon className="w-12 h-12" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{app.name}</h3>
          <p className="text-sm opacity-90">{app.description}</p>
        </div>
      </Card>
    </div>
  );
}