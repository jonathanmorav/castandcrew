
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionTransitionProps {
  show: boolean;
  sectionTitle: string;
  onComplete?: () => void;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  show, 
  sectionTitle,
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 1500); // Match the CSS animation duration
      
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at center)' }}
          animate={{ 
            opacity: 1, 
            clipPath: 'circle(100% at center)',
            transition: { duration: 0.3 }
          }}
          exit={{ 
            opacity: 0, 
            clipPath: 'circle(0% at center)',
            transition: { duration: 0.3, delay: 0.9 } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-blue text-white"
        >
          <div className="text-center px-4">
            <motion.h1 
              className="text-h1 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {sectionTitle}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionTransition;
