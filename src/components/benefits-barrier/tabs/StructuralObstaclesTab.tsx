import { motion } from "framer-motion";
import { FileX, Users, Puzzle, DollarSign, Clock, Shield } from "lucide-react";
interface StructuralObstaclesTabProps {
  isVisible: boolean;
  currentTab: string;
}
const StructuralObstaclesTab = ({
  isVisible,
  currentTab
}: StructuralObstaclesTabProps) => {
  const staggerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const listItemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };
  return <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Illustration */}
        <motion.div className="flex items-center justify-center" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={isVisible && currentTab === "barriers" ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.5
      }}>
          <div className="relative w-full max-w-md aspect-square bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5"></div>
            
            {/* Central icon */}
            <div className="relative z-10">
              <div className="bg-brand-blue/10 rounded-full p-6 animate-pulse-subtle">
                <Shield size={80} className="text-brand-blue" />
              </div>
            </div>
            
            {/* Radiating circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-brand-purple/20 animate-pulse-subtle"></div>
              <div className="absolute w-48 h-48 rounded-full border-2 border-brand-blue/10 animate-pulse-subtle" style={{
              animationDelay: "0.5s"
            }}></div>
              <div className="absolute w-64 h-64 rounded-full border-2 border-brand-teal/5 animate-pulse-subtle" style={{
              animationDelay: "1s"
            }}></div>
            </div>
            
            {/* Barrier blocks */}
            <div className="absolute top-6 left-6 bg-soft-purple p-3 rounded-lg shadow-md transform -rotate-12 animate-float">
              <FileX size={24} className="text-brand-purple" />
            </div>
            <div className="absolute bottom-10 left-10 bg-soft-yellow p-3 rounded-lg shadow-md transform rotate-12 animate-float" style={{
            animationDelay: "1.5s"
          }}>
              <DollarSign size={24} className="text-amber-500" />
            </div>
            <div className="absolute top-10 right-12 bg-soft-green p-3 rounded-lg shadow-md transform rotate-6 animate-float" style={{
            animationDelay: "1s"
          }}>
              <Puzzle size={24} className="text-emerald-500" />
            </div>
            <div className="absolute bottom-6 right-6 bg-soft-orange p-3 rounded-lg shadow-md transform -rotate-6 animate-float" style={{
            animationDelay: "0.5s"
          }}>
              <Clock size={24} className="text-orange-500" />
            </div>
          </div>
        </motion.div>
        
        {/* Right side - List of barriers */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Benefits Barrier for Small to Medium Businesses</h3>
          
          <motion.ul className="space-y-5" variants={staggerVariants} initial="hidden" animate={isVisible && currentTab === "barriers" ? "visible" : "hidden"}>
            <motion.li variants={listItemVariants} className="flex gap-4">
              <div className="mt-1 bg-soft-purple p-2 rounded-lg mx-0">
                <FileX size={20} className="text-brand-purple" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-gray-800">Knowledge Gap</h4>
                <p className="text-gray-600">Business owners lack specialized HR expertise to navigate complex benefit options</p>
              </div>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex gap-4">
              <div className="mt-1 bg-soft-blue p-2 rounded-lg">
                <Users size={20} className="text-brand-blue" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-gray-800">Market Access</h4>
                <p className="text-gray-600">SMBs have limited pathways to quality insurance markets</p>
              </div>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex gap-4">
              <div className="mt-1 bg-soft-green p-2 rounded-lg">
                <Puzzle size={20} className="text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-gray-800">Product Limitations</h4>
                <p className="text-gray-600">Inconsistent availability with fewer options than enterprise solutions</p>
              </div>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex gap-4">
              <div className="mt-1 bg-soft-yellow p-2 rounded-lg">
                <DollarSign size={20} className="text-amber-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-gray-800">Cost Disadvantage</h4>
                <p className="text-gray-600">30-50% higher premiums than large enterprises for equivalent coverage</p>
              </div>
            </motion.li>
            
            <motion.li variants={listItemVariants} className="flex gap-4">
              <div className="mt-1 bg-soft-orange p-2 rounded-lg">
                <Clock size={20} className="text-orange-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg text-gray-800">Time Investment</h4>
                <p className="text-gray-600">Manual processes requiring weeks or months to implement</p>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>;
};
export default StructuralObstaclesTab;