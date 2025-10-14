
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const listStyles = "flex items-start gap-3 text-sm text-brand-gray";

const ProvenCapitalEfficiency = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <header className="mx-auto mb-6 w-full max-w-4xl text-left md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Proven Capital Efficiency</p>
        <h2 className="mt-3 text-2xl font-bold text-brand-darkBlue md:text-3xl">
          Momentum Built with Disciplined Spend
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr,1.1fr,0.8fr]">
        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">January 2025 Launch</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Cakewalk Launches</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>$750K premium run rate within 90 days of launch</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>$2M premium run rate within 6 months</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Five-person team built MVP platform and initial GTM distribution</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Zero dollars spent on customer acquisition</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">October 15, 2025 Snapshot</p>
          <h3 className="mt-2 text-lg font-semibold text-brand-darkBlue">Cakewalk October 15, 2025</h3>
          <ul className="mt-4 space-y-3">
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>Team of 13 across product, engineering, and operations</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>1,200 SMBs served</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>3,000+ employees enrolled</span>
            </li>
            <li className={listStyles}>
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-mint/20">
                <Check className="h-3.5 w-3.5 text-brand-teal" />
              </span>
              <span>$700K ARR</span>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">Capital Deployed</p>
          <h3 className="mt-3 text-lg font-semibold text-brand-darkBlue">All-In Spend to Date</h3>
          <p className="mt-6 text-4xl font-bold text-brand-blue">$700K</p>
          <p className="mt-3 text-sm text-brand-gray">
            Product, engineering, GTM, and operations invested to reach today’s traction.
          </p>
        </article>
      </div>
    </motion.section>
  );
};

export default ProvenCapitalEfficiency;
