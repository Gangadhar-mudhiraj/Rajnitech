import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaAws, FaGitAlt, FaGithub, FaLock
} from "react-icons/fa";
import {
    SiMongodb, SiMysql, SiPostgresql, SiDocker, SiGraphql, SiPostman, SiJest, SiCypress, SiJsonwebtokens
} from "react-icons/si";

const codingElements = [
    { icon: <FaHtml5 size={20} color="#E34F26" />, label: "HTML5" },
    { icon: <FaCss3Alt size={20} color="#1572B6" />, label: "CSS3" },
    { icon: <FaReact size={20} color="#61DAFB" />, label: "React" },
    { icon: <FaNodeJs size={20} color="#339933" />, label: "Node.js" },
    { icon: <FaJava size={20} color="#007396" />, label: "Java" },
    { icon: <SiMongodb size={20} color="#47A248" />, label: "MongoDB" },
    { icon: <SiMysql size={20} color="#4479A1" />, label: "MySQL" },
    { icon: <SiPostgresql size={20} color="#336791" />, label: "PostgreSQL" },
    { icon: <FaAws size={20} color="#FF9900" />, label: "AWS" },
    { icon: <SiDocker size={20} color="#2496ED" />, label: "Docker" },
    { icon: <SiGraphql size={20} color="#E10098" />, label: "GraphQL" },
    { icon: <SiPostman size={20} color="#FF6C37" />, label: "Postman" },
    { icon: <FaGitAlt size={20} color="#F05032" />, label: "Git" },
    { icon: <FaGithub size={20} color="#181717" />, label: "GitHub" },
    { icon: <SiJest size={20} color="#C21325" />, label: "Jest" },
    { icon: <SiCypress size={20} color="#17202C" />, label: "Cypress" },
    { icon: <SiJsonwebtokens size={20} color="#000000" />, label: "JWT" },
    { icon: <FaLock size={20} color="#4CAF50" />, label: "SSL" }
];

const Floater = ({ containerWidth, containerHeight }) => {
    const [positions, setPositions] = useState(
        codingElements.map(() => ({
            x: Math.random() * containerWidth,
            y: Math.random() * containerHeight,
        }))
    );

    // Floating animation for elements
    const springs = positions.map((pos) =>
        useSpring({
            from: { x: pos.x, y: pos.y },
            to: { x: pos.x, y: pos.y },
            config: { tension: 20, friction: 8 },
        })
    );

    useEffect(() => {
        let timeout;

        const moveRandomly = () => {
            springs.forEach((spring) => {
                const offsetX = (Math.random() - 0.5) * 30;
                const offsetY = (Math.random() - 0.5) * 30;

                const newX = Math.min(containerWidth - 20, Math.max(0, spring.x.get() + offsetX));
                const newY = Math.min(containerHeight - 20, Math.max(0, spring.y.get() + offsetY));

                spring.x.start(newX);
                spring.y.start(newY);
            });

            timeout = setTimeout(moveRandomly, Math.random() * 1500 + 500);
        };

        moveRandomly();

        return () => clearTimeout(timeout);
    }, [containerWidth, containerHeight, springs]);

    // Repel effect on mouse hover
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            springs.forEach((spring) => {
                const dx = spring.x.get() - clientX;
                const dy = spring.y.get() - clientY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) { // Increased repel distance
                    const repelFactor = 40; // Increased repel factor

                    const newX = spring.x.get() + (dx / distance) * repelFactor;
                    const newY = spring.y.get() + (dy / distance) * repelFactor;

                    // Ensure elements stay within container bounds
                    spring.x.start(Math.min(containerWidth - 20, Math.max(0, newX)));
                    spring.y.start(Math.min(containerHeight - 20, Math.max(0, newY)));
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerWidth, containerHeight, springs]);


    return (
        <>
            {springs.map((spring, i) => (
                <animated.div
                    key={i}
                    style={{
                        position: "absolute",
                        left: spring.x,
                        top: spring.y,
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        borderRadius: "8px",
                        boxShadow: `0 0 8px ${codingElements[i].icon.props.color}`,
                        cursor: "pointer",
                    }}
                >
                    {codingElements[i].icon}
                </animated.div>
            ))}
        </>
    );
};

export default Floater;
