"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collection } from "@/lib/data";
import { CollectionAppCard } from "./collection-app-card";

interface CollectionPreviewCardProps {
  collection: Collection;
}

export function CollectionPreviewCard({ collection }: CollectionPreviewCardProps) {
  return (
    <Card className="p-4 bg-white rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <collection.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800">{collection.name}</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      <div className="grid grid-cols-4 gap-3 min-h-[80px]">
        {collection.apps.map(app => (
          <CollectionAppCard key={app.id} app={app} />
        ))}
        {collection.apps.length === 0 && (
          <div className="col-span-4 flex items-center justify-center h-20 border-2 border-dashed rounded-lg">
              <p className="text-xs text-muted-foreground">No apps in this collection</p>
          </div>
        )}
      </div>
    </Card>
  );
}