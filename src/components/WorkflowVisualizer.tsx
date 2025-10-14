
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedProductDemo from "./solution/AnimatedProductDemo";
import WebsiteEmbed from "./solution/WebsiteEmbed";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface Tab {
  id: string;
  title: string;
  url: string;
  component: React.ReactNode;
}

interface WorkflowVisualizerProps {
  steps: Step[];
}

const WorkflowVisualizer = ({ steps }: WorkflowVisualizerProps) => {
  const [activeTab, setActiveTab] = useState("registration");
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "registration",
      title: "Registration",
      url: "app.cakewalkbenefits.com/register",
      component: <AnimatedProductDemo />
    },
    {
      id: "health-decision-flow",
      title: "Health Decision Flow",
      url: "https://preview--biz-health-pathfinder.lovable.app/",
      component: <WebsiteEmbed 
        title="Health Decision Flow"
        url="https://preview--biz-health-pathfinder.lovable.app/"
        description="Guided pathfinder for selecting health coverage options"
      />
    },
    {
      id: "underwriting",
      title: "Real Time Underwriting & Shopping",
      url: "https://showcase.john.cakewalkinsurance.com/?a=taa&age=40&zipCode=54545&annualSalary=50000&reg=true&call=true&mode=compact",
      component: <WebsiteEmbed 
        title="Real Time Underwriting & Shopping"
        url="https://showcase.john.cakewalkinsurance.com/?a=taa&age=40&zipCode=54545&annualSalary=50000&reg=true&call=true&mode=compact"
        description="Live showcase with pre-configured user profile"
      />
    },
    {
      id: "checkout",
      title: "Seamless Checkout & Payment",
      url: "https://owner-cockpit.lovable.app/payment-setup/agreement",
      component: <WebsiteEmbed 
        title="Seamless Checkout & Payment"
        url="https://owner-cockpit.lovable.app/payment-setup/agreement"
        description="Secure payment processing and agreement management"
      />
    },
    {
      id: "benefits-wallet",
      title: "Benefits Wallet",
      url: "https://owner-cockpit.lovable.app/benefits-wallet",
      component: <WebsiteEmbed 
        title="Benefits Wallet"
        url="https://owner-cockpit.lovable.app/benefits-wallet"
        description="Employee benefits management and digital wallet"
      />
    }
  ]);

  const getCurrentUrl = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    if (!currentTab) return 'cakewalkbenefits.com';
    
    // Return masked URL based on tab
    switch (currentTab.id) {
      case 'registration':
        return 'cakewalkbenefits.com/simple-registration';
      case 'underwriting':
        return 'cakewalkbenefits.com/real-time-underwriting-shopping';
      case 'checkout':
        return 'cakewalkbenefits.com/seamless-checkout-billing-setup';
      case 'benefits-wallet':
        return 'cakewalkbenefits.com/policyholders-insurance-wallet';
      case 'health-decision-flow':
        return 'cakewalkbenefits.com/health-decision-flow';
      default:
        return 'cakewalkbenefits.com';
    }
  };


  return (
    <div className="w-full" style={{ maxWidth: '95vw' }}>
      {/* Browser Container */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
        {/* Browser Tabs */}
        <div className="bg-gray-50 border-b border-gray-200 px-2 pt-2" role="tablist" aria-label="Feature tabs">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-500 font-medium">Click tabs to explore different features</div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <span>Interactive Demo</span>
            </div>
          </div>
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                aria-selected={activeTab === tab.id}
                role="tab"
                className={`cursor-pointer flex items-center gap-2 px-4 py-3 rounded-t-lg text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                    : "bg-white/70 text-gray-700 border-brand-mint shadow-sm hover:bg-white hover:text-gray-900 hover:border-brand-mint hover:shadow-md"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ 
                  scale: activeTab === tab.id ? 1.02 : 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative">
                  {tab.title}
                  {activeTab !== tab.id && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Browser Controls */}
        <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 flex-grow">
            <div className="bg-white rounded px-3 py-1.5 text-xs text-gray-600 flex items-center shadow-sm">
              <span className="text-gray-400 mr-2">🔒</span>
              <span className="text-gray-700">{getCurrentUrl()}</span>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="h-[700px] overflow-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {tabs.find(tab => tab.id === activeTab)?.component}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualizer;
