"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collection } from "@/lib/data";

interface CollectionPreviewCardProps {
  collection: Collection;
}

export function CollectionPreviewCard({ collection }: CollectionPreviewCardProps) {
  return (
    <Card className="p-4 bg-white rounded-2xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
            <collection.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 leading-tight max-w-[150px]">{collection.name}</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
      </div>
      
      {collection.apps.length > 0 ? (
        <div className="bg-gray-100 rounded-xl p-3">
          <div className="flex items-center justify-start gap-5 pl-1">
            {collection.apps.slice(0, 4).map(app => (
              <app.icon key={app.id} className="w-7 h-7 text-gray-600" />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[52px] bg-gray-100 rounded-xl">
            <p className="text-xs text-muted-foreground">No apps in this collection</p>
        </div>
      )}
    </Card>
  );
}