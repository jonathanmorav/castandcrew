
import React from "react";

export interface ValueChainComponentData {
  component: string;
  iconName: string;
  innovation: string;
  impact: string;
  details: string;
}

export const tableData: ValueChainComponentData[] = [
  {
    component: "Distribution",
    iconName: "Users",
    innovation: "AI-guided selection & API partnerships",
    impact: "New market access & scale",
    details: "Our distribution system leverages AI to match small businesses with optimal benefit packages and utilizes API partnerships to expand reach across multiple platforms."
  },
  {
    component: "Product Design",
    iconName: "Settings",
    innovation: "Bespoke solutions for SMBs",
    impact: "Enterprise-level benefits at SMB scale",
    details: "We design tailored benefit packages specifically for small businesses that previously were only available to large enterprises, with customization options that adapt to business needs."
  },
  {
    component: "Underwriting",
    iconName: "ShieldCheck",
    innovation: "Proprietary AI engine & pre-underwritten solutions",
    impact: "Minutes vs. weeks processing time",
    details: "Our proprietary algorithms and pre-underwritten solution templates reduce the traditional underwriting process from weeks to just minutes, with intelligent risk assessment."
  },
  {
    component: "Risk Participation",
    iconName: "Handshake",
    innovation: "Efficient risk pooling across small businesses",
    impact: "20-25% cost reduction vs. traditional market",
    details: "By effectively pooling risk across thousands of small businesses, we achieve economies of scale that reduce costs by up to 25% compared to traditional underwriting approaches."
  },
  {
    component: "Administration",
    iconName: "ClipboardCheck",
    innovation: "Zero-touch platform with consolidated billing",
    impact: "Eliminates paperwork & administrative burden",
    details: "Our digital platform automates administrative processes and consolidates billing into a single, easy-to-manage system, eliminating paperwork and reducing administrative overhead."
  },
  {
    component: "Claims Management",
    iconName: "MessageSquare",
    innovation: "Streamlined digital experience",
    impact: "Faster resolution & higher satisfaction",
    details: "Our digital claims process reduces resolution times by 70% and increases customer satisfaction scores through intuitive interfaces and transparent status tracking."
  }
];

// Animation variants for table rows
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};
