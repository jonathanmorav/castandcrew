
import { ReactNode } from "react";
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";

interface BenefitPoint {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

interface BenefitsSectionProps {
  benefitPoints: BenefitPoint[];
}

const BenefitsSection = ({ benefitPoints }: BenefitsSectionProps) => {
  return (
    <motion.div 
      className="mt-8 mb-12 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="absolute -left-2 top-0 w-1 h-12 bg-gradient-to-b from-brand-purple to-brand-teal rounded-full"></div>
      <h3 className="text-2xl font-semibold mb-6 text-[#333333] pl-4">
        Benefits Impact Everyone
      </h3>
      
      <div className="grid grid-cols-1 gap-5">
        {benefitPoints.map((point, i) => (
          <BenefitCard 
            key={point.title}
            index={i}
            icon={point.icon}
            title={point.title}
            description={point.description}
            color={point.color}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-brand-blue/5 rounded-lg border border-brand-blue/10 text-sm text-[#555555] italic">
        <p>For SMB owners, providing benefits isn't just the right thing to do—it's a strategic business decision that directly impacts both your bottom line and company culture.</p>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
