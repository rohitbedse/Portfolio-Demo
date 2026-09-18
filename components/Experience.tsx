"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const animProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.4 } as const,
      };

  return (
    <section id="experience" className="py-20 sm:py-24 px-6" aria-label="Experience">
      <div className="max-w-6xl mx-auto">
        <motion.div {...animProps} className="mb-14">
          <h2 className="text-display-sm mb-4">Experience</h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Building data pipelines and AI systems in production environments.
          </p>
        </motion.div>

        {/* Internship card */}
        <motion.article
          {...animProps}
          className="rounded-xl border border-border bg-surface-raised p-6 sm:p-8 mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-1">{EXPERIENCE.role}</h3>
              <p className="text-accent font-medium">
                {EXPERIENCE.company}{" "}
                <span className="text-text-muted font-normal">
                  — {EXPERIENCE.product}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 text-sm text-text-muted shrink-0">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {EXPERIENCE.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {EXPERIENCE.location}
              </span>
            </div>
          </div>

          <ul className="space-y-3">
            {EXPERIENCE.bullets.map((bullet, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm sm:text-base text-text-secondary leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </motion.article>

        {/* Education */}
        <motion.div {...animProps}>
          <h3 className="text-xs font-bold mb-4 text-text-muted uppercase tracking-wider">
            Education
          </h3>
          <div className="rounded-xl border border-border bg-surface-raised p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-semibold">
                  {EDUCATION.degree}, {EDUCATION.field}
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {EDUCATION.institution}
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-sm text-text-muted shrink-0">
                <span>{EDUCATION.period}</span>
                <span className="text-accent font-medium">
                  CGPA: {EDUCATION.cgpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
