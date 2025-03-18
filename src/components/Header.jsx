import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaProjectDiagram, FaSmile, FaClock,
    FaLaptopCode, FaMobileAlt, FaCloud, FaRobot,
    FaCertificate, FaStar, FaGoogle
} from 'react-icons/fa';
import Heading from '../common/Heading';

const Header = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gray-900 text-white min-h-[60vh] p-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="inline-block mb-4"
                    >
                        <FaGlobe className="text-6xl text-white" />
                    </motion.div>

                    <motion.h1
                        className="text-5xl font-extrabold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        #1 Ranked in Website Development
                    </motion.h1>

                    <motion.h2
                        className="text-3xl font-semibold mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Transforming Ideas into Digital Excellence
                    </motion.h2>

                    <motion.h3
                        className="text-2xl font-medium mt-2 text-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        India's Most Trusted Web Development Company
                    </motion.h3>

                    <motion.p
                        className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Crafting innovative digital solutions that drive business growth
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-indigo-800 text-white font-bold rounded-full shadow-lg hover:bg-indigo-500 transition duration-100"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>


            {/* Stats Section */}
            <div className="bg-gray-800/80 text-white py-16 mx-16 rounded-2xl hover:bg-gray-800/70 shadow-lg relative z-10 -translate-y-20 ">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Projects Delivered */}
                    <StatCard
                        icon={<FaProjectDiagram className="text-5xl text-blue-400 mb-4" />}
                        value="750+"
                        label="Projects Delivered"
                        delay={0.2}
                    />
                    {/* Client Satisfaction */}
                    <StatCard
                        icon={<FaSmile className="text-5xl text-green-400 mb-4" />}
                        value="100%"
                        label="Client Satisfaction"
                        delay={0.4}
                    />
                    {/* Years of Experience */}
                    <StatCard
                        icon={<FaClock className="text-5xl text-yellow-400 mb-4" />}
                        value="15+"
                        label="Years Experience"
                        delay={0.6}
                    />
                </div>
            </div>


            {/* Expertise Section */}
            <div className="bg-gray-900 text-white py-16 px-4 -mt-68 z-10">
                {/* Buttons */}
                <div className="flex justify-center gap-6 mb-12 pt-48">
                    <ActionButton label="Start Your Project" bgColor="bg-indigo-500" hoverColor="hover:bg-blue-600" />
                    <ActionButton label="View Portfolio" bgColor="bg-gray-700" hoverColor="hover:bg-gray-600" />
                </div>

                {/* Expertise Title */}
                <Heading text='Our Expertise' />

                {/* Expertise Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <ExpertiseCard icon={<FaLaptopCode />} title="Web Development" description="Custom websites & web applications" color="text-blue-400" />
                    <ExpertiseCard icon={<FaMobileAlt />} title="Mobile Apps" description="iOS & Android development" color="text-green-400" />
                    <ExpertiseCard icon={<FaCloud />} title="Cloud Solutions" description="Scalable cloud infrastructure" color="text-yellow-400" />
                    <ExpertiseCard icon={<FaRobot />} title="AI Integration" description="Smart automation solutions" color="text-purple-400" />
                </div>

                {/* Certifications Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                    <CertCard icon={<FaCertificate />} title="ISO 9001:2015" description="Certified Company" color="text-blue-400" />
                    <CertCard icon={<FaStar />} title="5.0 Rating" description="on Clutch" color="text-yellow-400" />
                    <CertCard icon={<FaGoogle />} title="Google Partner" description="Recognized by Google" color="text-red-400" />
                </div>
            </div>
        </>
    );
};

const StatCard = ({ icon, value, label, delay }) => (
    <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
    >
        {icon}
        <h2 className="text-4xl font-bold">{value}</h2>
        <p className="text-gray-400 text-lg mt-2">{label}</p>
    </motion.div>
);

const ExpertiseCard = ({ icon, title, description, color }) => (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className={`${color} text-5xl mb-4`}>{icon}</div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const CertCard = ({ icon, title, description, color }) => (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className={`${color} text-5xl mb-4`}>{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const ActionButton = ({ label, bgColor, hoverColor }) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-3 ${bgColor} text-white font-bold rounded-full shadow-lg ${hoverColor} transition duration-300`}
    >
        {label}
    </motion.button>
);

export default Header;
