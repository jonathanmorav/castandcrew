
import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase } from "lucide-react";
import MarketMetricsCard from "./MarketMetricsCard";

interface MarketMetricsGridProps {
  isInView: boolean;
}

const MarketMetricsGrid = memo(({ isInView }: MarketMetricsGridProps) => {
  const metrics = [
    {
      title: "Total Addressable Market",
      value: "$18B",
      subtitle: "60M eligible employees",
      color: "brand-blue",
      icon: <TrendingUp className="h-5 w-5 text-brand-blue" />
    },
    {
      title: "Serviceable Available Market",
      value: "$4.5B",
      subtitle: "15M targetable employees",
      color: "brand-teal",
      icon: <Users className="h-5 w-5 text-brand-teal" />
    },
    {
      title: "Serviceable Obtainable Market",
      value: "$108M",
      subtitle: "360K active policies",
      color: "brand-purple",
      icon: <Briefcase className="h-5 w-5 text-brand-purple" />
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-10"
    >
      <motion.h4 
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-xl font-semibold mb-4 text-brand-blue"
      >
        Market Opportunity at a Glance
      </motion.h4>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MarketMetricsCard 
            key={index}
            index={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            subtitle={metric.subtitle}
            color={metric.color}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
});

MarketMetricsGrid.displayName = "MarketMetricsGrid";
export default MarketMetricsGrid;
