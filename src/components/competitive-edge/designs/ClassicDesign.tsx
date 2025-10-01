import { motion } from "framer-motion";
import { combinedData } from "../data/pricingData";
import PricingChart from "../PricingChart";
import ValuePropositionCards from "../ValuePropositionCards";
import ValueEquationCards from "../ValueEquationCards";
import { keyAdvantages, pillars } from "../data";
import KeyAdvantageCard from "../KeyAdvantageCard";
import PillarCard from "../PillarCard";
import MarketDisruption from "../MarketDisruption";
const ClassicDesign = () => {
  return <div className="space-y-24">
      {/* Key Advantages Cards */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.2,
      duration: 0.6
    }} className="mb-16">
        <h2 className="text-4xl text-brand-darkBlue">
          Our Key Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyAdvantages.map(advantage => <KeyAdvantageCard key={advantage.id} {...advantage} isActive={false} onMouseEnter={() => {}} onMouseLeave={() => {}} onClick={() => {}} />)}
        </div>
      </motion.section>

      {/* Market disruption section */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4,
      duration: 0.8
    }} className="relative">
        <h2 className="text-4xl text-brand-darkBlue">
          Disrupting the Market
        </h2>
        
        <MarketDisruption />
      </motion.section>

      {/* Enhanced pricing chart */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.5,
      duration: 0.8
    }} className="relative">
        <h2 className="text-4xl text-brand-darkBlue">
          Enterprise-Level Pricing for SMBs
        </h2>

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

      {/* Rest of the components */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.7,
      duration: 0.8
    }} className="relative">
        <h2 className="text-4xl text-brand-blue">
          The Four Pillars of Our Pricing Advantage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map(pillar => <PillarCard key={pillar.id} {...pillar} isActive={false} onMouseEnter={() => {}} onMouseLeave={() => {}} />)}
        </div>
      </motion.section>

      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.1,
      duration: 0.8
    }} className="relative pb-20">
        <h2 className="text-4xl text-brand-darkBlue">
          Beyond Price: The Value Equation
        </h2>

        <div className="text-center mb-10">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cakewalk isn't just competing on price—we're redefining the
            value equation for insurance services:
          </p>
        </div>

        <ValueEquationCards />
      </motion.section>
    </div>;
};
export default ClassicDesign;