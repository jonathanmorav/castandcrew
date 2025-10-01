
import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * Options for the InView hook
 */
interface UseInViewOptions {
  /** 
   * The amount of the target that needs to be visible 
   * Value between 0 and 1.0 
   */
  threshold?: number;
  
  /** 
   * Margin around the root element 
   * CSS format like "10px 20px 30px 40px" 
   */
  rootMargin?: string;
  
  /**
   * Only start observing when condition is true
   * Useful for delaying observation until after hydration
   */
  enabled?: boolean;
  
  /**
   * Element that is used as the viewport
   */
  root?: RefObject<Element>;
}

/**
 * Custom hook for efficiently detecting when an element is in the viewport
 * with performance optimizations
 * 
 * @param elementRef Reference to the DOM element to observe
 * @param options Configuration options including threshold and rootMargin
 * @returns Boolean indicating whether the element is in view
 */
export function useInView(
  elementRef: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { 
    threshold = 0.1,
    rootMargin = '0px',
    enabled = true,
    root = null
  } = options;
  
  const [isInView, setIsInView] = useState(false);
  
  // Store observer in a ref to avoid recreating it
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Skip if not enabled or no element
    if (!enabled || !elementRef.current) return;
    
    // Cleanup previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    // Create new observer with optimized options
    const observer = new IntersectionObserver(
      (entries) => {
        // Use the first entry since we're only observing one element
        const [entry] = entries;
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      { 
        threshold,
        rootMargin,
        root: root?.current || null
      }
    );

    // Store observer reference
    observerRef.current = observer;
    
    // Start observing the target
    observer.observe(elementRef.current);

    // Cleanup on unmount or dependencies change
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [elementRef, threshold, rootMargin, enabled, root]);

  return isInView;
}
