"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";

interface TrendingAppCardProps {
  app: MiniApp;
  rank: number;
  onClick?: () => void;
}

export function TrendingAppCard({ app, rank, onClick }: TrendingAppCardProps) {
  return (
    <div onClick={onClick} className={onClick ? "cursor-pointer" : ""}>
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
      </Card>
    </div>
  );
}