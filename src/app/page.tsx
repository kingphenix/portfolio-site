'use client';

import { useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LottieAnimation from "@/components/LottieAnimation";
import PortraitImage from "@/components/PortraitImage";
// import ParticleBackground from "@/components/ParticleBackground";
import StackBadges from "@/components/StackBadges";
import { SplineSceneBasic } from "@/components/ui/demo";

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
      <main className="bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
          <LottieAnimation
            animationData={animationData}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Hi, I'm <span className="gradient-text">Joseph</span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl text-textSecondary mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Sofware Developer & Automation Expert
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
                <SplineSceneBasic />
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

        {/* Projects Section Placeholder */}
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
              <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
              </p>
            </motion.div>

            {/* Project cards will be added here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="h-48 bg-white/5 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-white hover:underline">View Demo</a>
                    <a href="#" className="text-white hover:underline">Source Code</a>
                  </div>
                </div>
              </div>

              {/* Repeat for other projects */}
              <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="h-48 bg-white/5 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">TypeScript</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-white hover:underline">View Demo</a>
                    <a href="#" className="text-white hover:underline">Source Code</a>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
                <div className="h-48 bg-white/5 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Framer Motion</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-white hover:underline">View Demo</a>
                    <a href="#" className="text-white hover:underline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">Get In Touch</h2>
              <div className="w-20 h-px bg-neutral-200 mx-auto"></div>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition-opacity"
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
