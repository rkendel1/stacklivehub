"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";

interface MyAppCardProps {
  app: MiniApp;
}

export function MyAppCard({ app }: MyAppCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.id, data: { app } });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab touch-none">
      <Card className="p-4 bg-white rounded-2xl shadow-sm relative">
        <Badge className="absolute top-3 right-3 bg-blue-100 text-blue-600 border-blue-200">Owned</Badge>
        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
          <app.icon className="w-10 h-10 text-gray-700" />
        </div>
        <h4 className="font-semibold text-base">{app.name}</h4>
        <div className="text-sm text-muted-foreground flex items-center gap-1.5 my-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>{app.rating}</span>
          <span className="text-gray-400">{app.reviews}</span>
        </div>
        <Button size="lg" className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl h-10 text-sm font-semibold">
          <Zap className="w-4 h-4 mr-2" />
          Open
        </Button>
      </Card>
    </div>
  );
}