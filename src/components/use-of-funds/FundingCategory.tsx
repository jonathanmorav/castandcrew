
import React from "react";
import { LucideIcon } from "lucide-react";

interface FundingCategoryProps {
  title: string;
  icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
  items: string[];
  dotColor: string;
}

const FundingCategory = ({ 
  title, 
  icon: Icon, 
  iconBackground, 
  iconColor, 
  items, 
  dotColor 
}: FundingCategoryProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-lg ${iconBackground} flex items-center justify-center mr-3`}>
          <Icon className={`${iconColor} w-6 h-6`} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <h4 className="font-medium mb-4 text-gray-700">Revenue Unlock: Underwriting Scale & Automation</h4>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 mr-2.5`}></div>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FundingCategory;
