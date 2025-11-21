"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, Star, Zap as LaunchIcon } from "lucide-react";
import { MiniApp } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AppDetailsViewProps {
  app: MiniApp;
  onBack: () => void;
}

const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
  <div className={cn("flex items-center gap-0.5", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        )}
      />
    ))}
  </div>
);

export function AppDetailsView({ app, onBack }: AppDetailsViewProps) {
  const [activeScreenshot, setActiveScreenshot] = React.useState(
    app.screenshots?.[0]
  );

  return (
    <div className="absolute inset-0 bg-gray-50 flex flex-col z-10">
      <header className="flex items-center justify-between p-4 border-b bg-white/80 backdrop-blur-sm">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="font-semibold">App Details</h2>
        <Button variant="ghost" size="icon">
          <Star className="w-5 h-5 text-gray-400" />
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
        <section className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-3xl bg-gray-200 flex items-center justify-center flex-shrink-0">
            <app.icon className="w-14 h-14 text-gray-700" />
          </div>
          <div>
            <h1 className="text-xl font-bold">{app.name}</h1>
            <p className="text-sm text-blue-500 font-semibold">{app.category}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{app.rating}</span>
              <span>&middot;</span>
              <span>{app.reviews} users</span>
            </div>
          </div>
        </section>

        <section>
          <p className="text-sm text-gray-600">{app.longDescription}</p>
          <div className="flex gap-2 mt-3">
            {app.tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-200 border-transparent text-gray-600 font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        <div className="border-t -mx-4"></div>

        {app.screenshots && (
          <section>
            <h3 className="font-bold text-lg mb-3">Screenshots</h3>
            <div className="aspect-video rounded-2xl bg-gray-200 overflow-hidden mb-3">
              {activeScreenshot && <Image src={activeScreenshot} alt="Active screenshot" width={600} height={400} className="w-full h-full object-cover" />}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {app.screenshots.map((src) => (
                <button key={src} onClick={() => setActiveScreenshot(src)} className={cn("aspect-square rounded-lg bg-gray-200 overflow-hidden ring-2 ring-transparent transition", activeScreenshot === src && "ring-blue-500")}>
                   <Image src={src} alt="Screenshot thumbnail" width={100} height={100} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </section>
        )}

        {app.features && (
            <section>
                <div className="space-y-4">
                    {app.features.map(feature => (
                        <div key={feature.title} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <feature.icon className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )}

        <div className="border-t -mx-4"></div>

        {app.ratingsAndReviews && (
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Ratings & Reviews</h3>
                    <a href="#" className="text-sm text-blue-500 font-semibold">See All</a>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-4xl font-bold">{app.ratingsAndReviews.averageRating}</p>
                        <div>
                            <StarRating rating={app.ratingsAndReviews.averageRating} />
                            <p className="text-xs text-muted-foreground">{app.ratingsAndReviews.totalReviews}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    {app.ratingsAndReviews.reviews.map(review => (
                        <div key={review.name}>
                            <div className="flex items-center gap-2 mb-1">
                                <Image src={review.avatar} alt={review.name} width={32} height={32} className="rounded-full" />
                                <div>
                                    <p className="font-semibold text-sm">{review.name}</p>
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        )}
      </main>

      <footer className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent">
        <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-2xl h-12 text-base font-semibold shadow-lg shadow-blue-500/30">
          <LaunchIcon className="w-5 h-5 mr-2" />
          Launch App
        </Button>
      </footer>
    </div>
  );
}