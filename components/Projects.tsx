"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import CountUp from "./CountUp";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

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
    <section id="projects" className="py-20 sm:py-24 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        {/* Section divider */}
        <div className="section-divider mb-20" />

        <motion.div {...animProps()} className="mb-14">
          <h2 className="text-display-sm mb-4">
            <span className="gradient-text-subtle">Proof of Work</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Production-ready ML systems with measurable impact and documented
            experiments.
          </p>
        </motion.div>

        {/* Featured project — hero treatment with animated border */}
        {featured && (
          <motion.article
            {...animProps(0.1)}
            className="animated-border rounded-xl border border-accent/20 bg-surface-raised p-6 sm:p-8 lg:p-10 mb-8 relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-cyan-400 to-transparent" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                    ★ Featured Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-2">{featured.period}</p>
                </div>
                {featured.links.github && (
                  <a
                    href={featured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-hover inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-all duration-300 min-h-[44px] shrink-0 border border-accent/20 rounded-lg px-4 py-2 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                    aria-label={`View ${featured.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Metrics grid with animated counters */}
              {featured.metrics && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.entries(featured.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="card-hover rounded-lg border border-border bg-surface p-4 sm:p-5 text-center"
                    >
                      <CountUp
                        end={value}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight block"
                      />
                      <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted mt-2 font-medium">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-text-secondary leading-relaxed max-w-3xl text-base">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="skill-tag text-xs font-medium px-3 py-1.5 rounded-md bg-accent/8 text-accent border border-accent/15 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )}

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project, index) => (
            <motion.article
              key={project.title}
              {...animProps(0.1 + index * 0.1)}
              className="card-hover rounded-xl border border-border bg-surface-raised p-6 sm:p-7"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1">{project.period}</p>
                  </div>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-hover p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border transition-all duration-300 shrink-0"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="skill-tag text-[11px] font-medium px-2.5 py-1 rounded-md bg-surface border border-border text-text-muted cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
