
export interface FrameworkPillarData {
  letter: string;
  title: string;
  impact: string;
  color: string;
  hoverColor: string;
  ringColor: string;
  points: string[];
}

export const uxoPillars: FrameworkPillarData[] = [
  {
    letter: "U",
    title: "Underwriting",
    impact: "33% Cost Reduction",
    color: "from-purple-800 to-indigo-700",
    hoverColor: "group-hover:from-purple-700 group-hover:to-indigo-600",
    ringColor: "ring-purple-900/20",
    points: [
      "Aggregates business demand into powerful collectives",
      "Transforms traditional risk distribution models",
      "Creates a new era of affordable insurance coverage",
      "Delivers enterprise-level pricing to small businesses",
      "Reduces costs through innovative risk pooling"
    ]
  },
  {
    letter: "X",
    title: "Experience",
    impact: "98% Time Savings",
    color: "from-indigo-800 to-brand-blue",
    hoverColor: "group-hover:from-indigo-700 group-hover:to-brand-blue",
    ringColor: "ring-indigo-900/20",
    points: [
      "Market's first true zero-touch platform",
      "Transforms every step from quote to claim",
      "Creates a seamless digital experience",
      "Provides the simplicity of consumer e-commerce",
      "Guides users through intuitive recommendation process"
    ]
  },
  {
    letter: "O",
    title: "Operations",
    impact: "60% Efficiency Improvement",
    color: "from-brand-blue to-brand-teal",
    hoverColor: "group-hover:from-brand-blue group-hover:to-teal-500",
    ringColor: "ring-blue-900/20",
    points: [
      "Fully automated operational engine",
      "Converts complex insurance processes into streamlined workflows",
      "Eliminates human error through intelligent automation",
      "Accelerates every step of the insurance journey",
      "Ensures consistent, reliable results every time"
    ]
  }
];
