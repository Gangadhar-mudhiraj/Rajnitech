import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home'); // Initialize active item

    const navItems = [
        { name: 'Home', href: '#Home' },
        { name: 'About', href: '#About' },
        { name: 'Portfolio', href: '#Portfolio' },
        { name: 'Services', href: '#Services' },
        { name: 'Projects', href: 'https://rtf.org.in/projects.php' },
        { name: 'Contact', href: '#Contact' },
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavItemClick = (itemName) => {
        setActiveItem(itemName);
        setIsOpen(false); // Close mobile menu when an item is clicked
    };

    return (
        <nav className="bg-gray-900/90 text-white p-4 z-[100] sticky top-0 rounded-2xl mx-4 md:mx-16 z-[999]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl bg-indigo-600/50 p-2 font-bold rounded-2xl text-uppercase mr-28">{"RajniTech".toUpperCase()}</div>

                <div className="hidden md:flex space-x-2 md:space-x-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`hover:text-gray-200 rounded-2xl p-2 transition-colors duration-200 text-sm md:text-base ${activeItem === item.name ? 'bg-indigo-600' : 'hover:bg-indigo-600'
                                }`}
                            onClick={() => handleNavItemClick(item.name)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={handleToggle} className="text-xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-2"
                >
                    <div className="flex flex-col items-center space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`hover:text-gray-300 transition-colors duration-200 ${activeItem === item.name ? 'bg-[#1572B6]/50' : ''
                                    }`}
                                onClick={() => handleNavItemClick(item.name)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;