import { Aperture, Box, Gamepad2, Globe, MicVocal, Puzzle, ShoppingCart, Video, Palette, AlarmClock, Music, BookOpen, Home, List, BarChart2, Star as StarIcon, Dumbbell, Wallet, Zap, Heart, BrainCircuit, Lock, Smartphone, CloudSun, FileText, Calculator, Map, Camera, Mail, Calendar, Settings } from "lucide-react";

export type MiniApp = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  rating?: number;
  reviews?: string;
  backgroundColor?: string;
  iconBackgroundColor?: string;
  category?: string;
  longDescription?: string;
  tags?: string[];
  screenshots?: string[];
  features?: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }[];
  ratingsAndReviews?: {
    totalReviews: string;
    averageRating: number;
    reviews: {
      avatar: string;
      name: string;
      rating: number;
      comment: string;
    }[];
  };
};

export type Collection = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  apps: MiniApp[];
};

const ALL_APPS: MiniApp[] = [
  { 
    id: 'app-11', 
    name: 'Pixel Art Studio', 
    description: 'Create stunning pixel art', 
    icon: Palette, 
    rating: 4.8, 
    reviews: '12K', 
    backgroundColor: 'bg-gradient-to-br from-orange-400 to-red-500',
    iconBackgroundColor: 'bg-gradient-to-br from-orange-200 to-red-200',
    category: 'Creative',
    longDescription: 'Create stunning pixel art. Experience powerful features designed to enhance your productivity and creativity. Built with modern technology for smooth performance.',
    tags: ['#Creative', "Editor's Choice"],
    screenshots: [
        '/screenshots/pixel-art-1.png',
        '/screenshots/pixel-art-2.png',
        '/screenshots/pixel-art-3.png',
        '/screenshots/pixel-art-4.png',
    ],
    features: [
        { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for smooth experience' },
        { icon: Palette, title: 'Beautiful Design', description: 'Intuitive interface you\'ll love to use' },
        { icon: Lock, title: 'Secure & Private', description: 'Your data stays safe and private' },
        { icon: Smartphone, title: 'Mobile Optimized', description: 'Works perfectly on all devices' },
    ],
    ratingsAndReviews: {
        averageRating: 4.8,
        totalReviews: '12K ratings',
        reviews: [
            { avatar: 'https://i.pravatar.cc/40?u=sarah', name: 'Sarah M.', rating: 5, comment: 'Amazing app! Does exactly what I need.' },
            { avatar: 'https://i.pravatar.cc/40?u=mike', name: 'Mike R.', rating: 5, comment: 'Great functionality, very intuitive.' },
            { avatar: 'https://i.pravatar.cc/40?u=emma', name: 'Emma L.', rating: 4, comment: 'Love the design and features.' },
        ]
    }
  },
  { id: 'app-12', name: 'Focus Timer', description: 'Boost your productivity', icon: AlarmClock, rating: 4.9, reviews: '25K', backgroundColor: 'bg-gradient-to-br from-blue-400 to-cyan-500', iconBackgroundColor: 'bg-gradient-to-br from-blue-200 to-cyan-200' },
  { id: 'app-13', name: 'Music Mixer', description: 'Create and share music', icon: Music, rating: 4.7, reviews: '8K', iconBackgroundColor: 'bg-gradient-to-br from-pink-200 to-red-200' },
  { id: 'app-14', name: 'Recipe Book', description: 'Find and save recipes', icon: BookOpen, rating: 4.6, reviews: '15K', iconBackgroundColor: 'bg-gradient-to-br from-green-200 to-yellow-200' },
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
  { id: 'app-18', name: 'Weather Now', description: 'Check the weather forecast.', icon: CloudSun, rating: 4.5, reviews: '14K' },
  { id: 'app-19', name: 'Quick Notes', description: 'Simple note-taking app.', icon: FileText, rating: 4.7, reviews: '22K' },
  { id: 'app-20', name: 'Calculator Pro', description: 'A powerful calculator.', icon: Calculator, rating: 4.6, reviews: '19K' },
  { id: 'app-21', name: 'City Maps', description: 'Navigate your city.', icon: Map, rating: 4.8, reviews: '28K' },
  { id: 'app-22', name: 'Snap Camera', description: 'Capture beautiful moments.', icon: Camera, rating: 4.9, reviews: '35K' },
  { id: 'app-23', name: 'Mail Client', description: 'Manage your emails easily.', icon: Mail, rating: 4.4, reviews: '16K' },
  { id: 'app-24', name: 'Daily Planner', description: 'Organize your schedule.', icon: Calendar, rating: 4.7, reviews: '21K' },
  { id: 'app-25', name: 'System Settings', description: 'Customize your device.', icon: Settings, rating: 4.3, reviews: '9K' },
  { id: 'app-26', name: 'Stock Tracker', description: 'Follow the stock market.', icon: BarChart2, rating: 4.6, reviews: '17K' },
  { id: 'app-27', name: 'Language Learner', description: 'Learn a new language.', icon: Globe, rating: 4.8, reviews: '24K' },
  { id: 'app-28', name: 'Podcast Player', description: 'Listen to your favorite podcasts.', icon: MicVocal, rating: 4.5, reviews: '13K' },
  { id: 'app-29', name: 'Fitness Pal', description: 'Your personal fitness coach.', icon: Dumbbell, rating: 4.9, reviews: '40K' },
  { id: 'app-30', name: 'Mind Game', description: 'Train your brain.', icon: BrainCircuit, rating: 4.7, reviews: '18K' },
];

export const FEATURED_APPS_INITIAL: MiniApp[] = [ALL_APPS.find(app => app.id === 'app-12')!];
export const NEW_THIS_WEEK_APPS_INITIAL: MiniApp[] = [
    ALL_APPS.find(app => app.id === 'app-11')!,
    ALL_APPS.find(app => app.id === 'app-12')!,
    ALL_APPS.find(app => app.id === 'app-13')!,
    ALL_APPS.find(app => app.id === 'app-14')!,
];
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
    },
    {
        id: 'collection-4',
        name: 'For Gamers',
        icon: Gamepad2,
        apps: [
            ALL_APPS.find(app => app.name === 'Game Pad')!,
            ALL_APPS.find(app => app.name === 'Puzzle Game')!,
        ]
    },
    {
        id: 'collection-5',
        name: 'Shopping Essentials',
        icon: ShoppingCart,
        apps: [
            ALL_APPS.find(app => app.name === 'E-commerce Cart')!,
            ALL_APPS.find(app => app.name === 'Budget Tracker')!,
        ]
    },
    {
        id: 'collection-6',
        name: 'Entertainment',
        icon: Video,
        apps: [
            ALL_APPS.find(app => app.name === 'Video Player')!,
            ALL_APPS.find(app => app.name === 'Music Maker')!,
        ]
    }
];

export const MY_APPS_INITIAL: MiniApp[] = [
    ALL_APPS.find(app => app.name === 'Pixel Art Studio')!,
    ALL_APPS.find(app => app.name === 'Focus Timer')!,
    ALL_APPS.find(app => app.name === 'Meditation')!,
    ALL_APPS.find(app => app.name === 'Recipe Book')!,
    ALL_APPS.find(app => app.name === 'Workout Buddy')!,
    ALL_APPS.find(app => app.name === 'Budget Tracker')!,
    ALL_APPS.find(app => app.name === 'E-commerce Cart')!,
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