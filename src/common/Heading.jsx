import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
            className="text-3xl text-blue-100 font-bold text-center"
        >
            {text}
        </motion.div>
    );
};

export default Heading;