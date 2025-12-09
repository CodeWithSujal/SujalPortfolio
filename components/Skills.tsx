import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium tracking-wide">{name}</span>
      <span className="text-gray-500 text-sm">{level}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color} rounded-full relative`}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]"></div>
      </motion.div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const softwareSkills = SKILLS.filter(s => s.category === 'Software');
  const coreSkills = SKILLS.filter(s => s.category === 'Core');

  return (
    <section id="skills" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Technical <span className="text-neon-green">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my proficiency in industry-standard tools and core artistic competencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-blue pl-4">Software</h3>
            <div className="bg-dark-card p-8 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all duration-500">
              {softwareSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="bg-neon-blue" />
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-green pl-4">Core Competencies</h3>
            <div className="bg-dark-card p-8 rounded-xl border border-white/5 hover:border-neon-green/20 transition-all duration-500">
              {coreSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="bg-neon-green" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;