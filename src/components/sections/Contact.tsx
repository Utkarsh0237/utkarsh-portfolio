"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, FileText } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LINKEDIN_URL = "https://www.linkedin.com/in/utkarsh-pandey-51816a1ba";
const RESUME_URL = "https://drive.google.com/file/d/1mYDkiaOrArDIAMZV0X-43X-yaH88hbRt/view?usp=sharing";

const contactDetails = [
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    label: "Phone",
    value: "+91-8787078819",
    href: "tel:+918787078819",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Location",
    value: "Noida, India",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out if you'd like to connect or discuss opportunities."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl border border-border p-8 md:p-10"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I&apos;m open to full-time backend roles and always happy to chat about engineering or career opportunities. The best ways to reach me are below.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass border border-border hover:border-blue-400/50 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass border border-border hover:border-primary/50 hover:text-primary transition-colors group"
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
