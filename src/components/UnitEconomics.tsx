
import React from "react";
import UnitEconomicsHeader from "./unit-economics/UnitEconomicsHeader";
import KeyPerformanceTable from "./unit-economics/KeyPerformanceTable";
import RevenueStreams from "./unit-economics/RevenueStreams";
import CustomerAcquisition from "./unit-economics/CustomerAcquisition";
import LifetimeValue from "./unit-economics/LifetimeValue";
import ScalableEconomics from "./unit-economics/ScalableEconomics";
import SectionFooter from "./use-of-funds/SectionFooter";

interface UnitEconomicsProps {
  onNavigateNext: () => void;
}

const UnitEconomics = ({ onNavigateNext }: UnitEconomicsProps) => {
  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <UnitEconomicsHeader />

        {/* Key Performance Indicators */}
        <KeyPerformanceTable />

        {/* Revenue Streams + CAC */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Revenue Streams per Life */}
          <RevenueStreams />

          {/* Customer Acquisition Cost */}
          <CustomerAcquisition />
        </div>

        {/* Lifetime Value + Scalable Economics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Lifetime Value */}
          <LifetimeValue />

          {/* Scalable Unit Economics */}
          <ScalableEconomics />
        </div>

        {/* Footer with navigation */}
        <SectionFooter onNavigateNext={onNavigateNext} />
      </div>
    </section>
  );
};

export default UnitEconomics;
