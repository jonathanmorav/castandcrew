
import React from "react";
import { motion } from "framer-motion";

const UnitEconomicsHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto mb-10 w-full max-w-4xl text-left md:text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
        Unit Economics
      </p>
      <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
        Attractive, Durable Unit Economics that Scale
      </h1>
      <p className="mt-4 text-base text-brand-gray md:text-lg">
        Building a Sustainable Financial Engine
      </p>
    </motion.header>
  );
};

export default UnitEconomicsHeader;
