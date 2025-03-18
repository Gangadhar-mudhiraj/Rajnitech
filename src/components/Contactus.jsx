import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import Heading from '../common/Heading';

const ContactUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white"
        >
            <div className="max-w-3xl mx-auto">
                {/* Title Section */}
                <Heading text='Contact Us' />

                <p className="text-lg text-gray-400 mb-12 text-center">
                    Get in touch with us for any queries or services
                </p>

                {/* Address */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg transition-all"
                >
                    <h3 className="text-xl font-semibold mb-2 text-indigo-300">Our Address</h3>
                    <p className="text-gray-400">Plot No. 501, Gali No. 1</p>
                    <p className="text-gray-400">Rishi Nagar, Hisar</p>
                    <p className="text-gray-400">Haryana, India - 125001</p>
                </motion.div>

                {/* Email */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg transition-all"
                >
                    <HiMail className="text-indigo-400 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1 text-indigo-300">Email Us</h3>
                        <p className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                            info@rtf.org.in
                        </p>
                    </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg transition-all"
                >
                    <HiPhone className="text-indigo-400 text-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold mb-1 text-indigo-300">Call Us</h3>
                        <p className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                            +91 1169652848
                        </p>
                    </div>
                </motion.div>

                {/* Form */}
                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Your Phone (optional)
                        </label>
                        <input
                            type="tel"
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        />
                    </div>

                    {/* Service */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Select Service (optional)
                        </label>
                        <select
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        >
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>Cloud Solutions</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">
                            Your Message
                        </label>
                        <textarea
                            rows="4"
                            className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400"
                        ></textarea>
                    </div>

                    {/* Send Message Button */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(129, 140, 248, 0.9)',
                            boxShadow: '0px 4px 15px rgba(79, 70, 229, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold transition-all"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactUs;
