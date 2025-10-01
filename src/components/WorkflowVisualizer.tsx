
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface WorkflowVisualizerProps {
  steps: Step[];
}

const WorkflowVisualizer = ({ steps }: WorkflowVisualizerProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Browser Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Browser Controls */}
        <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 flex-grow">
            <div className="bg-gray-200 rounded-md h-6 w-full"></div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-6">
          <div className="h-[400px] relative">
            {/* Step Visualization */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Different content based on step */}
              <div className="text-center w-full">
                <div className="mb-4 flex justify-center">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center", 
                    activeStep === 0 ? "bg-brand-blue text-white" : 
                    activeStep === 1 ? "bg-brand-purple text-white" : 
                    activeStep === 2 ? "bg-brand-teal/80 text-gray-800" : 
                    "bg-green-500 text-white"
                  )}>
                    {activeStep === 0 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M19 11H5V21H19V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 11V7C17 5.93913 16.5786 4.92172 15.8284 4.17157C15.0783 3.42143 14.0609 3 13 3H11C9.93913 3 8.92172 3.42143 8.17157 4.17157C7.42143 4.92172 7 5.93913 7 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor" />
                      </svg>
                    )}
                    {activeStep === 1 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {activeStep === 2 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {activeStep === 3 && (
                      <Check className="w-8 h-8" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="text-gray-600 mb-6">{steps[activeStep].description}</p>
                
                {activeStep === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xs mx-auto bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-left text-gray-700">Company Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white border p-2" defaultValue="Acme Inc."/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-left text-gray-700">Number of Employees</label>
                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white border p-2" defaultValue="24"/>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeStep === 1 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="h-2 bg-brand-purple rounded-full mx-auto mb-4"
                  />
                )}
                
                {activeStep === 2 && (
                  <div className="flex gap-4 flex-wrap justify-center">
                    {[1, 2, 3].map((plan) => (
                      <motion.div
                        key={plan}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: plan * 0.2 }}
                        className="bg-white p-3 rounded-lg shadow-md border border-gray-200 w-[120px]"
                      >
                        <div className="font-bold mb-1">Plan {plan}</div>
                        <div className="text-sm text-gray-600 mb-2">From $99/mo</div>
                        <div className="flex justify-center">
                          <div className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs">
                            Details
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="flex flex-col items-center">
                    <div className="bg-green-50 text-green-700 rounded-lg px-4 py-3 mb-4">
                      Enrollment Complete!
                    </div>
                    <div className="flex gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                        <span>12 Enrolled</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                        <span>3 Pending</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-between items-center mt-4">
            <button 
              onClick={prevStep} 
              disabled={activeStep === 0}
              className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors ${activeStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-brand-blue hover:bg-blue-50'}`}
            >
              <ArrowRight className="w-5 h-5 transform rotate-180" />
            </button>
            
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === activeStep ? 'bg-brand-blue' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextStep} 
              disabled={activeStep === steps.length - 1}
              className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors ${activeStep === steps.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-brand-blue hover:bg-blue-50'}`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualizer;
