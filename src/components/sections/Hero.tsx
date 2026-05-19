"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Server, Database, Cloud, Activity, Zap } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";
import Link from "next/link";

const RESUME_URL = "https://drive.google.com/file/d/1mYDkiaOrArDIAMZV0X-43X-yaH88hbRt/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/utkarsh-pandey-51816a1ba";

const floatingBadges = [
  { name: "Node.js", color: "text-green-500", border: "border-green-500/20", bg: "bg-green-500/10", top: "10%", left: "5%" },
  { name: "AWS", color: "text-orange-500", border: "border-orange-500/20", bg: "bg-orange-500/10", top: "25%", left: "80%" },
  { name: "PostgreSQL", color: "text-blue-500", border: "border-blue-500/20", bg: "bg-blue-500/10", top: "70%", left: "10%" },
  { name: "Redis", color: "text-red-500", border: "border-red-500/20", bg: "bg-red-500/10", top: "85%", left: "75%" },
  { name: "TypeScript", color: "text-blue-400", border: "border-blue-400/20", bg: "bg-blue-400/10", top: "50%", left: "90%" },
];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building backend systems, one service at a time...";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
          className="absolute hidden xl:flex z-0"
          style={{ top: badge.top, left: badge.left }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className={`px-3 py-1.5 rounded-full backdrop-blur-md border ${badge.border} ${badge.bg} ${badge.color} text-xs font-mono font-medium shadow-lg shadow-black/20`}
          >
            {badge.name}
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass w-max border-primary/20 text-primary text-sm font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to new opportunities
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-2xl opacity-40 -z-10 rounded-full" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Backend <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Software Engineer</span>
            </h1>
          </div>

          <div className="h-8 font-mono text-sm md:text-base text-emerald-400 flex items-center">
            <span className="mr-2 text-muted-foreground">&gt;</span>
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-emerald-400 ml-1 inline-block"
            />
          </div>

          <h2 className="text-2xl font-semibold text-foreground/90">Hi, I&apos;m Utkarsh Pandey.</h2>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Backend engineer with 3+ years of professional experience. I work with Node.js, NestJS, TypeScript, AWS, Redis, PostgreSQL, MongoDB, and Elasticsearch to build reliable APIs and backend services.
          </p>

          {/* Achievement Metrics */}
          <div className="grid grid-cols-3 gap-3 my-2">
            <div className="glass p-3 rounded-lg border border-border/50 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4" /> ~40%
              </div>
              <p className="text-xs text-muted-foreground">API improvement</p>
            </div>
            <div className="glass p-3 rounded-lg border border-border/50 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold">
                <Activity className="w-4 h-4" /> ~30%
              </div>
              <p className="text-xs text-muted-foreground">Effort reduction</p>
            </div>
            <div className="glass p-3 rounded-lg border border-border/50 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
                <Database className="w-4 h-4" /> ~25%
              </div>
              <p className="text-xs text-muted-foreground">Faster retrieval</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-md glass font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-md border border-border font-semibold hover:bg-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors hover:-translate-y-1 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[520px] w-full"
        >
          <div className="absolute top-1/2 -left-12 w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />

          <div className="absolute inset-0 glass rounded-2xl border border-border/50 p-6 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">api-gateway.ts</span>
            </div>

            <div className="flex-1 relative">
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }}>
                <path d="M 220 50 L 220 150" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <motion.circle cx="220" cy="50" r="3" fill="#10b981" animate={{ cy: [50, 150] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                <path d="M 220 190 L 100 280" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <motion.circle cx="220" cy="190" r="3" fill="#3b82f6" animate={{ cx: [220, 100], cy: [190, 280] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                <path d="M 220 190 L 340 280" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <motion.circle cx="220" cy="190" r="3" fill="#8b5cf6" animate={{ cx: [220, 340], cy: [190, 280] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.8 }} />
              </svg>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">External Traffic</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="absolute top-[140px] left-1/2 -translate-x-1/2 bg-primary/10 border border-primary/30 p-4 rounded-xl flex flex-col items-center gap-2"
              >
                <Server className="w-6 h-6 text-primary" />
                <span className="text-sm font-bold text-foreground">API Gateway</span>
                <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">NestJS</span>
              </motion.div>

              <div className="absolute top-[270px] left-[50px] bg-black/40 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">User Svc</span>
                  <span className="text-[10px] text-muted-foreground">PostgreSQL</span>
                </div>
              </div>

              <div className="absolute top-[270px] right-[50px] bg-black/40 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                <Server className="w-5 h-5 text-purple-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Cache Svc</span>
                  <span className="text-[10px] text-muted-foreground">Redis</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#0d1117] border border-border p-3 rounded-lg font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between text-muted-foreground mb-2">
                  <span>server-logs</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live</span>
                </div>
                <div className="space-y-1 opacity-80">
                  <p className="text-blue-400">[HTTP] GET /api/v1/health 200 OK - 3ms</p>
                  <p className="text-emerald-400">[Auth] JWT validated (user: 98f2)</p>
                  <p className="text-purple-400">[Cache] Miss — fetching from DB</p>
                  <p className="text-orange-400">[DB] Query done in 14ms</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
