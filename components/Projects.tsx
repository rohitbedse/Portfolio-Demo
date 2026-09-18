"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const flagship = PROFILE.projects.filter(p => p.flagship);
  const other = PROFILE.projects.filter(p => !p.flagship);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Proof of Work</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Production-ready ML systems with measurable impact and documented experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Flagship Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagship.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden glass border-white/20"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.links.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.links.live} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <p className="text-[10px] uppercase text-gray-500 mb-1">{key}</p>
                        <p className="text-sm font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-8 text-center text-gray-500">Other Explorations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {other.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl glass hover:bg-white/[0.08] transition-all"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                  <a href={project.links.github} className="text-xs font-bold text-accent flex items-center gap-1 hover:underline">
                    View Source <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
