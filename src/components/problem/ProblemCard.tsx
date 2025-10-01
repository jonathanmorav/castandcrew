
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ProblemCardData = {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  delay: string;
};

interface ProblemCardProps {
  card: ProblemCardData;
  index: number;
  isVisible: boolean;
}

const ProblemCard = ({ card, index, isVisible }: ProblemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  // Combine states for enhanced visual effect
  const isEnhanced = isHovered || isActive;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-full"
    >
      <Card 
        className={cn(
          "border-none transition-all duration-700 ease-out transform h-full",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-20 opacity-0",
          isEnhanced ? "translate-y-[-5px] shadow-xl scale-[1.02]" : "shadow-md"
        )}
        style={{
          borderRadius: '16px',
          boxShadow: isEnhanced 
            ? `0 15px 30px rgba(${card.color === "#4353FF" ? "67, 83, 255" : card.color === "#7966F8" ? "121, 102, 248" : "90, 254, 239"}, 0.2)`
            : '0 10px 30px rgba(67, 83, 255, 0.1)',
          transitionDelay: isVisible ? card.delay : '0ms'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsActive(!isActive)}
      >
        <CardHeader className="pb-2 pt-0 px-0" style={{ padding: '40px 32px 16px 32px' }}>
          <div 
            className={cn(
              "h-[60px] w-[60px] flex items-center justify-center rounded-full transition-all duration-300",
              isEnhanced ? "scale-110" : ""
            )}
            style={{ 
              backgroundColor: card.color,
              background: isEnhanced 
                ? `linear-gradient(135deg, ${card.color}, ${card.color === "#4353FF" ? "#7966F8" : card.color === "#7966F8" ? "#5AFEEF" : "#4353FF"})` 
                : card.color
            }}
          >
            <div style={{ color: "white" }}>
              {card.icon}
            </div>
          </div>
          <CardTitle 
            className="mt-4 transition-colors duration-300"
            style={{ 
              fontSize: '24px', 
              lineHeight: '1.4', 
              fontWeight: 700,
              color: isEnhanced ? card.color : "#181E2A"
            }}
          >
            {card.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-3" style={{ padding: '0 32px 32px 32px' }}>
          <p 
            className="text-[#181E2A] transition-all duration-300"
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.6' 
            }}
          >
            {card.description}
          </p>

          {/* Card progress bar */}
          <div className="mt-6 relative h-1 w-full bg-gray-100 overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out"
              style={{ 
                backgroundColor: card.color,
                width: isEnhanced ? '100%' : '30%',
                opacity: isEnhanced ? 1 : 0.5
              }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProblemCard;
