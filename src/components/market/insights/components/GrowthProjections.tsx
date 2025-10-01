
import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const projectionItems = [
  { title: "Monthly Active Policies", value: "100,000", percentage: "60%", description: "Projected policy density growth" },
  { title: "Annual Active Policies", value: "1.2M", percentage: "75%", description: "Year-over-year growth trajectory" },
  { title: "Disability Policies", value: "360,000", percentage: "30%", description: "30% of total policy mix" },
  { title: "Market Penetration", value: "2%", percentage: "15%", description: "Of serviceable available market" }
];

const GrowthProjections = memo(() => {
  return (
    <motion.div 
      className="relative bg-gradient-to-br from-[#F9FAFF] to-[#EEF1FF] rounded-2xl p-6 shadow-lg overflow-hidden border border-purple-100"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#9B72DF]/5 rounded-full -mr-12 -mt-12"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#9B72DF]/5 rounded-full -ml-10 -mb-10"></div>
      
      <h4 className="text-xl font-bold mb-5 flex items-center">
        <TrendingUp className="mr-2 text-[#9B72DF]" />
        <span>5-Year Growth Projections</span>
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectionItems.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-purple-50"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 font-medium">{item.title}</span>
              <span className="text-2xl font-bold text-[#9B72DF]">{item.value}</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#9B72DF] to-[#7966F8]" 
                initial={{ width: 0 }}
                animate={{ width: item.percentage }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 1 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

GrowthProjections.displayName = "GrowthProjections";
export default GrowthProjections;
