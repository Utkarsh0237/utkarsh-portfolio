"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function EngineeringMindset() {
  const content = PORTFOLIO_CONTENT.mindset;

  // Map icons for the 4 mindset cards
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case 1:
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 3:
        return <Cpu className="w-6 h-6 text-orange-400" />;
      default:
        return <Cpu className="w-6 h-6 text-zinc-400" />;
    }
  };

  return (
    <section id="mindset" className="py-24 relative bg-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {content.cards.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(idx)}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
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
