
import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Hospital, DollarSign, Network, Baby, Stethoscope, Pill, Microscope, Clock, Shield, Users, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import BottomCornerLogo from "./BottomCornerLogo";
import NavigationArrow from "./navigation/NavigationArrow";

type Cell = string | number | boolean;
type Row = { label: string; fcld: Cell; hooray: Cell };
type Category = { name: string; rows: Row[] };

const coverageCategories: Category[] = [
  {
    name: "Plan Fundamentals",
    rows: [
      { label: "Plan Type", fcld: "Limited Day", hooray: "Hospital Indemnity + Accident" },
      { label: "Annual Deductible", fcld: "$0", hooray: "$0" },
      { label: "Annual Maximum", fcld: "Varies by service type", hooray: "$30,000 + $5,000 accident" },
      { label: "Coverage Model", fcld: "Expense-incurred (100% after copay)", hooray: "Fixed indemnity payments" },
    ],
  },
  {
    name: "Preventive Care",
    rows: [
      { label: "Preventive Services", fcld: "100% covered (64 CMS services)", hooray: "Not included (MEC add-on)" },
      { label: "Well baby / Well mother", fcld: true, hooray: false },
      { label: "Immunizations", fcld: true, hooray: false },
      { label: "Physical exams", fcld: true, hooray: false },
    ],
  },
  {
    name: "Office Visits",
    rows: [
      { label: "Primary Care (PCP)", fcld: "3 visits @ $30 copay", hooray: "$100/day indemnity (unlimited)" },
      { label: "Specialist Visits", fcld: "3 visits @ $60 copay", hooray: "$100/day indemnity (unlimited)" },
      { label: "Coverage Model", fcld: "All services under roof 100% after copay", hooray: "Fixed payment regardless of cost" },
    ],
  },
  {
    name: "Urgent Care",
    rows: [
      { label: "Urgent Care Visits", fcld: "2 visits @ $100 copay", hooray: "$25 flat fee (Hooray Network)" },
      { label: "Network Size", fcld: "Standard PPO", hooray: "4,500+ Urgent Care Locations + PPO Network" },
      { label: "Balance Billing", fcld: "Covered after copay", hooray: "No balance billing in network (for urgent care only)" },
      { label: "Out-of-Network", fcld: "Standard rates apply", hooray: "$175 indemnity payment" },
    ],
  },
  {
    name: "Emergency Care",
    rows: [
      { label: "Emergency Room", fcld: "1 visit @ $500 facility copay (physician/staff included)", hooray: "Fixed indemnity (see schedule)" },
      { label: "Coverage", fcld: "100% after copay", hooray: "Fixed indemnity" },
    ],
  },
  {
    name: "Hospitalization",
    rows: [
      { label: "Hospital Days", fcld: "$500 Co-pay / Day up to 3 Days per year", hooray: "$500 admission + $500/day" },
      { label: "Max Annual Benefit", fcld: "$1,250", hooray: "$500/day up to 5 Days/Year plus $500/admission ($3,000 total)" },
      { label: "Facility / OR / Professional", fcld: true, hooray: true },
    ],
  },
  {
    name: "Surgery",
    rows: [
      { label: "Outpatient Surgery", fcld: "$350 facility", hooray: "$500 facility + $200 anesthesia" },
      { label: "Inpatient Surgery", fcld: "$500 copay", hooray: "$500 surgery + $200 anesthesia (1x/yr)" },
    ],
  },
  {
    name: "Diagnostic Services",
    rows: [
      { label: "Lab Work", fcld: "$0 at Allied partners (Labcorp/Quest/AEL)", hooray: "$50/day indemnity (3 days/yr)" },
      { label: "X-rays", fcld: "3 visits @ $50 copay (outside office)", hooray: "$50/day indemnity (3 days/yr)" },
      { label: "MRI/CT/PET", fcld: "2 scans @ $350 copay", hooray: "$350/day indemnity (1 day/yr)" },
      { label: "Radiologist (imaging)", fcld: "Included (no additional copay)", hooray: "Standard indemnity only" },
    ],
  },
  {
    name: "Pharmacy (BRx)",
    rows: [
      { label: "Generic (Unlimited)", fcld: "$15", hooray: "Varies by plan" },
      { label: "Preferred Brand (MVP) (Unlimited)", fcld: "$50", hooray: "Varies by plan" },
    ],
  },
  {
    name: "Virtual Care",
    rows: [
      { label: "Virtual Primary Care", fcld: true, hooray: true },
      { label: "Virtual Urgent Care", fcld: true, hooray: true },
      { label: "Telemedicine", fcld: true, hooray: true },
    ],
  },
  {
    name: "Mental Health & Behavioral",
    rows: [
      { label: "Counseling / Therapy", fcld: true, hooray: "Not specified" },
    ],
  },
  {
    name: "Maternity Care",
    rows: [
      { label: "Maternity Coverage", fcld: true, hooray: true },
      { label: "Delivery (48-hr stay)", fcld: "~$500 copay (example)", hooray: "$500 admission + $1,000 (2 days)" },
      { label: "Birth Control (preventive)", fcld: true, hooray: false },
    ],
  },
  {
    name: "Accident Coverage & Additional",
    rows: [
      { label: "Accident Medical Expense", fcld: false, hooray: "$5,000 per accident" },
      { label: "Ambulance", fcld: "1 trip @ $250 copay", hooray: "$250 copay" },
      { label: "Patient Advocacy / Concierge", fcld: true, hooray: false },
      { label: "High-Cost Drug Program", fcld: true, hooray: "Limited (GLP-1 discount)" },
      { label: "Diabetic Wellness Coaching", fcld: true, hooray: false },
      { label: "Imaging Benefit (free MRI/CT/PET)", fcld: true, hooray: "Standard indemnity only" },
    ],
  },
];

