import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-900 dark:to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon size={28} className="text-white md:w-8 md:h-8" />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-2 md:mb-3 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:text-blue-100 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-orange-500/10 rounded-full group-hover:bg-orange-400/20 transition-colors duration-300"></div>
    </motion.div>
  );
};

export default ServiceCard;