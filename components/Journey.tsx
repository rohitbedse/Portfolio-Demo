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
    <section id="journey" className="py-20 sm:py-24 px-6" aria-label="Career journey">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <motion.div {...animProps()} className="mb-14">
          <h2 className="text-display-sm mb-4">
            <span className="gradient-text-subtle">The Path to Mastery</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            From computer science fundamentals to the cutting edge of Generative
            AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated gradient connector line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-accent/40 via-cyan-500/20 to-transparent" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.stage}
                  {...animProps(index * 0.1)}
                  className="relative"
                >
                  {/* Dot on timeline with pulse */}
                  <div className="absolute left-5 sm:left-1/2 top-8 -translate-x-1/2 z-10">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" style={{ animationDuration: "3s" }} />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-accent border-2 border-surface" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-14 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                      isLeft ? "sm:mr-auto sm:pr-0" : "sm:ml-auto sm:pl-0"
                    }`}
                  >
                    <article className="card-hover rounded-xl border border-border bg-surface-raised p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl" role="img" aria-label={step.stage}>
                          {STAGE_ICONS[step.stage] || "📌"}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                            {step.stage}
                          </span>
                          <p className="text-xs text-text-muted">{step.period}</p>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-sm font-medium text-accent/70 mb-3">
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
