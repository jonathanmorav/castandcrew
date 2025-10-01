
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Info, ArrowRight } from "lucide-react";
import { combinedData, colorMap } from "./data/pricingData";
import PriceComparisonChart from "./charts/PriceComparisonChart";
import CostBreakdownChart from "./charts/CostBreakdownChart";
import { BreakdownItem } from "./types/ChartTypes";

const PricingChart = () => {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Transform data for the breakdown chart
  const getBreakdownData = (): BreakdownItem[] => {
    if (!activeCompany) return [];
    
    const company = combinedData.find(c => c.name === activeCompany);
    if (!company) return [];
    
    return company.breakdown.map(item => ({
      name: item.name,
      value: item.value,
      explanation: item.explanation,
      fill: colorMap[item.name as keyof typeof colorMap]
    }));
  };

  const toggleBreakdown = (companyName: string) => {
    if (activeCompany === companyName) {
      // If it's already active, just toggle visibility
      setShowBreakdown(!showBreakdown);
    } else {
      // If selecting a new company, reset animation and show
      setActiveCompany(companyName);
      setAnimationPhase(0);
      setShowBreakdown(true);
      
      // Start animation sequence
      setTimeout(() => setAnimationPhase(1), 400);
      setTimeout(() => setAnimationPhase(2), 800);
    }
  };

  // Get company data for active selection
  const activeCompanyData = activeCompany 
    ? combinedData.find(c => c.name === activeCompany) 
    : null;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h3 
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Price Comparison & Cost Structure
        </motion.h3>
        <motion.div 
          className="flex items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Info size={16} className="mr-2" />
          <span>Click on a bar to see cost breakdown</span>
        </motion.div>
      </div>

      {/* Main price comparison chart with enhanced animations */}
      <PriceComparisonChart 
        data={combinedData}
        activeCompany={activeCompany}
        onSelectCompany={toggleBreakdown}
      />

      {/* Cost structure breakdown chart with sequence animations */}
      <AnimatePresence>
        {showBreakdown && activeCompany && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-6 pt-6 border-t border-gray-200 overflow-hidden"
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <motion.h4 
                  className="text-xl font-semibold text-gray-800"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeCompany} Cost Breakdown
                </motion.h4>
                
                {activeCompanyData && (
                  <motion.div 
                    className="text-right text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="text-gray-500">Total: </span>
                    <span className="font-bold text-indigo-600">
                      ${activeCompanyData.price.toFixed(2)}
                    </span>
                  </motion.div>
                )}
              </div>
              
              <motion.div
                className="grid md:grid-cols-5 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:col-span-2">
                  <CostBreakdownChart 
                    data={getBreakdownData()}
                    companyName={activeCompany}
                  />
                </div>
                
                <motion.div 
                  className="md:col-span-3 flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: animationPhase >= 2 ? 1 : 0, x: animationPhase >= 2 ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full space-y-3 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-800">Cost Breakdown Explained</h5>
                    {getBreakdownData().map((item, index) => (
                      <motion.div 
                        key={item.name}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                      >
                        <div 
                          className="w-3 h-3 mt-1 rounded-sm flex-shrink-0" 
                          style={{ backgroundColor: item.fill }}
                        />
                        <div>
                          <div className="flex items-baseline">
                            <span className="font-medium text-gray-700">{item.name}:</span>
                            <span className="ml-2 font-mono text-sm">${item.value.toFixed(2)}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.explanation}</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {activeCompany === "Cakewalk" && (
                      <motion.div 
                        className="mt-4 border-t border-gray-200 pt-3 text-sm text-indigo-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center">
                          <ArrowRight size={14} className="mr-1" />
                          <span>33% more affordable than traditional small business options</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingChart;
