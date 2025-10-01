
import { motion } from "framer-motion";

const DistributionIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-12 text-gray-700 max-w-4xl mx-auto text-lg"
    >
      <p className="mb-8">
        Cakewalk's diversified distribution approach creates multiple pathways to scale and 
        profitability, targeting the 33.2 million small businesses across America through 
        strategic partnerships and embedded solutions.
      </p>
    </motion.div>
  );
};

export default DistributionIntro;
