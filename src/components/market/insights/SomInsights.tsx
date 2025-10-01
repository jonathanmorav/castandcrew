
import { memo } from "react";
import { motion } from "framer-motion";
import GrowthProjections from "./components/GrowthProjections";
import GrowthStrategy from "./components/GrowthStrategy";
import SomCalculation from "./components/SomCalculation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 80 
    }
  }
};

const SomInsights = memo(() => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#9B72DF] to-[#7966F8]">
          Serviceable Obtainable Market
        </h3>
        <p className="text-gray-700">
          Our SOM represents what Cakewalk can realistically capture over the next ~5 years, accounting for competition, market penetration rates, and our growth strategy.
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <GrowthProjections />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <GrowthStrategy />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SomCalculation />
        </motion.div>
      </div>
    </motion.div>
  );
});

SomInsights.displayName = "SomInsights";
export default SomInsights;
