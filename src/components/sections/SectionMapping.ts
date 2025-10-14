import CoverScreen from "@/components/CoverScreen";
import HealthPlanOverview from "@/components/HealthPlanOverview";
import SolutionOverview from "@/components/SolutionOverview";

export type DeckSection = {
  id: string;
  title: string;
};

// Section definitions with updated titles
export const sections: DeckSection[] = [
  { id: "cover", title: "Cover" },
  { id: "problem", title: "Health Plan Option Overview" },
  { id: "solution", title: "Solution Overview" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverScreen,
  "problem": HealthPlanOverview,
  "solution": SolutionOverview,
};
