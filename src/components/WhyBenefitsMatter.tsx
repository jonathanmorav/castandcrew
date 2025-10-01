import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import NavigationArrow from "./navigation/NavigationArrow";
import BenefitsHeader from "./why-benefits-matter/BenefitsHeader";
import BenefitCardsGrid from "./why-benefits-matter/BenefitCardsGrid";
import BenefitSummary from "./why-benefits-matter/BenefitSummary";
import AnimatedBackground from "./why-benefits-matter/AnimatedBackground";
import { benefitItems } from "./why-benefits-matter/WhyBenefitsData";

interface WhyBenefitsMatterProps {
  onNavigateNext: () => void;
}

const WhyBenefitsMatter = ({ onNavigateNext }: WhyBenefitsMatterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolledSection, setScrolledSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  // Setup scroll tracking for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Check if the section is in view
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  
  // Update visibility state when section comes into view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Track scrolling for reveal effects
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isScrolled = rect.top < 0;
        if (isScrolled) {
          setScrolledSection(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex flex-col justify-center py-16 md:py-24 lg:py-32"
    >
      {/* Animated background elements */}
      <AnimatedBackground />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Benefits Header */}
        <BenefitsHeader />
        
        {/* Benefits Card Grid - responsive layout */}
        <div className="mt-12 md:mt-16">
          <BenefitCardsGrid benefits={benefitItems} isVisible={isVisible} />
        </div>
        
        {/* Benefits Summary - empty but preserving for spacing */}
        <BenefitSummary scrolledSection={scrolledSection} />
      </div>
      
      {/* Navigation Arrow with enhanced positioning */}
      <motion.div 
        className="mt-12 relative z-10 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <NavigationArrow 
          onClick={onNavigateNext} 
          className="text-brand-blue hover:text-brand-purple transition-colors"
        />
      </motion.div>
    </section>
  );
};

export default WhyBenefitsMatter;
