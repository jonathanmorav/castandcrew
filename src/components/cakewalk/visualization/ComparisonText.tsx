
import { motion } from "framer-motion";

interface ComparisonTextProps {
  activeView: 'traditional' | 'cakewalk';
  isVisible: boolean;
}

const ComparisonText = ({ activeView, isVisible }: ComparisonTextProps) => {
  const isCakewalk = activeView === 'cakewalk';
  
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Tag styles based on view
  const tagClassName = isCakewalk 
    ? "bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border-brand-purple/30 text-brand-purple" 
    : "bg-gray-100 border-gray-200 text-gray-500";

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 text-center mb-6 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div
        variants={itemVariants}
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-2 ${tagClassName}`}
      >
        {isCakewalk ? "Integrated Approach" : "Traditional Approach"}
      </motion.div>
      
      <motion.h3 
        className={`text-xl font-semibold ${isCakewalk ? "bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple" : "text-gray-700"}`}
        variants={itemVariants}
      >
        {isCakewalk 
          ? 'Cakewalk Model: Integrated Value Chain' 
          : 'Traditional Model: Disconnected Segments'}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 max-w-md mx-auto mt-2"
        variants={itemVariants}
      >
        {isCakewalk 
          ? 'Seamless integration creates a frictionless experience with lower costs' 
          : 'Siloed operations lead to inefficiencies, delays, and higher costs'}
      </motion.p>
      
      {/* Performance indicators only shown in Cakewalk view */}
      {isCakewalk && (
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-3"
          variants={itemVariants}
        >
          <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-100">
            80% faster processing
          </div>
          <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-100">
            25% cost reduction
          </div>
          <div className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium border border-purple-100">
            97% customer satisfaction
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ComparisonText;
