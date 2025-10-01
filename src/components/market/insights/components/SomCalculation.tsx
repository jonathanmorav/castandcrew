
import { memo } from "react";
import { motion } from "framer-motion";
import { ChartBar } from "lucide-react";

const tagItems = [
  "Growth potential",
  "Viable market",
  "Realistic target"
];

const SomCalculation = memo(() => {
  return (
    <motion.div 
      className="relative overflow-hidden bg-gradient-to-br from-[#9B72DF] to-[#7966F8] p-6 rounded-2xl text-white shadow-lg"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
      
      <h4 className="text-xl font-bold mb-4 flex items-center relative z-10">
        <ChartBar className="mr-2" />
        <span>SOM Calculation</span>
      </h4>
      
      <div className="relative z-10 space-y-4">
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
          <div className="text-center">
            <div className="text-lg font-light">360K policies × $300 annual premium</div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="text-5xl font-bold mt-2"
            >
              $108M SOM
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center"
        >
          <p className="text-lg">
            Nine-figure revenue opportunity with just <span className="font-bold text-white">2%</span> of the SAM
          </p>
          <div className="mt-3 flex justify-center space-x-2">
            {tagItems.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

SomCalculation.displayName = "SomCalculation";
export default SomCalculation;
