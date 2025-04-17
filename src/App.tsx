import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Briefcase, Mail, Github, Linkedin, Instagram, Phone } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Fullscreen Logo Overlay */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <img 
            src="/assets/dap.png" 
            alt="Deep Parmar Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Split Animation */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 h-full w-1/2 bg-gray-800"
          initial={{ x: 0 }}
          animate={{ x: hasScrolled ? '-100%' : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-1/2 bg-gray-800"
          initial={{ x: 0 }}
          animate={{ x: hasScrolled ? '100%' : 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 20 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold"
              >
                Deep Ajitbhai Parmar
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 20 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-400"
              >
                B.Tech. - Computer Science & Engineering
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 20 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 text-gray-300"
              >
                <Phone className="w-5 h-5" /> +91-9725362234
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 20 }}
                transition={{ delay: 1.0 }}
                className="text-gray-300"
              >
                depparmar3@gmail.com
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: hasScrolled ? 1 : 0, scale: hasScrolled ? 1 : 0.9 }}
              transition={{ delay: 0.5 }}
              className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden"
            >
              <img 
                src="/assets/vector.png"
                alt="Deep Parmar" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-800/50">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12"
            >
              SUMMARY
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg"
            >
              Computer Science undergraduate with hands-on experience in full-stack development and real-time data analysis. 
              Passionate about building scalable applications with clean UI and strong backend logic. Particularly skilled 
              in designing and maintaining robust, scalable, and secure databases. Currently interning at GUVNL, working 
              on enterprise-level tools and data management platforms.
            </motion.p>
          </div>
        </section>

        {/* Education Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              <GraduationCap className="w-8 h-8 text-purple-500" />
              EDUCATION
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">Navrachana University | B.Tech. - Computer Science & Engineering</h3>
                <p className="text-gray-400">2022 - 2025</p>
                {/* <p className="text-gray-500">CGPA: 6.59/10</p> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">N.G. Patel Polytechnic, Bardoli | Diploma in Computer Science and Engineering, GTU</h3>
                <p className="text-gray-400">2022</p>
                {/* <p className="text-gray-500">Percentage: 85.60%</p> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-800/50">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              <Briefcase className="w-8 h-8 text-purple-500" />
              PROFESSIONAL EXPERIENCE
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">Gujarat Urja Vikas Nigam Limited (GUVNL) | Intern | Current</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-300">Firewall Log Analyzer:</h4>
                    <ul className="list-disc list-inside text-gray-400 ml-4">
                      <li>Developed a Cisco ASA log analyzer with JavaScript backend and TSX-based frontend</li>
                      <li>Created intuitive dashboards for security monitoring and analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Interactive 3D Substation Application:</h4>
                    <ul className="list-disc list-inside text-gray-400 ml-4">
                      <li>Built a cross-platform Flutter application for web, Android, and iOS platforms</li>
                      <li>Implemented interactive 3D models allowing users to explore substations and interact with components</li>
                      <li>Designed for internal company use, enhancing training and operational efficiency</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              <Code2 className="w-8 h-8 text-cyan-500" />
              PROJECTS
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">Urbanfix</h3>
                <p className="text-gray-400">Aug 2023 - May 2024</p>
                <p className="text-gray-300 mt-2">
                  Developed an Android app connecting local workers with residents needing home services
                </p>
                <p className="text-gray-400 mt-2">Technologies: Java, Android Studio, Firebase</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">SharkBark</h3>
                <p className="text-gray-400">Mar 2024 - May 2024</p>
                <p className="text-gray-300 mt-2">
                  Built a Python-based shark detection system using deep learning and computer vision
                </p>
                <p className="text-gray-400 mt-2">Technologies: Python, TensorFlow, Keras</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">SecMail</h3>
                <p className="text-gray-400">Aug 2022 - May 2023</p>
                <p className="text-gray-300 mt-2">
                  Created a secure email platform with end-to-end encryption and Gmail-like UI
                </p>
                <p className="text-gray-400 mt-2">Technologies: ReactJS, Firebase</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">Twig</h3>
                <p className="text-gray-400">Sep 2021 - Apr 2022</p>
                <p className="text-gray-300 mt-2">
                  Developed a social content aggregator app combining Reddit and Instagram features
                </p>
                <p className="text-gray-400 mt-2">Technologies: Java, Firebase</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-800/50">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12"
            >
              TECHNICAL SKILLS
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Java</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Python</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">SQL</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">TSX/JSX</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">ReactJS</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">TensorFlow</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Keras</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Firebase</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Supabase</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full">REST APIs</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">Computer Vision</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full">3D Modeling</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 flex items-center justify-center gap-4"
            >
              <Mail className="w-8 h-8 text-cyan-500" />
              CONTACT
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-8 text-lg"
            >
              Feel free to reach out for collaborations or just a friendly hello
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6"
            >
              <a href="mailto:depparmar3@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </a>
              <a href="tel:+919725362234" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/deep-parmar-29363527a/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/DepParmar" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;