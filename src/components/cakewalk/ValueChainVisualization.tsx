
import { useState, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useIsMobile } from "@/hooks/use-mobile";
import { ValueChainVisualizationProps } from "./visualization/types";
import { useComponentsData } from "./visualization/useComponentsData";
import ViewToggle from "./visualization/ViewToggle";
import CentralIcon from "./visualization/CentralIcon";
import ConnectionLines from "./visualization/ConnectionLines";
import ComponentCard from "./visualization/ComponentCard";
import ParticleEffects from "./visualization/ParticleEffects";
import ComparisonText from "./visualization/ComparisonText";

const ValueChainVisualization = ({ isVisible, activeView, onToggleView }: ValueChainVisualizationProps) => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const visualizationRef = useRef<HTMLDivElement>(null);
  const isInViewport = useInView(visualizationRef, { threshold: 0.2 });
  const { cakewalkComponents, connections } = useComponentsData();
  
  // Throttle hover state changes to prevent rapid rerendering
  const throttleTimeout = useRef<number | null>(null);
  const handleComponentHover = (componentId: string | null) => {
    if (throttleTimeout.current) return;
    
    throttleTimeout.current = window.setTimeout(() => {
      setHoveredComponent(componentId);
      throttleTimeout.current = null;
    }, 50);
  };

  return (
    <div
      ref={visualizationRef}
      className="relative h-[500px] my-12 overflow-hidden"
    >
      {/* Traditional vs Cakewalk toggle */}
      <ViewToggle activeView={activeView} onToggleView={onToggleView} isVisible={isVisible} />

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central logo/icon */}
        <CentralIcon activeView={activeView} isVisible={isVisible} />

        {/* Connection lines - only show in Cakewalk view */}
        {activeView === 'cakewalk' && (
          <ConnectionLines 
            connections={connections} 
            components={cakewalkComponents} 
            hoveredComponent={hoveredComponent}
            isVisible={isVisible}
          />
        )}

        {/* Particle effects - only show in Cakewalk view */}
        <ParticleEffects 
          isVisible={isVisible && isInViewport} 
          isCakewalkView={activeView === 'cakewalk'}
          components={cakewalkComponents}
        />

        {/* Value chain components */}
        {cakewalkComponents.map((component, index) => (
          <ComponentCard
            key={component.id}
            id={component.id}
            name={component.name}
            icon={component.icon}
            color={component.color}
            position={component.position}
            isTraditional={activeView === 'traditional'}
            traditionalPosition={{
              x: (index % 2 === 0 ? -200 : 200),
              y: (Math.floor(index / 2) * 60) - 60
            }}
            isHovered={hoveredComponent === component.id}
            onHover={handleComponentHover}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Comparison text */}
      <ComparisonText activeView={activeView} isVisible={isVisible} />
    </div>
  );
};

export default ValueChainVisualization;
