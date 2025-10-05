import { Brain, Database, ShieldCheck, Terminal, Wallet, Workflow } from "lucide-react";
import NavigationArrow from "./navigation/NavigationArrow";
import BottomCornerLogo from "./BottomCornerLogo";

interface CakewalkTechPlatformProps {
  onNavigateNext: () => void;
}

interface LayerDefinition {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeClass: string;
  tileClass: string;
  items: Array<{ title: string; description: string }>;
}

const layers: LayerDefinition[] = [
  {
    id: "experience",
    title: "Experience Layer",
    icon: Wallet,
    badgeClass: "bg-brand-lightMint text-brand-darkBlue",
    tileClass: "bg-brand-lightMint/70 border border-brand-lightMint/60 text-brand-darkBlue",
    items: [
      {
        title: "Member Wallet",
        description: "Digital ID cards, reimbursements, QLE workflows, and claims guidance available 24/7.",
      },
      {
        title: "Partner & Agent OS",
        description: "Quoting, contracting, performance analytics, and co-branded storefronts for every channel.",
      },
      {
        title: "Policy Admin & Billing",
        description: "Automated contributions, invoicing, collections, and reconciliation across carriers and payroll.",
      },
    ],
  },
  {
    id: "decision",
    title: "Decision Layer",
    icon: Brain,
    badgeClass: "bg-soft-blue text-brand-darkBlue",
    tileClass: "bg-soft-blue/80 border border-brand-lightBlue/60 text-brand-darkBlue",
    items: [
      {
        title: "Real-Time Underwriting",
        description: "Data-enriched pricing and recommendations assemble the right bundle for each cohort instantly.",
      },
      {
        title: "Data Intelligence",
        description: "Machine-learning models monitor persistency, loss performance, and next-best actions across the book.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: ShieldCheck,
    badgeClass: "bg-soft-purple text-brand-darkBlue",
    tileClass: "bg-soft-purple/80 border border-soft-purple/60 text-brand-darkBlue",
    items: [
      {
        title: "Embedded Integration Layer",
        description: "Payroll, HRIS, identity, payments, and carrier APIs normalized for rapid partner activation.",
      },
      {
        title: "Security & Compliance",
        description: "SOC2-ready controls, PII vault, audit logging, and observability baked into every service.",
      },
      {
        title: "Scalable Architecture",
        description: "Event-driven microservices with health monitoring, SLO tracking, and automated incident response.",
      },
    ],
  },
];

const CakewalkTechPlatform = ({ onNavigateNext }: CakewalkTechPlatformProps) => {
  return (
    <section className="relative min-h-screen bg-white py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        <header className="text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">Technology Platform</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">Cakewalk Technology Stack</h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            The technology and data foundation that keeps every partner, product, and member experience running
            without manual lift.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.id}
              className="flex h-full flex-col rounded-3xl border border-brand-blue/15 bg-white shadow-sm"
            >
              <div className={`flex items-center gap-3 rounded-t-3xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] ${layer.badgeClass}`}>
                <layer.icon className="h-5 w-5" />
                <span>{layer.title}</span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                {layer.items.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${layer.tileClass}`}
                  >
                    <h3 className="text-base font-semibold text-brand-darkBlue">{item.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <BottomCornerLogo />
      <div className="mt-12 flex justify-center">
        <NavigationArrow onClick={onNavigateNext} className="text-brand-blue hover:text-brand-purple transition-colors" />
      </div>
    </section>
  );
};

export default CakewalkTechPlatform;
