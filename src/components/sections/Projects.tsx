"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Database, Globe, Activity, Cpu, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function Projects() {
  // Multi-expand: each card toggles independently
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const projects = PORTFOLIO_CONTENT.projects;

  const toggle = (idx: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0: return <Database className="w-6 h-6 text-emerald-400" />;
      case 1: return <Globe className="w-6 h-6 text-blue-400" />;
      case 2: return <Activity className="w-6 h-6 text-purple-400" />;
      case 3: return <Cpu className="w-6 h-6 text-orange-400" />;
      default: return <Database className="w-6 h-6 text-zinc-400" />;
    }
  };

  const getAccentColor = (index: number) => {
    switch (index) {
      case 0: return "hover:border-emerald-500/30";
      case 1: return "hover:border-blue-500/30";
      case 2: return "hover:border-purple-500/30";
      case 3: return "hover:border-orange-500/30";
      default: return "hover:border-primary/30";
    }
  };

  const renderCard = (project: typeof projects[0], idx: number) => {
    const isExpanded = expanded.has(idx);

    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.05 }}
        className={`glass p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col group transition-all duration-300 ${getAccentColor(idx)}`}
      >
        {/* Header */}
        <div className="flex gap-4 items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 h-max shrink-0">
            {getProjectIcon(idx)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-muted-foreground mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Contributions */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Key Contributions</p>
          <ul className="text-sm text-foreground/80 grid sm:grid-cols-2 gap-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem) => (
            <span
              key={techItem}
              className="text-[11px] font-mono text-muted-foreground bg-black/40 border border-white/10 px-2.5 py-1 rounded-md"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Expandable Engineering Challenge */}
        <div className="border-t border-white/5 pt-4 mt-auto">
          <button
            onClick={() => toggle(idx)}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-expanded={isExpanded}
          >
            <span className="font-mono text-xs uppercase tracking-wider">Engineering Challenge</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 pb-2 space-y-5 font-mono text-xs leading-relaxed border-t border-white/5 mt-4">
                  {/* Problem */}
                  <div className="flex gap-3 bg-red-950/20 border border-red-500/15 p-4 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 font-semibold uppercase tracking-wider mb-1">Incident / Problem</p>
                      <p className="text-foreground/80 leading-normal">{project.challenge.problem}</p>
                    </div>
                  </div>

                  {/* Resolution */}
                  <div className="flex gap-3 bg-emerald-950/25 border border-emerald-500/15 p-4 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-primary font-semibold uppercase tracking-wider mb-2">Resolution Steps</p>
                      <ul className="space-y-1.5 text-foreground/80">
                        {project.challenge.actions.map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary shrink-0">+</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="flex gap-3 bg-blue-950/20 border border-blue-500/15 p-4 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-400 font-semibold uppercase tracking-wider mb-2">Result</p>
                      <ul className="space-y-1.5 text-foreground/80">
                        {project.challenge.result.map((res, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 shrink-0">✓</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  // Split into left (even) and right (odd) columns so each column
  // stacks independently — no cross-column row-height coupling.
  const leftCol = projects.filter((_, i) => i % 2 === 0);
  const rightCol = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section id="projects" className="py-24 relative border-y border-border/50 bg-black/20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Anonymized backend platforms and services I have contributed to."
        />

        {/* Mobile: single column. Desktop: two independent flex columns */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-8 flex-1">
            {leftCol.map((project) => {
              const idx = projects.indexOf(project);
              return renderCard(project, idx);
            })}
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {rightCol.map((project) => {
              const idx = projects.indexOf(project);
              return renderCard(project, idx);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
