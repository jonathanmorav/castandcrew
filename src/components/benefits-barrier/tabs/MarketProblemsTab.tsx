
import { motion } from "framer-motion";
import { Users, Shield } from "lucide-react";

interface MarketProblemsTabProps {
  isVisible: boolean;
  currentTab: string;
}

const MarketProblemsTab = ({ isVisible, currentTab }: MarketProblemsTabProps) => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Misaligned Broker Models */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible && currentTab === "market" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-purple"></div>
          <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Users size={32} className="text-brand-blue" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Misaligned Broker Models</h3>
          
          <motion.ul 
            className="space-y-4"
            variants={staggerVariants}
            initial="hidden"
            animate={isVisible && currentTab === "market" ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              </div>
              <p className="text-gray-700">Organizational and economic models oriented toward health insurance and large employers</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              </div>
              <p className="text-gray-700">70% of small businesses don't offer health insurance; underserved elsewhere</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              </div>
              <p className="text-gray-700">Traditional commission structures incentivize health insurance over ancillary benefits</p>
            </motion.li>
          </motion.ul>
        </motion.div>
        
        {/* Insurance Carrier Limitations */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible && currentTab === "market" ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple to-brand-teal"></div>
          <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Shield size={32} className="text-brand-purple" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Insurance Carrier Limitations</h3>
          
          <motion.ul 
            className="space-y-4"
            variants={staggerVariants}
            initial="hidden"
            animate={isVisible && currentTab === "market" ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              </div>
              <p className="text-gray-700">Legacy technology infrastructure not designed for digital-first experiences</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              </div>
              <p className="text-gray-700">Lacking direct distribution capabilities for small businesses</p>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              </div>
              <p className="text-gray-700">Underwriting models that penalize smaller risk pools</p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketProblemsTab;
