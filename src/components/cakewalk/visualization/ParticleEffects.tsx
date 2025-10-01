
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useRef, useState, useEffect } from "react";
import { ComponentData } from "./types";

interface ParticleEffectsProps {
  isVisible: boolean;
  isCakewalkView: boolean;
  components: ComponentData[];
}

// Enhanced particle generator with more configuration options
const generateParticles = (count: number = 16) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `particle-${i}`,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: 2 + Math.random() * 4,
    opacity: 0.5 + Math.random() * 0.5,
    pathComplexity: Math.random() > 0.7 ? "complex" : "simple", // Some particles follow more complex paths
  }));
};

const ParticleEffects = ({ isVisible, isCakewalkView, components }: ParticleEffectsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInViewport = useInView(containerRef, { threshold: 0.1 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [particles, setParticles] = useState<{ id: string; delay: number; duration: number; size: number; opacity: number; pathComplexity: string }[]>([]);
  
  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);
    
    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  // Generate particles based on device capabilities
  useEffect(() => {
    // Use a more sophisticated approach to determine particle count
    const isMobile = window.innerWidth < 768;
    const isLowPowerDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
    
    // Adjust particle count based on device capabilities
    let count = 16; // default for modern desktops
    
    if (isMobile && isLowPowerDevice) {
      count = 5; // minimal for low-power mobile
    } else if (isMobile) {
      count = 8; // moderate for decent mobile
    } else if (isLowPowerDevice) {
      count = 10; // reduced for low-power desktop
    }
    
    setParticles(generateParticles(count));
  }, []);

  // Only render particles if in Cakewalk view, component is visible, in viewport, and motion is not reduced
  if (!isCakewalkView || !isVisible || !isInViewport || prefersReducedMotion || particles.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        // Generate dynamic animation paths for each particle
        // Simple particles follow a path to one component, complex ones visit multiple
        const componentTargets = particle.pathComplexity === "complex" 
          ? components.slice(0, Math.floor(2 + Math.random() * 3)) 
          : components.slice(0, 1);
          
        // Create unique glow effect color for each particle
        const glowColor = particle.pathComplexity === "complex" 
          ? "0 0 8px rgba(90, 254, 239, 0.6)" 
          : "0 0 6px rgba(71, 83, 255, 0.5)";
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              backgroundColor: particle.pathComplexity === "complex" ? "#5AFEEF" : "#4353FF",
              boxShadow: glowColor
            }}
            animate={{
              scale: [0, 1, 0.8, 0],
              // Dynamic animation paths based on particle type
              x: [0, ...componentTargets.map(c => c.position.x)],
              y: [0, ...componentTargets.map(c => c.position.y)],
              opacity: [0, particle.opacity, particle.opacity * 0.7, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop",
              times: componentTargets.length === 1 
                ? [0, 0.2, 0.8, 1] 
                : [0, 0.3, 0.7, 1],
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleEffects;
