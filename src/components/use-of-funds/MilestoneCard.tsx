
import React from "react";
import { Check } from "lucide-react";

interface MilestoneCardProps {
  title: string;
  timeframe: string;
  titleColor: string;
  checkColor: string;
  milestones: string[];
  gradientFrom: string;
  gradientTo: string;
}

const MilestoneCard = ({
  title,
  timeframe,
  titleColor,
  checkColor,
  milestones,
  gradientFrom,
  gradientTo
}: MilestoneCardProps) => {
  return (
    <div className="h-full relative rounded-lg border border-[#F3F4F6] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Card backdrop filter - matching the benefit cards */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 to-[rgba(242,242,239,0.88)] backdrop-filter backdrop-blur-[30px] z-0"></div>
      
      <div className="p-6 flex flex-col h-full relative z-10">
        <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{timeframe}</p>
        <ul className="space-y-3">
          {milestones.map((milestone, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full bg-white p-1 mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                <Check className={`${checkColor} w-3.5 h-3.5`} />
              </div>
              <span className="text-gray-700 text-sm">{milestone}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilestoneCard;
