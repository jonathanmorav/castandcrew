
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// Define the context structure
type DesignOptionsContextType = {
  currentDesignIndex: number;
  cycleDesignOption: (sectionName: string) => void;
  getSectionDesignIndex: (sectionName: string) => number;
  registerTripleClick: (sectionName: string) => void;
};

// Create the context with default values
const DesignOptionsContext = createContext<DesignOptionsContextType>({
  currentDesignIndex: 0,
  cycleDesignOption: () => {},
  getSectionDesignIndex: () => 0,
  registerTripleClick: () => {},
});

// Define available sections and their design options count
const SECTIONS_WITH_OPTIONS: Record<string, number> = {
  'competitiveEdge': 4, // Now includes 4 design options
};

export const DesignOptionsProvider = ({ children }: { children: ReactNode }) => {
  // Track design indices for each section
  const [designIndices, setDesignIndices] = useState<Record<string, number>>(() => {
    // Initialize from localStorage if available
    const savedIndices = localStorage.getItem('designIndices');
    return savedIndices ? JSON.parse(savedIndices) : {};
  });

  // Track click count and timestamp for triple-click detection
  const [clickState, setClickState] = useState<Record<string, { count: number, lastClickTime: number }>>({});

  // Cycle to the next design option for a section
  const cycleDesignOption = useCallback((sectionName: string) => {
    if (!SECTIONS_WITH_OPTIONS[sectionName]) return;
    
    setDesignIndices(prev => {
      // Get current index, defaulting to 0 if not set
      const currentIndex = prev[sectionName] || 0;
      // Calculate next index, wrapping around if needed
      const nextIndex = (currentIndex + 1) % SECTIONS_WITH_OPTIONS[sectionName];
      
      // Create new state object
      const newState = { ...prev, [sectionName]: nextIndex };
      
      // Save to localStorage
      localStorage.setItem('designIndices', JSON.stringify(newState));
      
      return newState;
    });
  }, []);

  // Get the current design index for a section
  const getSectionDesignIndex = useCallback((sectionName: string) => {
    return designIndices[sectionName] || 0;
  }, [designIndices]);

  // Handle triple-click detection
  const registerTripleClick = useCallback((sectionName: string) => {
    const now = Date.now();
    const currentState = clickState[sectionName] || { count: 0, lastClickTime: now };
    
    // Check if click is within 500ms of last click
    const isQuickClick = now - currentState.lastClickTime < 500;
    
    // Update click count and timestamp
    const newCount = isQuickClick ? currentState.count + 1 : 1;
    setClickState(prev => ({
      ...prev,
      [sectionName]: { count: newCount, lastClickTime: now }
    }));
    
    // If we've had 3 quick clicks, cycle the design
    if (newCount === 3) {
      cycleDesignOption(sectionName);
      // Reset counter
      setClickState(prev => ({
        ...prev,
        [sectionName]: { count: 0, lastClickTime: now }
      }));
    }
  }, [clickState, cycleDesignOption]);

  // Provide context values
  const contextValue = {
    currentDesignIndex: 0, // Deprecated, use getSectionDesignIndex instead
    cycleDesignOption,
    getSectionDesignIndex,
    registerTripleClick,
  };

  return (
    <DesignOptionsContext.Provider value={contextValue}>
      {children}
    </DesignOptionsContext.Provider>
  );
};

// Custom hook for easy context access
export const useDesignOptions = () => useContext(DesignOptionsContext);
