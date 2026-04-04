import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import "./marquee.scss";
import { useTranslation } from "react-i18next";

export default function Marquee() {
    const { t } = useTranslation();

    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const services = [
        t("marquee.service-1"),
        t("marquee.service-2"),
        t("marquee.service-3"),
        t("marquee.service-4"),
        t("marquee.service-5"),
        t("marquee.service-6"),
        t("marquee.service-7"),
    ];

    const startAnimation = () => {
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            },
        });
    };

    // ✅ الحل هنا
    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div
            className="marquee"
            onMouseEnter={() => {
                setIsHovered(true);
                controls.stop();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                startAnimation();
            }}
            onTouchStart={() => controls.stop()}
            onTouchEnd={() => startAnimation()}
        >
            <motion.div
                className="marquee__track"
                drag="x"
                dragConstraints={{ left: -500, right: 0 }}
                animate={controls}
            >
                {[...services, ...services].map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </motion.div>
        </div>
    );
}