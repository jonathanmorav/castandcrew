
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections, sectionComponents } from "./sections/SectionMapping";
import PageNavigation from "@/components/PageNavigation";
import SectionTransition from "@/components/SectionTransition";
import { useFullScreen } from "@/hooks/use-fullscreen";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2 } from "lucide-react";

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
  const { isFullScreen, toggleFullScreen } = useFullScreen();
  
  // Get the current section component to render
  const CurrentSection = sectionComponents[currentSectionId as keyof typeof sectionComponents] || 
    (() => <p>Section not found</p>);
  
  // Handle section changes with transitions
  useEffect(() => {
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

  useEffect(() => {
    if (!isFullScreen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullScreen, toggleFullScreen]);

  return (
    <div className={cn("relative overflow-hidden", isFullScreen && "bg-white")}> 
      {/* Section transition overlay */}
      <SectionTransition 
        show={isTransitioning}
        sectionTitle={transitionTitle}
        onComplete={handleTransitionComplete}
      />

      <button
        type="button"
        onClick={toggleFullScreen}
        className="fixed right-6 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-darkBlue shadow-md backdrop-blur transition hover:bg-white"
        aria-pressed={isFullScreen}
      >
        {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
      
      {/* Current section with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("w-full", isFullScreen && "h-screen overflow-y-auto")}
        >
          <div className={cn(isFullScreen && "min-h-screen pb-20")}> 
            <CurrentSection onNavigateNext={onNavigateNext} />
          </div>
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
