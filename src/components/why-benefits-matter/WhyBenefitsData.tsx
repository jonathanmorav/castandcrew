
import { ReactNode } from "react";

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  stats: string;
  hoverColor: string;
}

export const benefitItems: BenefitItem[] = [
  {
    icon: "Shield",
    title: "Essential Financial Protection",
    description: "99% of people can't self-insure against major medical events or loss of income. Group benefits provide access to essential coverage that would otherwise be unattainable for most Americans.",
    color: "bg-emerald-100/70",
    stats: "",
    hoverColor: "group-hover:shadow-emerald-300/30"
  },
  {
    icon: "Users",
    title: "Top Priority for Employees",
    description: "After pay, benefits are what employees ask about first. Quality coverage provides security and peace of mind that directly impacts workplace satisfaction and retention.",
    color: "bg-soft-purple/40",
    stats: "",
    hoverColor: "group-hover:shadow-purple-300/30"
  },
  {
    icon: "Handshake",
    title: "Critical for Attracting & Retaining Talent",
    description: "Comprehensive benefits can be the deciding factor for quality candidates choosing between offers. In today's competitive market, strong benefits packages drive significantly higher retention rates.",
    color: "bg-brand-blue/20",
    stats: "",
    hoverColor: "group-hover:shadow-blue-300/30"
  }
];
