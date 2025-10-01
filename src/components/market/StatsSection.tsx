
import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase } from "lucide-react";
import StatCard from "./StatCard";
import { containerVariants } from "./AnimationVariants";

const StatsSection = memo(() => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full md:w-1/2 flex flex-col justify-center"
    >
      <StatCard
        icon={TrendingUp}
        title="$18B Total Addressable Market"
        description="60 million employees across 3 million SMBs eligible for group disability insurance"
        color="brand-blue"
        delay={0.1}
      />
      
      <StatCard
        icon={Users}
        title="$4.5B Serviceable Market"
        description="15 million employees at tech-savvy SMBs in white-collar, healthcare, and light retail"
        color="brand-teal"
        delay={0.2}
      />
      
      <StatCard
        icon={Briefcase}
        title="$108M Obtainable Market"
        description="360,000 active disability policies representing just 2% of the serviceable market"
        color="brand-purple"
        delay={0.3}
      />
    </motion.div>
  );
});

StatsSection.displayName = "StatsSection";
export default StatsSection;
