import { motion } from "framer-motion";
interface OpportunityHighlightProps {
  isVisible: boolean;
}
const OpportunityHighlight = ({
  isVisible
}: OpportunityHighlightProps) => {
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
  return <>
      {/* Why This Matters section */}
      <motion.div className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" initial={{
      opacity: 0,
      y: 30
    }} animate={isVisible ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 30
    }} transition={{
      duration: 0.7,
      delay: 0.7
    }}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 bg-gradient-to-br from-brand-blue to-brand-purple p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <p className="text-white/90 text-lg">
              45% of the U.S. workforce works for small businesses, representing a massive opportunity.
            </p>
          </div>
          
          <div className="col-span-2 p-8">
            <div className="grid grid-cols-2 gap-6">
              <motion.div className="flex flex-col items-center text-center" variants={listItemVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{
              delay: 0.8
            }}>
                <div className="text-4xl font-bold text-brand-blue mb-2">33.2M</div>
                <p className="text-gray-700">Small businesses across America</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center text-center" variants={listItemVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{
              delay: 0.9
            }}>
                <div className="text-4xl font-bold text-brand-blue mb-2">5.5M</div>
                <p className="text-gray-700">Businesses with 1-19 employees</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center text-center" variants={listItemVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{
              delay: 1.0
            }}>
                <div className="text-4xl font-bold text-brand-blue mb-2">648K</div>
                <p className="text-gray-700">Businesses with 20-49 employees</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center text-center" variants={listItemVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"} transition={{
              delay: 1.1
            }}>
                <div className="text-4xl font-bold text-brand-blue mb-2">27.2M</div>
                <p className="text-gray-700">Sole proprietor businesses</p>
              </motion.div>
            </div>
            
            <motion.div className="mt-8 text-center pt-6 border-t border-gray-100" initial={{
            opacity: 0
          }} animate={isVisible ? {
            opacity: 1
          } : {
            opacity: 0
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }}>
              <p className="text-xl font-medium text-brand-darkBlue">
                70% of all new jobs created in 2019 came from small businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* The Cakewalk Opportunity */}
      <motion.div className="mt-16 text-center max-w-3xl mx-auto" initial={{
      opacity: 0,
      y: 20
    }} animate={isVisible ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.7,
      delay: 1.3
    }}>
        <div className="relative inline-block">
          <h3 className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple text-brand-blue md:text-3xl">
            The Cakewalk Opportunity
          </h3>
          
        </div>
        
        <p className="mt-6 text-lg text-gray-700">
          This massive structural problem creates the perfect opportunity for Cakewalk's zero-touch platform
          and innovative risk distribution model to transform the industry.
        </p>
        
        <div className="mt-8 text-sm text-gray-500 italic">
          Next: How Cakewalk turns this complex process into a simple, digital experience
        </div>
      </motion.div>
    </>;
};
export default OpportunityHighlight;