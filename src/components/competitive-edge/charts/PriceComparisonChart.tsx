
import React, { useState, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import { ChartData } from "../types/ChartTypes";

type AnimationTiming = "ease" | "ease-in" | "ease-out" | "ease-in-out";

interface PriceComparisonProps {
  data: ChartData[];
  activeCompany: string | null;
  onSelectCompany: (companyName: string) => void;
}

const PriceComparisonChart = ({ 
  data,
  activeCompany,
  onSelectCompany
}: PriceComparisonProps) => {
  const [animating, setAnimating] = useState(false);
  const [breakdownAnimating, setBreakdownAnimating] = useState(false);
  const barRef = useRef<SVGRectElement>(null);

  // Fix the animation timing
  const animationTiming: AnimationTiming = "ease-out";

  useEffect(() => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  }, [data]);

  useEffect(() => {
    if (activeCompany) {
      // Trigger the breakdown animations
      setBreakdownAnimating(true);
      setTimeout(() => {
        setBreakdownAnimating(false);
      }, 1000);
    }
  }, [activeCompany]);

  const currentData = data.find(d => d.name === activeCompany) || data[0];
  
  // Ensure we handle possible undefined properties
  const renderBreakdownRects = () => {
    if (!currentData || !currentData.breakdown) return null;
    
    const breakdown = currentData.breakdown;
    const breakdownData = breakdown.map(item => ({
      label: item.name,
      value: item.value,
      color: item.fill || "#6366F1"
    }));
    
    let accumulatedHeight = 0;
    
    return breakdownData.map((item, index) => {
      const height = (item.value / currentData.price) * 100;
      const y = 100 - accumulatedHeight - height;
      accumulatedHeight += height;

      return (
        <motion.rect
          key={index}
          x={0}
          y={`${y}%`}
          width="100%"
          height={`${height}%`}
          fill={item.color}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeCompany ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        />
      );
    });
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => [`$${value}`, "Price"]} />
        
        <Bar
          dataKey="price"
          fill="#8884d8"
          shape={(props) => <PriceBar 
            {...props}
            isSelected={props.name === activeCompany}
            onClick={() => onSelectCompany(props.name)}
            animating={animating}
            breakdownAnimating={breakdownAnimating}
          />}
          animationDuration={800}
          animationEasing={animationTiming}
        >
          <LabelList dataKey="price" position="top" formatter={(value) => `$${value}`} />
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </Bar>
        
        {/* Render breakdown bars inside the main bar */}
        {currentData && currentData.breakdown && (
          <Bar dataKey="price" barSize={20} fill="transparent" shape={
            () => (
              <g>
                {renderBreakdownRects()}
              </g>
            )
          }/>
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

interface PriceBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  value: number;
  isSelected: boolean;
  onClick: () => void;
  animating: boolean;
  breakdownAnimating: boolean;
}

const PriceBar = ({
  x,
  y,
  width,
  height,
  isSelected,
  onClick,
  animating
}: PriceBarProps) => {
  const fill = isSelected ? "url(#activeBarGradient)" : "url(#barGradient)";

  return (
    <g onClick={onClick} style={{ cursor: "pointer" }}>
      <defs>
        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="activeBarGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <motion.rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={5}
        ry={5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </g>
  );
};

export default PriceComparisonChart;
