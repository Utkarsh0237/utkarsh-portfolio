"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Server, Layout, ChevronDown, Activity, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "GoSadi",
    subtitle: "Multi-Tenant E-Commerce Backend",
    description: "Worked on the backend for a multi-tenant ecommerce platform. The system handled product management, orders, and search across multiple tenants using NestJS, PostgreSQL, and Elasticsearch.",
    features: ["Multi-tenant data isolation", "Product & inventory APIs", "Full-text search", "Role-based access"],
    metrics: [
      { icon: <Activity className="w-3.5 h-3.5" />, label: "Low-latency APIs" },
      { icon: <Globe className="w-3.5 h-3.5" />, label: "Multi-tenant support" },
    ],
    tech: ["NestJS", "PostgreSQL", "TypeORM", "AWS", "Elasticsearch"],
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    color: "emerald"
  },
  {
    title: "Embark Saudi (Msha3lil)",
    subtitle: "Location-Based Discovery App Backend",
    description: "Built backend services for a location-based discovery app. Worked on check-in flows, reward systems, and caching with Redis to keep response times fast.",
    features: ["Check-in APIs", "Rewards logic", "Redis caching", "Geo-queries"],
    metrics: [
      { icon: <Activity className="w-3.5 h-3.5" />, label: "Geo-spatial queries" },
      { icon: <Server className="w-3.5 h-3.5" />, label: "Redis caching" },
    ],
    tech: ["HapiJS", "MongoDB", "Redis", "Microservices"],
    icon: <Server className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    title: "Pridemobility",
    subtitle: "Rehabilitation Product Management",
    description: "Contributed to the backend for a platform managing rehabilitation products. Focused on product catalog APIs, documentation, and keeping the data model clean.",
    features: ["Product catalog APIs", "Documentation handling", "Structured data model"],
    metrics: [
      { icon: <Database className="w-3.5 h-3.5" />, label: "Relational schemas" },
      { icon: <Globe className="w-3.5 h-3.5" />, label: "B2B integrations" },
    ],
    tech: ["Express.js", "MySQL", "Sequelize", "TypeScript"],
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    color: "purple"
  },
  {
    title: "Focus Pilot AI",
    subtitle: "AI-Powered Habit Tracking",
    description: "Worked on the backend for a habit and goal tracking app. Used Amazon SQS to handle reminders and notifications asynchronously, keeping the main API responsive.",
    features: ["Goal & habit APIs", "Async reminders via SQS", "Background processing"],
    metrics: [
      { icon: <Activity className="w-3.5 h-3.5" />, label: "Async processing" },
      { icon: <Server className="w-3.5 h-3.5" />, label: "Event-driven flow" },
    ],
    tech: ["NestJS", "MongoDB", "Redis", "Amazon SQS"],
    icon: <Server className="w-6 h-6 text-orange-400" />,
    color: "orange"
  }
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-24 relative border-y border-border/50 bg-black/20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A few of the products I've worked on professionally."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col h-full group hover:border-white/10 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 h-max">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm font-mono text-muted-foreground mt-1">{project.subtitle}</p>
                    </div>
                  </div>
                  <a href="#" className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      <span className={`text-${project.color}-400`}>{metric.icon}</span>
                      {metric.label}
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono text-muted-foreground bg-black/50 border border-white/10 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    View Details
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2">
                          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Service Flow</p>

                          <div className="bg-black/60 rounded-xl p-4 border border-white/5 mb-6 flex items-center justify-between relative">
                            <div className="absolute top-1/2 left-8 right-8 h-px bg-white/10 -z-0" />

                            <div className="flex flex-col items-center gap-2 z-10">
                              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Globe className="w-4 h-4 text-muted-foreground" />
                              </div>
                              <span className="text-[10px] text-muted-foreground font-mono">Client</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 z-10">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <Server className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-[10px] text-primary font-mono">{project.tech[0]}</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 z-10">
                              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Database className="w-4 h-4 text-blue-400" />
                              </div>
                              <span className="text-[10px] text-blue-400 font-mono">{project.tech[1]}</span>
                            </div>
                          </div>

                          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Highlights</p>
                          <ul className="text-sm text-foreground/80 grid grid-cols-2 gap-3">
                            {project.features.map(f => (
                              <li key={f} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                                <span className="leading-snug">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
