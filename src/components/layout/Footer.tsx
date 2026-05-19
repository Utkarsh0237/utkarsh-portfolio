import Link from "next/link";
import { Terminal } from "lucide-react";
import { Linkedin } from "@/components/ui/Icons";

const LINKEDIN_URL = "https://www.linkedin.com/in/utkarsh-pandey-51816a1ba";
const RESUME_URL = "https://drive.google.com/file/d/1mYDkiaOrArDIAMZV0X-43X-yaH88hbRt/view?usp=sharing";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold font-mono text-primary flex items-center gap-2">
              <Terminal className="w-5 h-5 text-foreground" />
              <span>Utkarsh</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
              Backend engineer focused on building reliable, maintainable systems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-medium border border-border text-muted-foreground rounded-md hover:border-primary/50 hover:text-primary transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
