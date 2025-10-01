
import { motion } from "framer-motion";
import ValuePropositionCards from "../../ValuePropositionCards";
import ValueEquationCards from "../../ValueEquationCards";

const fadeInUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const ValueSection = () => {
  return (
    <>
      {/* Value proposition */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              x: [0, 20, 0],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              x: [0, -20, 0],
              opacity: [0.2, 0.25, 0.2] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 18,
              repeatType: "reverse"
            }}
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400 opacity-20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            The Cakewalk Difference
          </h2>
          
          <p className="text-xl text-center mb-10 text-indigo-100">
            Our unique position in the market allows us to:
          </p>
          
          <ValuePropositionCards />
        </div>
      </motion.section>

      {/* Value equation */}
      <motion.section
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
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
            Next: How Cakewalk's zero-touch platform transforms the entire experience
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default ValueSection;
