import { Aperture, Box, Gamepad2, Globe, MicVocal, Puzzle, ShoppingCart, Video, Palette, AlarmClock, Music, BookOpen, Home, List, BarChart2, Star as StarIcon, Dumbbell, Wallet, Zap, Heart, BrainCircuit } from "lucide-react";

export type MiniApp = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  rating?: number;
  reviews?: string;
  backgroundColor?: string;
};

export type Collection = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  apps: MiniApp[];
};

const ALL_APPS: MiniApp[] = [
  { id: 'app-11', name: 'Pixel Art Studio', description: 'Create stunning pixel art', icon: Palette, rating: 4.8, reviews: '12K', backgroundColor: 'bg-gradient-to-br from-orange-400 to-red-500' },
  { id: 'app-12', name: 'Focus Timer', description: 'Stay focused and productive', icon: AlarmClock, rating: 4.9, reviews: '25K' },
  { id: 'app-13', name: 'Music Mixer', description: 'Create and share music', icon: Music, rating: 4.7, reviews: '8K' },
  { id: 'app-14', name: 'Recipe Book', description: 'Find and save recipes', icon: BookOpen, rating: 4.6, reviews: '15K' },
  { id: 'app-15', name: 'Workout Buddy', description: 'Track your workouts', icon: Dumbbell, rating: 4.8, reviews: '20K' },
  { id: 'app-16', name: 'Budget Tracker', description: 'Manage your finances', icon: Wallet, rating: 4.7, reviews: '18K' },
  { id: 'app-17', name: 'Meditation', description: 'Find your inner peace', icon: BrainCircuit, rating: 4.9, reviews: '30K' },
  { id: 'app-1', name: 'E-commerce Cart', description: 'A simple shopping cart experience.', icon: ShoppingCart, rating: 4.5, reviews: '10K' },
  { id: 'app-2', name: 'Game Pad', description: 'Interactive game controller.', icon: Gamepad2, rating: 4.2, reviews: '5K' },
  { id: 'app-3', name: 'Video Player', description: 'A custom video player.', icon: Video, rating: 4.6, reviews: '20K' },
  { id: 'app-4', name: 'Music Maker', description: 'Create and share music.', icon: MicVocal, rating: 4.3, reviews: '7K' },
  { id: 'app-5', name: 'Photo Editor', description: 'Edit photos with filters.', icon: Aperture, rating: 4.8, reviews: '30K' },
  { id: 'app-6', name: '3D Modeler', description: 'View 3D models.', icon: Box, rating: 4.1, reviews: '2K' },
  { id: 'app-7', name: 'Puzzle Game', description: 'A fun little puzzle.', icon: Puzzle, rating: 4.7, reviews: '18K' },
  { id: 'app-8', name: 'Browser', description: 'A mini web browser.', icon: Globe, rating: 4.4, reviews: '11K' },
];

export const FEATURED_APPS_INITIAL: MiniApp[] = [ALL_APPS[0]];
export const NEW_THIS_WEEK_APPS_INITIAL: MiniApp[] = [ALL_APPS[1], ALL_APPS[2], ALL_APPS[3]];
export const TRENDING_APPS_INITIAL: MiniApp[] = [
    ALL_APPS.find(app => app.name === 'Pixel Art Studio')!,
    ALL_APPS.find(app => app.name === 'Focus Timer')!,
    ALL_APPS.find(app => app.name === 'Music Mixer')!,
    ALL_APPS.find(app => app.name === 'Recipe Book')!,
    ALL_APPS.find(app => app.name === 'Workout Buddy')!,
    ALL_APPS.find(app => app.name === 'Budget Tracker')!,
];

export const COLLECTIONS_INITIAL: Collection[] = [
    {
        id: 'collection-1',
        name: 'Productivity Powerhouse',
        icon: Zap,
        apps: [
            ALL_APPS.find(app => app.name === 'Focus Timer')!,
            ALL_APPS.find(app => app.name === 'Recipe Book')!,
            ALL_APPS.find(app => app.name === 'Workout Buddy')!,
        ]
    },
    {
        id: 'collection-2',
        name: 'Creative Suite',
        icon: Palette,
        apps: [
            ALL_APPS.find(app => app.name === 'Pixel Art Studio')!,
            ALL_APPS.find(app => app.name === 'Music Mixer')!,
        ]
    },
    {
        id: 'collection-3',
        name: 'Wellness & Health',
        icon: Heart,
        apps: [
            ALL_APPS.find(app => app.name === 'Workout Buddy')!,
            ALL_APPS.find(app => app.name === 'Focus Timer')!,
        ]
    }
];

export const MY_APPS_INITIAL: MiniApp[] = [
    ALL_APPS.find(app => app.name === 'Pixel Art Studio')!,
    ALL_APPS.find(app => app.name === 'Focus Timer')!,
    ALL_APPS.find(app => app.name === 'Meditation')!,
];

const curatedIds = new Set([
    ...FEATURED_APPS_INITIAL.map(app => app.id),
    ...NEW_THIS_WEEK_APPS_INITIAL.map(app => app.id),
    ...TRENDING_APPS_INITIAL.map(app => app.id),
    ...COLLECTIONS_INITIAL.flatMap(c => c.apps.map(a => a.id)),
    ...MY_APPS_INITIAL.map(app => app.id)
]);

export const AVAILABLE_APPS_INITIAL: MiniApp[] = ALL_APPS.filter(app => !curatedIds.has(app.id));

export const NAV_ITEMS = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'trending', name: 'Trending', icon: BarChart2 },
    { id: 'lists', name: 'Lists', icon: List },
    { id: 'my-apps', name: 'My Apps', icon: StarIcon },
];