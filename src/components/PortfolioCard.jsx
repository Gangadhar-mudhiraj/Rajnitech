import React from 'react'
import { motion } from 'framer-motion'
import { HiSearch, HiLink } from 'react-icons/hi'

const PortfolioCard = ({ img, heading, text, items = [1, 2, 3] }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Section */}
            <div className="relative">
                <img
                    src={img}
                    alt={heading}
                    className="w-full h-64 object-cover transition duration-300 group-hover:blur-md"
                />

                {/* Buttons (Shown on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    {/* Search Button */}
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition duration-300">
                        <HiSearch className="w-6 h-6" />
                    </button>

                    {/* Link Button */}
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition duration-300">
                        <HiLink className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Heading */}
                <h3 className="text-xl font-bold text-indigo-300 mb-2">
                    {heading}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4">
                    {text}
                </p>

                {/* Items */}
                <div className="flex gap-2">
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCard
