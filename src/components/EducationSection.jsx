import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const EducationSection = () => {
  const { education } = portfolioData;

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
      id="education"
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 to-accent-50"
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
            Educational Background
          </h2>
          <p className="text-xl text-primary-600">
            Building expertise through academic excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-400 via-primary-400 to-accent-400"></div>

          {/* Education Items */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0
                    ? 'md:flex-row-reverse'
                    : 'md:flex-row'
                } gap-8`}
                variants={itemVariants}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-card border-2 border-primary-200 hover:border-accent-400 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 bg-accent-100 rounded-lg">
                        <FaGraduationCap size={24} className="text-accent-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-primary-900">
                          {edu.degree}
                        </h3>
                        {edu.major && (
                          <p className="text-sm font-semibold text-accent-600">
                            {edu.major}
                          </p>
                        )}
                        {edu.field && (
                          <p className="text-sm font-semibold text-accent-600">
                            Field: {edu.field}
                          </p>
                        )}
                      </div>
                    </div>

                    <a
                      href={edu.institutionUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-primary-600 hover:text-accent-500 font-semibold"
                    >
                      {edu.institutionLogo && (
                        <img
                          src={edu.institutionLogo}
                          alt={`${edu.institution} logo`}
                          className="h-10 w-10 rounded-md object-contain border border-primary-100 bg-white p-1"
                        />
                      )}
                      {edu.institution}
                    </a>
                    <p className="text-sm text-primary-500">{edu.location}</p>

                    <div className="mt-4 pt-4 border-t border-primary-200 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-primary-600">
                          <strong>GPA:</strong> {edu.gpa || edu.cgpa}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary-600">
                        <FaCalendar size={14} />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-12 h-12 items-center justify-center">
                  <motion.div
                    className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.3 }}
                  ></motion.div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-card border-l-4 border-accent-500">
            <p className="text-sm text-primary-600 mb-2">Highest Achievement</p>
            <p className="text-3xl font-bold text-primary-900">3.92/4.0</p>
            <p className="text-xs text-primary-500 mt-2">Bachelor's CGPA</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border-l-4 border-primary-500">
            <p className="text-sm text-primary-600 mb-2">SSC Performance</p>
            <p className="text-3xl font-bold text-primary-900">5.0/5.0</p>
            <p className="text-xs text-primary-500 mt-2">Perfect Score</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border-l-4 border-accent-600">
            <p className="text-sm text-primary-600 mb-2">Academic Span</p>
            <p className="text-3xl font-bold text-primary-900">9 Years</p>
            <p className="text-xs text-primary-500 mt-2">2014 - 2023</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
