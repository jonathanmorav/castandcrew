
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ProvenCapitalEfficiency = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-blue font-grotesk">Proven Capital Efficiency</h2>
        <h3 className="font-semibold text-lg mb-5 text-gray-700">What We've Achieved With Minimal Capital:</h3>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <div className="rounded-full bg-brand-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-brand-teal w-5 h-5" />
            </div>
            <span className="text-gray-700">$750K premium run rate within first 60 days of launch</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-brand-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-brand-teal w-5 h-5" />
            </div>
            <span className="text-gray-700">$2M premium run rate and $500K ARR within five months of launch</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-brand-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-brand-teal w-5 h-5" />
            </div>
            <span className="text-gray-700">Five-person team built entire platform and initial distribution</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-brand-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-brand-teal w-5 h-5" />
            </div>
            <span className="text-gray-700">Three live affinity partnerships secured and implemented</span>
          </li>
          <li className="flex items-start">
            <div className="rounded-full bg-brand-teal/10 p-1 mr-3 mt-0.5 flex-shrink-0">
              <Check className="text-brand-teal w-5 h-5" />
            </div>
            <span className="text-gray-700">Zero dollars spent on paid advertising to date</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ProvenCapitalEfficiency;
