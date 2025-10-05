
import { motion } from "framer-motion";
import { Users, Shield, Handshake, LineChart } from "lucide-react";

interface MarketProblemsTabProps {
  isVisible: boolean;
  currentTab: string;
}

const MarketProblemsTab = ({ isVisible, currentTab }: MarketProblemsTabProps) => {
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

  const marketDynamics = [
    {
      icon: <Handshake size={32} className="text-brand-blue" />,
      bgColor: "bg-soft-blue",
      title: "Broker Model Locked on Enterprise",
      description:
        "Traditional brokers still chase jumbo medical commissions, so 70% of small firms never get proactive guidance on ancillary or bundled coverage.",
    },
    {
      icon: <Users size={32} className="text-brand-purple" />,
      bgColor: "bg-soft-purple",
      title: "No Direct Path to Quality Products",
      description:
        "Small employers are funneled through manual, relationship-only channels, leaving modern digital plans effectively out of reach.",
    },
    {
      icon: <Shield size={32} className="text-emerald-500" />,
      bgColor: "bg-soft-green",
      title: "Carrier Stacks Can't Serve the Long Tail",
      description:
        "Paper-era enrollment systems make low-premium SMB books unprofitable to stand up or service, so they get deprioritized.",
    },
    {
      icon: <LineChart size={32} className="text-amber-500" />,
      bgColor: "bg-soft-yellow",
      title: "Small Groups Priced Out Before They Start",
      description:
        "Underwriting models bake in volatility and higher loss assumptions, driving premiums 30–50% above enterprise rates and killing adoption.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={staggerVariants}
        initial="hidden"
        animate={isVisible && currentTab === "market" ? "visible" : "hidden"}
      >
        {marketDynamics.map((problem, index) => (
          <motion.div
            key={problem.title}
            variants={cardVariants}
            className="flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/90 p-6 text-center shadow-sm backdrop-blur"
          >
            <div className={`${problem.bgColor} mb-4 rounded-xl p-4`}>{problem.icon}</div>
            <h4 className="mb-3 text-lg font-semibold text-brand-darkBlue">{problem.title}</h4>
            <p className="text-sm leading-relaxed text-gray-600">{problem.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketProblemsTab;
