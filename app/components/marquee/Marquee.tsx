import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import "./marquee.scss";

const services = [
    "ARCHITECTURAL DESIGN",
    "STRUCTURAL DESIGN",
    "INTERIOR DESIGN",
    "URBAN PLANNING",
    "PROJECT MANAGEMENT",
];

export default function Marquee() {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // تشغيل الحركة
    const startAnimation = () => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            },
        });
    };

    return (
        <div
            className="marquee"
            onMouseEnter={() => {
                setIsHovered(true);
                controls.stop(); // ⛔ وقف الحركة
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                startAnimation(); // ▶️ كمل الحركة
            }}
        >
            <motion.div
                className="marquee__track"
                drag="x" // ✋ سحب يمين وشمال
                dragConstraints={{ left: -500, right: 0 }} // تتحكم في حدود السحب
                animate={controls}
                onLoad={startAnimation}
            >
                {[...services, ...services].map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </motion.div>
        </div>
    );
}