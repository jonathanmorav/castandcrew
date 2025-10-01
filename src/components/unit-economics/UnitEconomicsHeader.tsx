
import React from "react";
import { motion } from "framer-motion";

const UnitEconomicsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <h2 className="mb-4">Attractive, Durable Unit Economics that Scale</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Building a Sustainable Financial Engine
      </p>
    </motion.div>
  );
};

export default UnitEconomicsHeader;
