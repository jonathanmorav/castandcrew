
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KeyAdvantageCardProps {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  isActive: boolean | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const KeyAdvantageCard = ({
  id,
  title,
  description,
  details,
  icon: Icon,
  color,
  bgColor,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: KeyAdvantageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + id * 0.2, duration: 0.6 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={cn(
        "rounded-xl shadow-lg hover:shadow-xl transition-all p-6 cursor-pointer",
        bgColor,
        isActive ? "scale-105" : ""
      )}
    >
      <div className="flex items-center mb-3">
        <div
          className="p-3 rounded-full mr-3 bg-white"
          style={{ color: color }}
        >
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gray-700 border-t border-gray-200 pt-3 mt-2"
        >
          {details}
        </motion.div>
      )}
    </motion.div>
  );
};

export default KeyAdvantageCard;
