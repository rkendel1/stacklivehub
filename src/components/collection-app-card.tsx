"use client";

import { MiniApp } from "@/lib/data";

interface CollectionAppCardProps {
  app: MiniApp;
}

export function CollectionAppCard({ app }: CollectionAppCardProps) {
  return (
    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
      <app.icon className="w-8 h-8 text-gray-700" />
    </div>
  );
}