
import { memo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";

const SamChart = memo(() => {
  const data = [
    { name: 'White-collar', value: 2.25, color: '#5AFEEF' },
    { name: 'Healthcare', value: 1.35, color: '#5AFEEF' },
    { name: 'Light retail', value: 0.9, color: '#5AFEEF' }
  ];

  return (
    <motion.div 
      className="w-full h-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-center mb-6">Serviceable Available Market: $4.5B</h3>
      <div className="flex flex-col md:flex-row h-full items-center">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
              <XAxis 
                type="number" 
                tickFormatter={(value) => `$${value}B`}
                tick={{ fill: '#333' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                dataKey="name" 
                type="category"
                tick={{ fill: '#333' }}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value) => [`$${value}B`, 'Market Value']}
                contentStyle={{ 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
              <Legend />
              <Bar 
                dataKey="value" 
                name="Market Value" 
                radius={[0, 4, 4, 0]}
                animationDuration={1500}
                animationBegin={300}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg mb-3">SAM Highlights</h4>
          <ul className="space-y-3 text-gray-700">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#5AFEEF] mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">15M targetable employees</p>
                <p className="text-sm text-gray-600">25% of TAM, across tech-savvy SMBs</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#5AFEEF]/70 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Tech-savvy & progressive SMBs</p>
                <p className="text-sm text-gray-600">Businesses open to digital platforms & modern solutions</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#5AFEEF]/40 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">$4.5B serviceable market</p>
                <p className="text-sm text-gray-600">Focused on white-collar, healthcare & light retail</p>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
});

SamChart.displayName = "SamChart";
export default SamChart;
