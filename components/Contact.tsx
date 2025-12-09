import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  console.log("Form submitted!");
  console.log(e.currentTarget);

  setLoading(true);

  emailjs.sendForm(
    "service_q9x6ed4",
    "template_qentbsn",
    form.current!,
    "9JzpHCT48LcPz54tI"
  )
    .then(() => {
      alert("Message Sent Successfully!");
      setLoading(false);
      form.current?.reset();
    })
    .catch((err) => {
      alert("Failed to send message");
      console.log(err)
      setLoading(false);
    });
};


  return (
    <section id="contact" className="py-24 bg-dark-bg relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Let's <span className="text-neon-blue">Collaborate</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Currently accepting inquiries for freelance work and university admission interviews.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a question about my projects, want to discuss a potential collaboration, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-blue">
                  <Mail size={20} />
                </div>
                <span>sujalmalhotra42@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-purple">
                  <MapPin size={20} />
                </div>
                <span>Delhi, India(Remote Available)</span>
              </div>
            </div>

            <h4 className="text-white font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  className="w-12 h-12 rounded bg-dark-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card p-8 rounded-2xl border border-white/5 shadow-2xl"
          >
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white"
                    placeholder="Alex Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-neon-blue text-black font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;