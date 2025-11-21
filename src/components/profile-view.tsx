"use client";

import Image from "next/image";
import { ArrowLeft, Settings } from "lucide-react";
import { MiniApp } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MyAppsView } from "./my-apps-view";
import { Separator } from "@/components/ui/separator";

interface ProfileViewProps {
  myApps: MiniApp[];
  onBack: () => void;
  onAppClick?: (app: MiniApp) => void;
}

export function ProfileView({ myApps, onBack, onAppClick }: ProfileViewProps) {
  return (
    <div className="absolute inset-0 bg-gray-50 flex flex-col z-10">
      <header className="flex items-center justify-between p-4 border-b bg-white/80 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="font-semibold">Profile</h2>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5 text-gray-400" />
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <section className="flex flex-col items-center gap-2 text-center">
          <Image
            src="https://i.pravatar.cc/80?u=profile"
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">Alex Doe</h1>
            <p className="text-sm text-muted-foreground">alex.doe@example.com</p>
          </div>
        </section>
        
        <Separator className="my-6" />

        <MyAppsView myApps={myApps} onAppClick={onAppClick} showTitle={false} />
      </main>
    </div>
  );
}