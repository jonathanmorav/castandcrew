import { useState } from "react";
import { motion } from "framer-motion";
import { keyAdvantages, pillars } from "./data";
import KeyAdvantageCard from "./KeyAdvantageCard";
import MarketDisruption from "./MarketDisruption";
import PricingChart from "./PricingChart";
import PillarCard from "./PillarCard";
import ValuePropositionCards from "./ValuePropositionCards";
import ValueEquationCards from "./ValueEquationCards";

const CompetitiveEdgeContent = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="space-y-24">
      {/* Key Advantages Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Our Key Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyAdvantages.map((advantage) => (
            <KeyAdvantageCard
              key={advantage.id}
              {...advantage}
              isActive={activeCard === advantage.id}
              onMouseEnter={() => setActiveCard(advantage.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(activeCard === advantage.id ? null : advantage.id)}
            />
          ))}
        </div>
      </motion.section>

      {/* Market disruption section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Disrupting the Market
        </h2>
        
        <MarketDisruption />
      </motion.section>

      {/* Enhanced pricing & cost structure visualization */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Enterprise-Level Pricing for SMBs
        </h2>

        {/* Enhanced pricing chart with cost structure data integration */}
        <PricingChart />
        
        <div className="max-w-3xl mx-auto mt-6 text-gray-700 text-center text-lg">
          <p>
            While matching large companies on{" "}
            <strong className="text-indigo-700">price point ($10)</strong>, we deliver superior value
            through our innovative structure. Compared to traditional small
            company offerings ($15), we provide a{" "}
            <strong className="text-indigo-700">33% cost savings</strong> while enhancing service
            quality.
          </p>
        </div>
      </motion.section>

      {/* Four pillars section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          The Four Pillars of Our Pricing Advantage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              {...pillar}
              isActive={activePillar === pillar.id}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onMouseLeave={() => setActivePillar(null)}
            />
          ))}
        </div>
      </motion.section>

      {/* Cakewalk difference section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          The Cakewalk Difference
        </h2>

        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-56 flex items-center justify-center px-6">
            <p className="text-white text-2xl md:text-3xl font-bold text-center leading-relaxed">
              Enterprise-level benefits, accessible to small businesses
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-700">
            Our unique position in the market allows us to:
          </p>
        </div>

        <ValuePropositionCards />
      </motion.section>

      {/* Value equation section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative pb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Beyond Price: The Value Equation
        </h2>

        <div className="text-center mb-10">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cakewalk isn't just competing on price—we're redefining the
            value equation for insurance services:
          </p>
        </div>

        <ValueEquationCards />

        <div className="text-center mt-12 text-gray-500 italic">
          <p className="text-lg">
            Next: How Cakewalk's zero-touch platform transforms the entire
            experience
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default CompetitiveEdgeContent;
