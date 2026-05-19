"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Backend Development",
      description: "Building RESTful APIs and backend services with Node.js and NestJS."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Databases",
      description: "Working with PostgreSQL, MongoDB, and Redis for storage and caching needs."
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-400" />,
      title: "Cloud Services",
      description: "Using AWS services like Lambda, SQS, and S3 in production environments."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Performance",
      description: "Focused on writing clean, efficient code and optimizing slow queries."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Me"
          subtitle="I enjoy working on backend problems and learning how systems scale."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground space-y-4"
          >
            <p>
              I&apos;m a backend software engineer with 3+ years of professional experience building APIs and backend services.
            </p>
            <p>
              I&apos;ve mostly worked with Node.js, NestJS, TypeScript, and various databases. I&apos;ve also had the chance to use AWS services and explore system design concepts like event-driven architecture and microservices.
            </p>
            <p>
              I&apos;m someone who takes code quality seriously, learns from my mistakes, and genuinely enjoys solving backend problems — whether that&apos;s a slow query, a tricky auth flow, or figuring out how services should communicate.
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
                <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
