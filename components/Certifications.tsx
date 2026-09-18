"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 px-6"
      aria-label="Certifications"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4 },
              })}
          className="mb-14"
        >
          <h2 className="text-display-sm mb-4">Certifications</h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Industry-recognized credentials in AI, ML, and cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: index * 0.05 },
                  })}
              className="rounded-xl border border-border bg-surface-raised p-5 hover:border-accent/20 transition-colors"
            >
              <Award className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-bold mb-1 leading-snug">
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
