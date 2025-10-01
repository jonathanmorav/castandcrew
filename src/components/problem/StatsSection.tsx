
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useIsMobile } from "@/hooks/use-mobile";

interface StatsSectionProps {
  isVisible: boolean;
}

const StatsSection = ({ isVisible }: StatsSectionProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { threshold: 0.2 });
  const isMobile = useIsMobile();
  
  return (
    <div 
      ref={statsRef}
      className="w-full max-w-5xl mt-16 md:mt-24 lg:mt-32 relative z-20 px-4"
    >
      <motion.div 
        className="the-impact-on-small-businesses bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Enhanced background decorative elements */}
        <motion.div 
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.h3 
          className="heading-3 text-lg font-medium text-[#0A214A] mb-4 sm:mb-6 md:mb-8 text-center text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          The Impact on Small Businesses
        </motion.h3>
        
        <div className="impact-boxes flex flex-col sm:flex-row flex-wrap justify-around gap-4 sm:gap-6">
          <div className="impact-box w-full sm:w-auto">
            <b className="b text-3xl sm:text-4xl md:text-5xl text-[#00348F]">78%</b>
            <div className="of-smbs-struggle">of SMBs struggle with benefits administration</div>
          </div>
          
          <div className="impact-box1 w-full sm:w-auto">
            <b className="b text-3xl sm:text-4xl md:text-5xl text-[#005DFE]">3.2x</b>
            <div className="higher-cost-for">higher cost for small businesses</div>
          </div>
          
          <div className="impact-box2 w-full sm:w-auto">
            <b className="b text-3xl sm:text-4xl md:text-5xl text-[#15CB94]">40hrs</b>
            <div className="higher-cost-for">monthly on paperwork</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsSection;
