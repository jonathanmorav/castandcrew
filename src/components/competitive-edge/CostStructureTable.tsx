
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";
import { useState } from "react";

interface CostStructureItemProps {
  category: string;
  largeCompany: string;
  smallCompany: string;
  cakewalk: string;
  explanation: string;
  isTotal?: boolean;
  index: number;
}

const costStructureData = [
  {
    category: "Expected Claims",
    largeCompany: "$6.50",
    smallCompany: "$7.25",
    cakewalk: "$6.50",
    explanation:
      "Cakewalk matches enterprise-level risk pooling to achieve optimal premium rates.",
  },
  {
    category: "Carrier Admin/Return on Capital",
    largeCompany: "$2.00",
    smallCompany: "$3.00",
    cakewalk: "$1.00",
    explanation:
      "Our technology platform drastically reduces administrative overhead costs.",
  },
  {
    category: "External Administration Tools",
    largeCompany: "$0.50",
    smallCompany: "$1.00",
    cakewalk: "$0.50",
    explanation:
      "Consolidated administration through our platform reduces costs to enterprise levels.",
  },
  {
    category: "External Distribution",
    largeCompany: "$1.00",
    smallCompany: "$3.75",
    cakewalk: "$2.00",
    explanation:
      "Our digital-native approach creates significant distribution efficiencies.",
  },
  {
    category: "Total Cost",
    largeCompany: "$10.00",
    smallCompany: "$15.00",
    cakewalk: "$10.00",
    explanation:
      "Cakewalk delivers enterprise pricing with better service quality than traditional options.",
  },
];

const CostStructureItem = ({
  category,
  largeCompany,
  smallCompany,
  cakewalk,
  explanation,
  isTotal = false,
  index,
}: CostStructureItemProps) => {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8 + index * 0.2,
        duration: 0.6,
      }}
      className={cn(
        "hover:bg-gray-50 transition-colors",
        isTotal ? "border-t-2 font-bold" : "border-t"
      )}
    >
      <td className="py-4 px-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="cursor-help flex items-center">
              {category}
              {!isTotal && (
                <span className="ml-2 text-gray-400 text-sm">
                  ℹ️
                </span>
              )}
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="p-4 bg-white shadow-lg rounded-md border border-gray-200">
            <p className="text-sm text-gray-700">
              {explanation}
            </p>
          </HoverCardContent>
        </HoverCard>
      </td>
      <td className="py-4 px-6 text-center">
        {largeCompany}
      </td>
      <td className="py-4 px-6 text-center">
        {smallCompany}
      </td>
      <td
        className={cn(
          "py-4 px-6 text-center",
          isTotal
            ? "text-brand-blue font-bold"
            : "text-brand-blue"
        )}
      >
        {cakewalk}
      </td>
    </motion.tr>
  );
};

const CostStructureTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-4 px-6 text-left text-gray-700 font-bold">
              Category
            </th>
            <th className="py-4 px-6 text-center text-gray-700 font-bold">
              Large Company
            </th>
            <th className="py-4 px-6 text-center text-gray-700 font-bold">
              Small Company
            </th>
            <th className="py-4 px-6 text-center text-brand-blue font-bold">
              Cakewalk
            </th>
          </tr>
        </thead>
        <tbody>
          {costStructureData.map((row, index) => (
            <CostStructureItem
              key={index}
              {...row}
              index={index}
              isTotal={index === costStructureData.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostStructureTable;
