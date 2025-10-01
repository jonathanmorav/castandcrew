import { motion } from "framer-motion";
interface CakewalkHeaderProps {
  isVisible: boolean;
}
const CakewalkHeader = ({
  isVisible
}: CakewalkHeaderProps) => {
  return <motion.div className="text-center mb-12 relative z-10" initial={{
    opacity: 0,
    y: 20
  }} animate={isVisible ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 20
  }} transition={{
    duration: 0.7
  }}>
      <motion.div className="inline-block bg-white rounded-full px-4 py-1.5 mb-3 shadow-sm" initial={{
      opacity: 0,
      scale: 0.9
    }} animate={isVisible ? {
      opacity: 1,
      scale: 1
    } : {
      opacity: 0,
      scale: 0.9
    }} transition={{
      delay: 0.2,
      duration: 0.5
    }}>
        <span className="text-brand-blue text-sm font-medium">End-to-End Value Innovation</span>
      </motion.div>
      
      <motion.h2 initial={{
      opacity: 0,
      y: 20
    }} animate={isVisible ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      delay: 0.3,
      duration: 0.6
    }} className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple mb-4 md:text-5xl">
        The Cakewalk Model
      </motion.h2>
      
      <motion.p className="text-xl text-gray-700 max-w-3xl mx-auto" initial={{
      opacity: 0,
      y: 20
    }} animate={isVisible ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      delay: 0.4,
      duration: 0.6
    }}>
        <span className="relative inline-block">
          <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-brand-teal/30 rounded-full"></span>
          <span className="px-1">Value Chain Innovation</span>
        </span>
        {" "}that transforms how small businesses access benefits
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 mb-8">
        <motion.div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300" initial={{
        opacity: 0,
        x: -20
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: -20
      }} transition={{
        delay: 0.5,
        duration: 0.7
      }}>
          <h3 className="text-xl font-semibold mb-4 text-left text-brand-gray">
            Traditional Insurtech Players Focus on Segments
          </h3>
          <p className="mb-4 text-gray-600 text-left">
            Most insurtechs operate in limited portions of the value chain:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-blue mr-2">•</span>
              <span className="text-left"><span className="font-medium">Distribution-only players:</span> Limited product customization</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2">•</span>
              <span className="text-left"><span className="font-medium">Admin-only solutions:</span> No underwriting capabilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-blue mr-2">•</span>
              <span><span className="font-medium">Product designers:</span> Lack distribution scale</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300" initial={{
        opacity: 0,
        x: 20
      }} animate={isVisible ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: 20
      }} transition={{
        delay: 0.6,
        duration: 0.7
      }}>
          <h3 className="text-xl font-semibold mb-4 text-brand-blue text-left">
            The Cakewalk Difference: Complete Value Integration
          </h3>
          <p className="text-gray-700 text-left">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">We create value at every step </span> 
            of the insurance process, providing a comprehensive solution that 
            revolutionizes how small businesses access and manage their benefits.
          </p>
          
        </motion.div>
      </div>
    </motion.div>;
};
export default CakewalkHeader;