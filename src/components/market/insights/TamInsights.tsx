
import { memo } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const TamInsights = memo(() => {
  return (
    <div className="space-y-6">
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Total Addressable Market</h3>
        <p className="text-gray-700">
          Our TAM encompasses all U.S. businesses that could potentially purchase group disability insurance for their employees.
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Market Composition</h4>
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total U.S. businesses with &lt;500 employees:</span>
            <span className="font-semibold">33.2 million</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Businesses with employees (vs. sole proprietors):</span>
            <span className="font-semibold">6 million</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Average firm size (with employees):</span>
            <span className="font-semibold">20 people</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Businesses offering benefits:</span>
            <span className="font-semibold">50% (3M)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total covered lives:</span>
            <span className="font-semibold">60M employees</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">Key Assumptions</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Average annual premium per employee: <span className="font-semibold">$300</span> (industry average)</li>
            <li>Approximately 50% of SMBs are candidates for voluntary benefits (benefit-eligible industries, non-seasonal work)</li>
            <li>Total covered lives calculation: 3M eligible SMBs × 20 employees = 60M employees</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-2">TAM Calculation</h4>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-lg">60M employees × $300 annual premium</div>
              <div className="text-4xl font-bold text-[#4353FF] mt-2">$18B TAM</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

TamInsights.displayName = "TamInsights";
export default TamInsights;
