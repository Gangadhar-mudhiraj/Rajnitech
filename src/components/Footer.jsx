import React, { useEffect, useState, useRef } from 'react';
import FooterItem from '../common/FooterItem';
import { useAnimation } from 'framer-motion';
import DetailsCard from '../common/DetailsCards';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


const Heading = ({ text = "Animated Heading" }) => {
    const controls = useAnimation();
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100, // Reduced stiffness for a smoother spring
                    damping: 10, // Increased damping for less bounce
                    duration: 2, // increased duration to make it slower
                },
            });
        } else {
            controls.start({ y: -100, opacity: 0 });
        }
    }, [isVisible, controls]);

    return (
        <motion.div
            ref={textRef}
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
            className="text-4xl text-white font-bold text-center my-4"
        >
            {text.toUpperCase()}
        </motion.div>
    );
};

const Footer = () => {
    const data = [
        {
            title: "Quick Links",
            items: ["Home", "About Us", "Services", "Portfolio", "Testimonials", "Contact"]
        },
        {
            title: "Our Services",
            items: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & Machine Learning", "IT Consulting", "Digital Marketing"]
        }
    ];

    return (
        <footer className="text-gray-300 px-6 md:px-16 bottom-0" style={{ zIndex: 9999, position: 'relative' }}>

            {/* 🔹 Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap">

                {/* 🔹 Description Section */}
                <div className="space-y-4">
                    <Heading text="Rajni Tech Foundation" />
                    <p className="text-gray-400 leading-relaxed">
                        Empowering businesses through innovative technology solutions.
                        We transform ideas into powerful digital experiences.
                    </p>
                </div>

                {/* 🔹 Quick Links & Services */}
                {data.map((section, index) => (
                    <FooterItem key={index} heading={section.title} items={section.items} />
                ))}
            </div>

            {/* 🔹 Middle Section (Newsletter & Social Icons) */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-12">

                {/* Contact Details */}
                <DetailsCard />

                {/* Newsletter */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <Heading text="Newsletter" />
                    <p className="text-gray-100">
                        Stay updated with our latest news and updates.
                    </p>
                    <div className="flex flex-col space-y-3 gap-8 ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-1/2 sm:w-48 px-4 py-2 bg-gray-800 text-white placeholder-gray-500 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-auto"
                        />
                        <button className="w-1/2 md:w-1/3 m-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                            Subscribe
                        </button>
                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-4 m-auto">
                            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition-all" />
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition-all" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 transition-all" />
                            <FaGithub className="text-2xl cursor-pointer hover:text-gray-500 transition-all" />
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-all" />
                        </div>
                    </div>

                </div>
            </div>

            {/* 🔹 Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm mt-12 border-t border-gray-700 py-4 ">
                <p className='text-lg'>&copy; 2025 Rajni Tech Foundation. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0 text-lg">
                    <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-white cursor-pointer">Terms of Service</p>
                    <p className="hover:text-white cursor-pointer">Cookie Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
