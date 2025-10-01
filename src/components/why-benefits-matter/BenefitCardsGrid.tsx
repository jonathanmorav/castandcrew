
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Handshake, Shield, WalletIcon, ThumbsUp } from "lucide-react";
import { BenefitItem } from "./WhyBenefitsData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BenefitCardsGridProps {
  benefits: BenefitItem[];
  isVisible: boolean;
}

const BenefitCardsGrid = ({ benefits, isVisible }: BenefitCardsGridProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Mapping icons to Lucide components for accessibility
  const iconComponents = {
    "Users": <Users className="h-10 w-10" strokeWidth={1.5} />,
    "Handshake": <Handshake className="h-10 w-10" strokeWidth={1.5} />,
    "Shield": <Shield className="h-10 w-12" strokeWidth={1.5} />,
    "WalletIcon": <WalletIcon className="h-10 w-10" strokeWidth={1.5} />,
    "ThumbsUp": <ThumbsUp className="h-10 w-10" strokeWidth={1.5} />
  };

  // Background color mapping for each benefit type
  const bgColorMap = [
    "bg-soft-purple/40", // Purple
    "bg-brand-blue/20", // Blue
    "bg-emerald-100/70", // Green/Emerald
    "bg-amber-100/70", // Yellow/Amber
    "bg-rose-100/70" // Pink/Rose
  ];

  return (
    <TooltipProvider>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {benefits.map((benefit, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <motion.div 
                variants={itemVariants}
                className="h-full transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div 
                  className={`h-full relative rounded-lg border border-[#F3F4F6] shadow-sm overflow-hidden
                  ${activeIndex === index ? 'shadow-lg transform -translate-y-1' : 'shadow-md'}
                  transition-all duration-300`}
                >
                  {/* Card backdrop filter */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/88 to-[rgba(242,242,239,0.88)] backdrop-filter backdrop-blur-[30px] z-0"></div>
                  
                  <div className="p-6 flex flex-col h-full relative z-10">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`rounded-xl p-3 ${bgColorMap[index % bgColorMap.length]}`}>
                          {/* Use the appropriate Lucide icon */}
                          {iconComponents[benefit.icon as keyof typeof iconComponents]}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-[#0A214A] pt-2 leading-tight">
                          {benefit.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-base leading-[140%]">{benefit.description}</p>
                    </div>
                    
                    <div className="mt-auto pt-5 border-t border-white flex justify-between items-center">
                      <div className="text-xs text-gray-500 font-medium">INDUSTRY INSIGHT</div>
                      <button 
                        className="text-[#4353FF] text-xs font-medium py-2 px-3 rounded-md hover:bg-blue-50/50 transition-colors"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent 
              side="bottom" 
              align="center" 
              className="bg-white/95 backdrop-blur-sm border-blue-100 shadow-lg p-3 max-w-xs"
            >
              <p className="font-medium text-brand-blue">{benefit.stats}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  );
};

export default BenefitCardsGrid;
