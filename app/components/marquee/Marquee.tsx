import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import "./marquee.scss";
import {useTranslation} from "react-i18next";


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