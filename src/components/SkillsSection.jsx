import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import Card from './Card';

const SkillsSection = () => {
  const { skills } = portfolioData;

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
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
            Core Competencies
          </h2>
          <p className="text-xl text-primary-600">
            Technical and analytical expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-primary-50 border border-primary-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < skill.rating
                            ? 'text-amber-400'
                            : 'text-primary-200'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {skill.category}
                </h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Level Bar */}
                <div className="mt-4">
                  <div className="w-full bg-primary-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-accent-400 to-accent-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(skill.rating / 5) * 100}%`,
                      }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <p className="text-xs text-primary-600 mt-2 text-right">
                    {skill.rating}/5 Proficiency
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Categories */}
        <motion.div
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary-900 mb-8">
            Specialized Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">
                Data Analytics & BI
              </h4>
              <ul className="space-y-2">
                {[
                  'Real-time data analysis',
                  'Revenue reconciliation',
                  'Fraud detection',
                  'Business process analysis',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-primary-700">
                    <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary-900 mb-4">
                Technical Stack
              </h4>
              <ul className="space-y-2">
                {[
                  'SQL & Database Management',
                  'Python & Machine Learning',
                  'Data Visualization (QlikView, Power BI)',
                  'Cloud Platforms (AWS, Azure)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-primary-700">
                    <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
