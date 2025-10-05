
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import StructuralObstaclesTab from "./tabs/StructuralObstaclesTab";
import MarketProblemsTab from "./tabs/MarketProblemsTab";
import RealWorldImpactTab from "./tabs/RealWorldImpactTab";

interface BarrierTabsProps {
  isVisible: boolean;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const BarrierTabs = ({
  isVisible,
  currentTab,
  setCurrentTab
}: BarrierTabsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mb-10"
    >
      <Tabs defaultValue="barriers" value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl bg-white shadow-sm h-14">
            <TabsTrigger 
              value="barriers" 
              className="h-full text-base font-medium data-[state=active]:bg-[#005DFE] data-[state=active]:text-white data-[state=active]:font-semibold"
            >
              Structural Obstacles
            </TabsTrigger>
            <TabsTrigger 
              value="market" 
              className="h-full text-base font-medium data-[state=active]:bg-[#005DFE] data-[state=active]:text-white data-[state=active]:font-semibold"
            >
              Key Drivers
            </TabsTrigger>
            <TabsTrigger 
              value="impact" 
              className="h-full text-base font-medium data-[state=active]:bg-[#005DFE] data-[state=active]:text-white data-[state=active]:font-semibold"
            >
              Real-World Impact
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="barriers" className="mt-0">
          <StructuralObstaclesTab isVisible={isVisible} currentTab={currentTab} />
        </TabsContent>
        
        <TabsContent value="market" className="mt-0">
          <MarketProblemsTab isVisible={isVisible} currentTab={currentTab} />
        </TabsContent>
        
        <TabsContent value="impact" className="mt-0">
          <RealWorldImpactTab isVisible={isVisible} currentTab={currentTab} />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default BarrierTabs;
