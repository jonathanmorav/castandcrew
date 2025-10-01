
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface RealWorldImpactTabProps {
  isVisible: boolean;
  currentTab: string;
}

const RealWorldImpactTab = ({ isVisible, currentTab }: RealWorldImpactTabProps) => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Impact for Business Owners */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible && currentTab === "impact" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-blue/10 p-3 rounded-lg">
              <Users size={32} className="text-brand-blue" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">For Business Owners</h3>
          </div>
          
          <motion.ul 
            className="space-y-5"
            variants={staggerVariants}
            initial="hidden"
            animate={isVisible && currentTab === "impact" ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-blue mb-2">Competitive Disadvantage</h4>
              <p className="text-gray-700">Inability to offer benefits comparable to larger employers</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-blue mb-2">Administrative Burden</h4>
              <p className="text-gray-700">Excessive time spent on insurance processes rather than running their business</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-blue mb-2">Budget Constraints</h4>
              <p className="text-gray-700">Forced to choose between offering benefits and other critical investments</p>
            </motion.li>
          </motion.ul>
        </motion.div>
        
        {/* Impact for Employees */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible && currentTab === "impact" ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-purple/10 p-3 rounded-lg">
              <Users size={32} className="text-brand-purple" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">For Employees</h3>
          </div>
          
          <motion.ul 
            className="space-y-5"
            variants={staggerVariants}
            initial="hidden"
            animate={isVisible && currentTab === "impact" ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-purple mb-2">Coverage Gaps</h4>
              <p className="text-gray-700">61.7 million lives at small businesses remain underserved</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-purple mb-2">Financial Vulnerability</h4>
              <p className="text-gray-700">Lack of adequate protection for health, life, and income risks</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-medium text-brand-purple mb-2">Workplace Inequality</h4>
              <p className="text-gray-700">Significantly different benefit access based solely on employer size</p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RealWorldImpactTab;
