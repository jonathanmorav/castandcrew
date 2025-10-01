
import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const LifetimeValue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-4">
        <ArrowUp className="text-green-500 w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Lifetime Value (LTV)</h2>
      </div>

      <h3 className="font-semibold text-lg mb-2">Exceptional Persistency</h3>
      <ul className="pl-4 mb-4 space-y-1">
        <li>First Year Retention: 84%</li>
        <li>Subsequent Years: 92%</li>
        <li>Average Customer Life: 5+ years</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Industry-Leading Stickiness</h3>
      <p className="mb-2">Employee benefits are among the stickiest insurance products:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Core part of employee compensation package</li>
        <li>High switching costs for businesses</li>
        <li>Critical nature of coverage for employees</li>
        <li>Complex to replace once implemented</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">LTV:CAC Ratio</h3>
      <ul className="pl-4 mb-2 space-y-1">
        <li>Year 1: 3.8×</li>
        <li>Year 3: 4.5×</li>
        <li>Year 5: 5.2× (projected)</li>
        <li>Industry Benchmark: 3.0×</li>
      </ul>
    </motion.div>
  );
};

export default LifetimeValue;
