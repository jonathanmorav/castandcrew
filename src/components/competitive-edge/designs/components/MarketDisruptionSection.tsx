
import { motion } from "framer-motion";
import PricingChart from "../../PricingChart";

const MarketDisruptionSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple mb-6 text-center">
          Disrupting the Market
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-4">
            Cakewalk delivers what was previously impossible: enterprise-level benefits at SMB-friendly pricing.
          </p>
          <p className="text-lg text-gray-600">
            Our revolutionary approach creates a significant competitive advantage by fundamentally 
            restructuring the insurance cost model.
          </p>
        </div>
        
        {/* Interactive pricing comparison */}
        <div className="mt-12">
          <PricingChart />
        </div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-600 font-medium text-lg">
            While matching large companies on price point (<span className="font-bold">$10</span>), 
            we deliver superior value through our innovative structure.
          </p>
          <p className="text-gray-600 mt-2">
            Compared to traditional small company offerings ($15), we provide a 
            <span className="font-bold text-indigo-600"> 33% cost savings</span> while enhancing service quality.
          </p>
          
          <motion.div 
            className="h-1 w-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-4 mx-auto"
            initial={{ width: "0%" }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketDisruptionSection;
