
import { logNavigationEvent } from "./navigationLogger";

/**
 * Extracts a clean hash from a URL hash string by removing the # symbol
 */
export const getCleanHash = (hash: string): string => {
  return hash.replace('#', '');
};

/**
 * Handles hash changes and section navigation based on URL hash
 */
export const handleHashChange = (
  location: { hash: string },
  currentSectionId: string,
  blockHashChange: boolean,
  initialLoadRef: React.MutableRefObject<boolean>,
  viewMode: string,
  sections: { id: string }[],
  callbacks: {
    setCurrentSectionId: (sectionId: string) => void,
    setBlockHashChange: (block: boolean) => void,
    navigate: (path: string, options?: object) => void
  }
) => {
  // Extract hash without the # symbol
  const hash = getCleanHash(location.hash);
  logNavigationEvent("Location change detected", { hash, currentSection: currentSectionId });
  
  // Skip if we're blocking hash changes
  if (blockHashChange) {
    return;
  }
  
  // Only process valid section IDs
  if (hash && sections.some(section => section.id === hash)) {
    callbacks.setCurrentSectionId(hash);
    
    // In single view mode, scroll to the section
    if (viewMode === "single") {
      const sectionElement = document.getElementById(`section-${hash}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    logNavigationEvent("Section changed based on hash", { newSection: hash });
  } else if (!hash && !initialLoadRef.current && currentSectionId !== "cover") {
    // If hash is empty but we're not on the initial load and not already on cover,
    // update the URL to maintain current section instead of defaulting to cover
    const nextAction = () => {
      callbacks.setBlockHashChange(true);
      callbacks.navigate(`/#${currentSectionId}`, { replace: true });
      setTimeout(() => callbacks.setBlockHashChange(false), 300); // Longer timeout for stability
    };
    
    // Use setTimeout to ensure this happens after any other hash changes
    setTimeout(nextAction, 50);
    logNavigationEvent("Empty hash detected, maintaining current section", { section: currentSectionId });
  }
  
  // Mark initial load as complete
  if (initialLoadRef.current) {
    initialLoadRef.current = false;
  }
};
