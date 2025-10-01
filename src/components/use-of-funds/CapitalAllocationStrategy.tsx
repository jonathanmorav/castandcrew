import React from "react";
import { motion } from "framer-motion";
import FundingAllocationChart from "./FundingAllocationChart";
const CapitalAllocationStrategy = () => {
  const allocationData = [{
    name: "Product Development",
    value: 45,
    color: "#7966F8"
  }, {
    name: "Go-To-Market",
    value: 30,
    color: "#15CB94"
  }, {
    name: "Operations",
    value: 15,
    color: "#F59E0B"
  }, {
    name: "Legal & Compliance",
    value: 10,
    color: "#005DFE"
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }} className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-blue font-grotesk">
        Capital Allocation Strategy
      </h2>

      <div className="flex flex-col gap-8 mb-8">
        {/* Chart Visualization - Full width */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center border border-gray-100 w-full">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 text-left">Funding Allocation</h3>
          <FundingAllocationChart allocationData={allocationData} />
        </div>

        {/* Key Metrics - Full width */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 w-full">
          <h3 className="text-xl font-semibold mb-6 text-gray-700">Investment Return Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pb-4 border-b border-gray-100 md:border-r md:pr-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-brand-purple mr-3"></div>
                <span className="font-medium text-gray-800">Product Development (45%)</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">Each $1 invested returns $4.2 in revenue through increased conversion rates (+32%), faster onboarding (5× speed), and higher retention (+15%).</p>
            </div>
            <div className="pb-4 border-b border-gray-100">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-brand-teal mr-3"></div>
                <span className="font-medium text-gray-800">Go-To-Market (30%)</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">Each new partner channel activated delivers 500-2,000 lives within first 90 days at 65% lower CAC than direct acquisition.</p>
            </div>
            <div className="pb-4 md:pb-0 border-b md:border-b-0 border-gray-100 md:border-r md:pr-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
                <span className="font-medium text-gray-800">Operations (15%)</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">Operational investments create defensible moats while enabling 60% lower servicing costs per customer compared to industry averages.</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-brand-blue mr-3"></div>
                <span className="font-medium text-gray-800">Legal & Compliance (10%)</span>
              </div>
              <p className="text-sm text-gray-600 ml-6">Every $1 invested in compliance unlocks $8 in accessible market opportunity through expanded geographic coverage and carrier relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default CapitalAllocationStrategy;