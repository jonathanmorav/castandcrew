
import React from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";
import { ScrollText, Layers } from "lucide-react";

const ViewModeToggle = () => {
  const { viewMode, toggleViewMode } = useViewMode();
  const isShowcaseMode = viewMode === "showcase";

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-white px-4 py-2",
        "shadow-lg border border-gray-200"
      )}
    >
      <ScrollText 
        className={cn(
          "h-4 w-4 transition-colors",
          !isShowcaseMode ? "text-purple-600" : "text-gray-400"
        )} 
      />
      
      <Switch 
        checked={isShowcaseMode} 
        onCheckedChange={toggleViewMode}
        className="data-[state=checked]:bg-purple-600"
      />
      
      <Layers 
        className={cn(
          "h-4 w-4 transition-colors",
          isShowcaseMode ? "text-purple-600" : "text-gray-400"
        )} 
      />
      
      <span className="text-xs font-medium ml-1">
        {isShowcaseMode ? "Showcase View" : "Single View"}
      </span>
    </motion.div>
  );
};

export default ViewModeToggle;
