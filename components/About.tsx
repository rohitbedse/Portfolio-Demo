"use client";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
            <img
              src="/assets/images/portfolio.png"
              alt={PROFILE.name}
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 rounded-3xl glass shadow-xl hidden md:block">
            <p className="text-2xl font-bold text-white">2026</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Edition</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {PROFILE.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm text-gray-300">{PROFILE.contact.location}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm text-gray-300">{PROFILE.contact.email}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              className="p-3 rounded-full glass hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={PROFILE.contact.github}
              target="_blank"
              className="p-3 rounded-full glass hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
