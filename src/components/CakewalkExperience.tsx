import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";

interface CakewalkExperienceProps {
  onNavigateNext: () => void;
}

type Tile = {
  id: string;
  title: string;
  description: string;
};

const constituents: Tile[] = [
  {
    id: "smb-consumers",
    title: "SMB Consumers",
    description: "Employers and their workers get turnkey access to modern benefits.",
  },
  {
    id: "agents",
    title: "Agents & Resellers",
    description: "Distribution partners sell differentiated bundles without new admin lift.",
  },
  {
    id: "carriers",
    title: "Insurance Carriers",
    description: "Digital long-tail reach with unified data, billing, and servicing.",
  },
];

const productLines: Tile[] = [
  {
    id: "income",
    title: "Income Protection",
    description: "Short and long-term disability calibrated for variable-pay workforces.",
  },
  {
    id: "events",
    title: "Accident & Health Events",
    description: "Accident, hospital, and critical illness cash benefits that close affordability gaps and minimize risk of financial hardship.",
  },
  {
    id: "life",
    title: "Life Insurance",
    description: "Core term life with pathways to expanded group term and whole life coverage.",
  },
  {
    id: "care",
    title: "Care Access",
    description: "Dental, vision, telehealth, and virtual primary care bundles for everyday use.",
  },
  {
    id: "financial",
    title: "Financial Benefits",
    description: "HSA/FSA/HRA rails, emergency savings, and earned wage access integrations.",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    description: "Pet, legal/ID protection, and expanded mental wellness add-ons ready to deploy.",
  },
];

const gtmChannels: Tile[] = [
  {
    id: "resellers",
    title: "Reseller Alliances",
    description: "Regional specialists and digital brokers push Cakewalk plans while we fulfill end-to-end.",
  },
  {
    id: "affinity-self",
    title: "Affinity & Self-Serve",
    description: "Guilds, unions, and direct funnels convert warm audiences in minutes.",
  },
  {
    id: "embedded-partners",
    title: "Embedded Partnerships",
    description: "Payroll, HRIS, and fintech partners embed benefits inside existing workflows.",
  },
];

const techLayers: Tile[] = [
  {
    id: "ecommerce-shopping",
    title: "Modern E-commerce Shopping Experience",
    description: "Modern e-commerce shopping experience for benefits tailored to small businesses.",
  },
  {
    id: "underwriting",
    title: "Real-Time Underwriting",
    description: "Pricing + recommendation engine assembles the right bundle on the fly.",
  },
  {
    id: "admin",
    title: "Policy Admin & Billing",
    description: "Contributions, invoicing, collections, and reconciliation in one system.",
  },
  {
    id: "wallet",
    title: "Member Wallet",
    description: "ID cards, claims links, reimbursements, and QLE management available 24/7.",
  },
  {
    id: "partner-os",
    title: "Partner & Agent OS",
    description: "Easy re-selling, instant pricing, agreements, and performance analytics for channels.",
  },
  {
    id: "data",
    title: "Data & Intelligence",
    description: "Cohort analytics, persistency models, and anomaly detection feed every decision.",
  },
  {
    id: "security",
    title: "Security & Compliance",
    description: "SOC2-ready controls, PII vault, audit logging, and real-time observability.",
  },
  {
    id: "integration",
    title: "Normalized APIs",
    description: "Normalized APIs for payroll, HR, carrier, IDV, payments, and compliance data.",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const CakewalkExperience = ({ onNavigateNext }: CakewalkExperienceProps) => {
  const [activeTile, setActiveTile] = useState<string | null>(null);
  type TileGroup = { label: string; items: Tile[]; badgeClass: string; tileClass: string; };

  const tileGroups = useMemo<TileGroup[]>(
    () => [
      {
        label: "Constituents",
        items: constituents,
        badgeClass: "bg-brand-lightMint text-brand-darkBlue",
        tileClass: "bg-brand-lightMint border border-brand-lightMint/60 text-brand-darkBlue",
      },
      {
        label: "Product Extensibility",
        items: productLines,
        badgeClass: "bg-brand-cream text-brand-darkBlue",
        tileClass: "bg-brand-cream border border-brand-cream/60 text-brand-darkBlue",
      },
      {
        label: "GTM Aggregation",
        items: gtmChannels,
        badgeClass: "bg-soft-blue text-brand-darkBlue",
        tileClass: "bg-soft-blue border border-brand-lightBlue/50 text-brand-darkBlue",
      },
      {
        label: "Data & Technology Platform",
        items: techLayers,
        badgeClass: "bg-soft-purple text-brand-darkBlue",
        tileClass: "bg-soft-purple border border-brand-lightBlue/60 text-brand-darkBlue",
      },
    ],
    []
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-20">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <header className="text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
            Platform Overview
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">
            The Cakewalk Platform
          </h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            One vertically integrated stack linking the constituencies we serve, the products we deliver, the channels we scale,
            and the technology that keeps benefits running by themselves.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="hidden w-24 flex-shrink-0 md:flex md:flex-col md:items-center">
            <div className="flex h-full w-12 items-center justify-center rounded-3xl bg-brand-blue px-3 py-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white">
              <span className="rotate-180 [writing-mode:vertical-rl]">Vertically Integrated</span>
            </div>
          </div>

          <div className="flex-1 space-y-6 md:space-y-5">
            {tileGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4 }}
                className="md:grid md:grid-cols-[160px,1fr] md:items-start md:gap-6 space-y-4 md:space-y-0"
              >
                <div
                  className={`flex h-full items-center justify-center rounded-3xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] ${group.badgeClass}`}
                >
                  {group.label}
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((tile) => (
                    <Tile
                      key={tile.id}
                      tile={tile}
                      isActive={activeTile === tile.id}
                      onHover={setActiveTile}
                      className={group.tileClass}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      <BottomCornerLogo />

      <div className="mt-12 flex justify-center">
        <NavigationArrow onClick={onNavigateNext} className="text-brand-blue hover:text-brand-purple transition-colors" />
      </div>
    </section>
  );
};

interface TileProps {
  tile: Tile;
  isActive: boolean;
  onHover: (id: string | null) => void;
  className: string;
}

const Tile = ({ tile, isActive, onHover, className }: TileProps) => (
  <motion.button
    type="button"
    onMouseEnter={() => onHover(tile.id)}
    onFocus={() => onHover(tile.id)}
    onMouseLeave={() => onHover(null)}
    onBlur={() => onHover(null)}
    className={`group w-full rounded-3xl p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-mint focus-visible:outline-offset-2 ${className} ${
      isActive ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-white" : "border border-transparent"
    }`}
  >
    <h3 className="text-base font-semibold text-brand-darkBlue">{tile.title}</h3>
    <p className="mt-2 text-sm text-brand-gray">{tile.description}</p>
  </motion.button>
);

export default CakewalkExperience;
