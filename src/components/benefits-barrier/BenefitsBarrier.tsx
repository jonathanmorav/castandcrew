
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import BarrierHeader from "./BarrierHeader";
import ECommerceComparison from "./ECommerceComparison";
import BarrierTabs from "./BarrierTabs";
import OpportunityHighlight from "./OpportunityHighlight";

interface BenefitsBarrierProps {
  onNavigateNext: () => void;
}

const BenefitsBarrier = ({ onNavigateNext }: BenefitsBarrierProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState("barriers");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(97.88%_99.97%_at_50.03%_0.03%,#C5F8E9_66.35%,#53EDBE_100%)]"></div>
      
      {/* Animated background elements with lower z-index */}
      <div className="absolute -top-1/3 right-0 w-2/3 h-2/3 bg-[#E3FAF3] opacity-[0.04] rounded-full blur-3xl transform translate-x-1/4 animate-pulse-subtle z-0"></div>
      <div className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 bg-[#E3FAF3] opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/4 animate-pulse-subtle z-0" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <BarrierHeader isVisible={isVisible} />

        {/* Tabs for Different Problem Aspects */}
        <div className="mt-8 md:mt-12">
          <BarrierTabs
            isVisible={isVisible}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        
        {/* Why This Matters section */}
        <OpportunityHighlight isVisible={isVisible} />
      </div>
      
      <BottomCornerLogo />

      <NavigationArrow 
        onClick={onNavigateNext} 
        className="text-brand-blue hover:text-brand-purple relative z-10"
      />
    </section>
  );
};

export default BenefitsBarrier;
