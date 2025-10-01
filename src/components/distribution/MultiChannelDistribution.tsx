
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import NavigationArrow from "../navigation/NavigationArrow";
import DistributionHeader from "./DistributionHeader";
import DistributionIntro from "./DistributionIntro";
import ChannelTabs from "./ChannelTabs";
import PathToScale from "./PathToScale";
import DistributionEconomics from "./DistributionEconomics";
import ChannelMixStrategy from "./ChannelMixStrategy";
import NextSection from "./NextSection";

interface MultiChannelDistributionProps {
  onNavigateNext: () => void;
}

const MultiChannelDistribution = ({ onNavigateNext }: MultiChannelDistributionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-200 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-teal-200 opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header */}
        <DistributionHeader />

        {/* Main content */}
        <DistributionIntro />

        {/* Three Core Distribution Channels */}
        <ChannelTabs />

        {/* Path to Scale */}
        <PathToScale isInView={isInView} />

        {/* Distribution Economics */}
        <DistributionEconomics isInView={isInView} />

        {/* Channel Mix Strategy */}
        <ChannelMixStrategy isInView={isInView} />

        {/* Next section link */}
        <NextSection isInView={isInView} />
      </div>

      <NavigationArrow onClick={onNavigateNext} />
    </div>
  );
};

export default MultiChannelDistribution;
