
import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="heading flex flex-col items-center justify-center gap-6 w-full max-w-3xl mx-auto"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div 
          className="bg-white rounded-full px-4 py-1.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#00348f] text-sm font-medium">Essential for Business Success</span>
        </motion.div>
        
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005dfe] font-grotesk"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Why Benefits Matter
        </motion.h2>
      </div>
      
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        In today's business environment, employee benefits aren't just a nice-to-have, they're
        <span className="relative inline-block">
          <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-brand-teal/30 rounded-full"></span>
          <span className="px-1 font-medium"> essential </span>
        </span>
        for your company's success and your team's wellbeing.
      </motion.p>
    </motion.div>
  );
};

export default BenefitsHeader;
