import { motion } from "framer-motion";

interface BenefitSummaryProps {
  scrolledSection: boolean;
}

const BenefitSummary = ({ scrolledSection }: BenefitSummaryProps) => {
  return (
    <motion.div 
      className="mt-16 md:mt-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={scrolledSection ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Box removed as requested */}
    </motion.div>
  );
};

export default BenefitSummary;
