"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  const animProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.4 } as const,
      };

  return (
    <section id="projects" className="py-20 sm:py-24 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <motion.div {...animProps} className="mb-14">
          <h2 className="text-display-sm mb-4">Proof of Work</h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Production-ready ML systems with measurable impact and documented
            experiments.
          </p>
        </motion.div>

        {/* Featured project — hero treatment */}
        {featured && (
          <motion.article
            {...animProps}
            className="rounded-xl border border-accent/30 bg-surface-raised p-6 sm:p-8 mb-8 relative overflow-hidden"
          >
            {/* Subtle accent indicator */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                    Featured Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{featured.period}</p>
                </div>
                {featured.links.github && (
                  <a
                    href={featured.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors min-h-[44px] shrink-0"
                    aria-label={`View ${featured.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Metrics grid */}
              {featured.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(featured.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-lg border border-border bg-surface p-4 text-center"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                        {value}
                      </p>
                      <p className="text-[11px] uppercase tracking-wider text-text-muted mt-1 font-medium">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-text-secondary leading-relaxed max-w-3xl">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
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
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: index * 0.1 },
                  })}
              className="group rounded-xl border border-border bg-surface-raised p-6 hover:border-border/80 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1">{project.period}</p>
                  </div>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors shrink-0"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-surface border border-border text-text-muted"
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
