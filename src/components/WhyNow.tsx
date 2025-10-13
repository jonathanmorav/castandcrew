import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import NavigationArrow from "./navigation/NavigationArrow";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface WhyNowProps {
  onNavigateNext: () => void;
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const diagramVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const labelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type ComparisonValue = string | boolean;

const comparisonColumns = [
  { title: "", meta: "Instant", logo: cakewalkLogo, alt: "Cakewalk" },
  { title: "Traditional EB Brokers", meta: "1–4 weeks" },
];

const comparisonRows: { label: string; values: ComparisonValue[]; highlight?: boolean }[] = [
  {
    label: "Speed of application",
    values: ["Instant", "1–4 weeks"],
    highlight: true,
  },
  {
    label: "Approval rates",
    values: ["99%", "45%"],
    highlight: true,
  },
  {
    label: "Competitive compensation",
    values: [true, false],
  },
  {
    label: "Fast payments",
    values: [true, false],
  },
  {
    label: "Agent app & client self-serve app",
    values: [true, false],
  },
  {
    label: "Real-time client tracking",
    values: [true, false],
  },
  {
    label: "Built-in tools and knowledge base",
    values: [true, false],
  },
  {
    label: "Ability to profitably service companies all the way from independent contractors to teams of 20 or larger",
    values: [true, false],
  },
];

const WhyNow = ({ onNavigateNext }: WhyNowProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const renderCell = (value: ComparisonValue) => {
    if (typeof value === "string") {
      return <span className="text-base font-semibold text-brand-darkBlue">{value}</span>;
    }

    return value ? (
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint/15 text-brand-teal"
        aria-label="Available"
      >
        <Check className="h-5 w-5" aria-hidden="true" />
      </span>
    ) : (
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lightBlue/20 text-brand-gray"
        aria-label="Not available"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col justify-center px-4 md:px-6">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Agent Experience
          </span>
          <h2 className="mt-4 max-w-3xl font-grotesk text-3xl font-bold text-brand-darkBlue md:text-5xl whitespace-nowrap">
            World Class Agent Experience
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Enabling agents to sell small businesses employee benefits, profitably, and at scale.
          </p>
        </motion.div>

        <motion.div
          variants={labelVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="mt-7 w-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-brand-lightBlue/40 bg-white/95 text-brand-darkBlue shadow-[0_20px_60px_rgba(0,93,254,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-lightBlue/20 via-white/40 to-brand-mint/20 opacity-80" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-4 border-b border-brand-lightBlue/30 bg-brand-lightBlue/15 p-6 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/70">
                    Agent enablement
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-brand-darkBlue">
                    Why agents scale faster with Cakewalk
                  </p>
                  <p className="text-sm text-brand-gray">
                    A comparison of the support agents receive across distribution partners.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="grid grid-cols-[minmax(220px,1.1fr)_repeat(2,minmax(0,1fr))] border-b border-brand-lightBlue/30 bg-brand-lightBlue/15">
                  <div className="p-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/70">
                    Capability
                  </div>
                  {comparisonColumns.map((column, index) => (
                    <div
                      key={column.title || column.meta || index}
                      className={cn(
                        "flex flex-col items-center justify-center gap-2 p-4 text-center",
                        index === 0 ? "" : "border-l border-brand-lightBlue/30"
                      )}
                    >
                      {column.logo ? (
                        <>
                          <img src={column.logo} alt={column.alt ?? column.title} className="h-8 w-auto" />
                          {column.title ? (
                            <span className="text-sm font-semibold text-brand-darkBlue">{column.title}</span>
                          ) : null}
                        </>
                      ) : (
                        <span className="text-sm font-semibold text-brand-darkBlue">{column.title}</span>
                      )}
                      <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-blue/60">
                        {column.meta}
                      </span>
                    </div>
                  ))}
                </div>

                {comparisonRows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={cn(
                      "grid grid-cols-[minmax(220px,1.1fr)_repeat(2,minmax(0,1fr))] border-b border-brand-lightBlue/25 last:border-b-0",
                      row.highlight
                        ? "bg-brand-lightBlue/20"
                        : rowIndex % 2 === 0
                          ? "bg-white"
                          : "bg-brand-cream/60"
                    )}
                  >
                    <div className="flex items-center p-5">
                      <span className="text-base font-semibold text-brand-darkBlue">{row.label}</span>
                    </div>
                    {row.values.map((value, colIndex) => (
                      <div
                        key={`${row.label}-${colIndex}`}
                        className={cn(
                          "flex items-center justify-center p-5",
                          colIndex === 0 ? "" : "border-l border-brand-lightBlue/25"
                        )}
                      >
                        {renderCell(value)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div
        variants={diagramVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-6 right-6 w-32 opacity-70"
      >
        <img src={cakewalkLogo} alt="Cakewalk Benefits" className="w-full" />
      </motion.div>

      <NavigationArrow onClick={onNavigateNext} className="text-brand-blue" />
    </section>
  );
};

export default WhyNow;
