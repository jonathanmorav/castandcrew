
import React from "react";
import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";

interface SectionFooterProps {
  onNavigateNext: () => void;
}

const SectionFooter = ({ onNavigateNext }: SectionFooterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="flex flex-col items-center mt-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-gray-600 italic">
          Our strategic capital deployment approach prioritizes sustainable growth over unsustainable burn rates.
        </p>
      </div>
      
      <NavigationArrow 
        onClick={onNavigateNext} 
        className="text-brand-blue hover:text-brand-purple transition-colors"
      />
    </motion.div>
  );
};

export default SectionFooter;
