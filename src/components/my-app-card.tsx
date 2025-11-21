"use client";

import { Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface MyAppCardProps {
  app: MiniApp;
  onClick?: () => void;
}

export function MyAppCard({ app, onClick }: MyAppCardProps) {
  return (
    <div onClick={onClick} className={onClick ? "cursor-pointer" : ""}>
      <Card className="p-4 text-center flex flex-col items-center bg-white rounded-2xl shadow-sm relative">
        <Badge variant="secondary" className="absolute top-3 right-3 bg-blue-100 text-blue-600 border-blue-200">Owned</Badge>
        <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
          <app.icon className="w-10 h-10 text-gray-700" />
        </div>
        <h4 className="font-semibold text-base truncate w-full">{app.name}</h4>
        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 my-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>{app.rating}</span>
          <span className="text-gray-400">{app.reviews}</span>
        </div>
        <Button
          size="lg"
          className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl h-10 text-base font-semibold"
          onClick={(e) => {
            if (onClick) e.stopPropagation();
          }}
        >
          <Zap className="w-4 h-4 mr-2" />
          Open
        </Button>
      </Card>
    </div>
  );
}