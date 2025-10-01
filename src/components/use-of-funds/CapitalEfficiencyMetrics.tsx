
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ArrowUp } from "lucide-react";

const CapitalEfficiencyMetrics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-12 bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold mb-4">Capital Efficiency Metrics</h2>
      <h3 className="font-semibold text-lg mb-3">How We Measure Success:</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
              <DollarSign className="text-indigo-600 w-4 h-4" />
            </div>
            <div>
              <p className="font-medium">Premium/Employee Ratio</p>
              <p className="text-sm text-gray-600">Tracking efficiency in core revenue driver</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
              <ArrowUp className="text-green-600 w-4 h-4" />
            </div>
            <div>
              <p className="font-medium">Revenue per Marketing Dollar</p>
              <p className="text-sm text-gray-600">Currently 11.2× industry average</p>
            </div>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
              <DollarSign className="text-amber-600 w-4 h-4" />
            </div>
            <div>
              <p className="font-medium">Burn Multiple</p>
              <p className="text-sm text-gray-600">0.7× (well below SaaS benchmark of 1.5×)</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
              <DollarSign className="text-purple-600 w-4 h-4" />
            </div>
            <div>
              <p className="font-medium">Time to Cash Flow Positive</p>
              <p className="text-sm text-gray-600">24 months from funding</p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CapitalEfficiencyMetrics;
