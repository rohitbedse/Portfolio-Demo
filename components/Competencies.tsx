"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { COMPETENCIES } from "@/lib/data";

export default function Competencies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 sm:py-24 px-6" aria-label="Skills and competencies">
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
          <h2 className="text-display-sm mb-4">Core Competencies</h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Evidence-backed skill sets proven through project implementation and
            production work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPETENCIES.map((comp, index) => (
            <motion.div
              key={comp.group}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: index * 0.05 },
                  })}
              className="rounded-xl border border-border bg-surface-raised p-6 hover:border-accent/20 transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full" />
                {comp.group}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {comp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2.5 items-start p-3 rounded-lg bg-surface/50 border border-border-subtle">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-text-muted leading-relaxed">
                  {comp.evidence}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
