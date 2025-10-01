
import { useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const CustomerImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { threshold: 0.5 });
  const controls = useAnimationControls();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        The Customer Impact
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative p-8 md:p-12 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-xl text-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="text-5xl mb-6 text-center font-serif">"</div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? 
              { opacity: 1, transition: { duration: 1, delay: 0.6 } } : 
              { opacity: 0 }
            }
            className="text-xl md:text-2xl font-light italic text-center mb-6"
          >
            Traditional brokers quoted me $15,000 and three weeks to set up benefits. 
            With Cakewalk, I was done in <motion.span 
              initial={{ color: "#fff" }}
              animate={isInView ? 
                { color: "#5AFEEF", transition: { duration: 0.5, delay: 1.2 } } : 
                { color: "#fff" }
              }
              className="font-bold"
            >
              8 minutes
            </motion.span> and saved <motion.span 
              initial={{ color: "#fff" }}
              animate={isInView ? 
                { color: "#5AFEEF", transition: { duration: 0.5, delay: 1.4 } } : 
                { color: "#fff" }
              }
              className="font-bold"
            >
              $5,000
            </motion.span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center text-indigo-200"
          >
            — Small Business Owner, 27 employees
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="mt-10 text-center text-gray-600 italic"
      >
        <p className="text-lg">
          Next: How Cakewalk's technology architecture enables this revolutionary experience
        </p>
      </motion.div>
    </div>
  );
};

export default CustomerImpact;
