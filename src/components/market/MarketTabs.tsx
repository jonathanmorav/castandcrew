
import { memo } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface MarketTabsProps {
  activeTab: 'overview' | 'tam' | 'sam' | 'som';
  setActiveTab: (tab: 'overview' | 'tam' | 'sam' | 'som') => void;
}

const MarketTabs = memo(({ activeTab, setActiveTab }: MarketTabsProps) => {
  const isMobile = useIsMobile();
  
  const tabs = [
    { id: 'overview', label: 'Overview', color: 'brand-blue' },
    { id: 'tam', label: 'TAM', fullLabel: 'Total Addressable Market', color: 'brand-blue' },
    { id: 'sam', label: 'SAM', fullLabel: 'Serviceable Available Market', color: 'brand-teal' },
    { id: 'som', label: 'SOM', fullLabel: 'Serviceable Obtainable Market', color: 'brand-purple' },
  ] as const;

  return (
    <motion.div 
      className="relative rounded-lg bg-white/50 backdrop-blur-sm p-1.5 border border-gray-100 shadow-sm max-w-3xl mx-auto"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-wrap justify-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'overview' | 'tam' | 'sam' | 'som')}
            className={`relative px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-colors ${
              activeTab === tab.id ? `text-white` : `text-gray-600 hover:text-${tab.color}`
            }`}
            whileHover={{ scale: activeTab === tab.id ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Active tab background */}
            {activeTab === tab.id && (
              <motion.div
                className={`absolute inset-0 rounded-md bg-${tab.color}`}
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              />
            )}
            
            {/* Tab label with tooltip */}
            <span className="relative z-10">
              {isMobile ? tab.label : tab.id === 'overview' ? tab.label : tab.fullLabel}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
});

MarketTabs.displayName = "MarketTabs";
export default MarketTabs;
