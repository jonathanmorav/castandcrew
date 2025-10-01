
import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase } from "lucide-react";

interface MarketMetricsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: string;
  index: number;
  isInView: boolean;
}

const MarketMetricsCard = memo(({ 
  icon, 
  title, 
  value, 
  subtitle, 
  color, 
  index, 
  isInView 
}: MarketMetricsCardProps) => {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg border border-${color}/10 bg-gradient-to-br from-[${color}]/5 to-[${color}]/10 p-5 transition-all hover:shadow-lg`}
      custom={index}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.1 * i,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }
        })
      }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="mt-1 flex items-baseline">
            <motion.span 
              className={`text-3xl font-bold text-${color}`}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
            >
              {value}
            </motion.span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className={`rounded-full bg-${color}/10 p-2`}>
          {icon}
        </div>
      </div>
      <motion.div 
        className={`absolute bottom-0 left-0 h-1 bg-${color}`} 
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ delay: 0.6 + (index * 0.1), duration: 0.8 }}
      />
    </motion.div>
  );
});

MarketMetricsCard.displayName = "MarketMetricsCard";
export default MarketMetricsCard;
