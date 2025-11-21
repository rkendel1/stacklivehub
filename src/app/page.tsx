"use client";

import * as React from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { AVAILABLE_APPS_INITIAL, FEATURED_APPS_INITIAL, NEW_THIS_WEEK_APPS_INITIAL, TRENDING_APPS_INITIAL, MiniApp } from "@/lib/data";
import { PhoneMockup } from "@/components/phone-mockup";
import { DroppableAppContainer } from "@/components/droppable-app-container";
import { MiniAppCard } from "@/components/mini-app-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AppContainers = {
  available: MiniApp[];
  featured: MiniApp[];
  newThisWeek: MiniApp[];
  trending: MiniApp[];
};

export default function CurationDashboard() {
  const [apps, setApps] = React.useState<AppContainers>({
    available: AVAILABLE_APPS_INITIAL,
    featured: FEATURED_APPS_INITIAL,
    newThisWeek: NEW_THIS_WEEK_APPS_INITIAL,
    trending: TRENDING_APPS_INITIAL,
  });
  const [activeApp, setActiveApp] = React.useState<MiniApp | null>(null);
  const [activeView, setActiveView] = React.useState('home');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findContainer = (id: string): keyof AppContainers | null => {
    if (id in apps) {
      return id as keyof AppContainers;
    }
    for (const key in apps) {
        const containerKey = key as keyof AppContainers;
        if (apps[containerKey].some(app => app.id === id)) {
            return containerKey;
        }
    }
    return null;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const app = active.data.current?.app as MiniApp;
    setActiveApp(app);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    setApps((prev) => {
      const newApps = { ...prev };
      const activeItems = newApps[activeContainer];
      const overItems = newApps[overContainer];
      
      const activeIndex = activeItems.findIndex((item) => item.id === activeId);
      const [movedItem] = activeItems.splice(activeIndex, 1);

      if (overContainer === 'featured') {
        if (overItems.length > 0) {
          const [swappedItem] = overItems.splice(0, 1, movedItem);
          const isAlreadyAvailable = newApps.available.some(app => app.id === swappedItem.id);
          if (!isAlreadyAvailable) {
            newApps.available.unshift(swappedItem);
          }
        } else {
          overItems.push(movedItem);
        }
      } else {
        const overIndex = overId in prev ? overItems.length : overItems.findIndex((item) => item.id === overId);
        overItems.splice(overIndex, 0, movedItem);
      }
      
      return newApps;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveApp(null);
    if (!over) return;

    const activeContainer = findContainer(active.id.toString());
    const overContainer = findContainer(over.id.toString());

    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
        return;
    }

    const activeIndex = apps[activeContainer].findIndex(app => app.id === active.id);
    const overIndex = apps[overContainer].findIndex(app => app.id === over.id);

    if (activeIndex !== overIndex) {
        setApps(prev => ({
            ...prev,
            [overContainer]: arrayMove(prev[overContainer], activeIndex, overIndex)
        }));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Mini App Store Curator</h1>
                <p className="text-muted-foreground">Drag and drop apps to arrange the store layout.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Available Apps</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <DroppableAppContainer id="available" apps={apps.available} />
                    </CardContent>
                </Card>

                <div className="lg:col-span-2 flex items-center justify-center">
                    <PhoneMockup 
                        featuredApps={apps.featured} 
                        newThisWeekApps={apps.newThisWeek}
                        trendingApps={apps.trending}
                        activeView={activeView}
                        setActiveView={setActiveView}
                    />
                </div>
            </div>
        </div>
      </div>
      <DragOverlay>
        {activeApp ? <MiniAppCard app={activeApp} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}