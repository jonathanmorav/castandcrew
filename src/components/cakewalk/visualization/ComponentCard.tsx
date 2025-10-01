
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ComponentCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  position: { x: number, y: number };
  isTraditional: boolean;
  traditionalPosition: { x: number, y: number };
  isHovered: boolean;
  onHover: (id: string | null) => void;
  index: number;
  isVisible: boolean;
}

const ComponentCard = ({
  id,
  name,
  icon: Icon,
  color,
  position,
  isTraditional,
  traditionalPosition,
  isHovered,
  onHover,
  index,
  isVisible
}: ComponentCardProps) => {
  const isMobile = useIsMobile();
  const [isPressed, setIsPressed] = useState(false);

  // Animation variants for cleaner motion definitions
  const containerVariants = {
    initial: { 
      opacity: 0,
      scale: 0.5
    },
    animate: { 
      opacity: 1,
      scale: isHovered || isPressed ? 1.1 : 1,
      x: isTraditional ? traditionalPosition.x : position.x,
      y: isTraditional ? traditionalPosition.y : position.y,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: 0.8 + index * 0.1,
        duration: 0.8
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotation: 0,
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.15,
      rotation: isTraditional ? 0 : 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const labelVariants = {
    rest: { 
      y: 0, 
      opacity: 0.9,
      transition: { duration: 0.2 }
    },
    hover: { 
      y: -2, 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  // Determine card style based on mode
  const cardStyle = isTraditional 
    ? { backgroundColor: '#f3f4f6' }
    : { 
        backgroundColor: color,
        boxShadow: isHovered ? `0 0 20px ${color}40` : 'none'
      };

  // Determine popup position based on component position to avoid overflow
  const getPopupPosition = () => {
    // Position popup on different sides based on component location
    if (position.x > 0) {
      return {
        left: 'auto',
        right: '120%', 
        top: '-50px'
      };
    } else {
      return {
        left: '120%',
        right: 'auto',
        top: '-50px'
      };
    }
  };

  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{ top: "50%", left: "50%" }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <motion.div
        className={`h-16 w-16 rounded-full flex items-center justify-center shadow-md transform transition-all duration-300`}
        variants={iconVariants}
        animate={isHovered || isPressed ? "hover" : "rest"}
        style={cardStyle}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className={isTraditional ? 'text-gray-500' : 'text-white'}
          animate={{ 
            rotate: isHovered && !isTraditional ? [0, 5, -5, 0] : 0 
          }}
          transition={{ 
            duration: 0.5, 
            times: [0, 0.2, 0.5, 1],
            ease: "easeInOut" 
          }}
        >
          <Icon size={24} />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap`}
        variants={labelVariants}
        animate={isHovered || isPressed ? "hover" : "rest"}
      >
        <span className={`px-2 py-1 rounded ${isTraditional 
          ? 'bg-white/80 text-gray-500' 
          : 'bg-white/90 font-medium text-gray-800'} backdrop-blur-sm text-sm shadow-sm`}>
          {name}
        </span>
      </motion.div>

      {/* Detail popup on hover - Only show if not mobile */}
      {isHovered && !isTraditional && !isMobile && (
        <motion.div
          className="fixed z-40 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-xl pointer-events-none"
          style={{
            width: '280px',
            ...getPopupPosition()
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center mb-2">
            <h4 className="font-semibold text-lg mb-1" style={{ color }}>
              {name}
            </h4>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: color }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {id === "distribution" && "AI-guided selection & API partnerships for market access"}
            {id === "product" && "Customized solutions designed specifically for small businesses"}
            {id === "underwriting" && "Proprietary AI reduces processing from weeks to minutes"}
            {id === "risk" && "Risk pooling creates 20-25% cost reduction"}
            {id === "admin" && "Zero-touch platform eliminates administrative burden"}
            {id === "claims" && "Digital experience for faster resolution & higher satisfaction"}
          </p>
          {id === "underwriting" && (
            <div className="mt-3 text-sm bg-green-50 p-2 rounded border border-green-100 text-green-700 text-center">
              <span className="font-medium">+80%</span> efficiency improvement
            </div>
          )}
          {id === "risk" && (
            <div className="mt-3 text-sm bg-blue-50 p-2 rounded border border-blue-100 text-blue-700 text-center">
              <span className="font-medium">-25%</span> cost reduction
            </div>
          )}
          {id === "product" && (
            <div className="mt-3 text-sm bg-purple-50 p-2 rounded border border-purple-100 text-purple-700 text-center">
              <span className="font-medium">100%</span> tailored solutions
            </div>
          )}
          {id === "distribution" && (
            <div className="mt-3 text-sm bg-indigo-50 p-2 rounded border border-indigo-100 text-indigo-700 text-center">
              <span className="font-medium">5x</span> market reach
            </div>
          )}
          {id === "claims" && (
            <div className="mt-3 text-sm bg-pink-50 p-2 rounded border border-pink-100 text-pink-700 text-center">
              <span className="font-medium">90%</span> customer satisfaction
            </div>
          )}
          {id === "admin" && (
            <div className="mt-3 text-sm bg-amber-50 p-2 rounded border border-amber-100 text-amber-700 text-center">
              <span className="font-medium">Zero</span> administrative burden
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ComponentCard;
