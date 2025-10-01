
import React from "react";
import { motion } from "framer-motion";
import MilestoneCard from "./MilestoneCard";

const MilestoneBasedDeployment = () => {
  const shortTermMilestones = [
    "Complete TPA licensing in 15 target states",
    "Launch embedded API platform with first technology partner",
    "Enhance underwriting engine to support multi-carrier quotes",
    "Expand affinity group partners from 2 to 5"
  ];

  const mediumTermObjectives = [
    "Reach 15,000 lives served milestone",
    "Achieve presence in 35 states",
    "Launch broker enablement platform",
    "Implement automated claims processing",
    "Establish profitability at unit economic level"
  ];

  const longTermTargets = [
    "Scale to 45,000+ lives",
    "Complete national footprint (50 states)",
    "Develop second-generation underwriting algorithms",
    "Achieve operating profitability",
    "Establish enterprise-level partnership capability"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-brand-blue font-grotesk">Milestone-Based Capital Deployment</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Short-Term Milestones */}
        <MilestoneCard
          title="Short-Term Milestones"
          timeframe="0-6 Months"
          titleColor="text-brand-purple"
          checkColor="text-brand-purple"
          milestones={shortTermMilestones}
          gradientFrom="from-soft-purple"
          gradientTo="to-white"
        />

        {/* Medium-Term Objectives */}
        <MilestoneCard
          title="Medium-Term Objectives"
          timeframe="6-12 Months"
          titleColor="text-brand-teal"
          checkColor="text-brand-teal"
          milestones={mediumTermObjectives}
          gradientFrom="from-soft-green"
          gradientTo="to-white"
        />

        {/* Long-Term Targets */}
        <MilestoneCard
          title="Long-Term Targets"
          timeframe="12-18 Months"
          titleColor="text-amber-600"
          checkColor="text-amber-500"
          milestones={longTermTargets}
          gradientFrom="from-soft-yellow"
          gradientTo="to-white"
        />
      </div>
    </motion.div>
  );
};

export default MilestoneBasedDeployment;
