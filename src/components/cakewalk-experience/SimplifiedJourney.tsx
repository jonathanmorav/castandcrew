import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
const steps = [{
  number: 1,
  title: "Quick Business Profile",
  description: "Small business owner enters basic company information in under 60 seconds",
  icon: "⚡"
}, {
  number: 2,
  title: "AI-Guided Recommendations",
  description: "Proprietary algorithm recommends optimal coverage based on business type, size, and budget",
  icon: "🧠"
}, {
  number: 3,
  title: "Real-Time Customization",
  description: "Business owner tailors coverage options with instant pricing updates",
  icon: "⚙️"
}, {
  number: 4,
  title: "Digital Enrollment",
  description: "Paperless enrollment process with e-signature capabilities",
  icon: "📱"
}, {
  number: 5,
  title: "Instant Implementation",
  description: "Coverage confirmation and employee access enabled immediately",
  icon: "✅"
}];
const SimplifiedJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    threshold: 0.1
  });
  return <div ref={containerRef} className="mb-24">
      <motion.h2 initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.6
    }} className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        How It Works: The Simplified Journey
      </motion.h2>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-brand-teal hidden md:block transform -translate-x-1/2" />

        {/* Steps */}
        <div className="space-y-12 relative">
          {steps.map((step, index) => <JourneyStep key={step.number} step={step} isEven={index % 2 === 0} isInView={isInView} delay={index * 0.2} />)}
        </div>
      </div>
    </div>;
};
interface JourneyStepProps {
  step: {
    number: number;
    title: string;
    description: string;
    icon: string;
  };
  isEven: boolean;
  isInView: boolean;
  delay: number;
}
const JourneyStep = ({
  step,
  isEven,
  isInView,
  delay
}: JourneyStepProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        type: "spring",
        stiffness: 100
      }
    }
  };
  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -90
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };
  return <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Number bubble - visible only on mobile */}
      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg mb-4">
        {step.number}
      </div>

      {/* Content Card */}
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants} className={`w-full md:w-5/12 bg-white rounded-xl p-6 shadow-lg relative ${isEven ? "md:text-right" : "md:text-left"}`}>
        <h3 className="text-xl font-bold text-indigo-800 mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </motion.div>

      {/* Center Icon */}
      <div className="relative md:w-2/12 flex justify-center items-center py-4">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={iconVariants} className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 text-2xl">
          <span role="img" aria-label={step.title}>
            {step.icon}
          </span>
        </motion.div>
        <div className="absolute w-1 h-full bg-gradient-to-b from-indigo-500 to-brand-teal hidden md:block" />
      </div>

      {/* Number - Desktop Version */}
      
    </div>;
};
export default SimplifiedJourney;