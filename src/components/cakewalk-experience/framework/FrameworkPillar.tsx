
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

export interface FrameworkPillarProps {
  title: string;
  letter: string;
  impact: string;
  points: string[];
  color: string;
  hoverColor?: string;
  ringColor?: string;
  delay: number;
  isInView: boolean;
  index: number;
}

const FrameworkPillar = ({ 
  title, 
  letter, 
  impact, 
  points, 
  color, 
  delay, 
  isInView,
  index
}: FrameworkPillarProps) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateY: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        delay,
        ease: "easeOut"
      }
    }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + 0.3 + (i * 0.1),
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col">
        {/* Header */}
        <div className={`bg-gradient-to-r ${color} p-6 text-white relative overflow-hidden`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white blur-xl transform -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white blur-xl transform translate-x-16 translate-y-16"></div>
          </div>
          <div className="relative z-10">
            <span className="text-6xl font-bold opacity-20 absolute -top-2 -left-2">{letter}</span>
            <h3 className="text-2xl font-bold mb-2 mt-2">{title}</h3>
            <p className="text-white/90 font-medium">
              Impact: <span className="font-bold">{impact}</span>
            </p>
          </div>
        </div>

        {/* Points */}
        <div className="p-6 space-y-3 flex-grow bg-gradient-to-b from-white to-gray-50">
          {points.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={pointVariants}
              className="flex items-start"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: delay + 0.3 + (i * 0.1), duration: 0.4, type: "spring" }}
                className="h-2 w-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"
              />
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FrameworkPillar;
