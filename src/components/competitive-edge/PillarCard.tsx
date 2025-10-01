
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  id: number;
  title: string;
  points: string[];
  color: string;
  icon: LucideIcon;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PillarCard = ({
  id,
  title,
  points,
  color,
  icon: Icon,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: PillarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: id % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1 + (id - 1) * 0.2,
        duration: 0.6,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow",
        isActive ? `ring-2 ring-offset-2 ring-[${color}]` : ""
      )}
    >
      <div className="flex items-center mb-4">
        <div
          className="p-3 rounded-full mr-4"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={24} style={{ color: color }} />
        </div>
        <h3 className="text-xl font-bold" style={{ color: color }}>
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={
              isActive || isActive === null
                ? { opacity: 1 }
                : { opacity: 0.7 }
            }
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex items-start"
          >
            <span
              className="inline-block h-4 w-4 rounded-full mt-1 mr-2 shrink-0"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-gray-700">{point}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PillarCard;
