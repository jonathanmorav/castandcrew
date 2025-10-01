
import { useMemo } from "react";
import { Users, Settings, ShieldCheck, Handshake, ClipboardCheck, MessageSquare } from "lucide-react";
import { ComponentData } from "./types";

export function useComponentsData() {
  // Memoize the components data to prevent recreation on each render
  const cakewalkComponents = useMemo<ComponentData[]>(() => [
    { 
      id: "distribution",
      name: "Distribution", 
      icon: Users, 
      color: "#4353FF",
      position: { x: 0, y: -120 }
    },
    { 
      id: "product",
      name: "Product Design", 
      icon: Settings, 
      color: "#7966F8",
      position: { x: 100, y: -60 }
    },
    { 
      id: "underwriting",
      name: "Underwriting", 
      icon: ShieldCheck, 
      color: "#5AFEEF",
      position: { x: 100, y: 60 }
    },
    { 
      id: "risk",
      name: "Risk Participation", 
      icon: Handshake, 
      color: "#4353FF",
      position: { x: 0, y: 120 }
    },
    { 
      id: "admin",
      name: "Administration", 
      icon: ClipboardCheck, 
      color: "#7966F8",
      position: { x: -100, y: 60 }
    },
    { 
      id: "claims",
      name: "Claims Management", 
      icon: MessageSquare, 
      color: "#5AFEEF",
      position: { x: -100, y: -60 }
    }
  ], []);

  // Memoize the connections to prevent recreation on each render
  const connections = useMemo(() => [
    { from: "distribution", to: "product" },
    { from: "product", to: "underwriting" },
    { from: "underwriting", to: "risk" },
    { from: "risk", to: "admin" },
    { from: "admin", to: "claims" },
    { from: "claims", to: "distribution" }
  ], []);

  return { cakewalkComponents, connections };
}
