import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold text-white mb-2">SUJAL.VFX</h3>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sujal Malhotra. All rights reserved.</p>
        </div>
        
        <div className="text-gray-500 text-sm flex gap-6">
          <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;