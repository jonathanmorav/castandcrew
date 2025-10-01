
import { memo } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  PieChart, Pie, Legend
} from "recharts";
import { ChartContainer, ChartTooltipContent, ChartLegend } from "../ui/chart";

// Updated data for chart components
const marketBreakdownData = [
  { name: 'TAM', value: 18 },
  { name: 'SAM', value: 4.5 },
  { name: 'SOM', value: 0.108 }
];

const businessBreakdownData = [
  { name: 'No Employees', value: 27200000 },
  { name: 'With Employees', value: 6000000 }
];

const COLORS = ['#4353FF', '#5AFEEF', '#9B72DF'];

// Memoized chart components to prevent unnecessary re-renders
export const MarketBarChart = memo(() => (
  <div className="h-64">
    <ChartContainer
      config={{
        tam: { label: "Total Addressable Market", theme: { light: "#4353FF", dark: "#4353FF" } },
        sam: { label: "Serviceable Available Market", theme: { light: "#5AFEEF", dark: "#5AFEEF" } },
        som: { label: "Serviceable Obtainable Market", theme: { light: "#9B72DF", dark: "#9B72DF" } }
      }}
    >
      <BarChart
        data={marketBreakdownData}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}B`} />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" name="Market Size (Billions USD)" animationDuration={800}>
          {marketBreakdownData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  </div>
));

export const BusinessPieChart = memo(() => (
  <div className="h-64">
    <ChartContainer
      config={{
        noEmployees: { label: "No Employees", theme: { light: "#4353FF", dark: "#4353FF" } },
        withEmployees: { label: "With Employees", theme: { light: "#9B72DF", dark: "#9B72DF" } },
      }}
    >
      <PieChart>
        <Pie
          data={businessBreakdownData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          animationDuration={800}
        >
          {businessBreakdownData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={index === 0 ? COLORS[0] : COLORS[2]} 
            />
          ))}
        </Pie>
        <Legend 
          content={<ChartLegend />}
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
        <Tooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  </div>
));

