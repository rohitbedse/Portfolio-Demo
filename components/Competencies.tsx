"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { COMPETENCIES } from "@/lib/data";

export default function Competencies() {
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
    <section id="skills" className="py-20 sm:py-24 px-6" aria-label="Skills and competencies">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <motion.div {...animProps()} className="mb-14">
          <h2 className="text-display-sm mb-4">
            <span className="gradient-text-subtle">Core Competencies</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Evidence-backed skill sets proven through project implementation and
            production work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPETENCIES.map((comp, index) => (
            <motion.div
              key={comp.group}
              {...animProps(index * 0.05)}
              className="card-hover rounded-xl border border-border bg-surface-raised p-6 sm:p-7"
            >
              <h3 className="text-lg font-bold mb-5 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-accent to-cyan-500" />
                {comp.group}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {comp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag text-xs font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-text-secondary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2.5 items-start p-3.5 rounded-lg bg-accent/[0.03] border border-accent/10">
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
