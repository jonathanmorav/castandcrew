
import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, ArrowUpIcon, PlusIcon, ScaleIcon } from "lucide-react";
import FundingCategory from "./FundingCategory";

const AllocationDetails = () => {
  const productDevelopmentItems = [
    "API infrastructure for partner integrations",
    "Enhanced underwriting algorithms",
    "Multi-carrier connectivity platform",
    "Self-service enrollment capabilities",
    "Claims processing automation"
  ];

  const goToMarketItems = [
    "Partner success team build-out",
    "Integration support for embedded channels",
    "Broker enablement resources",
    "Targeted affinity group expansions",
    "Vertical-specific marketing materials"
  ];

  const operationsItems = [
    "TPA (Third-Party Administrator) licensing",
    "Carrier relationship management",
    "Compliance infrastructure",
    "Customer service platform",
    "Claims administration system"
  ];

  const legalComplianceItems = [
    "State-by-state licensing",
    "Carrier contracts and negotiations",
    "Regulatory compliance systems",
    "Data security infrastructure",
    "Intellectual property protection"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 grid md:grid-cols-2 gap-6"
    >
      {/* Product Development */}
      <FundingCategory
        title="Product Development (45%)"
        icon={CodeIcon}
        iconBackground="bg-soft-purple"
        iconColor="text-brand-purple"
        items={productDevelopmentItems}
        dotColor="bg-brand-purple"
      />

      {/* Go-To-Market */}
      <FundingCategory
        title="Go-To-Market (30%)"
        icon={ArrowUpIcon}
        iconBackground="bg-soft-green"
        iconColor="text-brand-teal"
        items={goToMarketItems}
        dotColor="bg-brand-teal"
      />

      {/* Operations */}
      <FundingCategory
        title="Operations (15%)"
        icon={PlusIcon}
        iconBackground="bg-soft-yellow"
        iconColor="text-amber-600"
        items={operationsItems}
        dotColor="bg-amber-500"
      />

      {/* Legal & Compliance */}
      <FundingCategory
        title="Legal & Compliance (10%)"
        icon={ScaleIcon}
        iconBackground="bg-soft-blue"
        iconColor="text-brand-blue"
        items={legalComplianceItems}
        dotColor="bg-brand-blue"
      />
    </motion.div>
  );
};

export default AllocationDetails;
