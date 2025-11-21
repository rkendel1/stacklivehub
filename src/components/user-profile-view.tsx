"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UserProfileViewProps {
  myAppsCount: number;
}

export function UserProfileView({ myAppsCount }: UserProfileViewProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 h-full">
      <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center mb-4">
        <User className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
      <p className="text-muted-foreground mb-6">Discover amazing mini apps</p>

      <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-8">
        <Card className="p-3 bg-white/80 rounded-xl">
          <p className="text-2xl font-bold text-blue-500">{myAppsCount}</p>
          <p className="text-xs text-muted-foreground">Apps</p>
        </Card>
        <Card className="p-3 bg-white/80 rounded-xl">
          <p className="text-2xl font-bold text-green-500">24h</p>
          <p className="text-xs text-muted-foreground">Used</p>
        </Card>
        <Card className="p-3 bg-white/80 rounded-xl">
          <p className="text-2xl font-bold text-orange-500">12</p>
          <p className="text-xs text-muted-foreground">Favs</p>
        </Card>
      </div>

      <Button size="lg" className="w-full max-w-xs rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-base h-12">
        Explore Apps
      </Button>
    </div>
  );
}