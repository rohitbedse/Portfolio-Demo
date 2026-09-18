import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border" aria-label="Contact and footer">
      <div className="max-w-6xl mx-auto">
        {/* Contact section */}
        <div className="mb-12">
          <h2 className="text-heading mb-6">Get in Touch</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors min-h-[44px] px-3 rounded-md border border-border hover:border-accent/30"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors min-h-[44px] px-3 rounded-md border border-border hover:border-accent/30"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </div>

          <div className="flex gap-3 mt-5">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Rohit Bedse. Built with Next.js &
            Tailwind CSS.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors min-h-[44px]"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
