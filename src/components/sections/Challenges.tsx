"use client";

import { motion } from "framer-motion";
import { Terminal, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Challenges() {
  return (
    <section id="challenges" className="py-24 bg-muted/30 relative border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="A Problem I Solved"
          subtitle="A real technical issue I ran into and how I worked through it."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-xl"
        >
          {/* Terminal Header */}
          <div className="bg-[#1e1e1e] border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>incident-notes.md</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0d1117] p-6 md:p-8 font-mono text-sm leading-relaxed">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border/50">
              <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-red-400 font-semibold text-lg mb-2">Issue: File Descriptor Leak in AWS Lambda</h3>
                <p className="text-foreground/80">
                  I noticed that our Lambda function was running into connection issues under load. After some digging, I found that a new Axios instance was being created inside the handler on every invocation, which caused file descriptors to pile up and eventually exhaust the available limit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-emerald-400 font-semibold text-lg mb-2">What I Did</h3>
                <p className="text-foreground/80 mb-4">
                  Moved the Axios instance creation outside the handler so it gets reused across warm invocations, and enabled TCP Keep-Alive to reduce the overhead of establishing new connections each time.
                </p>
                <div className="bg-[#161b22] p-4 rounded-md border border-border/50 text-emerald-300/80 space-y-1">
                  <p>+ Moved HTTP client outside handler scope</p>
                  <p>+ Enabled TCP Keep-Alive on the agent</p>
                  <p>+ Added monitoring to catch similar issues earlier</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
