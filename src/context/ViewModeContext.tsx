
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ViewMode = "single" | "showcase";

type ViewModeContextType = {
  viewMode: ViewMode;
  toggleViewMode: () => void;
  setViewMode: (mode: ViewMode) => void;
};

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const location = useLocation();
  const navigate = useNavigate();

  // Check URL parameter on component mount and location change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modeParam = params.get("mode");
    
    // Only update if the parameter exists and is valid
    if (modeParam === "showcase" || modeParam === "single") {
      setViewMode(modeParam);
    } else if (!modeParam) {
      // Default to single view when no parameter is specified
      setViewMode("single");
    }
  }, [location.search]);

  // Toggle between single and showcase view modes
  const toggleViewMode = () => {
    const newMode = viewMode === "single" ? "showcase" : "single";
    setViewMode(newMode);
    
    // Update URL query parameter without full page reload
    const params = new URLSearchParams(location.search);
    params.set("mode", newMode);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  // Set a specific view mode and update URL
  const setViewModeWithUrl = (mode: ViewMode) => {
    setViewMode(mode);
    
    // Update URL query parameter without full page reload
    const params = new URLSearchParams(location.search);
    params.set("mode", mode);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode, setViewMode: setViewModeWithUrl }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
