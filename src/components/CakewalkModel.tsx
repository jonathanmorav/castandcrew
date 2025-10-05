import { Fragment, useMemo, useState } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface CakewalkModelProps {
  onNavigateNext: () => void;
}

const valueChainStages = [
  "Distribution",
  "Product Design",
  "Underwriting",
  "Risk Participation",
  "Admin",
  "Claim Mgmt",
];

const cakewalkActiveStages = new Set([
  "Distribution",
  "Product Design",
  "Underwriting",
  "Risk Participation",
  "Admin",
]);

const cakewalkActiveOrder = valueChainStages.filter((stage) => cakewalkActiveStages.has(stage));

const partnerColumns: Record<string, string[]> = {
  "Insurance Carriers": ["Product Design", "Underwriting", "Risk Participation", "Claim Mgmt"],
  "Brokers": ["Distribution"],
  "Tech Players": ["Admin"],
};

const stageDetails: Record<string, { headline: string; bullets: string[] }> = {
  Distribution: {
    headline: "Scaled, multi-channel distribution",
    bullets: [
      "Reseller and broker alliances push Cakewalk plans while we operate fulfillment end-to-end.",
      "Affinity communities and self-serve funnels convert warm demand into enrollment without incremental overhead.",
      "Embedded payroll, HR, and fintech partners feed pre-qualified SMB cohorts straight into our platform.",
    ],
  },
  "Product Design": {
    headline: "Custom products assembled in weeks",
    bullets: [
      "Modular benefit components mix medical, ancillary, and financial protections.",
      "Carrier playbooks let us tailor bundles by industry, wage band, and geography.",
    ],
  },
  Underwriting: {
    headline: "Delegated underwriting with real-time data",
    bullets: [
      "API feeds deliver eligibility, payroll, and risk signals directly to carrier models.",
      "Automated guardrails keep quoting compliant while shortening cycle time to minutes.",
    ],
  },
  "Risk Participation": {
    headline: "Smart pooling keeps carriers invested",
    bullets: [
      "Shared performance dashboards align pricing and loss ratios across segments.",
      "Dynamic participation options unlock better terms for high-quality groups.",
    ],
  },
  Admin: {
    headline: "Consolidated admin and service",
    bullets: [
      "Billing, compliance, and member servicing run through one zero-touch platform.",
      "Employers and carriers see the same source-of-truth data in real time.",
    ],
  },
  "Claim Mgmt": {
    headline: "Claim management stays with carriers",
    bullets: [
      "Cakewalk surfaces status and insights, while carriers execute adjudication.",
      "Feedback loops improve next-gen product and underwriting decisions.",
    ],
  },
};

const connectorsLookup = valueChainStages.reduce<Record<string, boolean>>((acc, stage, index) => {
  const next = valueChainStages[index + 1];
  acc[stage] = Boolean(next && cakewalkActiveStages.has(stage) && cakewalkActiveStages.has(next));
  return acc;
}, {});

const CakewalkModel = ({ onNavigateNext }: CakewalkModelProps) => {
  const [selectedStage, setSelectedStage] = useState<string>(cakewalkActiveOrder[0] ?? valueChainStages[0]);

  const handleStageFocus = (stage: string) => {
    setSelectedStage(stage);
  };

  const connectors = useMemo(() => connectorsLookup, []);

  return (
    <section className="relative min-h-screen bg-white px-4 py-16 md:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-brand-lightBlue/30" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
              Value Chain Control
            </span>
            <h1 className="mt-4 text-3xl font-bold text-brand-darkBlue md:text-5xl">
              The Cakewalk Model
            </h1>
            <p className="mt-2 text-xl font-semibold text-brand-blue">A digital first experience across the entire value chain</p>
          </div>

          <motion.ul
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-2 text-base text-brand-darkBlue md:text-lg"
          >
            {[
              "Scaled distribution",
              "Custom products",
              "Efficient risk pooling & underwriting",
              "Consolidated administration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-right lg:text-left">
                <span className="mt-1 text-brand-blue">→</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-brand-lightBlue/60 bg-white/95 shadow-lg">
          <div className="grid grid-cols-[200px_repeat(6,minmax(0,1fr))] items-stretch">
            <div className="border-b border-dotted border-slate-300 bg-slate-50/80 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-brand-gray">
              Participants
            </div>
            {valueChainStages.map((stage) => (
              <div
                key={stage}
                className="border-l border-b border-dotted border-slate-300 bg-slate-50/80 px-3 py-4 text-center text-xs font-semibold uppercase tracking-wide text-brand-gray"
              >
                {stage}
              </div>
            ))}

            {/* Cakewalk row */}
            <div className="flex items-center gap-3 border-b border-dotted border-slate-300 px-6 py-6">
              <img src={cakewalkLogo} alt="Cakewalk" className="h-8 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
              </span>
            </div>
            {valueChainStages.map((stage) => {
              const isActive = cakewalkActiveStages.has(stage);
              const showConnector = connectors[stage];

              return (
                <div
                  key={`cakewalk-${stage}`}
                  className="relative flex flex-col items-center justify-center gap-2 border-l border-b border-dotted border-slate-200 px-3 py-6"
                  onMouseEnter={() => handleStageFocus(stage)}
                  onFocusCapture={() => handleStageFocus(stage)}
                >
                  {isActive && showConnector && (
                    <span
                      className="pointer-events-none absolute top-1/2 hidden h-[2px] bg-brand-blue/60 sm:block"
                      style={{ left: "50%", right: "-50%" }}
                    />
                  )}
                  {isActive ? (
                    <button
                      type="button"
                      onMouseEnter={() => handleStageFocus(stage)}
                      onFocus={() => handleStageFocus(stage)}
                      className={`group relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue text-lg font-bold text-white shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-white ${
                        selectedStage === stage ? "bg-brand-blue" : "bg-brand-blue/90"
                      }`}
                      aria-pressed={selectedStage === stage}
                    >
                      <motion.span
                        className="pointer-events-none absolute inset-[-6px] rounded-full border opacity-60"
                        style={{ borderColor: "#53EDBE" }}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      +
                      <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-brand-blue px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-sm group-hover:block group-focus-visible:block">
                        Hover for detail
                      </span>
                    </button>
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-blue/40">Carrier
                    </span>
                  )}
                </div>
              );
            })}

            {Object.entries(partnerColumns).map(([partner, ownedStages]) => (
              <Fragment key={partner}>
                <div className="border-b border-dotted border-slate-200 px-6 py-5 text-base font-medium text-brand-darkBlue">
                  {partner}
                </div>
                {valueChainStages.map((stage) => (
                  <div
                    key={`${partner}-${stage}`}
                    className="flex items-center justify-center border-l border-b border-dotted border-slate-200 px-3 py-5"
                  >
                    {ownedStages.includes(stage) && <span className="h-3 w-3 rounded-full bg-brand-blue" />}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/60">
        </p>

        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-brand-blue/20 bg-white/95 p-8 shadow-md"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70">
            {selectedStage}
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-brand-darkBlue">{stageDetails[selectedStage].headline}</h3>
          <ul className="mt-4 grid gap-2 text-brand-gray">
            {stageDetails[selectedStage].bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm md:text-base">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-mint" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <BottomCornerLogo />

      <div className="mt-12 flex justify-center">
        <NavigationArrow onClick={onNavigateNext} className="text-brand-blue hover:text-brand-purple transition-colors" />
      </div>
    </section>
  );
};

export default CakewalkModel;
