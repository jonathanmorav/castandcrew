
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections, sectionComponents } from "./sections/SectionMapping";
import PageNavigation from "@/components/PageNavigation";
import SectionTransition from "@/components/SectionTransition";

interface ShowcaseViewProps {
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
  onNavigateNext: () => void;
}

const ShowcaseView: React.FC<ShowcaseViewProps> = ({ 
  currentSectionId, 
  onNavigate, 
  onNavigateNext 
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState("");
  const [previousSectionId, setPreviousSectionId] = useState(currentSectionId);
  
  // Get the current section component to render
  const CurrentSection = sectionComponents[currentSectionId as keyof typeof sectionComponents] || 
    (() => <p>Section not found</p>);
  
  // Handle section changes with transitions
  React.useEffect(() => {
    if (previousSectionId !== currentSectionId) {
      // Find the title of the section we're navigating to
      const nextSection = sections.find(section => section.id === currentSectionId);
      
      if (nextSection) {
        setTransitionTitle(nextSection.title);
        setIsTransitioning(true);
        console.log("Transitioning to section:", currentSectionId, nextSection.title);
      }
      
      setPreviousSectionId(currentSectionId);
    }
  }, [currentSectionId, previousSectionId]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Section transition overlay */}
      <SectionTransition 
        show={isTransitioning}
        sectionTitle={transitionTitle}
        onComplete={handleTransitionComplete}
      />
      
      {/* Current section with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <CurrentSection onNavigateNext={onNavigateNext} />
        </motion.div>
      </AnimatePresence>

      {/* Page Navigation */}
      <PageNavigation
        sections={sections}
        currentSectionId={currentSectionId}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default ShowcaseView;
