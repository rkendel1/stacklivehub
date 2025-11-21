"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";

interface TrendingAppCardProps {
  app: MiniApp;
  rank: number;
}

export function TrendingAppCard({ app, rank }: TrendingAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <Card className="p-3 bg-white rounded-2xl shadow-sm flex items-center gap-4">
        <span className="text-lg font-bold text-gray-400 w-6 text-center">{rank}</span>
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
          <app.icon className="w-8 h-8 text-gray-700" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-sm truncate w-full">{app.name}</h4>
            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>{app.rating}</span>
                <span className="text-gray-400">{app.reviews}</span>
            </div>
        </div>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-8 text-sm font-semibold px-4">
          Open
        </Button>
      </Card>
    </div>
  );
}