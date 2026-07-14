import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, description, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-orange-500 text-white px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{title}</h3>
          <p className="text-sm md:text-base text-blue-100 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;