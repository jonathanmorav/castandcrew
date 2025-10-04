
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
      <div
        ref={problemCardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 relative px-4 sm:px-6 mb-12 md:mb-16"
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
