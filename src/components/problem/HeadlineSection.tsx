
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
  const isMobile = useIsMobile();

  // Simple in-view detection for each headline
  const headlineOneInView = useInView(headlineOneRef, { threshold: 0.6 });
  
  // Problem statement headlines
  const problemStatements = [
    "61.7 million Americans work for small businesses that lack access to critical insurance protection."
  ];

  // Update parent component when headlines come into view
  if (headlineOneInView) {
    onHeadlineInView(0, true);
  }

  return (
    <div className="max-w-5xl mx-auto mb-12 md:mb-16 flex flex-col items-center justify-center perspective-1000 px-4">
      {/* First headline - with simple fade-in animation */}
      <div
        ref={headlineOneRef}
        className="w-full flex items-center justify-center"
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
      
    </div>
  );
};

export default HeadlineSection;
