"use client";

import { MiniApp } from "@/lib/data";
import { MyAppCard } from "./my-app-card";

interface MyAppsViewProps {
    myApps: MiniApp[];
    onAppClick?: (app: MiniApp) => void;
}

export function MyAppsView({ myApps, onAppClick }: MyAppsViewProps) {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl text-gray-800">My Apps</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {myApps.map((app) => (
                    <MyAppCard key={app.id} app={app} onClick={onAppClick ? () => onAppClick(app) : undefined} />
                ))}
            </div>
            {myApps.length === 0 && (
                <div className="col-span-2 flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                    <p className="text-sm text-muted-foreground">Your apps will appear here</p>
                </div>
            )}
        </div>
    );
}