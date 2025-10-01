
import React from "react";

interface AllocationData {
  name: string;
  value: number;
  color: string;
}

interface FundingAllocationChartProps {
  allocationData: AllocationData[];
}

const FundingAllocationChart = ({ allocationData }: FundingAllocationChartProps) => {
  return (
    <div className="w-full relative">
      {/* Simple allocation visualization with colored blocks */}
      <div className="flex h-[120px] rounded-lg overflow-hidden mb-6 shadow-sm">
        {allocationData.map((item) => (
          <div 
            key={item.name}
            className="h-full relative flex items-end group transition-all duration-300"
            style={{ 
              width: `${item.value}%`, 
              backgroundColor: item.color
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white group-hover:bg-black/10 transition-colors">
              <span className="text-lg font-bold">{item.value}%</span>
              <span className="text-xs font-medium px-1 text-center leading-tight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {allocationData.map((item) => (
          <div key={item.name} className="flex items-center">
            <div 
              className="w-4 h-4 mr-2 rounded" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingAllocationChart;
