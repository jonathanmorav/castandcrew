
import { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import ChartSection from "./ChartSection";
import StatsSection from "./StatsSection";

// Lazy load charts to improve initial load performance
const TamChart = lazy(() => import("./charts/TamChart"));
const SamChart = lazy(() => import("./charts/SamChart"));
const SomChart = lazy(() => import("./charts/SomChart"));

interface MarketVisualizationProps {
  activeTab: 'overview' | 'tam' | 'sam' | 'som';
  showVisualizations: boolean;
}

const MarketVisualization = memo(({ activeTab, showVisualizations }: MarketVisualizationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6"
    >
      {/* Stats section - wider on mobile, proportional on desktop */}
      <motion.div 
        className="md:col-span-5 xl:col-span-4 order-2 md:order-1"
        transition={{ duration: 0.2 }}
      >
        <StatsSection />
      </motion.div>
      
      {/* Chart section with optimized rendering */}
      <motion.div 
        className="md:col-span-7 xl:col-span-8 order-1 md:order-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {activeTab === 'overview' && showVisualizations && (
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <ChartSection />
          </div>
        )}
        
        {activeTab === 'tam' && (
          <motion.div 
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-center mb-3 sm:mb-4 text-brand-blue">Total Addressable Market</h3>
            {showVisualizations ? (
              <div className="h-[300px] sm:h-[350px] w-full">
                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />}>
                  <TamChart />
                </Suspense>
              </div>
            ) : (
              <div className="h-[300px] sm:h-[350px] w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />
              </div>
            )}
          </motion.div>
        )}
        
        {activeTab === 'sam' && (
          <motion.div 
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-center mb-3 sm:mb-4 text-brand-teal">Serviceable Available Market</h3>
            {showVisualizations ? (
              <div className="h-[300px] sm:h-[350px] w-full">
                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />}>
                  <SamChart />
                </Suspense>
              </div>
            ) : (
              <div className="h-[300px] sm:h-[350px] w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />
              </div>
            )}
          </motion.div>
        )}
        
        {activeTab === 'som' && (
          <motion.div 
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-center mb-3 sm:mb-4 text-brand-purple">Serviceable Obtainable Market</h3>
            {showVisualizations ? (
              <div className="h-[300px] sm:h-[350px] w-full">
                <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />}>
                  <SomChart />
                </Suspense>
              </div>
            ) : (
              <div className="h-[300px] sm:h-[350px] w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 h-[250px] w-full rounded-lg" />
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
});

MarketVisualization.displayName = "MarketVisualization";
export default MarketVisualization;
