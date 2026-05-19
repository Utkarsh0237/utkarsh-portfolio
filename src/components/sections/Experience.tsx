"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const achievements = [
    "Worked on backend services using Node.js, NestJS, and TypeScript",
    "Helped improve API response times by optimizing database queries and caching strategies",
    "Built RESTful APIs for web and mobile applications",
    "Used AWS Lambda and SQS to handle background processing tasks",
    "Implemented authentication flows using JWT and role-based access control",
    "Wrote and reviewed code with a focus on readability and maintainability",
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="Where I've worked and what I've been doing."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-6 md:p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Backend Software Engineer</h3>
                  <div className="flex items-center gap-2 mt-2 text-primary font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>Appinventiv</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-background/50 px-4 py-2 rounded-full w-max border border-border">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Jun 2023 – Present</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">What I worked on</h4>
                <ul className="space-y-3">
                  {achievements.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (idx * 0.08) }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
