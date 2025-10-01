
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
  LabelList
} from "recharts";
import { BreakdownItem } from "../types/ChartTypes";

interface CostBreakdownChartProps {
  data: BreakdownItem[];
  companyName: string;
}

const CostBreakdownChart = ({ data, companyName }: CostBreakdownChartProps) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
        >
          <XAxis type="number" tick={{ fill: '#6B7280' }} />
          <YAxis 
            type="category" 
            dataKey="name" 
            tick={{ fill: '#6B7280' }}
            width={140}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as BreakdownItem;
                return (
                  <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md max-w-xs">
                    <p className="font-bold text-gray-800">{data.name}</p>
                    <p className="text-gray-700">${data.value.toFixed(2)}</p>
                    <p className="text-xs text-gray-600 mt-1">{data.explanation}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 4, 4, 0] as any}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <LabelList 
              dataKey="value" 
              position="right" 
              formatter={(value: number) => `$${value.toFixed(2)}`}
              style={{ fill: '#4B5563', fontWeight: 'bold' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {companyName === "Cakewalk" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full">
            <span className="text-2xl font-bold">
              33% Cost Savings vs Traditional SMB Options
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CostBreakdownChart;
