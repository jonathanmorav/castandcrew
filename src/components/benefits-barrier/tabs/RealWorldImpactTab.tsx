
import { motion } from "framer-motion";
import { Briefcase, Clock, Wallet, HeartPulse, ShieldAlert, Users, TrendingUp } from "lucide-react";

interface RealWorldImpactTabProps {
  isVisible: boolean;
  currentTab: string;
}

const RealWorldImpactTab = ({ isVisible, currentTab }: RealWorldImpactTabProps) => {
  const staggerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const impacts = [
    {
      icon: <Briefcase size={32} className="text-brand-blue" />,
      bgColor: "bg-soft-blue",
      segment: "Business owners",
      title: "Competitive Disadvantage",
      stat: "62%",
      description: "of SMB workers cite benefits quality as a top reason to join or stay—leaving owners outgunned in every hiring cycle.",
    },
    {
      icon: <Clock size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      segment: "Business owners",
      title: "Administrative Drag",
      stat: "8 hrs/wk",
      description: "is the average time founders spend wrangling enrollment, renewals, and compliance instead of running the business.",
    },
    {
      icon: <Wallet size={32} className="text-emerald-500" />,
      bgColor: "bg-soft-green",
      segment: "Business owners",
      title: "Budget Tradeoffs",
      stat: "30–50%",
      description: "premium delta versus enterprise groups forces SMBs to gut coverage, pass costs to workers, or cut growth investment.",
    },
    {
      icon: <ShieldAlert size={32} className="text-amber-500" />,
      bgColor: "bg-soft-yellow",
      segment: "Business owners",
      title: "Retention Risk",
      stat: "2×",
      description: "higher turnover cost when employees leave over benefits gaps—replacing one worker can run 20% of annual salary.",
    },
    {
      icon: <Users size={32} className="text-brand-blue" />,
      bgColor: "bg-soft-blue",
      segment: "Employees",
      title: "Coverage Gaps",
      stat: "61.7M",
      description: "workers tied to small businesses remain underinsured or outside traditional plans entirely.",
    },
    {
      icon: <HeartPulse size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      segment: "Employees",
      title: "Financial Vulnerability",
      stat: "41%",
      description: "of SMB employees say a $400 emergency would create debt because core health and income protections are missing.",
    },
    {
      icon: <Users size={32} className="text-emerald-500" />,
      bgColor: "bg-soft-green",
      segment: "Employees",
      title: "Job Churn",
      stat: "1 in 3",
      description: "SMB workers plan to leave within a year for employers offering better benefits or financial wellness support.",
    },
    {
      icon: <TrendingUp size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      segment: "Carriers",
      title: "Revenue Leakage",
      stat: "$45B",
      description: "in premium potential sits unclaimed because legacy stacks cannot profitably price and service the long tail of employers.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        variants={staggerVariants}
        initial="hidden"
        animate={isVisible && currentTab === "impact" ? "visible" : "hidden"}
      >
        {impacts.map((impact) => (
          <motion.div
            key={impact.title}
            variants={cardVariants}
            className="flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/90 p-6 text-center shadow-sm backdrop-blur"
          >
            <div className={`${impact.bgColor} mb-4 rounded-xl p-4`}>{impact.icon}</div>
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue opacity-80">
              {impact.segment}
            </span>
            <h4 className="mb-3 text-lg font-semibold text-brand-darkBlue">{impact.title}</h4>
            {impact.stat && (
              <div className="mb-2 text-2xl font-bold text-brand-blue">{impact.stat}</div>
            )}
            <p className="text-sm leading-relaxed text-gray-600">{impact.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RealWorldImpactTab;
