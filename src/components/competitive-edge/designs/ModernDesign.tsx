
import { motion } from "framer-motion";
import { combinedData } from "../data/pricingData";
import PricingChart from "../PricingChart";
import ValuePropositionCards from "../ValuePropositionCards";
import { keyAdvantages } from "../data";
import { ArrowRight } from "lucide-react";

const ModernDesign = () => {
  return (
    <div className="space-y-16">
      {/* Hero section with larger text and bold statement */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-10 md:p-16 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-56 h-56 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            We Changed <span className="text-indigo-300">the Game</span>
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl">
            Enterprise-quality benefits, accessible pricing, and a revolutionary approach
            to insurance that gives small businesses an unfair advantage.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            {keyAdvantages.slice(0, 2).map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur px-6 py-4 rounded-xl"
              >
                <h3 className="font-bold text-xl text-white mb-1">{advantage.title}</h3>
                <p className="text-white/80">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key differentiators */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                <advantage.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing visualization with more modern styling */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gray-50 rounded-3xl p-8 md:p-12"
      >
        <div className="max-w-xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            The Price Advantage
          </h2>
          <p className="text-center text-lg text-gray-600">
            We deliver enterprise-level benefits at prices that match large companies 
            and save 33% compared to traditional small business options.
          </p>
        </div>

        <PricingChart />
      </motion.section>

      {/* Value proposition */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Our Value Promise
        </h2>
        <ValuePropositionCards />
      </motion.section>

      {/* Final call to action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to transform your benefits?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join the revolution in employee benefits and give your business the competitive edge it deserves.
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default ModernDesign;
