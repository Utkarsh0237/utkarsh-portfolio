"use client";

import { motion } from "framer-motion";
import { Network, ServerCog, Activity, Zap, ShieldCheck, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const philosophies = [
  {
    title: "Design for Scale",
    description: "Think about how a system will behave under load before it becomes a problem. Prefer stateless services and horizontal scaling where possible.",
    icon: <Network className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Reliability Matters",
    description: "Systems will fail — the goal is to handle failures gracefully. Good error handling, retries, and monitoring make a big difference.",
    icon: <ServerCog className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Event-Driven Thinking",
    description: "Decoupling services with message queues helps keep systems maintainable. I've used SQS and similar tools to handle async workflows cleanly.",
    icon: <Activity className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Performance Awareness",
    description: "Slow queries and poor caching strategies cause real pain. I keep an eye on query performance and use caching thoughtfully, not just by default.",
    icon: <Zap className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Security by Default",
    description: "Auth, input validation, and access control aren't afterthoughts. These should be part of the design from the beginning.",
    icon: <ShieldCheck className="w-6 h-6 text-red-400" />
  },
  {
    title: "Build to Recover",
    description: "Plan for things going wrong. Circuit breakers, fallbacks, and good logging make it much easier to diagnose and recover from incidents.",
    icon: <LifeBuoy className="w-6 h-6 text-yellow-400" />
  }
];

export function SystemPhilosophy() {
  return (
    <section id="philosophy" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="How I Think About Backend Systems"
          subtitle="Some principles I try to keep in mind when working on backend problems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-muted-foreground flex gap-1">
                    <span className="text-primary">&lt;</span>
                    Principle {idx + 1}
                    <span className="text-primary">/&gt;</span>
                  </div>
                  <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/50 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
