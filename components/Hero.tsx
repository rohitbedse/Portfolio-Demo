"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE, CONTACT } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  const fadeUpDelayed = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-16"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-xs font-medium text-accent mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                Data Science Intern at VigyanShaala
              </div>
            </motion.div>

            <motion.h1
              {...fadeUpDelayed(0.1)}
              className="text-4xl sm:text-5xl lg:text-display font-extrabold tracking-tighter mb-4 text-balance"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              {...fadeUpDelayed(0.15)}
              className="text-lg sm:text-xl font-medium text-accent mb-6"
            >
              {PROFILE.role}
            </motion.p>

            <motion.p
              {...fadeUpDelayed(0.2)}
              className="text-body-lg text-text-secondary max-w-xl mb-4"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.p
              {...fadeUpDelayed(0.25)}
              className="text-sm text-text-muted mb-8"
            >
              {CONTACT.location}
            </motion.p>

            {/* Links row */}
            <motion.div
              {...fadeUpDelayed(0.3)}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-surface font-semibold px-5 py-2.5 rounded-md hover:bg-accent-light transition-colors min-h-[44px]"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <div className="flex gap-2">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md border border-border hover:border-accent/50 hover:text-accent transition-colors"
                  aria-label="Call phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            {...fadeUpDelayed(0.2)}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-2xl border border-border bg-surface-raised overflow-hidden">
                <Image
                  src="/pfp.png"
                  alt="Rohit Bedse — ML and GenAI Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
              {/* Subtle accent border glow */}
              <div className="absolute -inset-px rounded-2xl border border-accent/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
