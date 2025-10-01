
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

// Animation variants for stat cards
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80 }
  }
};

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

// Memoized stat card to prevent unnecessary re-renders
const StatCard = memo(({ icon: Icon, title, description, color, delay = 0 }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6 transform transition-all hover:shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-3">
        <div 
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300`}
          style={{
            backgroundColor: color,
            background: isHovered ? `linear-gradient(135deg, ${color}, ${color === "#4353FF" ? "#7966F8" : color === "#7966F8" ? "#5AFEEF" : "#4353FF"})` : color
          }}
        >
          <Icon className={`h-5 w-5 text-white`} />
        </div>
        <h3 
          className={`text-2xl font-semibold transition-colors duration-300`}
          style={{ color: isHovered ? color : "#181E2A" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-[#181E2A]">{description}</p>
      
      {/* Progress indicator */}
      <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-500"
          style={{ 
            backgroundColor: color,
            width: isHovered ? "100%" : "30%"
          }}
        ></div>
      </div>
    </motion.div>
  );
});

StatCard.displayName = "StatCard";

export default StatCard;
