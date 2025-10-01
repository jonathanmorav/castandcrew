
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeckSection } from './sections/SectionMapping';

interface PageNavigationProps {
  sections: DeckSection[];
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  sections,
  currentSectionId,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const currentIndex = sections.findIndex(section => section.id === currentSectionId);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  const navigatePrevious = () => {
    if (hasPrevious) {
      console.log("Navigating to previous section:", sections[currentIndex - 1].id);
      onNavigate(sections[currentIndex - 1].id);
    }
  };

  const navigateNext = () => {
    if (hasNext) {
      console.log("Navigating to next section:", sections[currentIndex + 1].id);
      onNavigate(sections[currentIndex + 1].id);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.navigation-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigatePrevious();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        navigateNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      {/* Floating navigation controls */}
      <div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex items-center space-x-4"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div 
          className="bg-white rounded-full shadow-lg p-2 flex items-center space-x-2"
          animate={{ 
            opacity: hovering ? 1 : 0.7,
            y: hovering ? 0 : 10
          }}
          initial={{ opacity: 0.7, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={navigatePrevious}
            disabled={!hasPrevious}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Previous section"
          >
            <ChevronLeft className="text-brand-blue w-6 h-6" />
          </button>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Open section menu"
          >
            <Menu className="text-brand-darkBlue w-5 h-5" />
          </button>
          
          <button
            onClick={navigateNext}
            disabled={!hasNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Next section"
          >
            <ChevronRight className="text-brand-blue w-6 h-6" />
          </button>
        </motion.div>
      </div>
      
      {/* Sections menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 navigation-menu"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 w-[300px] max-h-[60vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-3 px-2">Sections</h3>
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      console.log("Menu selection: navigating to", section.id);
                      onNavigate(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      section.id === currentSectionId
                        ? "bg-brand-blue text-white font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageNavigation;
