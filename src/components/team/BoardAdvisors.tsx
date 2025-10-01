import React from "react";
import { motion } from "framer-motion";
const advisorsList = ["Insurance Carrier Executive — Former C-suite leader at top-5 benefits carrier", "Distribution Expert — Founder of nationwide benefits distribution network", "Technology Advisor — CTO of publicly-traded SaaS platform", "SMB Champion — Leader of major small business association"];
const BoardAdvisors = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.6
  }} className="mb-16 bg-white rounded-lg shadow-md p-8">
      <h2 className="mb-6 text-center text-h3">Advisory Board</h2>
      <ul className="space-y-3 pl-5 list-disc max-w-3xl mx-auto">
        {advisorsList.map((advisor, index) => <motion.li key={index} initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3,
        delay: 0.7 + index * 0.1
      }} className="text-gray-700">
            {advisor}
          </motion.li>)}
      </ul>
    </motion.div>;
};
export default BoardAdvisors;