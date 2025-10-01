
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavigationArrowProps {
  onClick: () => void;
  className?: string;
}

const NavigationArrow = ({ onClick, className }: NavigationArrowProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  
  return (
    <motion.div
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer",
        className
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Navigate to next section"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }}
    >
      <ChevronDown className={cn("h-10 w-10 hover:scale-110 transition-transform", className ? className : "text-white/80 hover:text-white")} />
    </motion.div>
  );
};

export default NavigationArrow;
