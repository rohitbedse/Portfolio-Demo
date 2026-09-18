"use client";

import { motion, useReducedMotion } from "framer-motion";
import { JOURNEY } from "@/lib/data";

const STAGE_ICONS: Record<string, string> = {
  Foundation: "🎓",
  "ML Deep Dive": "📊",
  "Model Mastery": "🚀",
  "GenAI Era": "🤖",
};

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" className="py-20 sm:py-24 px-6" aria-label="Career journey">
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
          <h2 className="text-display-sm mb-4">The Path to Mastery</h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            From computer science fundamentals to the cutting edge of Generative
            AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line — visible on all screens */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.stage}
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 16 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.4, delay: index * 0.1 },
                      })}
                  className="relative"
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-5 sm:left-1/2 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-accent border-2 border-surface z-10" />

                  {/* Card — stacks vertically on mobile, alternates on desktop */}
                  <div
                    className={`pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                      isLeft
                        ? "sm:mr-auto sm:pr-0"
                        : "sm:ml-auto sm:pl-0"
                    }`}
                  >
                    <article className="rounded-xl border border-border bg-surface-raised p-6 hover:border-accent/20 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl" role="img" aria-label={step.stage}>
                          {STAGE_ICONS[step.stage] || "📌"}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                            {step.stage}
                          </span>
                          <p className="text-xs text-text-muted">{step.period}</p>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-sm font-medium text-accent/80 mb-3">
                        {step.milestone}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
