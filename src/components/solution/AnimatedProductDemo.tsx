import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Building2, Users as UsersIcon, ChevronRight, Check, RotateCcw } from "lucide-react";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  employeeCount: string;
  industry: string;
}

const AnimatedProductDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLooping, setIsLooping] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    employeeCount: "",
    industry: ""
  });

  const steps = [
    { id: "owner", label: "Owner Details" },
    { id: "business", label: "Business Info" },
    { id: "dashboard", label: "Welcome!" }
  ];

  // Auto-advance through the demo with timing
  useEffect(() => {
    const stepTimings = [8000, 7500, 4000, 7500]; // Time to stay on each step (ms) - Step 0, 1, 2, 3
    
    if (currentStep < 3 && isLooping) { // Stop at step 3 (dashboard) unless manually restarted
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, stepTimings[currentStep]);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, isLooping]);

  // Function to restart the demo
  const restartDemo = () => {
    setIsLooping(true);
    setCurrentStep(0);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      employeeCount: "",
      industry: ""
    });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white relative">
      {/* Refresh Button - Bottom Right */}
      {currentStep === 3 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={restartDemo}
          className="absolute bottom-4 right-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-sm transition-all duration-200 hover:shadow-md"
          title="Restart Demo"
        >
          <RotateCcw className="w-4 h-4 text-gray-600" />
        </motion.button>
      )}

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Register Your Business
            </h2>
            <p className="text-sm text-gray-600 mt-1.5">
              Create your account, select your benefits, and get covered smoothly.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2.5">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1">
              <motion.div 
                className="h-1 rounded-full"
                initial={{ backgroundColor: "#e5e7eb" }}
                animate={{
                  backgroundColor: index === currentStep 
                    ? "#3b82f6" 
                    : index < currentStep
                      ? "#93c5fd"
                      : "#e5e7eb"
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="text-xs mt-1.5 font-medium"
                animate={{
                  color: index === currentStep ? "#2563eb" : "#6b7280"
                }}
                transition={{ duration: 0.3 }}
              >
                {step.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content with Animations */}
      <div className="flex-1 px-6 py-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Step 0: Owner Details */}
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-700 mb-5">
                Please provide the basic information for the business owner.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <AnimatedInput
                  label="First Name"
                  icon={<User className="w-4 h-4" />}
                  value="Shelby"
                  delay={0.8}
                  required
                />
                <AnimatedInput
                  label="Last Name"
                  icon={<User className="w-4 h-4" />}
                  value="Smith"
                  delay={1.4}
                  required
                />
              </div>

              <AnimatedInput
                label="Email Address"
                icon={<Mail className="w-4 h-4" />}
                value="shelby@company.com"
                delay={2.0}
                required
              />

              <AnimatedInput
                label="Phone Number"
                icon={<Phone className="w-4 h-4" />}
                value="(555) 123-4567"
                delay={2.6}
                required
              />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] active:bg-[#1D4ED8] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* Step 1: Business Info */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-700 mb-5">
                Tell us about your business.
              </p>

              <AnimatedInput
                label="Company Name"
                icon={<Building2 className="w-4 h-4" />}
                value="Acme Inc."
                delay={0.8}
                required
              />

              <AnimatedSelect
                label="Number of Employees"
                icon={<UsersIcon className="w-4 h-4" />}
                value="1-10 employees"
                delay={1.6}
                required
              />

              <AnimatedSelect
                label="Industry"
                value="Construction"
                delay={2.4}
                required
              />

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] active:bg-[#1D4ED8] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Registration Complete Success */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center h-full bg-green-50"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, stiffness: 200, damping: 15 }}
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-12 h-12 text-white" strokeWidth={3} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-gray-900 mb-3"
                >
                  Registration Complete!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 mb-4"
                >
                  Your account has been successfully created
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-gray-500"
                >
                  Redirecting to your dashboard...
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 1.0, duration: 2 }}
                  className="h-2 bg-green-500 rounded-full mx-auto mt-4"
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Dashboard Welcome Screen */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full overflow-hidden"
            >
              <iframe
                src="https://owner-cockpit.lovable.app/owner-cockpit"
                className="w-full h-full border-0"
                title="Owner Cockpit"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
                style={{ 
                  display: 'block',
                  border: 'none',
                  margin: 0,
                  padding: 0
                }}
              />
            </motion.div>
          )}

          {/* Step 3 Alternative: UI Code Dashboard (Currently Commented Out) */}
          {false && currentStep === 3 && (
            <motion.div
              key="step-3-alt"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full overflow-y-auto bg-gray-50"
            >
              {/* Header */}
              <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <img src={cakewalkLogo} alt="Cakewalk" className="h-8 w-auto" />
                    </div>
                    <div className="text-gray-300">|</div>
                    <span className="text-gray-600">Owner Cockpit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">Welcome, Shelbee</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 space-y-6">
                {/* Welcome Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900 text-center"
                >
                  Welcome to Cakewalk
                </motion.h1>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#005DFE] rounded-lg p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-3 gap-4">
                    <QuickActionCard
                      title="Billing & Payments"
                      icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      }
                      description="Manage payment methods and view billing history"
                      delay={0.6}
                    />
                    <QuickActionCard
                      title="View Statement"
                      icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      }
                      description="Review your monthly benefits costs and coverage details"
                      delay={0.8}
                    />
                    <QuickActionCard
                      title="Manage Employees"
                      icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      }
                      description="Add, remove, or update employee information and benefits"
                      delay={1.0}
                    />
                  </div>
                </motion.div>

                {/* Business Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m4 0V4m0 2v12" />
                      </svg>
                      <span className="font-semibold text-gray-900">Business Information</span>
                    </div>
                    <span className="text-blue-600 text-sm cursor-pointer">Show details</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <BusinessInfoItem
                      label="Company Name"
                      value="Cakewalk Benefits Inc"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      }
                      delay={1.4}
                    />
                    <BusinessInfoItem
                      label="Owner Name"
                      value="Shelbee Smith"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      }
                      delay={1.6}
                    />
                    <BusinessInfoItem
                      label="Location"
                      value="123 Main St, San Francisco, CA 94105"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      }
                      delay={1.8}
                    />
                  </div>
                </motion.div>

                {/* Employee Management */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">Employees Management</span>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-lg font-bold text-gray-900 mb-2"
                  >
                    Manage Your Team
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="text-gray-600"
                  >
                    Add and manage your team members to help them access their benefits. You can add up to 20 employees. Once added, they'll receive an email to activate their account.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="text-center text-xs text-gray-500">
          Powered by <img src={cakewalkLogo} alt="Cakewalk Benefits" className="inline h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

// Animated Input Component with Typing Effect
interface AnimatedInputProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  delay?: number;
  required?: boolean;
}

const AnimatedInput = ({ label, icon, value, delay = 0, required = false }: AnimatedInputProps) => {
  const [displayValue, setDisplayValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = setTimeout(() => {
      setIsFocused(true);
      const interval = setInterval(() => {
        if (currentIndex <= value.length) {
          setDisplayValue(value.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsFocused(false), 300);
        }
      }, 100); // Typing speed - slowed down from 60ms to 100ms
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(typingDelay);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type="text"
          value={displayValue}
          readOnly
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2.5 border rounded-lg outline-none transition-all ${
            isFocused 
              ? 'border-blue-500 ring-2 ring-blue-100' 
              : 'border-gray-300'
          }`}
        />
        {isFocused && displayValue.length < value.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
          >
            |
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

// Animated Select Component
interface AnimatedSelectProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  delay?: number;
  required?: boolean;
}

const AnimatedSelect = ({ label, icon, value, delay = 0, required = false }: AnimatedSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const openDelay = setTimeout(() => {
      setIsFocused(true);
      setIsOpen(true);
      setTimeout(() => {
        setDisplayValue(value);
        setTimeout(() => {
          setIsOpen(false);
          setIsFocused(false);
        }, 400);
      }, 600);
    }, delay * 1000);

    return () => clearTimeout(openDelay);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type="text"
          value={displayValue}
          readOnly
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2.5 border rounded-lg outline-none transition-all ${
            isFocused 
              ? 'border-blue-500 ring-2 ring-blue-100' 
              : 'border-gray-300'
          }`}
        />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
        >
          ▼
        </motion.div>
      </div>
    </motion.div>
  );
};


// Quick Action Card Component
interface QuickActionCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const QuickActionCard = ({ title, icon, description, delay }: QuickActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-lg p-4 flex flex-col items-center text-center hover:shadow-sm transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg text-[#005DFE] mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-[#005DFE] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.div>
  );
};

// Business Info Item Component
interface BusinessInfoItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
}

const BusinessInfoItem = ({ label, value, icon, delay }: BusinessInfoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-3"
    >
      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg text-gray-600 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 mb-1">{label}</div>
        <div className="text-sm text-gray-600 truncate">{value}</div>
      </div>
    </motion.div>
  );
};

export default AnimatedProductDemo;
