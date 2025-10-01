
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import AnimatedBackground from "./why-benefits-matter/AnimatedBackground";
import MarketHeader from "./market/MarketHeader";
import StatsSection from "./market/StatsSection";
import ChartSection from "./market/ChartSection";
import MarketTabs from "./market/MarketTabs";
import MarketInsights from "./market/MarketInsights";

interface MarketOpportunityProps {
  onNavigateNext: () => void;
}

const MarketOpportunity = ({ onNavigateNext }: MarketOpportunityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'tam' | 'sam' | 'som'>('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden bg-white">
      {/* Replace static background divs with AnimatedBackground component */}
      <AnimatedBackground />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <MarketHeader />

        {/* Stats Section */}
        <StatsSection />

        {/* Chart Section */}
        <ChartSection />

        {/* Tabs for Market Segments */}
        <MarketTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Market Insights Section */}
        <MarketInsights activeTab={activeTab} />
      </div>

      <NavigationArrow
        onClick={onNavigateNext}
        className="text-brand-blue hover:text-brand-purple"
      />
    </section>
  );
};

export default MarketOpportunity;
