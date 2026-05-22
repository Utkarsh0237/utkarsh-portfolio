import Link from "next/link";
import { Terminal } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";

export function Footer() {
  const content = PORTFOLIO_CONTENT.contact;

  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold font-mono text-primary flex items-center gap-2">
              <Terminal className="w-5 h-5 text-foreground" />
              <span>Utkarsh</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Backend engineer focused on scalable APIs, distributed systems, and cloud infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={content.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-medium border border-white/10 text-muted-foreground rounded-md hover:border-primary/50 hover:text-primary transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
