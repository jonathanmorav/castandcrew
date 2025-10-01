
import { memo } from "react";
import { motion } from "framer-motion";
import { Users, Circle } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const strategyItems = [
  { 
    title: "Strategic partnerships", 
    desc: "with brokers, payroll providers, and SaaS platforms",
    detail: "Form strategic alliances with brokers, payroll providers and SaaS platforms to expand distribution channels and accelerate adoption."
  },
  { 
    title: "Increased policy density", 
    desc: "by expanding offerings within current customers",
    detail: "Focus on cross-selling additional benefit products to existing customers, increasing revenue per customer with minimal acquisition costs."
  },
  { 
    title: "Product expansion", 
    desc: "into adjacent voluntary benefits with similar economics",
    detail: "Develop complementary product offerings that leverage our existing platform capabilities and distribution channels."
  },
  { 
    title: "Digital marketing", 
    desc: "focused on tech-savvy SMB decision makers",
    detail: "Target tech-forward SMB decision makers through precision digital marketing and educational content."
  }
];

const GrowthStrategy = memo(() => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#FCFCFF] to-[#F7F8FF] p-6 rounded-2xl border border-purple-100 shadow-md"
    >
      <h4 className="text-xl font-bold mb-4 flex items-center">
        <Users className="mr-2 text-[#9B72DF]" />
        <span>Growth Strategy</span>
      </h4>
      
      <ul className="space-y-4">
        {strategyItems.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
            className="flex items-start"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <Circle className="h-5 w-5 text-[#9B72DF] mr-3 flex-shrink-0 fill-[#EEF1FF]" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#9B72DF]">{item.title}</h4>
                  <p className="text-sm">{item.detail}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

GrowthStrategy.displayName = "GrowthStrategy";
export default GrowthStrategy;
