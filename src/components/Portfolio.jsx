import { motion } from 'framer-motion'
import React from 'react'
import { HiGlobe, HiDeviceMobile, HiChip, HiCube, HiWifi, HiEye } from 'react-icons/hi'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import PortfolioCard from './PortfolioCard'

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

// Fixing the `cards2` array by providing complete objects
const cards2 = [
    {
        text: "12+ Web Apps",
        icon: HiGlobe,
    },
    {
        text: "8+ AI Projects",
        icon: HiChip,
    },
    {
        text: "7+ IoT Solutions",
        icon: HiWifi,
    },
    {
        text: "6+ AR/VR Apps",
        icon: HiEye,
    }
]

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

const portfolioCards = [
    {
        img: img1,
        heading: "E-Commerce Platform",
        text: "Modern e-commerce solution with AI-powered recommendations",
        techStack: ["React", "Node.js", "MongoDB"]
    },
    {
        img: img2,
        heading: "AI Image Recognition",
        text: "Advanced computer vision system for retail analytics",
        techStack: ["TensorFlow", "Python", "OpenCV"]
    },
    {
        img: img3,
        heading: "DeFi Platform",
        text: "Decentralized finance platform with smart contracts",
        techStack: ["Solidity", "Web3.js", "React"]
    }
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

            {/* Portfolio Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {portfolioCards.map((portfolio, index) => (
                    <PortfolioCard
                        key={index}
                        img={portfolio.img}
                        heading={portfolio.heading}
                        text={portfolio.text}
                        items={portfolio.techStack}
                    />
                ))}
            </div>

            {/* Bottom Section with `cards2` */}
            <div className="mt-12">
                <button className="block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg transition duration-300 m-auto">
                    View All Projects
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {cards2.map((card, index) => (
                        <Card key={index} text={card.text} icon={card.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
