
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeadlineSectionProps {
  scrollYProgress: any;
  onHeadlineInView: (index: number, inView: boolean) => void;
}

const HeadlineSection = ({ scrollYProgress, onHeadlineInView }: HeadlineSectionProps) => {
  // Refs for animation triggers
  const headlineOneRef = useRef<HTMLDivElement>(null);
  const headlineTwoRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Simple in-view detection for each headline
  const headlineOneInView = useInView(headlineOneRef, { threshold: 0.6 });
  const headlineTwoInView = useInView(headlineTwoRef, { threshold: 0.6 });
  
  // Problem statement headlines
  const problemStatements = [
    "80 million Americans work for small businesses that lack access to critical insurance products…",
    "65% of Americans live paycheck-to-paycheck without savings for unexpected events."
  ];

  // Update parent component when headlines come into view
  if (headlineOneInView) {
    onHeadlineInView(0, true);
  } else if (headlineTwoInView) {
    onHeadlineInView(1, true);
  }

  return (
    <div className="max-w-5xl mx-auto mb-20 md:mb-40 min-h-[400px] md:min-h-[800px] flex flex-col items-center justify-center perspective-1000 px-4">
      {/* First headline - with simple fade-in animation */}
      <div 
        ref={headlineOneRef} 
        className="w-full mb-16 md:mb-32 flex items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center px-4 relative text-[#0A214A] font-[400] text-2xl sm:text-3xl md:text-4xl lg:text-[60px] leading-[120%] md:leading-[140%] font-['DM_Sans',sans-serif]"
        >
          {problemStatements[0]}
        </motion.p>
      </div>
      
      {/* Second headline - with simple fade-in animation with delay */}
      <div 
        ref={headlineTwoRef} 
        className="w-full flex items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center px-4 relative text-[#0A214A] font-[400] text-2xl sm:text-3xl md:text-4xl lg:text-[60px] leading-[120%] md:leading-[140%] font-['DM_Sans',sans-serif]"
        >
          {problemStatements[1]}
        </motion.p>
      </div>
    </div>
  );
};

export default HeadlineSection;
