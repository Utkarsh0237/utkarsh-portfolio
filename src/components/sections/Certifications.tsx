"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  const certifications = [
    {
      title: "Node.js Full Stack",
      issuer: "Professional Certification"
    },
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="A couple of certifications I've completed."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-6 rounded-xl border border-border flex items-center gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
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
