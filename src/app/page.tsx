'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeAnimation from "@/components/CodeAnimation";
import PortraitImage from "@/components/PortraitImage";
import SkillBadges from "@/components/SkillBadges";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
                   {/* Animated Background */}
                   <ParticleBackground />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Hi, I'm <span className="gradient-text">Joseph</span> 👋
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl text-textSecondary mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Frontend Developer & Automation Builder
                </motion.h2>
                <motion.p
                  className="text-lg mb-8 text-textSecondary max-w-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  I design sleek interfaces and connect workflows with n8n.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-transparent border border-text text-text font-medium hover:bg-text/10 transition-colors"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2 flex justify-center h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-full h-full">
                  <CodeAnimation />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
              <div className="w-20 h-1 gradient-bg mx-auto"></div>
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
                <p className="text-textSecondary mb-6">
                  Specialized in <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Next.js</span>, <span className="text-primary font-medium">Tailwind</span>, and workflow automation with <span className="text-primary font-medium">n8n</span>. I combine technical expertise with creative problem-solving to build solutions that make an impact.
                </p>
                
                {/* Skill badges with icons */}
                <h4 className="text-xl font-semibold mb-2">My Toolkit</h4>
                <SkillBadges />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
              <div className="w-20 h-1 gradient-bg mx-auto"></div>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
              </p>
            </motion.div>

            {/* Project cards will be added here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background border border-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Tailwind</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-primary hover:underline">View Demo</a>
                    <a href="#" className="text-primary hover:underline">Source Code</a>
                  </div>
                </div>
              </div>

              {/* Repeat for other projects */}
              <div className="bg-background border border-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-primary hover:underline">View Demo</a>
                    <a href="#" className="text-primary hover:underline">Source Code</a>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <p className="text-textSecondary">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-textSecondary mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Framer Motion</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-primary hover:underline">View Demo</a>
                    <a href="#" className="text-primary hover:underline">Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="py-20 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
              <div className="w-20 h-1 gradient-bg mx-auto"></div>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
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
