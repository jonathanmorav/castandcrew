
import { motion } from "framer-motion";
import PricingChart from "../PricingChart";
import { keyAdvantages, pillars } from "../data";

const MinimalistDesign = () => {
  return (
    <div className="space-y-20 max-w-5xl mx-auto">
      {/* Minimalist hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
          Competitive <span className="text-indigo-600">Edge</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl">
          We've redesigned the entire benefits ecosystem to deliver enterprise-quality benefits 
          at prices that small businesses can afford.
        </p>
      </motion.section>

      {/* Simplified key advantages */}
      <section className="border-t border-gray-100 pt-12">
        <h3 className="text-2xl font-semibold mb-10 text-gray-900">Key Advantages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {keyAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="flex"
            >
              <div className="mr-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
                  <advantage.icon className="h-5 w-5 text-indigo-600" />
                </span>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
                <p className="text-gray-500 mt-2">{advantage.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clean pricing visualization */}
      <section className="border-t border-gray-100 pt-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Pricing Comparison</h3>
        <p className="text-gray-600 mb-10">
          Our innovative approach delivers a 33% cost advantage compared to traditional options for small businesses.
        </p>
        <PricingChart />
      </section>

      {/* Core pillars in a clean layout */}
      <section className="border-t border-gray-100 pt-12">
        <h3 className="text-2xl font-semibold mb-10 text-gray-900">Four Pillars of Our Advantage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-xl font-medium text-indigo-600 mb-4">{pillar.title}</h4>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clean conclusion */}
      <section className="border-t border-gray-100 pt-12 pb-20">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Bottom Line</h3>
          <p className="text-gray-700 mb-4">
            Cakewalk delivers what was previously impossible: enterprise-level benefits at SMB-friendly pricing.
            We've disrupted the traditional model by leveraging technology to create efficiencies across the entire value chain.
          </p>
          <p className="text-indigo-600 font-medium">
            Better coverage. Better price. Zero friction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MinimalistDesign;
