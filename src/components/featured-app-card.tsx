"use client";

import { Card } from "@/components/ui/card";
import { MiniApp } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FeaturedAppCardProps {
  app: MiniApp;
  onClick?: () => void;
}

export function FeaturedAppCard({ app, onClick }: FeaturedAppCardProps) {
  const Component = onClick ? "button" : "div";
  return (
    <Component onClick={onClick} className="w-full text-left">
      <Card
        className={cn(
          "p-5 rounded-[2rem] text-white relative overflow-hidden h-44 flex flex-col justify-between w-full",
          app.backgroundColor
        )}
      >
        <div>
          <div className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-md inline-block mb-3">
            Featured
          </div>
          <app.icon className="w-16 h-16" />
        </div>
        <div>
          <h3 className="font-bold text-2xl">{app.name}</h3>
          <p className="text-base opacity-80">{app.description}</p>
        </div>
      </Card>
    </Component>
  );
}