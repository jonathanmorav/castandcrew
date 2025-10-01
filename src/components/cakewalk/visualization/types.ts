
import { LucideIcon } from "lucide-react";

export interface ComponentData {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  position: { x: number, y: number };
}

export interface ValueChainVisualizationProps {
  isVisible: boolean;
  activeView: 'traditional' | 'cakewalk';
  onToggleView: () => void;
}

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}
