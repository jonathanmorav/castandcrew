import { useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, FileText, Laptop, Phone, RefreshCw, Puzzle, Link, Frown, Smile } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
const ComparisonTable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    threshold: 0.2
  });
  const tableContainerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };
  const sectionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const comparisons = [{
    traditional: {
      icon: Clock,
      text: "30+ days to implementation"
    },
    cakewalk: {
      icon: Zap,
      text: "5-10 minutes to complete enrollment"
    }
  }, {
    traditional: {
      icon: FileText,
      text: "Agent-led, paperwork-intensive"
    },
    cakewalk: {
      icon: Laptop,
      text: "Digital-first with intuitive SMB-focused UX"
    }
  }, {
    traditional: {
      icon: Phone,
      text: "Weeks of back-and-forth communications"
    },
    cakewalk: {
      icon: RefreshCw,
      text: "Real-time customization and pricing"
    }
  }, {
    traditional: {
      icon: Puzzle,
      text: "Fragmented systems across providers"
    },
    cakewalk: {
      icon: Link,
      text: "Fully integrated platform experience"
    }
  }, {
    traditional: {
      icon: Frown,
      text: "Frustrated SMBs; overwhelmed brokers"
    },
    cakewalk: {
      icon: Smile,
      text: "Empowered businesses; satisfied employees"
    }
  }];
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
    }} className="text-4xl text-brand-darkBlue">
        Traditional Process vs. Cakewalk
      </motion.h2>

      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={tableContainerVariants} className="bg-white rounded-xl shadow-2xl overflow-hidden border border-purple-100">
        <div className="grid grid-cols-2 gap-0">
          {/* Headers */}
          <div className="bg-gray-100 py-5 px-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">Traditional Process</h3>
          </div>
          <div className="bg-indigo-50 py-5 px-6 border-b border-indigo-100">
            <h3 className="text-xl font-semibold text-brand-blue">Cakewalk Experience</h3>
          </div>

          {/* Comparison Rows */}
          <motion.div variants={sectionVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="col-span-2 divide-y divide-gray-100">
            {comparisons.map((comparison, index) => <div key={index} className="grid grid-cols-2 divide-x divide-gray-100">
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 bg-white">
                  <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                    <comparison.traditional.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <p className="text-gray-700">{comparison.traditional.text}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-4 p-5 bg-indigo-50/30">
                  <div className="p-2 rounded-lg flex-shrink-0 bg-soft-blue">
                    <comparison.cakewalk.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="font-medium text-brand-blue">{comparison.cakewalk.text}</p>
                </motion.div>
              </div>)}
          </motion.div>
        </div>
      </motion.div>
    </div>;
};
export default ComparisonTable;