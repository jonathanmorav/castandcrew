import React from "react";
import { motion } from "framer-motion";
const TeamHeader = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="text-center mb-12">
      <h2 className="mb-4 text-h2">The Team</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Decades of Experience Scaling Insurance and Technology Companies
      </p>
    </motion.div>;
};
export default TeamHeader;