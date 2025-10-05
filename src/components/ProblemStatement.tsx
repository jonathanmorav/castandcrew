
import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";
import { useInView } from "@/hooks/use-in-view";
import { useIsMobile } from "@/hooks/use-mobile";

// Import newly created components
import HeadlineSection from "./problem/HeadlineSection";
import ProblemCardsSection from "./problem/ProblemCardsSection";
import StatsSection from "./problem/StatsSection";
import BackgroundEffects from "./problem/BackgroundEffects";

interface ProblemStatementProps {
  onNavigateNext: () => void;
}

const ProblemStatement = ({ onNavigateNext }: ProblemStatementProps) => {
  const [activeHeadline, setActiveHeadline] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // Ref for scroll-based animations
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Section visibility
  const sectionInView = useInView(sectionRef, { threshold: 0.1 });
  
  // Handler for headline visibility changes
  const handleHeadlineInView = (index: number, inView: boolean) => {
    if (inView) {
      setActiveHeadline(index);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-12 sm:py-16 md:py-24 overflow-hidden relative problem-statement"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, #EAF2FF, #FFFFFF)"
      }}
    >
      {/* Background effects component */}
      <BackgroundEffects scrollYProgress={scrollYProgress} />
      
      <div className="container px-4 md:px-6 max-w-7xl relative z-10">
        {/* The Problem Heading */}
        <motion.h2
          className="font-grotesk font-bold text-center mb-8 sm:mb-10 md:mb-12 text-[#005DFE] text-3xl md:text-4xl lg:text-5xl px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          style={{ lineHeight: '1.1' }}
        >
          The Problem
        </motion.h2>

        {/* Problem Statement Headlines */}
        <HeadlineSection
          scrollYProgress={scrollYProgress}
          onHeadlineInView={handleHeadlineInView}
        />

        {/* Problem Cards Section */}
        <ProblemCardsSection scrollYProgress={scrollYProgress} />
      </div>

      <BottomCornerLogo />

      {/* Navigation Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: false, amount: 0.8 }}
        className="mt-8 md:mt-12"
      >
        <NavigationArrow 
          onClick={onNavigateNext} 
          className="text-brand-blue hover:text-opacity-80"
        />
      </motion.div>
    </section>
  );
};

export default ProblemStatement;
