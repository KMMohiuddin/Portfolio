import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaDatabase,
  FaChart,
  FaBrain,
  FaCloud,
  FaCode,
} from 'react-icons/fa';
import { portfolioData } from '../data/content';

const ToolsSection = () => {
  const { tools } = portfolioData;

  const categoryIcons = {
    'Programming & Data Analysis': FaPython,
    'Databases': FaDatabase,
    'Data Visualization & BI': FaChart,
    'Machine Learning': FaBrain,
    'Platforms & Cloud': FaCloud,
    'Development Tools': FaCode,
  };

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const toolVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="tools"
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
            Tools & Technologies
          </h2>
          <p className="text-xl text-primary-600">
            Proficient with industry-leading tools and platforms
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((toolCategory, index) => {
            const IconComponent = categoryIcons[toolCategory.category];
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 rounded-2xl p-6 hover:border-accent-400 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg">
                    {IconComponent && (
                      <IconComponent size={28} className="text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-primary-900">
                    {toolCategory.category}
                  </h3>
                </div>

                {/* Tools List */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {toolCategory.items.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      className="px-4 py-2 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-300 rounded-full text-sm font-semibold text-primary-800 hover:bg-gradient-to-r hover:from-accent-200 hover:to-primary-200 transition-all duration-300"
                      variants={toolVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tool}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Stack Summary */}
        <motion.div
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Complete Technology Ecosystem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-300">
                Core Strengths
              </h4>
              <ul className="space-y-3">
                {[
                  'Advanced SQL & Complex Queries',
                  'Python Data Science Stack (Pandas, NumPy, Scikit-learn)',
                  'QlikView & Power BI Dashboards',
                  'Machine Learning Models (LSTM, ARIMA, XGBoost)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-300">
                Infrastructure & DevOps
              </h4>
              <ul className="space-y-3">
                {[
                  'Apache Airflow for Workflow Automation',
                  'Cloud Platforms (AWS, Azure, GCP)',
                  'Database Management & Optimization',
                  'Version Control & Collaboration (Git, GitHub)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certification Badge */}
          <motion.div
            className="mt-8 pt-8 border-t border-primary-700 flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-accent-300 text-sm font-semibold">CERTIFIED IN</p>
              <p className="text-xl font-bold">Data Analytics & Business Intelligence</p>
            </div>
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Continuous Learning
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
