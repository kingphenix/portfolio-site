'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortraitImage from "@/components/PortraitImage";
// import ParticleBackground from "@/components/ParticleBackground";
import StackBadges from "@/components/StackBadges";
const ProjectsGrid = dynamic(() => import("@/components/ProjectsGrid"), {
  ssr: false,
  loading: () => (
    <div className="w-full py-20 text-center text-white/60">Loading projects…</div>
  ),
});


export default function Home() {
  const animationData = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "Loading Spinner",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Shape Layer 1",
        "sr": 1,
        "ks": {
          "o": { "a": 0, "k": 100, "ix": 11 },
          "r": { "a": 0, "k": 0, "ix": 10 },
          "p": { "a": 0, "k": [50, 50, 0], "ix": 2 },
          "a": { "a": 0, "k": [50, 50, 0], "ix": 1 },
          "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ind": 0,
                "ty": "sh",
                "ix": 1,
                "ks": {
                  "a": 0,
                  "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[0, -25], [25, 0], [0, 25], [-25, 0]], "c": true },
                  "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
              },
              {
                "ty": "st",
                "c": { "a": 0, "k": [0.8, 0.2, 0.2, 1], "ix": 3 },
                "o": { "a": 0, "k": 100, "ix": 4 },
                "w": { "a": 0, "k": 10, "ix": 5 },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              }
            ],
            "nm": "Group 1",
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 60,
        "st": 0,
        "bm": 0
      }
    ]
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(var(--neon-magenta-rgb), 0.1) 0%, rgba(var(--electric-cyan-rgb), 0.1) 20%, transparent 40%)',
            backgroundSize: '200% 200%',
            animation: 'moveGradient 10s ease infinite alternate',
          }}
        />
        <style jsx global>{`
          @keyframes moveGradient {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
        `}</style>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-white glitch"
                  data-text="Hi, I'm Joseph"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Hi, I'm <span className="gradient-text">Joseph</span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl text-textSecondary mb-6 glitch"
                  data-text="Software Developer & Automation Expert"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Software Developer & Automation Expert
                </motion.h2>
                <motion.p
                  className="text-lg mb-8 text-textSecondary max-w-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  As development evolves into new frontiers with AI, you need more than a front-end dev who just writes responsive code and that's where i come in.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* <SplineSceneBasic /> */}
              </motion.div>
              {/* Right-side animation removed for minimalist hero */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">About Me</h2>
              <div className="w-20 h-px bg-white/20 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Left side: Portrait with purple accent glow */}
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <PortraitImage />
              </motion.div>

              {/* Right side: Bio with skill badges */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-textSecondary mb-4">
                  I'm a passionate developer focused on creating modern, responsive web experiences with clean code and intuitive interfaces.
                </p>

                {/* Skill badges with icons */}
                <h4 className="text-xl font-semibold mb-2 text-white">My Toolkit</h4>
                <StackBadges />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">My Projects</h2>
              <div className="w-20 h-px bg-white/20 mx-auto"></div>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
              </p>
            </motion.div>
            <ProjectsGrid />
          </div>
        </section>

        {/* Contact Section - Glassmorphism */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Get In Touch</h2>
              <div className="w-20 h-px bg-white/20 mx-auto"></div>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_-15px_rgba(255,0,255,0.25)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60 focus:border-[#FF00FF]/40"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60 focus:border-[#FF00FF]/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60 focus:border-[#FF00FF]/40"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder-white/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/60 focus:border-[#FF00FF]/40"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-black font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
