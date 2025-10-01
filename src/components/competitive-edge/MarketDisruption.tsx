import { motion } from "framer-motion";
const MarketDisruption = () => {
  return <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-8 bg-gradient-to-br from-gray-100 to-gray-200">
          <h3 className="text-xl font-bold mb-3 text-gray-700">Traditional Approach</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600">Manual benefit selection process</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600">Price disadvantage for smaller businesses</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600">Limited access to quality options</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600">Time-consuming implementation</span>
            </li>
          </ul>
        </div>
        <div className="p-6 md:p-8 bg-gradient-to-br from-brand-blue/5 to-brand-purple/10 bg-brand-blue">
          <h3 className="text-xl font-bold mb-3 text-white">Cakewalk Innovation</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 bg-brand-mint"></div>
              <span className="text-white">Zero-touch digital platform</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 bg-brand-mint"></div>
              <span className="text-brand-lightMint">Enterprise-level pricing for all</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 bg-brand-mint"></div>
              <span className="text-white">Full suite of premium benefit options</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 bg-brand-mint"></div>
              <span className="text-white">Implementation in minutes, not weeks</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 text-center bg-brand-darkBlue">
        <p className="text-white text-lg font-bold">
          Cakewalk delivers what was previously impossible: 
          <span className="ml-2 tracking-wide">enterprise-level benefits at SMB-friendly pricing</span>
        </p>
      </div>
    </div>;
};
export default MarketDisruption;