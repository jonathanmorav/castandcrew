
import { memo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { motion } from "framer-motion";

// Custom Label component defined before usage - avoids React error
const Label = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text 
        x={cx} 
        y={cy - 10} 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-base font-bold"
        fill="#333"
      >
        $108M
      </text>
      <text 
        x={cx} 
        y={cy + 10} 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-xs"
        fill="#666"
      >
        obtainable
      </text>
    </g>
  );
};

const SomChart = memo(() => {
  const data = [
    { name: 'Cakewalk SOM', value: 0.108, color: '#9B72DF' },
    { name: 'Remaining SAM', value: 4.392, color: '#e0e0e0' }
  ];
  
  const COLORS = ['#9B72DF', '#e0e0e0'];

  return (
    <motion.div 
      className="w-full h-[400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-center mb-6">Serviceable Obtainable Market: $108M</h3>
      <div className="flex flex-col md:flex-row h-full items-center">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={60}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                animationBegin={0}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    strokeWidth={index === 0 ? 2 : 0}
                  />
                ))}
                <Label viewBox={{ cx: '50%', cy: '50%' }} />
              </Pie>
              <Tooltip 
                formatter={(value) => [
                  `$${value}B`, 
                  'Market Value'
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
        
        <div className="w-full md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0">
          <h4 className="font-semibold text-lg mb-3">SOM Strategy</h4>
          <ul className="space-y-3 text-gray-700">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#9B72DF] mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">360K active disability policies</p>
                <p className="text-sm text-gray-600">Just 2% of the serviceable market</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#9B72DF]/70 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">100K monthly active policies</p>
                <p className="text-sm text-gray-600">1.2M yearly policies, with 30% disability coverage</p>
              </div>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div className="h-5 w-5 rounded-full bg-[#9B72DF]/40 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Strategic distribution partnerships</p>
                <p className="text-sm text-gray-600">Brokers, payroll providers, SaaS integrations</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
});

SomChart.displayName = "SomChart";
export default SomChart;
