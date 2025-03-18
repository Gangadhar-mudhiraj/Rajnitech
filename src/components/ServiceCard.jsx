import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({
    icon: Icon = () => null,
    heading = "Service Title",
    description = "Description of the service",
    items = [],
}) => {
    return (
        <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{
                x: 0,
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(79, 70, 229, 0.4)",
                backgroundColor: "#1E293B",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 10 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all cursor-pointer"
        >
            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: 1, // Rotates once on hover
                }}
                className="text-indigo-400 text-5xl mb-4 flex justify-center"
            >
                <Icon />
            </motion.div>

            {/* Heading */}
            <h3 className="text-xl font-bold text-indigo-300 mb-2 text-center">
                {heading}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 text-center">
                {description}
            </p>

            {/* List Items */}
            <ul className="mb-6 space-y-1">
                {items.map((item, index) => (
                    <li key={index} className="text-gray-400 flex items-center">
                        <span className="mr-2">•</span>
                        {item}
                    </li>
                ))}
            </ul>

            {/* Call Now Button */}
            <motion.button
                whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(129, 140, 248, 0.9)',
                    boxShadow: '0px 4px 15px rgba(79, 70, 229, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full py-2 px-4 rounded-lg bg-indigo-600 text-white font-semibold transition-all"
            >
                Call Now
            </motion.button>
        </motion.div>
    );
};

export default ServiceCard;
