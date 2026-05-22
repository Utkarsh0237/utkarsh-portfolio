"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, FileText, Mail } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function Contact() {
  const content = PORTFOLIO_CONTENT.contact;

  // Map icons for contact details
  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "phone":
        return <Phone className="w-5 h-5 text-primary" />;
      case "location":
        return <MapPin className="w-5 h-5 text-primary" />;
      case "email":
        return <Mail className="w-5 h-5 text-primary" />;
      default:
        return <Mail className="w-5 h-5 text-primary" />;
    }
  };

  const contactDetails = [
    {
      label: "Email",
      value: content.email,
      href: `mailto:${content.email}`,
    },
    {
      label: "Phone",
      value: content.phone,
      href: `tel:${content.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      label: "Location",
      value: content.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl border border-white/5 p-8 md:p-10"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
                {content.tagline}
              </span>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {content.text}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-10 border-t border-white/5 pt-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {getContactIcon(item.label)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-primary transition-colors font-medium block truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-medium block truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/5 hover:border-blue-400/50 hover:text-blue-400 transition-colors group w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>
              <a
                href={content.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass border border-white/5 hover:border-primary/50 hover:text-primary transition-colors group w-full sm:w-auto justify-center"
              >
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">View Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
