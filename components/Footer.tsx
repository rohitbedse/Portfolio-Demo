import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border" aria-label="Contact and footer">
      <div className="max-w-6xl mx-auto">
        {/* Contact section */}
        <div className="mb-12">
          <h2 className="text-heading mb-2">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-text-muted text-sm mb-6">
            Open to opportunities, collaborations, and interesting conversations.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="icon-hover inline-flex items-center gap-2 text-sm font-medium text-text-secondary min-h-[44px] px-4 rounded-lg border border-border transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="icon-hover inline-flex items-center gap-2 text-sm font-medium text-text-secondary min-h-[44px] px-4 rounded-lg border border-border transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </div>

          <div className="flex gap-3 mt-5">
            {[
              { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: CONTACT.github, icon: Github, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border transition-all duration-300"
                aria-label={`${label} profile`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
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
            className="group inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors min-h-[44px]"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
