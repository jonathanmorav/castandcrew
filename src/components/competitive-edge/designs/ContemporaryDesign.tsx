
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import MarketDisruptionSection from "./components/MarketDisruptionSection";
import PillarSection from "./components/PillarSection";
import ValueSection from "./components/ValueSection";

const ContemporaryDesign = () => {
  return (
    <div className="space-y-24 max-w-6xl mx-auto">
      {/* Hero section with animated gradient background */}
      <HeroSection />

      {/* Market disruption section */}
      <MarketDisruptionSection />

      {/* Four pillars section with animated tabs */}
      <PillarSection />

      {/* Value proposition and value equation sections */}
      <ValueSection />
    </div>
  );
};

export default ContemporaryDesign;
