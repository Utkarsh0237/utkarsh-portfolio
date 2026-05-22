"use client";

import { motion } from "framer-motion";
import { Server, Database, Activity, ShieldCheck, Zap, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function TechnicalHighlights() {
  const content = PORTFOLIO_CONTENT.technicalHighlights;

  // Map of icons for each highlight card
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 1:
        return <Database className="w-6 h-6 text-blue-400" />;
      case 2:
        return <Activity className="w-6 h-6 text-orange-400" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      case 4:
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case 5:
        return <Search className="w-6 h-6 text-cyan-400" />;
      default:
        return <Server className="w-6 h-6 text-zinc-400" />;
    }
  };

  return (
    <section id="highlights" className="py-24 relative bg-black/10 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group flex items-start gap-4"
            >
              <div className="p-3 bg-background/60 border border-white/5 rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
                {getIcon(index)}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
