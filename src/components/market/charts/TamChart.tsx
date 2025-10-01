
import { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { motion } from "framer-motion";

const TamChart = memo(() => {
  const data = [
    { name: 'Eligible SMBs', value: 3000000, percent: 9.04 },
    { name: 'Non-Eligible/Sole Proprietors', value: 30200000, percent: 90.96 }
  ];
  
  const COLORS = ['#4353FF', '#e0e0e0'];

  return (
    <motion.div 
      className="w-full h-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-center mb-6">Total Addressable Market: $18B</h3>
      <div className="flex flex-col md:flex-row h-full items-center">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                dataKey="value"
                labelLine={false}
                animationBegin={200}
                animationDuration={1500}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    strokeWidth={index === 0 ? 2 : 0}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [
                  `${(value / 1000000).toFixed(1)}M businesses`, 
                  "Businesses"
                ]} 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconSize={10} 
                iconType="circle"
                formatter={(value) => <span style={{ color: '#333' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg mb-3">TAM Highlights</h4>
          <ul className="space-y-3 text-gray-700">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#4353FF] mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">60M eligible employees</p>
                <p className="text-sm text-gray-600">Across 3M SMBs eligible for group disability insurance</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#4353FF]/70 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">$300 annual premium</p>
                <p className="text-sm text-gray-600">Average industry premium per employee</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#4353FF]/40 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">$18B total market size</p>
                <p className="text-sm text-gray-600">Based on 60M employees × $300 premium</p>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
});

TamChart.displayName = "TamChart";
export default TamChart;
