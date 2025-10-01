
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export type DeckSection = {
  id: string;
  title: string;
};

interface DeckNavigationProps {
  sections: DeckSection[];
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
}

const DeckNavigation = ({
  sections,
  currentSectionId,
  onNavigate,
}: DeckNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Log current section for debugging
  useEffect(() => {
    console.log("[DeckNavigation] Current section:", currentSectionId);
  }, [currentSectionId]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (sectionId: string) => {
    console.log("[DeckNavigation] Attempting to navigate to:", sectionId);
    
    // Skip navigation if already on this section
    if (sectionId === currentSectionId) {
      console.log("[DeckNavigation] Already on section:", sectionId);
      setIsOpen(false);
      return;
    }
    
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50" ref={menuRef}>
      {/* Menu toggle button */}
      <button
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/90 text-white shadow-lg hover:bg-gray-700 transition-colors"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Navigation menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-72 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden animate-fade-in border border-gray-700">
          <div className="p-3">
            <div className="text-white text-xs font-medium uppercase tracking-wider px-3 py-2 border-b border-gray-700 mb-2">
              Sections
            </div>
            <div className="max-h-[70vh] overflow-y-auto pr-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                    section.id === currentSectionId
                      ? "bg-brand-blue text-white font-medium"
                      : "text-white hover:bg-gray-700"
                  }`}
                  onClick={() => handleNavigate(section.id)}
                  data-section-id={section.id}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckNavigation;
