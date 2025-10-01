
import { useState, useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sections } from "@/components/sections/SectionMapping";
import { useViewMode } from "@/context/ViewModeContext";
import { handleHashChange, getCleanHash } from "@/utils/hashUtils";
import { logNavigationEvent } from "@/utils/navigationLogger";

// Hook to handle navigation and URL hash management
export const useNavigation = () => {
  const [currentSectionId, setCurrentSectionId] = useState<string>("cover");
  const [blockHashChange, setBlockHashChange] = useState<boolean>(false);
  const initialLoadRef = useRef<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { viewMode } = useViewMode();

  // Initialize from URL hash if available
  useEffect(() => {
    const hash = getCleanHash(location.hash);
    if (hash && sections.some(section => section.id === hash)) {
      setCurrentSectionId(hash);
      logNavigationEvent("Initial section set from URL", { section: hash });
    }
  }, []);

  // Handle navigation based on URL hash on hash changes
  useEffect(() => {
    if (blockHashChange) {
      return;
    }
    
    // Process hash change
    const hash = getCleanHash(location.hash);
    logNavigationEvent("Hash change detected", { hash, currentSection: currentSectionId });
    
    if (hash && sections.some(section => section.id === hash) && hash !== currentSectionId) {
      setCurrentSectionId(hash);
      logNavigationEvent("Section changed based on hash", { newSection: hash });
      
      // In single view mode, scroll to the section
      if (viewMode === "single") {
        const sectionElement = document.getElementById(`section-${hash}`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    
    // Mark initial load as complete
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
    }
  }, [location.hash, blockHashChange]);

  const onNavigateNext = useCallback(() => {
    const currentIndex = sections.findIndex(
      (section) => section.id === currentSectionId
    );
    
    if (currentIndex < sections.length - 1) {
      const nextSectionId = sections[currentIndex + 1].id;
      logNavigationEvent("Navigate next", { from: currentSectionId, to: nextSectionId });
      
      // First update our internal state
      setCurrentSectionId(nextSectionId);
      
      // Then update URL
      setBlockHashChange(true);
      navigate(`/#${nextSectionId}`);
      
      // Re-enable hash change handling after a delay
      setTimeout(() => setBlockHashChange(false), 300);
    }
  }, [currentSectionId, navigate]);

  const onNavigate = useCallback((sectionId: string) => {
    if (sectionId === currentSectionId) {
      logNavigationEvent("Navigation skipped - already on section", { section: sectionId });
      return; // Already on this section, do nothing
    }
    
    logNavigationEvent("Manual navigation", { from: currentSectionId, to: sectionId });
    
    // First update our internal state
    setCurrentSectionId(sectionId);
    
    // If in single view mode, scroll to the section
    if (viewMode === "single") {
      const sectionElement = document.getElementById(`section-${sectionId}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For showcase mode, update URL
      setBlockHashChange(true);
      navigate(`/#${sectionId}`);
      
      // Re-enable hash change handling after a delay
      setTimeout(() => setBlockHashChange(false), 300);
    }
  }, [currentSectionId, navigate, viewMode]);

  return {
    currentSectionId,
    onNavigate,
    onNavigateNext
  };
};
