import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Palette, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur-lg"></div>
            <div className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-xl bg-dark-card border border-white/10">
               {/* Placeholder for professional photo */}
               <img 
                 src="https://github.com/CodeWithSujal/PortfolioData/raw/main/gemini%20sujal.jpg" 
                 alt="Alex Sterling" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-neon-blue"></span>
              <span className="text-neon-blue font-bold uppercase tracking-widest text-sm">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Game ART <span className="text-gray-500">Visual</span> Experiences
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am an aspiring technical artist and VFX developer with a passion for bridging the gap between creative art and technical implementation. My workflow combines procedural generation in Houdini with real-time rendering in Unreal Engine to create optimized, stunning visual effects and Game Art.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Currently preparing for university admission to further refine my skills in game production pipelines and advanced simulation logic.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-colors">
                <GraduationCap className="text-neon-blue mb-2" size={24} />
                <h4 className="text-white font-bold mb-1">Education</h4>
                <p className="text-sm text-gray-400">BCA (Applicant)<br/>VFX Specialist and GAME Artist </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-neon-purple/30 transition-colors">
                <Palette className="text-neon-purple mb-2" size={24} />
                <h4 className="text-white font-bold mb-1">Focus</h4>
                <p className="text-sm text-gray-400">Real-time VFX, Shaders,<br/>Game Environment Artist</p>
              </div>
            </div>

            <a href="../SujalMalhotra-Resume.pdf" download="SujalResume.pdf" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;