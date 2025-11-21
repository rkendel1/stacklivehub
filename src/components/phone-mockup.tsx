"use client";

import * as React from "react";
import { ChevronRight, Plus, Search, User } from "lucide-react";
import { NAV_ITEMS, MiniApp, Collection } from "@/lib/data";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FeaturedAppCard } from "./featured-app-card";
import { AppGridCard } from "./app-grid-card";
import { TrendingAppCard } from "./trending-app-card";
import { CollectionPreviewCard } from "./collection-preview-card";
import { MyAppsView } from "./my-apps-view";
import { AppDetailsView } from "./app-details-view";

interface PhoneMockupProps {
  featuredApps: MiniApp[];
  newThisWeekApps: MiniApp[];
  trendingApps: MiniApp[];
  collections: Collection[];
  myApps: MiniApp[];
  activeView: string;
  setActiveView: (viewId: string) => void;
}

export function PhoneMockup({ featuredApps, newThisWeekApps, trendingApps, collections, myApps, activeView, setActiveView }: PhoneMockupProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [selectedApp, setSelectedApp] = React.useState<MiniApp | null>(null);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  const handleSelectApp = (app: MiniApp) => {
    // Only select apps with detailed info for now
    if (app.longDescription) {
      setSelectedApp(app);
    }
  };

  const handleGoBack = () => {
    setSelectedApp(null);
  };

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-100 dark:bg-background flex flex-col relative">
        {selectedApp ? (
          <AppDetailsView app={selectedApp} onBack={handleGoBack} />
        ) : (
          <>
            <header className="p-4 pt-6 bg-gray-100/80 backdrop-blur-sm shrink-0 z-10">
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

            <main className="flex-1 overflow-y-auto px-4 space-y-6 pt-4 pb-28">
              {activeView === 'home' && (
                <>
                  <div>
                    {featuredApps.length > 0 ? (
                      <Carousel setApi={setApi} className="w-full -mx-4" opts={{ align: "start" }}>
                        <CarouselContent className="pl-4">
                          {featuredApps.map((app) => (
                            <CarouselItem key={app.id} className="pl-4 basis-auto">
                              <div className="w-[280px]">
                                <FeaturedAppCard app={app} onClick={() => handleSelectApp(app)} />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    ) : (
                      <div className="flex items-center justify-center h-44 border-2 border-dashed rounded-2xl">
                        <p className="text-sm text-muted-foreground">Featured apps will appear here</p>
                      </div>
                    )}
                    {featuredApps.length > 1 && (
                      <div className="flex justify-center items-center gap-1.5 mt-3">
                        {featuredApps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={cn(
                              "transition-all rounded-full",
                              index === current
                                ? "w-4 h-1.5 bg-blue-500"
                                : "w-1.5 h-1.5 bg-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-bold text-xl text-gray-800">New This Week</h2>
                      <a href="#" className="text-sm text-blue-500 font-semibold flex items-center">
                        See All
                        <ChevronRight className="w-4 h-4 ml-0.5" />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {newThisWeekApps.map((app) => (
                        <AppGridCard key={app.id} app={app} onClick={() => handleSelectApp(app)} />
                      ))}
                    </div>
                    {newThisWeekApps.length === 0 && (
                      <div className="col-span-2 flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                        <p className="text-sm text-muted-foreground">New apps will appear here</p>
                      </div>
                    )}
                  </div>
                </>
              )}
              {activeView === 'trending' && (
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-lg text-gray-800">Trending Now</h2>
                    </div>
                    <div className="space-y-3">
                      {trendingApps.map((app, index) => (
                        <TrendingAppCard key={app.id} app={app} rank={index + 1} onClick={() => handleSelectApp(app)} />
                      ))}
                    </div>
                    {trendingApps.length === 0 && (
                      <div className="flex items-center justify-center h-24 border-2 border-dashed rounded-lg">
                        <p className="text-sm text-muted-foreground">Trending apps will appear here</p>
                      </div>
                    )}
                </div>
              )}
              {activeView === 'lists' && (
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-lg text-gray-800">Curated Collections</h2>
                    </div>
                    <div className="space-y-4">
                        {collections.map(collection => (
                            <CollectionPreviewCard key={collection.id} collection={collection} />
                        ))}
                    </div>
                </div>
              )}
              {activeView === 'my-apps' && (
                <MyAppsView myApps={myApps} onAppClick={handleSelectApp} />
              )}
            </main>

            <footer className="absolute bottom-0 left-0 right-0 pt-4 pb-5 bg-white/60 backdrop-blur-xl z-10">
              <div className="flex justify-around items-center">
                {NAV_ITEMS.map((item) => (
                  <button key={item.id} onClick={() => setActiveView(item.id)} className="relative flex flex-col items-center justify-center h-12 w-16 group">
                    <item.icon className={cn("w-7 h-7 transition-colors", activeView === item.id ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600")} />
                    {activeView === item.id && (
                      <div className="absolute bottom-1.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </footer>
            
            <div className="absolute bottom-24 right-6 z-20">
              <button className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/40 transform transition-transform hover:scale-105 active:scale-95">
                <Plus className="w-7 h-7" />
              </button>
            </div>
          </>
        )}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}