"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  const animProps = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: { once: true, margin: "-50px" } as const,
          transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] } as const,
        };

  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 px-6"
      aria-label="Certifications"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <motion.div {...animProps()} className="mb-14">
          <h2 className="text-display-sm mb-4">
            <span className="gradient-text-subtle">Certifications</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Industry-recognized credentials in AI, ML, and cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              {...animProps(index * 0.08)}
              className="card-hover rounded-xl border border-border bg-surface-raised p-5"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Award className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-bold mb-1.5 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-text-muted">
                {cert.issuer} · {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
