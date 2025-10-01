
import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import MarketOverview from "./insights/MarketOverview";
import TamInsights from "./insights/TamInsights";
import SamInsights from "./insights/SamInsights";
import SomInsights from "./insights/SomInsights";

interface MarketInsightsProps {
  activeTab: 'overview' | 'tam' | 'sam' | 'som';
}

const MarketInsights = memo(({ activeTab }: MarketInsightsProps) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Simplified timer - we only need one
    const timer = setTimeout(() => {
      setIsRendered(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };
  
  // Get title based on active tab
  const getTitle = () => {
    switch(activeTab) {
      case 'overview': return 'Market Summary';
      case 'tam': return 'Total Addressable Market';
      case 'sam': return 'Serviceable Available Market';
      case 'som': return 'Serviceable Obtainable Market';
      default: return 'Market Insights';
    }
  };
  
  return (
    <div className="relative">
      {/* Card title with animated underline */}
      <motion.div 
        className="text-2xl font-semibold mb-4 ml-2 relative inline-block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
          {getTitle()}
        </span>
        <motion.div 
          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </motion.div>
      
      {/* Insights card with dynamic content */}
      <Card className="border-gray-100 shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate={isRendered ? "visible" : "hidden"}
              exit="exit"
              className="min-h-[300px]"
            >
              {activeTab === 'overview' && <MarketOverview />}
              {activeTab === 'tam' && <TamInsights />}
              {activeTab === 'sam' && <SamInsights />}
              {activeTab === 'som' && <SomInsights />}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        
        {/* Bottom decorative bar - simplified color transition */}
        <motion.div 
          className="h-1 w-full"
          animate={{ 
            background: activeTab === 'overview' 
              ? 'linear-gradient(to right, #4353FF, #9B72DF)' 
              : activeTab === 'tam' 
              ? 'linear-gradient(to right, #4353FF, #6A7CFF)' 
              : activeTab === 'sam' 
              ? 'linear-gradient(to right, #5AFEEF, #8CFFCC)' 
              : 'linear-gradient(to right, #9B72DF, #C59BFF)'
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
      
      {/* Tab indicator dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {['overview', 'tam', 'sam', 'som'].map((tab) => (
          <motion.div
            key={tab}
            className={`h-1.5 rounded-full ${
              activeTab === tab ? 'w-8' : 'w-2 bg-gray-300'
            }`}
            animate={{ 
              width: activeTab === tab ? 32 : 8,
              backgroundColor: activeTab === tab 
                ? tab === 'overview' ? '#4353FF' 
                : tab === 'tam' ? '#4353FF'
                : tab === 'sam' ? '#5AFEEF'
                : '#9B72DF'
                : '#D1D5DB'
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
});

MarketInsights.displayName = "MarketInsights";
export default MarketInsights;
