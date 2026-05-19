"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Server, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    icon: <Server className="w-5 h-5" />,
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    label: "Experience",
    value: "3+",
    unit: "Years",
    description: "Professional backend engineering",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    label: "APIs",
    value: "40+",
    unit: "",
    description: "REST endpoints built across projects",
  },
  {
    icon: <Database className="w-5 h-5" />,
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    label: "Databases",
    value: "5+",
    unit: "",
    description: "Database systems used in production",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    iconBg: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    label: "Projects",
    value: "4+",
    unit: "",
    description: "Production projects contributed to",
  },
];

export function EngineeringStats() {
  return (
    <section id="stats" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="By the Numbers"
          subtitle="A snapshot of my experience so far."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl border ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                  {stat.unit && <span className="text-xl text-muted-foreground font-normal ml-1">{stat.unit}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
