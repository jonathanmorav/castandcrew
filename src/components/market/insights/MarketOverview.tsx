
import { memo, useRef } from "react";
import { useInView } from "framer-motion";
import MarketSummaryHeader from "./overview/MarketSummaryHeader";
import MarketMetricsGrid from "./overview/MarketMetricsGrid";
import StrategicInsight from "./overview/StrategicInsight";

const MarketOverview = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  return (
    <div ref={containerRef} className="space-y-8">
      {/* Market Summary Header */}
      <MarketSummaryHeader isInView={isInView} />
      
      {/* Market Opportunity Metrics */}
      <MarketMetricsGrid isInView={isInView} />
      
      {/* Strategic Insights */}
      <StrategicInsight isInView={isInView} />
    </div>
  );
});

MarketOverview.displayName = "MarketOverview";
export default MarketOverview;
