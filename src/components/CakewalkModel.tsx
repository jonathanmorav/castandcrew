
import { useState, useEffect } from "react";
import NavigationArrow from "./navigation/NavigationArrow";
import CakewalkHeader from "./cakewalk/CakewalkHeader";
import ValueChainTable from "./cakewalk/ValueChainTable";
import EfficiencySection from "./cakewalk/EfficiencySection";
import ValueChainVisualization from "./cakewalk/ValueChainVisualization";
import { motion } from "framer-motion";

interface CakewalkModelProps {
  onNavigateNext: () => void;
}

const CakewalkModel = ({ onNavigateNext }: CakewalkModelProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeView, setActiveView] = useState<'traditional' | 'cakewalk'>('traditional');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Switch to Cakewalk view after timeout
  useEffect(() => {
    if (isVisible) {
      const switchTimer = setTimeout(() => {
        setActiveView('cakewalk');
      }, 3000);
      
      return () => clearTimeout(switchTimer);
    }
  }, [isVisible]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F9FAFD] via-white to-[#EDF7F6] overflow-hidden py-16 px-4 md:px-10 lg:px-16 relative">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 rounded-full blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 0.5, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-purple/10 rounded-full blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Header Section */}
      <CakewalkHeader isVisible={isVisible} />
      
      {/* Value Chain Visualization */}
      <ValueChainVisualization isVisible={isVisible} activeView={activeView} onToggleView={() => setActiveView(activeView === 'traditional' ? 'cakewalk' : 'traditional')} />
      
      {/* Value Chain Table */}
      <ValueChainTable isVisible={isVisible} />
      
      {/* Efficiency Revolution Section */}
      <EfficiencySection isVisible={isVisible} />
      
      {/* Results Section */}
      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
            The Result: Enterprise Benefits for All
          </span>
        </h3>
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg mb-6 text-gray-700">Small businesses gain access to:</p>
          <motion.ul 
            className="text-left space-y-4 pl-5 mb-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
            >
              <span className="h-3 w-3 rounded-full bg-brand-teal mr-3"></span>
              <span className="text-gray-700">Better coverage options</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
            >
              <span className="h-3 w-3 rounded-full bg-brand-purple mr-3"></span>
              <span className="text-gray-700">Significantly improved pricing</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
            >
              <span className="h-3 w-3 rounded-full bg-brand-blue mr-3"></span>
              <span className="text-gray-700">Frictionless access experience</span>
            </motion.li>
          </motion.ul>
          <motion.p 
            className="text-lg italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Cakewalk transforms the SMB benefits experience from weeks of complexity to minutes of simplicity
          </motion.p>
        </div>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <NavigationArrow 
          onClick={onNavigateNext}
          className="text-brand-blue hover:text-brand-purple transition-colors duration-300"
        />
      </div>
    </section>
  );
};

export default CakewalkModel;
