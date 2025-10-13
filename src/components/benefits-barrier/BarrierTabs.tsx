
import { motion } from "framer-motion";
import StructuralObstaclesTab from "./tabs/StructuralObstaclesTab";

interface BarrierTabsProps {
  isVisible: boolean;
}

const BarrierTabs = ({ isVisible }: BarrierTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mb-10"
    >
      <StructuralObstaclesTab isVisible={isVisible} />
    </motion.div>
  );
};

export default BarrierTabs;
