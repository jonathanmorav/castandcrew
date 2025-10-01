
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const ScalableEconomics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-4">
        <TrendingUp className="text-brand-blue w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Scalable Unit Economics</h2>
      </div>

      <h3 className="font-semibold text-lg mb-2">Operational Leverage</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Fixed Costs: Technology platform, compliance, core team</li>
        <li>Variable Costs: Largely partner payments and servicing</li>
        <li>Scale Benefits: Margin improves with volume due to technology leverage</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Margin Evolution</h3>
      <ul className="pl-4 mb-4 space-y-1">
        <li><span className="font-medium">Gross Margin:</span> 72% (consistent across years)</li>
        <li><span className="font-medium">Operating Margin:</span></li>
        <li className="pl-4">Year 1: -28% (investment phase)</li>
        <li className="pl-4">Year 2: -5% (approaching breakeven)</li>
        <li className="pl-4">Year 3: 18% (profitability at scale)</li>
        <li className="pl-4">Year 5: 35% (projected at maturity)</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Growth Projections</h3>
      <p className="font-medium mb-1">Revenue Growth</p>
      <ul className="pl-4 mb-2 space-y-1">
        <li>Year 1-2: 263% growth (bootstrap phase)</li>
        <li>Year 2-3: 205% growth (scaling phase)</li>
        <li>Year 3-4: 140% growth (maturity phase)</li>
      </ul>

      <p className="font-medium mb-1">Profitability Timeline</p>
      <ul className="pl-4 space-y-1">
        <li>Cash Flow Breakeven: Month 24</li>
        <li>EBITDA Positive: Month 30</li>
        <li>Unit Profitability: Already positive at individual life level</li>
      </ul>
    </motion.div>
  );
};

export default ScalableEconomics;
