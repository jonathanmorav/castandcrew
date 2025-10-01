
import React from "react";
import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

const RevenueStreams = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-4">
        <CircleDollarSign className="text-brand-blue w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Revenue Streams per Life</h2>
      </div>

      <h3 className="font-semibold text-lg mb-2">Multiple Value Capture Points</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Commission Revenue: 21% of premium</li>
        <li>Profit Sharing: 4% underwriting margin (Year 2+)</li>
        <li>Administration Fees: Embedded in premium structure</li>
        <li>Technology Licensing: Partner integration fees</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Average Revenue Profile (Per Life)</h3>
      <ul className="pl-4 mb-4">
        <li><span className="font-medium">Monthly Revenue:</span> $18</li>
        <li><span className="font-medium">Annual Revenue:</span> $216</li>
        <li><span className="font-medium">5-Year LTV:</span> $780 (factoring in persistency)</li>
      </ul>
    </motion.div>
  );
};

export default RevenueStreams;
