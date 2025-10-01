
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import ProblemCard from "./ProblemCard";
import { problemCards } from "./ProblemData";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProblemCardsSectionProps {
  scrollYProgress: any;
}

const ProblemCardsSection = ({ scrollYProgress }: ProblemCardsSectionProps) => {
  const problemCardsRef = useRef<HTMLDivElement>(null);
  const problemCardsInView = useInView(problemCardsRef, { threshold: 0.2 });
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Section heading - With responsive visibility for mobile */}
      <motion.h2 
        className="font-grotesk font-bold text-center mb-12 sm:mb-16 md:mb-28 text-[#005DFE] text-3xl md:text-4xl lg:text-5xl px-4"
        style={{ 
          lineHeight: '1.1',
          opacity: isMobile ? 1 : useTransform(
            scrollYProgress, 
            [0.4, 0.5, 0.9], 
            [0, 1, 1]
          ),
          y: isMobile ? 0 : useTransform(
            scrollYProgress, 
            [0.4, 0.5, 0.9], 
            [50, 0, 0]
          ),
          scale: isMobile ? 1 : useTransform(
            scrollYProgress, 
            [0.4, 0.5, 0.55, 0.9], 
            [0.9, 1, 1.05, 1]
          )
        }}
      >
        The Problem
      </motion.h2>
      
      <div 
        ref={problemCardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 relative px-4 sm:px-6"
      >
        {problemCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProblemCard 
              card={card} 
              index={index}
              isVisible={problemCardsInView}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProblemCardsSection;
