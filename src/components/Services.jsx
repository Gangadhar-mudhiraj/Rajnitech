import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiCloud, HiPhone, HiMail } from 'react-icons/hi';
import ServiceCard from './ServiceCard';

const services = [
    {
        icon: HiCode,
        heading: "Web Development",
        description: "We build responsive and high-performance web applications.",
        items: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        icon: HiCloud,
        heading: "Cloud Solutions",
        description: "Scalable and secure cloud infrastructure for your business.",
        items: ["AWS", "Azure", "Google Cloud"],
    },
    {
        icon: HiPhone,
        heading: "Mobile App Development",
        description: "Cross-platform mobile applications using cutting-edge technology.",
        items: ["React Native", "Flutter", "Swift"],
    },
    {
        icon: HiMail,
        heading: "Customer Support",
        description: "24/7 customer support with professional assistance.",
        items: ["Live Chat", "Email", "Phone"],
    },
];

const Services = () => {
    return (
        <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center mb-12"
            >
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, color: "#818CF8" }}
                    className="text-4xl font-extrabold text-indigo-400 mb-4"
                >
                    What We Offer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl font-semibold text-gray-300"
                >
                    Innovative Tech Solutions
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-gray-400 mt-2"
                >
                    Transforming businesses through cutting-edge technology and innovative solutions.
                </motion.p>
            </motion.div>

            {/* Service Cards */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        heading={service.heading}
                        description={service.description}
                        items={service.items}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
