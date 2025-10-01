
import { memo } from "react";
import { motion } from "framer-motion";
import { MarketBarChart, BusinessPieChart } from "./ChartComponents";

// No need to conditionally render based on showCharts - parent will handle that
const ChartSection = memo(() => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-50"
      >
        <h3 className="text-xl font-semibold text-center mb-4 text-brand-blue">Market Breakdown</h3>
        <MarketBarChart />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full bg-white rounded-xl shadow-md p-6 border border-gray-50"
      >
        <h3 className="text-xl font-semibold text-center mb-4 text-brand-purple">U.S. Business Breakdown</h3>
        <BusinessPieChart />
      </motion.div>
    </>
  );
});

ChartSection.displayName = "ChartSection";
export default ChartSection;
