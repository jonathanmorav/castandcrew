
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TableCell } from "@/components/ui/table";
import { ValueChainComponentData, itemVariants } from "./TableData";
import ParticleEffect from "./ParticleEffect";
import { 
  Users, Settings, ShieldCheck, Handshake, 
  ClipboardCheck, MessageSquare 
} from "lucide-react";

interface ComponentRowProps {
  data: ValueChainComponentData;
  index: number;
  isHovered: boolean;
  isInViewport: boolean;
  onHover: (componentId: string | null) => void;
}

// Map icon names to their components
const iconComponents = {
  Users,
  Settings,
  ShieldCheck,
  Handshake,
  ClipboardCheck,
  MessageSquare
};

const ComponentRow = ({ 
  data, 
  index, 
  isHovered, 
  isInViewport, 
  onHover 
}: ComponentRowProps) => {
  // Get the correct icon component
  const IconComponent = iconComponents[data.iconName as keyof typeof iconComponents];
  
  return (
    <HoverCard key={data.component} openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <motion.tr
          variants={itemVariants}
          className={`border-b border-gray-100 hover:bg-[#f9fafe] transition-colors duration-300 cursor-pointer relative ${index % 2 === 0 ? 'bg-white' : 'bg-[#fafbff]'} ${isHovered ? 'shadow-lg scale-[1.02] z-10' : ''}`}
          onMouseEnter={() => onHover(data.component)}
          onMouseLeave={() => onHover(null)}
        >
          <TableCell className="py-4 px-6">
            <div className="flex items-center">
              <div className={`mr-3 transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
                {IconComponent && <IconComponent className="h-6 w-6 text-brand-blue" />}
              </div>
              <div className="font-medium text-[#333333]">{data.component}</div>
            </div>
          </TableCell>
          <TableCell className="py-4 px-6 text-[#555555]">{data.innovation}</TableCell>
          <TableCell className="py-4 px-6 text-[#555555]">{data.impact}</TableCell>
          
          {/* Particle effect overlay - Only render when row is hovered */}
          <ParticleEffect active={isHovered} isInViewport={isInViewport} />
        </motion.tr>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-brand-blue/10">
              {IconComponent && <IconComponent className="h-6 w-6 text-brand-blue" />}
            </div>
            <h4 className="font-semibold text-lg">{data.component}</h4>
          </div>
          <p className="text-sm text-gray-700">{data.details}</p>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-semibold text-brand-purple">Business Impact:</span>
            <p className="text-sm font-medium">{data.impact}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ComponentRow;
