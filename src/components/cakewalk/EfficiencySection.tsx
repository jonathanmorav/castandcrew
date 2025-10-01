
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EfficiencySectionProps {
  isVisible: boolean;
}

const EfficiencySection = ({ isVisible }: EfficiencySectionProps) => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const efficiencyPoints = [
    {
      title: "Zero-touch operations",
      description: "Fully digital experience from quote to claims",
      detail: "Our end-to-end digital platform eliminates manual processes, providing a seamless experience from the initial quote through to claims resolution without requiring paperwork or phone calls.",
      icon: <div className="bg-brand-blue/10 p-3 rounded-full"><Zap className="h-5 w-5 text-brand-blue" /></div>
    },
    {
      title: "Reduced administrative overhead",
      description: "Consolidated billing & documentation",
      detail: "By consolidating billing and documentation into a single platform, businesses can reduce the administrative burden by up to 70% and eliminate the need for dedicated staff to manage benefits.",
      icon: <div className="bg-brand-purple/10 p-3 rounded-full"><Zap className="h-5 w-5 text-brand-purple" /></div>
    },
    {
      title: "Labor burden reduction",
      description: "Automates tasks that traditionally require multiple staff members",
      detail: "Our automation replaces tasks that typically require 2-3 full-time employees in a traditional setting, allowing small businesses to redirect resources to core business activities.",
      icon: <div className="bg-brand-teal/10 p-3 rounded-full"><Zap className="h-5 w-5 text-brand-teal" /></div>
    }
  ];

  const timelineSteps = [
    { 
      label: "Request", 
      traditionalTime: "Day 1",
      cakewalkTime: "Minute 1" 
    },
    { 
      label: "Quote", 
      traditionalTime: "Day 3-7",
      cakewalkTime: "Minute 1" 
    },
    { 
      label: "Underwriting", 
      traditionalTime: "Week 1-3",
      cakewalkTime: "Minute 2" 
    },
    { 
      label: "Approval", 
      traditionalTime: "Week 3-4",
      cakewalkTime: "Minute 3" 
    },
    { 
      label: "Implementation", 
      traditionalTime: "Week 4-6",
      cakewalkTime: "Day 1" 
    },
  ];

  // Card hover animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
  };

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4">
            <Zap className="h-7 w-7 text-brand-teal" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
            Operational Efficiency Revolution
          </h3>
        </div>
        
        <p className="text-lg mb-6 text-[#555555]">
          Our technology eliminates traditional friction points:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {efficiencyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className={`bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                activePoint === index ? 'ring-2 ring-brand-blue ring-opacity-50' : ''
              }`}
              onClick={() => setActivePoint(activePoint === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                {point.icon}
                <h4 className="font-semibold text-lg ml-3 text-brand-blue">
                  {point.title}
                </h4>
              </div>
              <p className="text-[#555555]">{point.description}</p>
              
              {/* Expanded content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: activePoint === index ? 1 : 0,
                  height: activePoint === index ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">{point.detail}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process comparison timeline */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h4 className="text-xl font-semibold mb-6 text-center">Traditional vs. Cakewalk Process Timeline</h4>
          
          <div className="hidden md:block relative">
            {/* Timeline */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            {/* Timeline steps */}
            <div className="flex justify-between relative">
              {timelineSteps.map((step, index) => (
                <div key={index} className="text-center relative z-10">
                  {/* Step marker */}
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 mx-auto mb-2"></div>
                  
                  {/* Traditional time - above line */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-red-50 text-red-700 text-xs font-medium px-2 py-1 rounded">
                      {step.traditionalTime}
                    </div>
                  </div>
                  
                  {/* Step label */}
                  <div className="text-sm font-medium mt-4">{step.label}</div>
                  
                  {/* Cakewalk time - below line */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">
                      {step.cakewalkTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress indicators */}
            <motion.div
              className="absolute top-1/2 left-0 h-1.5 bg-red-400 transform -translate-y-1/2 rounded"
              initial={{ width: "0%" }}
              animate={isVisible ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 8, delay: 1.5 }}
            ></motion.div>
            
            <motion.div
              className="absolute top-1/2 left-0 h-1.5 bg-green-400 transform -translate-y-1/2 rounded"
              initial={{ width: "0%" }}
              animate={isVisible ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, delay: 2 }}
            ></motion.div>
          </div>
          
          {/* Mobile timeline view */}
          <div className="block md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {timelineSteps.map((step, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardContent className="p-4">
                        <h5 className="font-medium text-center mb-2">{step.label}</h5>
                        <div className="flex justify-between">
                          <div className="bg-red-50 text-red-700 text-xs font-medium px-2 py-1 rounded flex items-center">
                            <span className="mr-1">Traditional:</span> {step.traditionalTime}
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 mx-1" />
                          <div className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded flex items-center">
                            <span className="mr-1">Cakewalk:</span> {step.cakewalkTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex bg-white rounded-lg shadow-sm p-1 text-sm">
              <div className="flex items-center px-3 py-1">
                <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
                <span>Traditional: 4-6 weeks</span>
              </div>
              <div className="flex items-center px-3 py-1 border-l border-gray-200">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span>Cakewalk: 3-5 minutes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EfficiencySection;
