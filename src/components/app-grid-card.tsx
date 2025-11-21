"use client";

import { Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";

interface AppGridCardProps {
  app: MiniApp;
  onClick?: () => void;
}

export function AppGridCard({ app, onClick }: AppGridCardProps) {
  return (
    <div onClick={onClick} className={onClick ? "cursor-pointer" : ""}>
      <Card className="p-3 text-center flex flex-col items-center bg-white rounded-2xl shadow-sm">
        <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-2">
          <app.icon className="w-8 h-8 text-gray-700" />
        </div>
        <h4 className="font-semibold text-sm truncate w-full">{app.name}</h4>
        <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 my-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span>{app.rating}</span>
          <span className="text-gray-400">{app.reviews}</span>
        </div>
        <Button
          size="sm"
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg h-8 text-sm font-semibold"
          onClick={(e) => {
            if (onClick) e.stopPropagation();
          }}
        >
          <Zap className="w-4 h-4 mr-1" />
          Open
        </Button>
      </Card>
    </div>
  );
}