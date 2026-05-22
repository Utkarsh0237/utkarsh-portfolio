"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function Certifications() {
  const content = PORTFOLIO_CONTENT.certifications;

  return (
    <section id="certifications" className="py-16 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {content.list.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass p-4 rounded-xl border border-white/5 flex items-center gap-3.5 group hover:border-primary/20 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm text-foreground leading-tight">{cert.title}</h3>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
