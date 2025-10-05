
import CoverScreen from "@/components/CoverScreen";
import ProblemStatement from "@/components/ProblemStatement";
import WhyBenefitsMatter from "@/components/WhyBenefitsMatter";
import BenefitsBarrier from "@/components/benefits-barrier/BenefitsBarrier";
import SolutionOverview from "@/components/SolutionOverview";
import WhyNow from "@/components/WhyNow";
import CakewalkModel from "@/components/CakewalkModel";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import CakewalkExperience from "@/components/CakewalkExperience";
import CakewalkTechPlatform from "@/components/CakewalkTechPlatform";
import { MultiChannelDistribution } from "@/components/distribution";
import UnitEconomics from "@/components/UnitEconomics";
import UseOfFunds from "@/components/UseOfFunds";
import Team from "@/components/Team";

export type DeckSection = {
  id: string;
  title: string;
};

// Section definitions with updated titles
export const sections: DeckSection[] = [
  { id: "cover", title: "Cover" },
  { id: "problem", title: "Problem Statement" },
  { id: "why", title: "Why Benefits Matter" },
  { id: "barriers", title: "The Problem - Expanded" },
  { id: "why-now", title: "Why Now" },
  { id: "solution", title: "Solution Overview" },
  { id: "cakewalk-model", title: "The Cakewalk Model" },
  { id: "cakewalk-experience", title: "The Cakewalk Platform" },
  { id: "cakewalk-tech", title: "Technology Stack" },
  { id: "competitive-edge", title: "Differentiation for SMBs" },
  { id: "distribution", title: "GTM / Distribution" },
  { id: "unit-economics", title: "Unit Economics" },
  { id: "use-of-funds", title: "Use of Funds" },
  { id: "team", title: "The Team" },
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
  "cakewalk-experience": CakewalkExperience,
  "cakewalk-tech": CakewalkTechPlatform,
  "competitive-edge": CompetitiveEdge,
  "distribution": MultiChannelDistribution,
  "unit-economics": UnitEconomics,
  "use-of-funds": UseOfFunds,
  "team": Team,
};
