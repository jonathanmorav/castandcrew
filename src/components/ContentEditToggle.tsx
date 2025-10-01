
import React from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { useContentEdit } from "@/context/ContentEditContext";
import { FileText, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const ContentEditToggle = () => {
  const { isContentEditMode, toggleContentEditMode } = useContentEdit();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white px-4 py-2",
        "shadow-lg border border-gray-200"
      )}
    >
      <Layout 
        className={cn(
          "h-4 w-4 transition-colors",
          isContentEditMode ? "text-gray-400" : "text-purple-600"
        )} 
      />
      
      <Switch 
        checked={isContentEditMode} 
        onCheckedChange={toggleContentEditMode}
        className="data-[state=checked]:bg-purple-600"
      />
      
      <FileText 
        className={cn(
          "h-4 w-4 transition-colors",
          isContentEditMode ? "text-purple-600" : "text-gray-400"
        )} 
      />
      
      <span className="text-xs font-medium ml-1">
        {isContentEditMode ? "Content View" : "Normal View"}
      </span>
    </motion.div>
  );
};

export default ContentEditToggle;
