import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faqs = () => {
    const faqsData = [
        {
            question: 'What services do you offer?',
            answer:
                'We offer a comprehensive range of IT services including: Web Development & Design, Mobile App Development, Cloud Solutions & DevOps, AI & Machine Learning, Digital Transformation Consulting.',
        },
        {
            question: 'How long does a typical project take?',
            answer: 'The project timeline varies depending on the complexity and scope of the project. We provide detailed timelines during the initial consultation.',
        },
        {
            question: 'What is your development process?',
            answer:
                'Our development process includes requirement gathering, planning, design, development, testing, and deployment. We follow agile methodologies to ensure flexibility and efficiency.',
        },
        {
            question: 'Do you provide post-launch support?',
            answer:
                'Yes, we offer post-launch support and maintenance packages to ensure your project runs smoothly and stays up-to-date.',
        },
        {
            question: 'What technologies do you work with?',
            answer:
                'We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, and more. Our team stays updated with the latest industry trends.',
        },
        {
            question: 'How do you ensure project security?',
            answer:
                'We implement industry-standard security practices, including code reviews, security audits, and data encryption, to protect your project and data.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-white mb-8 text-center tracking-wide">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="rounded-lg overflow-hidden shadow-lg bg-gray-800/90 hover:bg-gray-800/70"
                        >
                            {/* Question */}
                            <button
                                className="w-full text-left p-5 flex justify-between items-center text-white hover:bg-gray-700 transition duration-200"
                                onClick={() => handleToggle(index)}
                            >
                                <span className="font-medium text-lg">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-blue-400" />
                                    ) : (
                                        <FaChevronDown className="text-blue-400" />
                                    )}
                                </motion.div>
                            </button>
                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="p-5 border-t border-gray-700 text-gray-300"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
