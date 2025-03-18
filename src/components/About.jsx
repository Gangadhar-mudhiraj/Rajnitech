import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckCircle, HiUserGroup, HiGlobe, HiHeart } from 'react-icons/hi';
import AboutCard from './AboutCard';
import aboutimg from "../assets/aboutimg.png";

const DetailsCard = ({ text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.05,
                backgroundColor: "#1E293B",
                boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.4)"
            }}
            transition={{ duration: 0.3 }}
            className="flex my-6 items-center bg-gray-800 rounded-lg shadow-lg"
        >
            <HiOutlineCheckCircle className="text-5xl text-indigo-400 mb-2 p-2" />
            <p className="text-gray-400">{text}</p>
        </motion.div>
    );
};

const aboutSections = [
    {
        icon: HiUserGroup,
        heading: "Our Team",
        description: "We have a team of experienced professionals dedicated to excellence.",
    },
    {
        icon: HiGlobe,
        heading: "Global Reach",
        description: "Our solutions are trusted by businesses across the world.",
    },
    {
        icon: HiHeart,
        heading: "Our Mission",
        description: "To deliver high-quality and innovative solutions.",
    },
];

const About = () => {
    const text = [
        "Full-Stack Development",
        "Cloud Architecture",
        "AI & Machine Learning",
        "24/7 Expert Support",
    ];

    return (
        <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-extrabold text-indigo-400 mb-4">
                    Who We Are
                </h2>
                <p className="text-xl font-semibold text-gray-300">
                    Learn more about our mission and values
                </p>
            </motion.div>

            {/* About Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {aboutSections.map((section, index) => (
                    <AboutCard
                        key={index}
                        icon={section.icon}
                        heading={section.heading}
                        description={section.description}
                    />
                ))}
            </div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="img mt-12 flex justify-center"
            >
                <img
                    src={aboutimg}
                    alt="About"
                    className="rounded-xl shadow-lg w-full max-w-lg"
                />
            </motion.div>

            {/* Details Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                className="details text-center mt-12"
            >
                <h1 className="text-3xl font-bold text-indigo-400 mb-4">
                    We're Leading in Digital Innovation
                </h1>
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    At Rajni Tech Foundation, we're more than just a team – we're innovators, problem-solvers, and digital architects shaping the future of technology. Our diverse team brings together expertise from various tech domains to deliver exceptional solutions.
                </p>
            </motion.div>


            {text.map((item, index) => (
                <DetailsCard key={index} text={item} />
            ))}
            {/* Hero Stats Section */}
            <div className="hero grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1E293B",
                        boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
                >
                    <HiOutlineCheckCircle className="text-5xl text-indigo-400 mb-2" />
                    <span className="text-3xl font-bold text-indigo-300">750+</span>
                    <p className="text-gray-400">Projects Delivered</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1E293B",
                        boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
                >
                    <HiUserGroup className="text-5xl text-indigo-400 mb-2" />
                    <span className="text-3xl font-bold text-indigo-300">85+</span>
                    <p className="text-gray-400">Tech Experts</p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1E293B",
                        boxShadow: "0px 4px 15px rgba(79, 70, 229, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
                >
                    <HiHeart className="text-5xl text-indigo-400 mb-2" />
                    <span className="text-3xl font-bold text-indigo-300">500+</span>
                    <p className="text-gray-400">Happy Clients</p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;