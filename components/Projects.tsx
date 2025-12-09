import React, { useState, useEffect, Link } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X, Maximize2, Code } from 'lucide-react';
import { Project } from '../types';
import emailjs from "emailjs-com";


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject || selectedProject.image[1] === null) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(timer);
  }, [selectedProject, currentImageIndex]);


  const getProjectImages = (project: Project) => [
    project.image[0],
    project?.image[1],
    project?.image[2],
    project?.image[3],
  ];

  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Selected <span className="text-neon-purple">Works</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              A curated selection of my best work in VFX, animation, and real-time rendering.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-600 text-sm font-mono">SCROLL TO EXPLORE</span>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-dark-card rounded-xl overflow-hidden border border-white/5"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden relative justify-center">
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="mx-auto h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-6 py-3 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <Maximize2 size={18} /> View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-neon-purple uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map(tool => (
                    <span key={tool} className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full z-10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full aspect-video bg-black relative">
                {/* IMAGE */}
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentImageIndex}
                    layoutId={currentImageIndex === 0 ? `project-image-${selectedProject.id}` : undefined}
                    src={selectedProject.image[1] != null ? getProjectImages(selectedProject)[currentImageIndex] : selectedProject.image[0]}
                    alt={selectedProject.title}
                    initial={selectedProject.image[1] != null ? { opacity: 0 } : {}}
                    animate={selectedProject.image[1] != null ? { opacity: 1 } : {}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto h-full object-cover"
                  />
                </AnimatePresence>

                {/* DOTS INDICATOR */}
                {selectedProject.image[1] != null && <div className="absolute bottom-3 w-full flex justify-center gap-2 z-20">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                        ? 'bg-neon-blue w-8'
                        : 'bg-white/30 w-2 hover:bg-white'
                        }`}
                    />
                  ))}
                </div>}
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <span className="text-neon-blue font-mono text-sm uppercase">{selectedProject.category}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-3">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    <h4 className="text-white font-bold mb-3">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
                      <li>Procedural generation</li>
                      <li>Optimized for 60fps on mid-range hardware</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="bg-white/5 p-6 rounded-xl h-fit">
                      <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map(tool => (
                          <span key={tool} className="text-sm px-3 py-1.5 bg-black/40 text-neon-blue rounded border border-neon-blue/20">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* download sourse code block */}
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-neon-blue flex gap-1 justify-center text-black text-sm uppercase tracking-wide rounded hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all duration-300 w-full sm:w-auto"
                    >
                      <Code /> Download Source code
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;