import React from 'react';
import { motion } from 'framer-motion';

const AboutCard = ({
    icon: Icon = () => null, // Default to an empty function if no icon is provided
    heading = "About Title",
    description = "Description of the section",
}) => {
    return (
        <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{
                x: 10,
                boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.4)",
                backgroundColor: "#1E293B",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all cursor-pointer"
        >
            {/* Icon */}
            <motion.div
                whileHover={{ rotateX: 360 }} // Rotate horizontally around itself
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-indigo-400 text-4xl mb-4"
            >
                <Icon />
            </motion.div>

            {/* Heading */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                    scale: 1.05,
                    color: "#818CF8",
                }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold text-indigo-300 mb-2"
            >
                {heading}
            </motion.h3>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-gray-400 mb-4"
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default AboutCard;
