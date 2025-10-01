
import { memo } from "react";
import { motion } from "framer-motion";

const MarketHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full text-center pt-10 sm:pt-14 pb-4 sm:pb-8 px-4 relative"
    >
      {/* Simplified decorative elements - removed infinite animations */}
      <div 
        className="absolute top-[10%] left-[5%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 blur-3xl opacity-60"
      />
      
      <div 
        className="absolute bottom-[20%] right-[5%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-brand-teal/10 to-brand-purple/10 blur-3xl opacity-60"
      />
      
      {/* Main Heading with simplified animation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal animate-gradient-shift relative inline-block">
          The Market Opportunity
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </h2>
      </motion.div>

      {/* Enhanced subheading with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 sm:mt-6"
      >
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#333333] leading-relaxed">
          A <span className="font-semibold text-brand-purple">massive, underserved market</span> ready for innovation in 
          <span className="relative inline-block mx-1 group">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
              group disability insurance
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span> 
          for SMBs.
        </p>
      </motion.div>
      
      {/* Simplified highlight numbers */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold text-brand-blue">$18B</span>
          <span className="text-xs sm:text-sm text-gray-600">Total Market</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold text-brand-purple">60M</span>
          <span className="text-xs sm:text-sm text-gray-600">Eligible Employees</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold text-brand-teal">2%</span>
          <span className="text-xs sm:text-sm text-gray-600">Market Penetration</span>
        </div>
      </motion.div>
    </motion.div>
  );
});

MarketHeader.displayName = "MarketHeader";
export default MarketHeader;
