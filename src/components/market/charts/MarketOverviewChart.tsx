
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Cell, TooltipProps
} from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const data = [
  { name: "TAM", value: 18, fill: "#4353FF" },
  { name: "SAM", value: 4.5, fill: "#5AFEEF" },
  { name: "SOM", value: 0.108, fill: "#9B72DF" }
];

// Properly typed interface for Recharts tooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name?: NameType; // Updated to use NameType which can be string or number
    value?: ValueType;
    payload?: {
      name: string;
      value: number;
      fill: string;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length && payload[0].payload) {
    const data = payload[0].payload;
    // Ensure value is treated as a number for formatting
    const valueAsNumber = typeof payload[0].value === 'number' 
      ? payload[0].value 
      : data.value;
    
    const formattedValue = valueAsNumber < 1 
      ? `$${(valueAsNumber * 1000).toFixed(0)}M` 
      : `$${valueAsNumber}B`;
    
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
        <p className="font-semibold">{data.name}</p>
        <p className="text-lg font-bold" style={{ color: data.fill }}>{formattedValue}</p>
        <p className="text-xs text-gray-500">
          {data.name === "TAM" && "Total Addressable Market"}
          {data.name === "SAM" && "Serviceable Available Market"}
          {data.name === "SOM" && "Serviceable Obtainable Market"}
        </p>
      </div>
    );
  }
  
  return null;
};

const MarketOverviewChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Updated event handlers to use the correct SVGPathElement type
  const handleMouseEnter = useCallback((data: any, index: number, event: React.MouseEvent<SVGPathElement>) => {
    setActiveIndex(index);
    if (event.currentTarget) {
      event.currentTarget.style.cursor = "pointer";
      event.currentTarget.style.opacity = "0.8";
    }
  }, []);
  
  const handleMouseLeave = useCallback((data: any, index: number, event: React.MouseEvent<SVGPathElement>) => {
    setActiveIndex(null);
    if (event.currentTarget) {
      event.currentTarget.style.cursor = "default";
      event.currentTarget.style.opacity = "1";
    }
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          barSize={60}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickLine={false}
          />
          <YAxis 
            tickFormatter={(value) => `$${value}B`}
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickLine={false}
          />
          <Tooltip 
            content={(props: TooltipProps<ValueType, NameType>) => (
              <CustomTooltip 
                active={props.active} 
                payload={props.payload} 
                label={props.label} 
              />
            )} 
          />
          <Legend 
            formatter={(value) => (
              <span className="text-gray-700 font-medium">{value}</span>
            )} 
          />
          <Bar 
            dataKey="value" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            radius={[6, 6, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={entry.fill}
                fillOpacity={activeIndex === index ? 0.9 : 0.7}
                stroke={entry.fill}
                strokeWidth={activeIndex === index ? 2 : 0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default MarketOverviewChart;
