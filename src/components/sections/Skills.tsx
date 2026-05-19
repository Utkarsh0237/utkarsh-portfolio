"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Shield, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    title: "Backend Frameworks",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: ["Node.js", "NestJS", "Express.js", "HapiJS", "TypeScript", "GraphQL"],
    color: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
  },
  {
    title: "Databases & Caching",
    icon: <Database className="w-5 h-5 text-blue-400" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    color: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
  },
  {
    title: "Cloud & Messaging",
    icon: <Cloud className="w-5 h-5 text-orange-400" />,
    skills: ["AWS Lambda", "Amazon SQS", "Amazon S3", "Docker", "Kafka", "RabbitMQ"],
    color: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
  },
  {
    title: "Architecture & Security",
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    skills: ["Microservices", "Event-Driven", "REST APIs", "JWT", "OAuth", "RBAC"],
    color: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
  },
  {
    title: "Dev Tools & ORMs",
    icon: <Wrench className="w-5 h-5 text-zinc-400" />,
    skills: ["Git", "Jest", "TypeORM", "Sequelize", "Swagger", "Postman"],
    color: "group-hover:border-zinc-500/50 group-hover:shadow-[0_0_30px_rgba(161,161,170,0.1)]"
  }
];

// Stagger variants for skill tags
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive toolkit for building scalable, high-performance systems." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group glass p-6 rounded-2xl border border-border/50 transition-all duration-300 relative overflow-hidden ${category.color}`}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
                <svg className="absolute bottom-0 right-0 w-32 h-32 text-white/5 transform translate-x-8 translate-y-8" fill="currentColor" viewBox="0 0 100 100">
                  <pattern id={`pattern-${idx}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" />
                  </pattern>
                  <rect width="100" height="100" fill={`url(#pattern-${idx})`} />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-background/50 border border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill}
                      variants={itemVariants}
                      className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors cursor-default shadow-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
