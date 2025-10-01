
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export type StatItemData = {
  value: string;
  label: string;
  color: string;
  icon: JSX.Element;
};

interface StatCardProps {
  stat: StatItemData;
  delay: number;
  isVisible: boolean;
}

const StatCard = ({ stat, delay, isVisible }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statRef, { once: false, amount: 0.7 });
  
  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div 
        className={cn(
          "py-5 px-6 m-2 rounded-xl transition-all duration-700 transform relative",
          "flex flex-col items-center justify-center text-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          isHovered || isInView ? "scale-105" : "",
          "group"
        )}
        style={{ 
          transitionDelay: `${isVisible ? delay : 0}ms`,
          minWidth: '160px' 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background element */}
        <div 
          className={cn(
            "absolute inset-0 rounded-xl transition-opacity duration-300",
            (isHovered || isInView) ? "opacity-10" : "opacity-0"
          )}
          style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color === "#4353FF" ? "#7966F8" : stat.color === "#7966F8" ? "#5AFEEF" : "#4353FF"})` }}
        />
        
        {/* Icon with solid background, gradient on hover */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 mb-3"
          style={{ 
            backgroundColor: stat.color,
            background: (isHovered || isInView)
              ? `linear-gradient(135deg, ${stat.color}, ${stat.color === "#4353FF" ? "#7966F8" : stat.color === "#7966F8" ? "#5AFEEF" : "#4353FF"})` 
              : stat.color,
            transform: (isHovered || isInView) ? "scale(1.1)" : "scale(1)"
          }}
        >
          <div style={{ color: "white" }}>
            {stat.icon}
          </div>
        </div>
        
        {/* Statistic value - larger dark font */}
        <div 
          className="font-bold text-5xl mb-1 transition-all duration-300"
          style={{ 
            color: "#181E2A",
            transform: (isHovered || isInView) ? "translateY(-2px)" : "translateY(0)"
          }}
        >
          {stat.value}
        </div>
        
        {/* Statistic label */}
        <p className="text-sm text-gray-800 max-w-[160px]">
          {stat.label}
        </p>
        
        {/* Animated underline */}
        <div 
          className="h-1 rounded-full transition-all duration-500 mt-2"
          style={{ 
            background: stat.color,
            width: (isHovered || isInView) ? "100%" : "0%",
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default StatCard;
