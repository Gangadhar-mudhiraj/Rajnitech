import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
            className="text-4xl text-blue-200 font-bold text-center my-4"
        >
            {text.toUpperCase()}
        </motion.div>
    );
};


const FooterItem = ({ heading = "Heading", items = ["Home", "About", "Services", "Contact"] }) => {
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
                    stiffness: 100,
                    damping: 10,
                    duration: 2,
                },
            });
        } else {
            controls.start({ y: -100, opacity: 0 });
        }
    }, [isVisible, controls]);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            className="footer-item bg-white/20 rounded-lg p-6 w-full md:w-64"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className="relative">
                <Heading text={heading} />
            </div>

            {/* List Items */}
            <motion.div
                ref={textRef}
                initial={{ y: 200, opacity: 0 }}
                animate={controls}
                className="flex flex-col space-y-4 mt-4"
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative group cursor-pointer inline-block overflow-hidden"
                    >
                        {/* Animated Text */}
                        <motion.p
                            className="text-gray-300 group-hover:text-white transition-all duration-300 inline-block"
                        >
                            {item}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FooterItem;
