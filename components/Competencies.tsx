"use client";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function Competencies() {
  return (
    <section id="competencies" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Core Competencies</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Evidence-backed skill sets proven through actual project implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROFILE.competencies.map((comp, index) => (
          <motion.div
            key={comp.group}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-accent rounded-full" />
              {comp.group}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {comp.skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 italic leading-relaxed">
                {comp.evidence}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
