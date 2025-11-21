import { Aperture, Box, Gamepad2, Globe, Home, Layers, MicVocal, Puzzle, ShoppingCart, Video } from "lucide-react";

export type MiniApp = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
};

export const AVAILABLE_APPS: MiniApp[] = [
  { id: 'app-1', name: 'E-commerce Cart', description: 'A simple shopping cart experience.', icon: ShoppingCart },
  { id: 'app-2', name: 'Game Pad', description: 'Interactive game controller.', icon: Gamepad2 },
  { id: 'app-3', name: 'Video Player', description: 'A custom video player.', icon: Video },
  { id: 'app-4', name: 'Music Maker', description: 'Create and share music.', icon: MicVocal },
  { id: 'app-5', name: 'Photo Editor', description: 'Edit photos with filters.', icon: Aperture },
  { id: 'app-6', name: '3D Modeler', description: 'View 3D models.', icon: Box },
  { id: 'app-7', name: 'Puzzle Game', description: 'A fun little puzzle.', icon: Puzzle },
  { id: 'app-8', name: 'Browser', description: 'A mini web browser.', icon: Globe },
];

export const CURATED_APPS: MiniApp[] = [
    { id: 'app-9', name: 'Home Screen', description: 'The main home screen.', icon: Home },
    { id: 'app-10', name: 'App Store', description: 'Discover new mini apps.', icon: Layers },
];