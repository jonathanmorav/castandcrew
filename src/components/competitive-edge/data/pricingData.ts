
import { ChartData } from "../types/ChartTypes";

// Color mapping for the breakdown segments
export const colorMap: Record<string, string> = {
  "Expected Claims": "#8B5CF6",
  "Carrier Admin/ROC": "#3B82F6", 
  "External Admin Tools": "#0EA5E9",
  "External Distribution": "#06B6D4"
};

// Combined data from cost structure and pricing
export const combinedData: ChartData[] = [
  {
    name: "Large Company",
    price: 10.00,
    color: "#4353FF",
    breakdown: [
      { name: "Expected Claims", value: 6.50, explanation: "Enterprise-level risk pooling" },
      { name: "Carrier Admin/ROC", value: 2.00, explanation: "Standard enterprise admin costs" },
      { name: "External Admin Tools", value: 0.50, explanation: "Consolidated enterprise tools" },
      { name: "External Distribution", value: 1.00, explanation: "Efficient distribution channels" }
    ]
  },
  {
    name: "Small Company",
    price: 15.00,
    color: "#A3A3A3",
    breakdown: [
      { name: "Expected Claims", value: 7.25, explanation: "Less efficient risk pooling" },
      { name: "Carrier Admin/ROC", value: 3.00, explanation: "Higher overhead per customer" },
      { name: "External Admin Tools", value: 1.00, explanation: "Multiple disjointed systems" },
      { name: "External Distribution", value: 3.75, explanation: "Costly distribution networks" }
    ]
  },
  {
    name: "Cakewalk",
    price: 10.00,
    color: "url(#cakewalkGradient)",
    breakdown: [
      { name: "Expected Claims", value: 6.50, explanation: "Enterprise-level risk pooling technology" },
      { name: "Carrier Admin/ROC", value: 1.00, explanation: "AI-driven overhead reduction" },
      { name: "External Admin Tools", value: 0.50, explanation: "Unified platform efficiencies" },
      { name: "External Distribution", value: 2.00, explanation: "Digital-native approach" }
    ]
  }
];
