
import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MarketSummaryHeaderProps {
  isInView: boolean;
}

const MarketSummaryHeader = memo(({ isInView }: MarketSummaryHeaderProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold mb-3 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal animate-gradient-shift">
          Market Summary
        </span>
        <motion.div 
          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : { width: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </h3>
      <motion.p 
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Cakewalk targets U.S.-based Small and Medium-sized Businesses (SMBs) who need group disability insurance for their employees. We serve SMB owners directly and work with brokers and associations to reach our audience.
      </motion.p>
    </motion.div>
  );
});

MarketSummaryHeader.displayName = "MarketSummaryHeader";
export default MarketSummaryHeader;
