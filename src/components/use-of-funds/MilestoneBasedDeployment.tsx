import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const milestoneGroups = [
  {
    title: "Short-Term Milestones",
    timeframe: "End of Q1 2026",
    accentClass: "bg-soft-purple/60 text-brand-purple",
    checkClass: "text-brand-purple",
    items: [
      "Complete TPA licensing in 15 target states",
      "Scale reseller program from 20 to 200 active agents",
      "Expand affinity group partners from 3 to 5 communities",
      "Launch first embedded platform partnership"
    ]
  },
  {
    title: "Medium-Term Objectives",
    timeframe: "End of Year 2026",
    accentClass: "bg-brand-mint/40 text-brand-teal",
    checkClass: "text-brand-teal",
    items: [
      "Reach 15,000 lives served milestone",
      "Achieve TPA licensing in 40 states",
      "Operate agent reseller platform at scale (1,000+ agents reselling)",
      "Launch broker enablement platform",
      "Establish profitability at unit economic level"
    ]
  },
  {
    title: "Long-Term Targets",
    timeframe: "End of Year 2027",
    accentClass: "bg-soft-yellow/60 text-amber-600",
    checkClass: "text-amber-500",
    items: [
      "Scale to 40,000+ lives",
      "National TPA footprint across all 50 states",
      "Achieve operating profitability",
      "Establish enterprise-level partnership capability",
      "Introduce new financial wellness products (401(k) for SMBs)"
    ]
  }
];

const MilestoneBasedDeployment = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="mb-12"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Milestone-Based Capital Deployment</p>
        <h2 className="mt-3 text-2xl font-bold text-brand-darkBlue md:text-3xl">
          Sequenced Growth Milestones Over 18 Months
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {milestoneGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${group.accentClass}`}>
              {group.timeframe}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-brand-darkBlue">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-gray">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/30">
                    <Check className={`h-3.5 w-3.5 ${group.checkClass}`} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default MilestoneBasedDeployment;
