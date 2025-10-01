
import { motion } from "framer-motion";

const DistributionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="mb-6">
        Multi-Channel Distribution Strategy
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
      >
        Reaching Millions of SMBs at Scale
      </motion.p>
    </motion.div>
  );
};

export default DistributionHeader;
