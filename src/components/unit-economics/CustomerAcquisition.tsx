
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const CustomerAcquisition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-4">
        <TrendingUp className="text-brand-blue w-8 h-8 mr-2" />
        <h2 className="text-xl font-bold">Customer Acquisition Cost (CAC)</h2>
      </div>

      <h3 className="font-semibold text-lg mb-2">Channel Efficiency</h3>
      <ul className="pl-4 mb-4 space-y-1">
        <li>Direct Marketing: $850-950 per SMB</li>
        <li>Affinity Partners: $300-400 per SMB</li>
        <li>Embedded Channels: $200-250 per SMB</li>
        <li>Blended Average CAC: $450 in Year 1, declining with scale</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">CAC Reduction Strategy</h3>
      <p className="mb-2">15% Year-over-Year improvement through:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Channel optimization</li>
        <li>Improved conversion rates</li>
        <li>Word-of-mouth referrals</li>
        <li>Brand recognition</li>
      </ul>
    </motion.div>
  );
};

export default CustomerAcquisition;
