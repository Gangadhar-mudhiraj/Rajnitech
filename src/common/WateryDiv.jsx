import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Floater from "./Floater";
import Navbar from "../components/Navbar";

const WateryDiv = ({ width = "100%", height = "300px" }) => {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [wavePath, setWavePath] = useState("M0,60 C300,10 600,130 900,60 C1200,10 1500,130 1800,60 L1800,0 L0,0 Z");

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setSize({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        let t = 0;
        const animateWave = () => {
            t += 0.1;
            const newPath = `M0,${60 + Math.sin(t) * 10} C300,${10 + Math.sin(t + 1) * 10} 
                            600,${130 + Math.sin(t + 2) * 10} 900,${60 + Math.sin(t + 3) * 10} 
                            C1200,${10 + Math.sin(t + 4) * 10} 1500,${130 + Math.sin(t + 5) * 10} 
                            1800,${60 + Math.sin(t + 6) * 10} L1800,0 L0,0 Z`;
            setWavePath(newPath);
        };

        const interval = setInterval(animateWave, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} style={{ width, height }} className="relative bg-gradient-to-b from-[#000428] to-[#1572B6] z-0 -top-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-bold text-center p-2 rounded w-full h-12"></div>

            {/* <Navbar /> */}

            {size.width > 0 && size.height > 0 &&
                Array.from({ length: 2 }).map((_, index) => (
                    <Floater key={index} containerWidth={size.width - 20} containerHeight={size.height - 20} />
                ))}

            {/* Animated Wavy Bottom */}
            <motion.svg
                className="absolute -bottom-16 left-0 w-full h-[70px] z-[-1] pointer-events-none"
                viewBox="0 0 1200 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                animate={{ d: wavePath }}
                transition={{ ease: "linear", duration: 0.1, repeat: Infinity }}
            >
                <motion.path d={wavePath} fill="#1572B6" />
            </motion.svg>
        </div>
    );
};

export default WateryDiv;