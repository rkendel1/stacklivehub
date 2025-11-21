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
import { AVAILABLE_APPS_INITIAL, FEATURED_APPS_INITIAL, NEW_THIS_WEEK_APPS_INITIAL, TRENDING_APPS_INITIAL, COLLECTIONS_INITIAL, MiniApp, Collection } from "@/lib/data";
import { PhoneMockup } from "@/components/phone-mockup";
import { DroppableAppContainer } from "@/components/droppable-app-container";
import { MiniAppCard } from "@/components/mini-app-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { produce } from "immer";

type AppState = {
  available: MiniApp[];
  featured: MiniApp[];
  newThisWeek: MiniApp[];
  trending: MiniApp[];
  collections: Collection[];
};

export default function CurationDashboard() {
  const [appState, setAppState] = React.useState<AppState>({
    available: AVAILABLE_APPS_INITIAL,
    featured: FEATURED_APPS_INITIAL,
    newThisWeek: NEW_THIS_WEEK_APPS_INITIAL,
    trending: TRENDING_APPS_INITIAL,
    collections: COLLECTIONS_INITIAL,
  });
  const [activeApp, setActiveApp] = React.useState<MiniApp | null>(null);
  const [activeView, setActiveView] = React.useState('home');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findContainerInfo = (id: string | number) => {
    for (const key of ['available', 'featured', 'newThisWeek', 'trending']) {
      if (key === id || appState[key as keyof AppState].some((app: MiniApp) => app.id === id)) {
        return { type: 'list', listId: key };
      }
    }
    for (const collection of appState.collections) {
      if (collection.id === id || collection.apps.some(app => app.id === id)) {
        return { type: 'collection', collectionId: collection.id };
      }
    }
    return null;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const app = event.active.data.current?.app as MiniApp;
    setActiveApp(app);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeContainerInfo = findContainerInfo(activeId);
    const overContainerInfo = findContainerInfo(overId);

    if (!activeContainerInfo || !overContainerInfo || JSON.stringify(activeContainerInfo) === JSON.stringify(overContainerInfo)) {
      return;
    }

    setAppState(
      produce(draft => {
        let activeItems: MiniApp[] | undefined;
        if (activeContainerInfo.type === 'list') {
          activeItems = draft[activeContainerInfo.listId as keyof AppState] as MiniApp[];
        } else {
          activeItems = draft.collections.find(c => c.id === activeContainerInfo.collectionId)?.apps;
        }
        if (!activeItems) return;

        const activeIndex = activeItems.findIndex(item => item.id === activeId);
        if (activeIndex === -1) return;
        
        const [movedItem] = activeItems.splice(activeIndex, 1);

        let overItems: MiniApp[] | undefined;
        if (overContainerInfo.type === 'list') {
          overItems = draft[overContainerInfo.listId as keyof AppState] as MiniApp[];
        } else {
          overItems = draft.collections.find(c => c.id === overContainerInfo.collectionId)?.apps;
        }
        if (!overItems) return;

        let overIndex = overItems.findIndex(item => item.id === overId);
        if (overIndex === -1) {
          overIndex = overItems.length;
        }
        
        overItems.splice(overIndex, 0, movedItem);
      })
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveApp(null);
    if (!over) return;

    const activeContainerInfo = findContainerInfo(active.id);
    const overContainerInfo = findContainerInfo(over.id);

    if (!activeContainerInfo || !overContainerInfo || JSON.stringify(activeContainerInfo) !== JSON.stringify(overContainerInfo)) {
      return;
    }

    setAppState(
      produce(draft => {
        let items: MiniApp[] | undefined;
        if (activeContainerInfo.type === 'list') {
          items = draft[activeContainerInfo.listId as keyof AppState] as MiniApp[];
        } else {
          items = draft.collections.find(c => c.id === activeContainerInfo.collectionId)?.apps;
        }
        if (!items) return;

        const activeIndex = items.findIndex(app => app.id === active.id);
        const overIndex = items.findIndex(app => app.id === over.id);

        if (activeIndex !== -1 && overIndex !== -1 && activeIndex !== overIndex) {
          const moved = arrayMove(items, activeIndex, overIndex);
          if (activeContainerInfo.type === 'list') {
            draft[activeContainerInfo.listId as keyof AppState] = moved;
          } else {
            const collection = draft.collections.find(c => c.id === activeContainerInfo.collectionId);
            if (collection) collection.apps = moved;
          }
        }
      })
    );
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
                        <DroppableAppContainer id="available" apps={appState.available} />
                    </CardContent>
                </Card>

                <div className="lg:col-span-2 flex items-center justify-center">
                    <PhoneMockup 
                        featuredApps={appState.featured} 
                        newThisWeekApps={appState.newThisWeek}
                        trendingApps={appState.trending}
                        collections={appState.collections}
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