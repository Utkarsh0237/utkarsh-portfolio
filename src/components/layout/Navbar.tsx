"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Highlights", href: "#highlights" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Mindset", href: "#mindset" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const content = PORTFOLIO_CONTENT.contact;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Auto-close mobile nav on page scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleScrollClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        (scrolled || isOpen) ? "glass-nav py-3 bg-black/60 backdrop-blur-md border-b border-white/5" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-mono text-primary flex items-center gap-2 group">
          <span className="text-muted-foreground group-hover:text-primary transition-colors">&lt;</span>
          <span className="text-foreground tracking-tight">Utkarsh</span>
          <span className="text-muted-foreground group-hover:text-primary transition-colors">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "transition-colors duration-200 py-2",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <a
              href={content.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-primary/40 text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-6 px-6 shadow-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-medium block w-full px-4 py-2 rounded-md transition-colors",
                        isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-white/5 mt-2 flex justify-between items-center px-4">
                <a
                  href={content.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={content.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-emerald-300 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}
