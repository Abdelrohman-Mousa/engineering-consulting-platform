import type {Route} from "../../+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About US" },
        { name: "description", content: "About Us" },
    ];
}

import './aboutUs.scss';
import video from "/assets/video/about-2.mp4";
import office1 from "/assets/images/office.jpg";
import office2 from "/assets/images/office-2.jpg";
import service1 from "/assets/images/service-1.jpg";
import service2 from "/assets/images/service-2.jpg";
import service3 from "/assets/images/service-3.jpg";
import service4 from "/assets/images/servise-4.jpg";
import service5 from "/assets/images/service-5.jpg";
import {NumberTicker} from "~/components/ui/number-ticker";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";


const textVariants = {
    initial: {
        x: 0,
        y: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const listVariants = {
    initial: {
        x: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            ease: "easeOut",
        },
    },
};


const AboutUs = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            title: t("about.service-1"),
            image: service1,
        },
        {
            id: 2,
            title: t("about.service-2"),
            image: service2,
        },
        {
            id: 3,
            title: t("about.service-3"),
            image: service3,
        },
        {
            id: 4,
            title: t("about.service-4"),
            image: service4,
        },
        {
            id: 5,
            title: t("about.service-5"),
            image: service5,
        }
    ]


    return (
        <div className="about">
            <div className="about-video">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-hero-section"
                >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <motion.div
                className="about-cards"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="card">
                    <h3><NumberTicker value={20} />+</h3>
                    <p>{t("about.card-1")}</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={3000} />+</h3>
                    <p>{t("about.card-2")}</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={30} />+</h3>
                    <p>{t("about.card-3")}</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={1000} />+</h3>
                    <p>{t("about.card-4")}</p>
                </div>
            </motion.div>

            <div className="about-text">
                <motion.div
                    className="about-left"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                   <div className="about-left-img-1">
                       <img src={office2} alt="office" />
                   </div>
                    <div className="about-left-img-2">
                       <img src={office1} alt="office" />
                    </div>
                </motion.div
                >

                <motion.div
                    className="about-right"
                    variants={listVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="about-title">{t("about.title-1")}</h1>
                    <div className="about-para">
                        <p>{t("about.pra-1")}</p>
                        <p>{t("about.pra-2")}</p>
                        <p>{t("about.pra-3")}</p>
                    </div>
                    <motion.div
                        className="about-Why-Us"
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h1 className="about-title">{t("about.title-2")}</h1>
                        <div className="about-para">
                            <p>{t("about.pra-4")}</p>
                            <p>{t("about.pra-5")}</p>
                            <p>{t("about.pra-6")}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="about-services">
                <div className="hero-bg-lines">
                    <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                        <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                        <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                        <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                        <path d="M0 400 Q 300 500 600 400 T 1000 450" />
                    </svg>
                </div>
                <h1 className="services-title">{t("about.service")}</h1>

                <div className="about-services-container">
                    {services.map((service, index) => (
                        <motion.div
                            className="about-services-card"
                            key={index}
                            variants={textVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="image-service">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AboutUs;