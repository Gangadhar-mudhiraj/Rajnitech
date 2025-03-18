import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      title: 'CEO, TechCorp',
      review:
        'Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They\'ve transformed our digital presence completely.',
      date: 'December 2024',
      company: 'TechCorp Solutions',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      title: 'CTO, InnovateTech',
      review:
        'The innovative solutions and technical expertise provided by the team exceeded our expectations. They\'re not just service providers, they\'re true technology partners.',
      date: 'November 2024',
      company: 'InnovateTech Labs',
      rating: 4,
    },
    {
      name: 'Michael Chen',
      title: 'Founder, NextGen',
      review:
        'Their ability to understand our vision and translate it into a cutting-edge solution was remarkable. The end result has helped us scale our operations significantly.',
      date: 'October 2024',
      company: 'NextGen Innovations',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300, // Move in horizontal direction only
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300, // Exit in horizontal direction only
      opacity: 0,
    }),
  };

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden h-72">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-full h-full bg-gray-800 shadow-lg rounded-2xl p-8 text-white text-center"
            >
              {/* Rating Stars */}
              <div className="absolute top-4 left-4 flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl italic font-light mb-6 mt-26">
                "{reviews[currentIndex].review}"
              </p>

              {/* User Info */}
              <div className="absolute top-4 right-4 text-right">
                <div className="font-semibold text-2xl">
                  {reviews[currentIndex].name}
                </div>
                <div className="text-md text-gray-400 mt-1">
                  {reviews[currentIndex].title}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {reviews[currentIndex].date} · {reviews[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-500 transition-all duration-300 rounded-full p-3 shadow-lg"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-white text-lg" />
          </button>

          {/* Right Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-500 transition-all duration-300 rounded-full p-3 shadow-lg"
            onClick={handleNext}
          >
            <FaChevronRight className="text-white text-lg" />
          </button>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-500'
                  } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
