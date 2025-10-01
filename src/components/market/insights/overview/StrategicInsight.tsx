
import { memo } from "react";
import { motion } from "framer-motion";

interface StrategicInsightProps {
  isInView: boolean;
}

const StrategicInsight = memo(({ isInView }: StrategicInsightProps) => {
  const strategies = [
    "Distribution partnerships (brokers, payroll providers, SaaS platforms)",
    "Increasing percentage of policies per employer",
    "Expanding into other voluntary benefits with similar economics"
  ];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <h4 className="text-xl font-semibold mb-4 text-brand-purple">Strategic Insight</h4>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <motion.p 
          className="text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Even capturing just <span className="font-semibold text-brand-purple">2%</span> of the SAM puts Cakewalk into <span className="font-semibold text-brand-purple">9-figure revenue</span> territory. Our path to growth focuses on three key levers:
        </motion.p>
        
        <ul className="space-y-3">
          {strategies.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.7 + (i * 0.1), duration: 0.4 }}
            >
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs font-bold text-white">{i + 1}</span>
              </div>
              <span className="text-gray-700">{item}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <p className="text-sm italic text-gray-500 flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
            <span>Market poised for disruption with current satisfaction scores at historic lows</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
});

StrategicInsight.displayName = "StrategicInsight";
export default StrategicInsight;
