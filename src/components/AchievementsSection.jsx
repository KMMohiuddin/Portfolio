import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';

const AchievementsSection = () => {
  const { achievements } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(achievements.map((a) => a.category))];

  const filteredAchievements =
    selectedCategory === 'All'
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

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
      id="achievements"
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
            Achievements & Certifications
          </h2>
          <p className="text-xl text-primary-600">
            Recognitions and milestones in my professional journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-white text-primary-700 border-2 border-primary-200 hover:border-accent-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-accent-300 uppercase tracking-wider">
                    {achievement.category}
                  </p>
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  {achievement.title}
                </h3>
              </div>

              {/* Static Badge for mobile */}
              <div className="md:hidden absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {achievement.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-primary-600">
              No achievements found for this category.
            </p>
          </motion.div>
        )}

        {/* Achievements Summary */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-accent-500 text-center">
            <p className="text-sm text-primary-600 mb-2">Total Achievements</p>
            <p className="text-3xl font-bold text-primary-900">
              {achievements.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-primary-500 text-center">
            <p className="text-sm text-primary-600 mb-2">Competitions Won</p>
            <p className="text-3xl font-bold text-primary-900">
              {achievements.filter((a) => a.category === 'Competition').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-accent-600 text-center">
            <p className="text-sm text-primary-600 mb-2">Leadership Roles</p>
            <p className="text-3xl font-bold text-primary-900">
              {achievements.filter((a) => a.category === 'Leadership').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-primary-600 text-center">
            <p className="text-sm text-primary-600 mb-2">Training Programs</p>
            <p className="text-3xl font-bold text-primary-900">
              {achievements.filter((a) => a.category === 'Training').length}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
