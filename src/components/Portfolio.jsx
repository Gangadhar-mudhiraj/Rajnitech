import { motion } from 'framer-motion'
import React from 'react'
import { HiGlobe, HiDeviceMobile, HiChip, HiCube, HiWifi, HiEye } from 'react-icons/hi'

const Card = ({ text, icon: Icon }) => {
    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:bg-gray-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon className="text-indigo-400 text-4xl" />
            <p className="text-gray-300 text-lg">{text}</p>
        </motion.div>
    )
}

const projects = [
    {
        text: "Web Development",
        icon: HiGlobe,
    },
    {
        text: "Mobile Apps",
        icon: HiDeviceMobile,
    },
    {
        text: "AI & ML",
        icon: HiChip,
    },
    {
        text: "Blockchain",
        icon: HiCube,
    },
    {
        text: "IoT",
        icon: HiWifi,
    },
    {
        text: "AR/VR",
        icon: HiEye,
    },
]

const Portfolio = () => {
    return (
        <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-indigo-400 mb-4 uppercase tracking-wide">
                    Our Work
                </h1>
                <h2 className="text-4xl font-bold mb-4">
                    Featured Projects
                </h2>
                <p className="text-xl font-semibold text-gray-300 max-w-2xl mx-auto">
                    Explore our innovative solutions across various technologies and industries.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} text={project.text} icon={project.icon} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
