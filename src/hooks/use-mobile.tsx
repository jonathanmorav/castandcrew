
import * as React from "react";

// Define breakpoint once outside the component for reuse
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Only run on client-side
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });
  
  React.useEffect(() => {
    if (typeof window === "undefined") return undefined;
    
    // Use a more specific media query for better performance
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Define handler once to avoid recreating on each render
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    // Set initial value
    setIsMobile(mediaQuery.matches);
    
    // Use the standard method for modern browsers
    mediaQuery.addEventListener("change", handleMediaChange, { passive: true });
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return isMobile;
}
