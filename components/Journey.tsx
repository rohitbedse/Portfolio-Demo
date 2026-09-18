"use client";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">The Path to Mastery</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          My evolution from computer science fundamentals to the bleeding edge of Generative AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROFILE.journey.map((step, index) => (
          <motion.div
            key={step.stage}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="h-full p-8 rounded-3xl glass group-hover:bg-white/[0.08] transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-6xl font-black text-white/[0.03] select-none">
                0{index + 1}
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent px-2 py-1 rounded-md bg-accent/10 border border-accent/20">
                  {step.stage}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{step.institution}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-gray-500 flex justify-between items-center">
                <span>Status: {step.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
