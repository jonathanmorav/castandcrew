import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import { useDesignOptions } from "@/context/DesignOptionsContext";
import ClassicDesign from "./competitive-edge/designs/ClassicDesign";
import ModernDesign from "./competitive-edge/designs/ModernDesign";
import MinimalistDesign from "./competitive-edge/designs/MinimalistDesign";
import ContemporaryDesign from "./competitive-edge/designs/ContemporaryDesign";
interface CompetitiveEdgeProps {
  onNavigateNext: () => void;
}
const SECTION_NAME = "competitiveEdge";
const CompetitiveEdge = ({
  onNavigateNext
}: CompetitiveEdgeProps) => {
  const {
    getSectionDesignIndex,
    registerTripleClick
  } = useDesignOptions();
  const designIndex = getSectionDesignIndex(SECTION_NAME);
  const cornerRef = useRef<HTMLDivElement>(null);

  // Set up triple-click detection on the top-left corner
  useEffect(() => {
    const cornerElement = cornerRef.current;
    if (!cornerElement) return;
    const handleClick = () => {
      registerTripleClick(SECTION_NAME);
    };
    cornerElement.addEventListener("click", handleClick);
    return () => {
      cornerElement.removeEventListener("click", handleClick);
    };
  }, [registerTripleClick]);

  // Render the appropriate design based on the current index
  const renderDesign = () => {
    switch (designIndex) {
      case 1:
        return <ModernDesign />;
      case 2:
        return <MinimalistDesign />;
      case 3:
        return <ContemporaryDesign />;
      case 0:
      default:
        return <ClassicDesign />;
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200 opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-indigo-200 opacity-30 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-blue-200 opacity-30 rounded-full blur-3xl translate-y-1/2" />

      {/* Triple-click detector in top-left corner */}
      <div ref={cornerRef} className="absolute top-0 left-0 w-16 h-16 z-50 cursor-pointer" title="Triple click to change design" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Section header with animated title */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 md:text-5xl text-brand-blue">
            Competitive Edge
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Enterprise-level benefits at SMB-friendly pricing through
            our revolutionary approach
          </p>
        </motion.div>

        {/* Render the selected design */}
        {renderDesign()}
      </div>

      <NavigationArrow onClick={onNavigateNext} />

      {/* Design indicator (subtle visual cue) */}
      <div className="absolute bottom-4 right-4 flex space-x-1">
        {[0, 1, 2, 3].map(index => <div key={index} className={`h-1.5 w-1.5 rounded-full ${index === designIndex ? 'bg-indigo-600' : 'bg-gray-300'}`} />)}
      </div>
    </div>;
};
export default CompetitiveEdge;