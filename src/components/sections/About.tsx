"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function About() {
  const content = PORTFOLIO_CONTENT.about;

  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Backend APIs",
      description: "Developing robust API architectures using Node.js, NestJS, and TypeScript."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Data Systems",
      description: "Schema design and optimization with PostgreSQL, MongoDB, and Redis."
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-400" />,
      title: "Cloud Infrastructure",
      description: "Deploying and managing microservices and async worker queues on AWS."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "System Performance",
      description: "Reducing API latency through index tuning, query caching, and async jobs."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg text-muted-foreground space-y-6 leading-relaxed max-w-xl"
          >
            <p>
              {content.bio}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