const networkCategories: Category[] = [
  {
    name: "Primary Network",
    rows: [
      { label: "Network Type", fcld: "PPO / First Health implied", hooray: "Hooray Urgent Care + First Health" },
      { label: "Network Size", fcld: "Standard PPO coverage", hooray: "4,500+ Urgent Care Locations + PPO Network" },
      { label: "States Covered", fcld: "Nationwide", hooray: "47 states" },
      { label: "Population Access", fcld: "Standard", hooray: "84% within 20 miles" },
      { label: "Network Growth", fcld: "Stable", hooray: "~25 new locations/month" },
    ],
  },
  {
    name: "Unique Network Features",
    rows: [
      { label: "Urgent Care Advantage", fcld: "Standard copays", hooray: "$25 flat fee, all services under roof" },
      { label: "Balance Billing Protection", fcld: "After copay", hooray: "No balance billing (Hooray Network)" },
      { label: "Lab Network", fcld: "Allied: Labcorp/Quest/AEL", hooray: "Discount through network" },
      { label: "Imaging Discounts", fcld: "Through network", hooray: "Green Imaging partner" },
    ],
  },
  {
    name: "Find a Provider / Access",
    rows: [
      { label: "Provider Search", fcld: "Standard directory", hooray: "Mobile app location search" },
      { label: "ID Card", fcld: "Physical/digital", hooray: "One integrated ID card" },
      { label: "Claims Filing", fcld: "Provider files", hooray: "Provider files (no money up front)" },
    ],
  },
];

// Outcomes scenarios derived from healthcomparison.md and FCLD deck examples
type OutcomeScenario = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  fcld: string[];
  hooray: string[];
  note?: string;
};

const outcomeScenarios: OutcomeScenario[] = [
  {
    id: "er-broken-arm",
    title: "Emergency Room Visit (Broken Arm)",
    icon: Hospital,
    fcld: [
      "1 ER visit @ $500 facility copay",
      "Physician & staff included",
      "Reference Based Pricing @ 150% of Medicare",
    ],
    hooray: [
      "$175 indemnity payment",
      "Member pays remainder of bill",
    ],
    note: "Based on example scenario in plan materials.",
  },
  {
    id: "maternity-48hr",
    title: "Maternity Delivery (48-hour stay)",
    icon: Baby,
    fcld: [
      "Hospital copay: $500/day (2 days = $1,000)",
      "Facility/OR/pro services included",
    ],
    hooray: [
      "$500 admission + $500/day x2 = $1,500",
      "Fixed indemnity model",
    ],
  },
  {
    id: "imaging-mri-ct-pet",
    title: "Complex Imaging (MRI/CT/PET)",
    icon: Microscope,
    fcld: [
      "2 scans @ $350 copay",
      "Paid at 150% of Medicare",
      "Program benefit: 1 free MRI/CT/PET per year (with scheduling)",
    ],
    hooray: [
      "$350/day indemnity (1 day/yr)",
    ],
    note: "Free imaging requires scheduling via program as noted.",
  },
  {
    id: "office-visit-labs",
    title: "Office Visit + Labs/X-Ray",
    icon: Stethoscope,
    fcld: [
      "PCP: 3 visits @ $30; Specialist: 3 @ $60",
      "All services under the roof covered 100% after copay",
      "Labs $0 at Allied partners; X-ray 3 @ $50 (outside office)",
    ],
    hooray: [
      "$100/day indemnity for PCP/Specialist",
      "Labs/X-ray: $50/day indemnity (3 days/yr)",
    ],
  },
  {
    id: "pharmacy-brx",
    title: "Pharmacy (BRx) Examples",
    icon: Pill,
    fcld: [
      "Generic (Unlimited): $15",
      "Preferred Brand (MVP) (Unlimited): $50",
      "> $500 drugs may qualify for reduced/$0 copay",
    ],
    hooray: [
      "Discount program (e.g., GLP-1 discount)",
      "No standard copay schedule shown",
    ],
  },
];

