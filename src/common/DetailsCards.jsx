import React from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const DetailsCard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 rounded-lg p-6 shadow-md w-full flex flex-col items-center justify-between gap-6"
        >
            {/* Location */}
            <motion.div
                className="flex flex-col items-center space-x-4 bg-white/10 rounded-xl p-4 w-full md:w-auto transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
            >
                <MdLocationOn className="text-2xl text-blue-200" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-200">Plot No. 501, Gali No. 1, Rishi Nagar, Hisar, Haryana, India - 125001</p>
                </div>
            </motion.div>

            {/* Phone */}
            <motion.div
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4 w-full md:w-auto transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
            >
                <MdPhone className="text-2xl text-blue-200" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-200 w-auto">+91 1169652848</p>
                </div>
            </motion.div>

            {/* Email */}
            <motion.div
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4 w-full md:w-auto transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
            >
                <MdEmail className="text-2xl text-blue-200" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-200">info@rtf.org.in</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default DetailsCard;
