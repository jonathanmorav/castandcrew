
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
    icon: "Users",
    title: "#1 Issue for Employees",
    description: "Benefits consistently rank as the top concern for employees across all industries. Quality coverage provides security and peace of mind that directly impacts workplace satisfaction and productivity.",
    color: "bg-soft-purple/40",
    stats: "87% of employees consider benefits when choosing a job",
    hoverColor: "group-hover:shadow-purple-300/30"
  },
  {
    icon: "Handshake",
    title: "Powerful Value Add for Employers",
    description: "Comprehensive benefits packages are crucial for attracting and retaining top talent. In today's competitive job market, the right benefits can be the deciding factor for quality candidates choosing between offers.",
    color: "bg-brand-blue/20",
    stats: "60% higher retention rates for companies with strong benefits",
    hoverColor: "group-hover:shadow-blue-300/30"
  },
  {
    icon: "Shield",
    title: "Supports Long-term Financial Wellness",
    description: "Benefits provide essential protection against unexpected life events and help employees build financial security. This stability allows your team to focus on what matters—both at work and in their personal lives.",
    color: "bg-emerald-100/70",
    stats: "76% reduction in financial stress with proper coverage",
    hoverColor: "group-hover:shadow-emerald-300/30"
  },
  {
    icon: "WalletIcon",
    title: "Inexpensive Relative to Their Value",
    description: "Employee benefits deliver exceptional return on investment. The cost to provide comprehensive coverage is minimal compared to the value received by employees and the protection afforded to your business.",
    color: "bg-amber-100/70",
    stats: "3.5x ROI on benefits investment for employers",
    hoverColor: "group-hover:shadow-amber-300/30"
  },
  {
    icon: "ThumbsUp",
    title: "99% of People Can't Self-Insure",
    description: "The economic reality is that most Americans cannot financially withstand major medical events, disability, or loss of income without insurance. Group benefits provide access to essential coverage that would otherwise be unattainable.",
    color: "bg-rose-100/70",
    stats: "Only 39% of Americans can cover a $1,000 emergency expense",
    hoverColor: "group-hover:shadow-rose-300/30"
  }
];
