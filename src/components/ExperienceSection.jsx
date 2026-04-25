import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const ExperienceSection = () => {
  const { experience, extracurricular } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(0);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white"
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
            Professional Experience
          </h2>
          <p className="text-xl text-primary-600">
            Building data-driven solutions across fintech and business analytics
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <motion.div
                className="bg-white border-2 border-primary-200 rounded-lg overflow-hidden hover:border-accent-400 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                whileHover={{ borderColor: '#0ea5e9' }}
              >
                {/* Header */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-grow">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-500 hover:text-accent-600 transition-colors"
                        >
                          <h3 className="text-xl font-bold text-primary-900 hover:underline">
                            {exp.company}
                          </h3>
                        </a>
                        <p className="text-lg font-semibold text-primary-700 mt-2">
                          {exp.role}
                        </p>
                        <p className="text-sm text-primary-500 mt-1">
                          {exp.period} • {exp.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-primary-600 group-hover:text-accent-500 transition-colors">
                      {expandedIndex === index ? (
                        <FaChevronUp size={24} />
                      ) : (
                        <FaChevronDown size={24} />
                      )}
                    </div>
                  </div>

                  <p className="text-primary-600 mt-4">
                    {exp.description}
                  </p>
                </div>

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <motion.div
                    className="border-t border-primary-200 px-6 md:px-8 py-6 bg-primary-50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-semibold text-primary-900 mb-4">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-primary-700"
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-accent-500 rounded-full"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extracurricular Activities */}
        <div className="mt-20 pt-16 border-t border-primary-200">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Extracurricular Activities & Leadership
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {extracurricular.map((activity, index) => (
              <motion.a
                key={index}
                href={activity.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-primary-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: '#0ea5e9' }}
              >
                <img
                  src={activity.logo}
                  alt={activity.organization}
                  className="w-12 h-12 rounded-lg object-cover mb-4"
                />
                <h4 className="font-bold text-primary-900 mb-2">
                  {activity.organization}
                </h4>
                <p className="text-accent-500 font-semibold mb-2">
                  {activity.role}
                </p>
                <p className="text-sm text-primary-600">
                  {activity.duration}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
