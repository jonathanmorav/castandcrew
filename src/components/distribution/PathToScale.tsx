
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Define proper types for the tooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name?: string;
    dataKey?: string;
  }>;
  label?: string;
}

const PathToScale = ({
  isInView
}: {
  isInView: boolean;
}) => {
  // Path to Scale Data for Visualization
  const scaleData = [
    {
      name: "Year 1",
      lives: 7490,
      premium: 11.5,
      revenue: 2.9
    }, 
    {
      name: "Year 3",
      lives: 80400,
      premium: 128,
      revenue: 32
    }
  ];
  
  const COLORS = ['#4353FF', '#9B72DF', '#5AFEEF'];
  
  // Fix the CustomTooltip component with proper TypeScript typing
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-indigo-600 font-medium">
            Lives Covered: {payload[0].value.toLocaleString()}
          </p>
          <p className="text-purple-600 font-medium">
            Premium: ${payload[1].value.toLocaleString()}M
          </p>
          <p className="text-teal-600 font-medium">
            Revenue: ${payload[2].value.toLocaleString()}M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Path to Scale</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Our multi-channel distribution strategy enables rapid growth in covered lives and premium volume,
        driving significant revenue expansion.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Growth Trajectory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={scaleData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  barSize={60}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#4353FF" />
                  <YAxis yAxisId="right" orientation="right" stroke="#5AFEEF" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar yAxisId="left" dataKey="lives" name="Lives Covered" radius={[4, 4, 0, 0]}>
                    {scaleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[0]} />
                    ))}
                  </Bar>
                  <Bar yAxisId="right" dataKey="premium" name="Premium ($M)" radius={[4, 4, 0, 0]}>
                    {scaleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[1]} />
                    ))}
                  </Bar>
                  <Bar yAxisId="right" dataKey="revenue" name="Revenue ($M)" radius={[4, 4, 0, 0]}>
                    {scaleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[2]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Lives Covered</h3>
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-sm">10x</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-indigo-800">7.5K</div>
                <ArrowRight className="mx-2 text-indigo-400" />
                <div className="text-2xl font-bold text-indigo-800">80.4K</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Exponential growth through strategic partnerships</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Premium Volume</h3>
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-sm">11x</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-purple-800">$11.5M</div>
                <ArrowRight className="mx-2 text-purple-400" />
                <div className="text-2xl font-bold text-purple-800">$128M</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Total insurance premium underwritten annually</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-50 to-teal-100 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
                <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-sm">11x</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-teal-800">$2.9M</div>
                <ArrowRight className="mx-2 text-teal-400" />
                <div className="text-2xl font-bold text-teal-800">$32M</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Annual recurring revenue from platform fees</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default PathToScale;