const renderCell = (value: Cell) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-mint/15 text-brand-teal" aria-label="Yes">
        <Check className="h-4 w-4" />
      </span>
    ) : (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-lightBlue/20 text-brand-gray" aria-label="No">
        <X className="h-4 w-4" />
      </span>
    );
  }
  return <span className="text-brand-darkBlue/90">{String(value)}</span>;
};

const CategoryTable = ({ categories }: { categories: Category[] }) => (
  <div className="overflow-x-auto rounded-3xl border border-brand-blue/15 bg-white/95 shadow-md">
    <Table>
      <TableHeader>
        <TableRow className="bg-gradient-to-r from-soft-blue/60 to-brand-lightMint/40 text-brand-darkBlue">
          <TableHead className="w-[30%] text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">Benefit</TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">FCLD (In/Out)</TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">Hooray Health (MAX $30k)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((cat, i) => (
          <React.Fragment key={cat.name}>
            <TableRow className="bg-brand-lightBlue/15">
              <TableCell colSpan={3} className="font-semibold text-brand-blue uppercase tracking-[0.2em] text-xs">
                {cat.name}
              </TableCell>
            </TableRow>
            {cat.rows.map((row, rIdx) => (
              <TableRow key={`${cat.name}-${row.label}-${rIdx}`} className={((i + rIdx) % 2 === 0) ? "bg-white" : "bg-brand-cream/60"}>
                <TableCell className="font-medium text-brand-darkBlue">{row.label}</TableCell>
                <TableCell>{renderCell(row.fcld)}</TableCell>
                <TableCell>{renderCell(row.hooray)}</TableCell>
              </TableRow>
            ))}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </div>
);

const pricingRows: Row[] = [
  { label: "EE", fcld: "$300.00", hooray: "$162.95" },
  { label: "EE+Spouse", fcld: "$600.00", hooray: "$273.01" },
  { label: "EE + Children", fcld: "$550.00", hooray: "$271.93" },
  { label: "Family", fcld: "$750.00", hooray: "$394.04" },
];

const PricingTable = () => (
  <div className="overflow-x-auto rounded-3xl border border-brand-blue/15 bg-white/95 shadow-md">
    <Table>
      <TableHeader>
        <TableRow className="bg-gradient-to-r from-soft-blue/60 to-brand-lightMint/40 text-brand-darkBlue">
          <TableHead className="w-[30%] text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">Coverage Tier</TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">FCLD (In/Out)</TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">Hooray Health (MAX $30,000)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pricingRows.map((row, idx) => (
          <TableRow key={`pricing-${row.label}`} className={idx % 2 === 0 ? "bg-white" : "bg-brand-cream/60"}>
            <TableCell className="font-medium text-brand-darkBlue">{row.label}</TableCell>
            <TableCell>{renderCell(row.fcld)}</TableCell>
            <TableCell>{renderCell(row.hooray)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

const HealthPlanOverview = ({ onNavigateNext }: { onNavigateNext: () => void }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24">
      {/* Background accents for consistency */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/30" />
      <div className="absolute -top-1/3 right-0 h-2/3 w-2/3 -translate-y-6 translate-x-1/4 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />
      <div className="absolute -bottom-1/4 left-0 h-1/2 w-1/2 -translate-x-1/3 rounded-full bg-brand-lightMint opacity-[0.08] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 md:px-6 pb-24 md:pb-28 pr-6 md:pr-40">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left md:text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue shadow-sm">
            Health Plan Option Overview
          </div>
          <h1 className="mt-4 font-grotesk text-3xl font-bold text-brand-darkBlue sm:text-4xl md:text-5xl">
            Fundamental Care & Hooray Health
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-3 py-1 text-sm text-brand-darkBlue"><ShieldCheck className="h-4 w-4 text-brand-blue" /> $0 Deductible (Both)</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-3 py-1 text-sm text-brand-darkBlue"><Hospital className="h-4 w-4 text-brand-blue" /> $25 Urgent Care (Hooray Network)</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-3 py-1 text-sm text-brand-darkBlue"><Network className="h-4 w-4 text-brand-blue" /> 4,500+ Urgent Cares</span>
          </div>
        </motion.header>

        {/* Tabs */}
        <Tabs defaultValue="coverage" className="w-full">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-5 gap-1 p-1 bg-gray-100 rounded-xl w-full max-w-4xl">
              <TabsTrigger value="coverage" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white px-3 py-2 rounded-lg">Coverage</TabsTrigger>
              <TabsTrigger value="network" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-3 py-2 rounded-lg">Network & Access</TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-3 py-2 rounded-lg">Pricing</TabsTrigger>
              <TabsTrigger value="outcomes" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white px-3 py-2 rounded-lg">Health Outcomes</TabsTrigger>
              <TabsTrigger value="concierge" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-3 py-2 rounded-lg">Health Concierge</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="coverage" className="mt-6">
            <CategoryTable categories={coverageCategories} />
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <CategoryTable categories={networkCategories} />
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <PricingTable />
          </TabsContent>

          <TabsContent value="outcomes" className="mt-6">
            {/* Non-pharmacy scenarios grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {outcomeScenarios.filter(sc => sc.id !== 'pharmacy-brx').map((sc) => (
                <div key={sc.id} className="rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-lightBlue/20 text-brand-blue">
                      <sc.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-darkBlue">{sc.title}</h3>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70">FCLD</p>
                      <ul className="mt-2 space-y-1 text-brand-darkBlue/90 text-sm">
                        {sc.fcld.map((li, idx) => (
                          <li key={idx}>{li}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70">Hooray Health</p>
                      <ul className="mt-2 space-y-1 text-brand-darkBlue/90 text-sm">
                        {sc.hooray.map((li, idx) => (
                          <li key={idx}>{li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {sc.note && <p className="mt-3 text-xs text-brand-gray">{sc.note}</p>}
                </div>
              ))}
            </div>

            {/* Centered Pharmacy Examples tile */}
            {(() => {
              const sc = outcomeScenarios.find(s => s.id === 'pharmacy-brx');
              if (!sc) return null;
              return (
                <div className="mt-8 flex items-center justify-center">
                  <div className="rounded-3xl border border-brand-blue/15 bg-white/95 p-6 shadow-md w-full max-w-2xl">
                    <div className="flex items-center gap-3 justify-center">
                      <div className="p-2 rounded-lg bg-brand-lightBlue/20 text-brand-blue">
                        <sc.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-darkBlue">{sc.title}</h3>
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70 text-center sm:text-left">FCLD</p>
                        <ul className="mt-2 space-y-1 text-brand-darkBlue/90 text-sm">
                          {sc.fcld.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue/70 text-center sm:text-left">Hooray Health</p>
                        <ul className="mt-2 space-y-1 text-brand-darkBlue/90 text-sm">
                          {sc.hooray.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {sc.note && <p className="mt-3 text-xs text-brand-gray text-center">{sc.note}</p>}
                  </div>
                </div>
              );
            })()}

            <p className="mt-6 text-xs text-brand-gray text-center">Illustrative only. Member out-of-pocket varies by provider, negotiated rates, and plan specifics. See plan documents for exact coverage and limits.</p>
          </TabsContent>

          <TabsContent value="concierge" className="mt-6">
            <div className="text-center">
              <h2 className="font-grotesk text-3xl md:text-5xl font-bold text-brand-darkBlue tracking-wide uppercase">HEALTH CONCIERGE</h2>
              <p className="mt-3 text-lg md:text-xl text-brand-gray max-w-3xl mx-auto">
                Delivers personalized health options one-on-one to find the correct balance of coverage and premium.
                Options vary by state to include:
              </p>
            </div>
            {/* Top row: three tiles */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-soft-blue text-brand-blue"><Clock className="h-5 w-5" /></div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">Short-term health plans</h3>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-soft-purple text-brand-blue"><Shield className="h-5 w-5" /></div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">Indemnity plans</h3>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md hover:-translate-y-1 transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-soft-green text-brand-blue"><Users className="h-5 w-5" /></div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">Health cost sharing plans</h3>
                </div>
              </div>
            </div>
            {/* Bottom row: centered two tiles */}
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md hover:-translate-y-1 transition w-full sm:w-auto max-w-md sm:max-w-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-soft-yellow text-brand-blue"><FileText className="h-5 w-5" /></div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">Underwritten</h3>
                </div>
              </div>
              <div className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md hover:-translate-y-1 transition w-full sm:w-auto max-w-md sm:max-w-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-soft-orange text-brand-blue"><DollarSign className="h-5 w-5" /></div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">ACA (subsidized & non-subsidized)</h3>
                </div>
              </div>
            </div>
          </TabsContent>

          
        </Tabs>

        <BottomCornerLogo className="fixed bottom-6 right-6 z-30" />
        <div className="mt-6 flex justify-center">
          <NavigationArrow onClick={onNavigateNext} className="text-brand-blue transition-colors hover:text-brand-purple" />
        </div>
      </div>
    </section>
  );
};

export default HealthPlanOverview;
