import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { portfolioData } from '../data/content';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-primary-900 text-white pt-20 pb-8">
      {/* Top Section */}
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              K.M. Mohiuddin
            </h3>
            <p className="text-primary-300 mb-6">
              Data Analyst & Business Intelligence Expert
            </p>
            <p className="text-sm text-primary-400">
              Transforming complex data into actionable insights for business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', to: 'hero' },
                { name: 'About', to: 'about' },
                { name: 'Experience', to: 'experience' },
                { name: 'Skills', to: 'skills' },
              ].map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-primary-300 hover:text-accent-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-primary-300 hover:text-accent-400 transition-colors group"
              >
                <FaEnvelope size={18} className="group-hover:scale-125 transition-transform" />
                <span className="text-sm">{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 text-primary-300 hover:text-accent-400 transition-colors group"
              >
                <FaPhone size={18} className="group-hover:scale-125 transition-transform" />
                <span className="text-sm">{personal.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-primary-300">
                <FaMapMarkerAlt size={18} />
                <span className="text-sm">{personal.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="border-t border-primary-700 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={personal.profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-800 rounded-lg hover:bg-accent-500 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={20} className="group-hover:rotate-12 transition-transform" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href={personal.profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-800 rounded-lg hover:bg-accent-500 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} className="group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={personal.profileLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-800 rounded-lg hover:bg-accent-500 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Facebook</span>
            </motion.a>

            <motion.a
              href={personal.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent-500 rounded-lg hover:bg-accent-600 transition-all duration-300 group font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-primary-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-center md:text-left text-sm text-primary-400">
            © {currentYear} K.M. Mohiuddin. All rights reserved. Built with React & Tailwind CSS.
          </p>

          {/* Scroll to Top Button */}
          <ScrollLink to="hero" smooth={true} duration={500}>
            <motion.button
              className="p-3 bg-accent-500 rounded-full hover:bg-accent-600 transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp size={20} />
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
