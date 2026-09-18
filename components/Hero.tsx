"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE, CONTACT } from "@/lib/data";
import Image from "next/image";
import GridBackground from "./GridBackground";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated dot grid */}
      <GridBackground />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, #09090b 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-xs font-medium text-accent mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                Data Science Intern at VigyanShaala
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 text-balance"
            >
              <span className="gradient-text">{PROFILE.name}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-xl sm:text-2xl font-semibold text-accent/90 mb-6"
            >
              {PROFILE.role}
            </motion.p>

            <motion.p
              {...fadeUp(0.25)}
              className="text-body-lg text-text-secondary max-w-xl mb-3 leading-relaxed"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="text-sm text-text-muted mb-8"
            >
              📍 {CONTACT.location}
            </motion.p>

            {/* CTA + Social links */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent text-surface font-semibold px-6 py-3 rounded-lg hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 min-h-[44px]"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>

              <div className="flex gap-2">
                {[
                  { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: CONTACT.github, icon: Github, label: "GitHub" },
                  { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
                  { href: `tel:${CONTACT.phone}`, icon: Phone, label: "Phone" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="icon-hover p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border hover:border-accent/40 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
              <div className="absolute inset-0 rounded-2xl border border-border bg-surface-raised overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/pfp.png"
                  alt="Rohit Bedse — ML and GenAI Engineer"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              <div className="absolute -inset-px rounded-2xl border border-accent/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...(shouldReduceMotion
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.2, duration: 0.8 },
            })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#experience" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors" aria-label="Scroll to content">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-accent"
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
