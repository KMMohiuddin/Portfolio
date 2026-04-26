import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import { portfolioData } from '../data/content';
import Button from './Button';

const HeroSection = () => {
  const { personal, hero } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <p className="text-accent-500 font-semibold text-lg">Welcome to my portfolio</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-900 leading-tight">
                {hero.mainHeading}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl text-primary-600 max-w-lg">
                {hero.subheading}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-primary-500">
                {hero.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={`mailto:${personal.email}?subject=Let's%20Connect&body=Hi%20Mohiuddin,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20would%20love%20to%20connect%20and%20discuss%20potential%20opportunities.%0D%0A%0D%0ABest%20regards`}
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {hero.ctaText}
                </Button>
              </a>
              <ScrollLink to="about" smooth={true} duration={500}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                  Learn More
                </Button>
              </ScrollLink>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-200"
            >
              <div>
                <p className="text-3xl font-bold text-primary-900">3+</p>
                <p className="text-sm text-primary-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-900">10+</p>
                <p className="text-sm text-primary-600">Certifications</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Image Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-400 rounded-3xl transform rotate-6 opacity-30"></div>
              <img
                src={personal.heroImage}
                alt={personal.name}
                className="relative w-full h-[380px] md:h-[520px] rounded-3xl shadow-2xl transform -rotate-3 object-cover object-[center_35%]"
              />
              {/* Floating Card */}
              <motion.div
                className="absolute top-1/2 right-2 md:-right-6 -translate-y-1/2 bg-white px-5 py-4 rounded-2xl shadow-lg text-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-primary-900">Augmented Resource</p>
                <p className="text-xs text-accent-500">Grameenphone</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
            <div className="flex flex-col items-center text-primary-600">
              <p className="text-sm font-semibold mb-2">Scroll to explore</p>
              <FaArrowDown size={20} />
            </div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
