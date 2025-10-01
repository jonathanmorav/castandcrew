
import { motion } from "framer-motion";

interface NextSectionProps {
  isInView: boolean;
}

const NextSection = ({ isInView }: NextSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="text-center mt-8"
    >
      <p className="text-gray-500">Next: The Cakewalk team and execution expertise</p>
    </motion.div>
  );
};

export default NextSection;
