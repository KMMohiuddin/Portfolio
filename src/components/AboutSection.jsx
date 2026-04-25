import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaPlane, FaFilm, FaBasketballBall } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const AboutSection = () => {
  const { personal, about } = portfolioData;

  const hobbyIcons = {
    'Music': FaMusic,
    'Travel': FaPlane,
    'Movies': FaFilm,
    'Sports': FaBasketballBall,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="section-divider"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {about.heading}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {about.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-400 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-accent-50 p-4 rounded-lg"
                variants={itemVariants}
              >
                <p className="text-sm text-primary-600">Location</p>
                <p className="font-semibold text-primary-900">{personal.location}</p>
              </motion.div>
              <motion.div
                className="bg-primary-50 p-4 rounded-lg"
                variants={itemVariants}
              >
                <p className="text-sm text-primary-600">Experience</p>
                <p className="font-semibold text-primary-900">5+ Years</p>
              </motion.div>
              <motion.div
                className="bg-primary-50 p-4 rounded-lg"
                variants={itemVariants}
              >
                <p className="text-sm text-primary-600">Email</p>
                <p className="font-semibold text-primary-900 text-sm">{personal.email}</p>
              </motion.div>
              <motion.div
                className="bg-accent-50 p-4 rounded-lg"
                variants={itemVariants}
              >
                <p className="text-sm text-primary-600">Phone</p>
                <p className="font-semibold text-primary-900">{personal.phone}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <p className="text-lg text-primary-700 leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Hobbies */}
            <div className="pt-8 border-t border-primary-200">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {about.hobbies.map((hobby, index) => {
                  const HobbyIcon = hobbyIcons[hobby];
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex-shrink-0">
                        {HobbyIcon && <HobbyIcon size={24} className="text-accent-500" />}
                      </div>
                      <span className="font-medium text-primary-700">{hobby}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm">Projects Analyzed</p>
              </div>
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Dedication</p>
              </div>
              <div className="bg-gradient-to-br from-primary-400 to-accent-400 text-white p-4 rounded-lg text-center">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Certifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
