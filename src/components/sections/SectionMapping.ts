import CoverScreen from "@/components/CoverScreen";
import ProblemStatement from "@/components/ProblemStatement";
import WhyBenefitsMatter from "@/components/WhyBenefitsMatter";
import BenefitsBarrier from "@/components/benefits-barrier/BenefitsBarrier";
import SolutionOverview from "@/components/SolutionOverview";
import WhyNow from "@/components/WhyNow";
import CakewalkModel from "@/components/CakewalkModel";
import ResellerValue from "@/components/ResellerValue";

export type DeckSection = {
  id: string;
  title: string;
};

// Section definitions with updated titles
export const sections: DeckSection[] = [
  { id: "cover", title: "Cover" },
  { id: "problem", title: "Problem Statement" },
  { id: "why", title: "Why Benefits Matter" },
  { id: "barriers", title: "The Agent Opportunity" },
  { id: "why-now", title: "Agent Experience" },
  { id: "cakewalk-model", title: "The Cakewalk Model" },
  { id: "solution", title: "Solution Overview" },
  { id: "reseller-value", title: "Reseller Value Proposition" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverScreen,
  "problem": ProblemStatement,
  "why": WhyBenefitsMatter,
  "barriers": BenefitsBarrier,
  "why-now": WhyNow,
  "solution": SolutionOverview,
  "cakewalk-model": CakewalkModel,
  "reseller-value": ResellerValue,
};
