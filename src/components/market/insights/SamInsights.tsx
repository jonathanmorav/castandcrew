
import { memo } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const SamInsights = memo(() => {
  return (
    <div className="space-y-6">
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Serviceable Available Market</h3>
        <p className="text-gray-700">
          Our SAM represents the segment of the market that Cakewalk is specifically targeting with our value proposition—the businesses most likely to adopt our solution.
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Target Segment Filters</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-[#5AFEEF]/30 p-4 rounded-lg bg-[#5AFEEF]/5">
            <h5 className="font-semibold mb-1">Tech-savvy SMBs</h5>
            <p className="text-sm text-gray-600">Modern businesses open to digital platforms and solutions</p>
          </div>
          
          <div className="border border-[#5AFEEF]/30 p-4 rounded-lg bg-[#5AFEEF]/5">
            <h5 className="font-semibold mb-1">Priority Industries</h5>
            <p className="text-sm text-gray-600">White-collar, healthcare, and light retail sectors</p>
          </div>
          
          <div className="border border-[#5AFEEF]/30 p-4 rounded-lg bg-[#5AFEEF]/5">
            <h5 className="font-semibold mb-1">HR Involvement</h5>
            <p className="text-sm text-gray-600">Businesses with dedicated HR or HR-lite functions</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">Key Assumptions</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Targetable segment: <span className="font-semibold">25% of TAM SMBs</span></li>
            <li>Target employees: 60M × 25% = <span className="font-semibold">15M employees</span></li>
            <li>Annual premium per employee remains at <span className="font-semibold">$300</span> (industry average)</li>
            <li>White-collar businesses represent the largest segment at <span className="font-semibold">$2.25B</span></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-2">SAM Calculation</h4>
          <div className="bg-teal-50 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-lg">15M employees × $300 annual premium</div>
              <div className="text-4xl font-bold text-[#5AFEEF] mt-2">$4.5B SAM</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

SamInsights.displayName = "SamInsights";
export default SamInsights;
