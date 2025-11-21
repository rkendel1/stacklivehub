"use client";

import { Search, User } from "lucide-react";
import { NAV_ITEMS, MiniApp, Collection } from "@/lib/data";
import { DroppableFeaturedContainer } from "./droppable-featured-container";
import { DroppableAppGrid } from "./droppable-app-grid";
import { cn } from "@/lib/utils";
import { DroppableTrendingContainer } from "./droppable-trending-container";
import { DroppableCollectionContainer } from "./droppable-collection-container";

interface PhoneMockupProps {
  featuredApps: MiniApp[];
  newThisWeekApps: MiniApp[];
  trendingApps: MiniApp[];
  collections: Collection[];
  activeView: string;
  setActiveView: (viewId: string) => void;
}

export function PhoneMockup({ featuredApps, newThisWeekApps, trendingApps, collections, activeView, setActiveView }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-100 dark:bg-background flex flex-col">
        <header className="p-4 pt-6 bg-gray-100/80 backdrop-blur-sm shrink-0">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">MiniApps</h1>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search apps" className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm text-sm" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 space-y-6 pt-4 pb-20">
          {activeView === 'home' && (
            <>
              <div>
                <DroppableFeaturedContainer id="featured" apps={featuredApps} />
                <div className="flex justify-center items-center gap-1.5 mt-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg text-gray-800">New This Week</h2>
                  <a href="#" className="text-sm text-blue-500 font-semibold">See All &gt;</a>
                </div>
                <DroppableAppGrid id="newThisWeek" apps={newThisWeekApps} />
              </div>
            </>
          )}
          {activeView === 'trending' && (
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-bold text-lg text-gray-800">Trending Now</h2>
                </div>
                <DroppableTrendingContainer id="trending" apps={trendingApps} />
            </div>
          )}
          {activeView === 'lists' && (
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-bold text-lg text-gray-800">Curated Collections</h2>
                </div>
                <div className="space-y-4">
                    {collections.map(collection => (
                        <DroppableCollectionContainer key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
          )}
        </main>

        <footer className="absolute bottom-0 left-0 right-0 flex justify-around items-center p-2 pb-4 border-t bg-white/70 backdrop-blur-sm rounded-b-[1.8rem]">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => setActiveView(item.id)} className="flex flex-col items-center gap-1 flex-1">
              <item.icon className={cn("w-6 h-6", activeView === item.id ? "text-blue-500" : "text-gray-400")} />
              <span className={cn("text-xs", activeView === item.id ? "text-blue-500 font-semibold" : "text-gray-500")}>{item.name}</span>
            </button>
          ))}
        </footer>
      </div>
    </div>
  );
}