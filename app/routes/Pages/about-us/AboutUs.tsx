export function meta() {
    const url = "https://engineering-consulting-platform.vercel.app/about";
    const image = "https://engineering-consulting-platform.vercel.app/og-image.jpg";

    return [
        {
            title:
                "About Us | Advance Engineering Consultancy UAE",
        },
        {
            name: "description",
            content:
                "Learn more about Advance Engineering Consultancy. We provide architectural design, structural engineering, project management, and online engineering consultation services across the UAE.",
        },
        {
            name: "keywords",
            content:
                "about engineering consultancy, UAE engineering company, architecture company UAE, project management, structural engineering",
        },
        {
            name: "robots",
            content: "index, follow",
        },

        {
            property: "og:title",
            content: "About Advance Engineering Consultancy",
        },
        {
            property: "og:description",
            content:
                "Discover our engineering expertise, professional team, and commitment to delivering innovative engineering solutions in the UAE.",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: url,
        },
        {
            property: "og:image",
            content: image,
        },

        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:title",
            content: "About Advance Engineering Consultancy",
        },
        {
            name: "twitter:description",
            content:
                "Professional engineering consultancy serving clients across the UAE.",
        },
        {
            name: "twitter:image",
            content: image,
        },
        {
            property: "og:site_name",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:locale",
            content: "en_US",
        },
        {
            property: "og:image:alt",
            content: "Advance Engineering Consultancy",
        },
        {
            name: "twitter:image:alt",
            content: "Advance Engineering Consultancy",
        },
    ];
}

export function links() {
    return [
        {
            rel: "canonical",
            href: "https://engineering-consulting-platform.vercel.app/about",
        },
    ];
}

import './aboutUs.scss';
import video from "/assets/video/about-2.mp4";
import office1 from "/assets/images/office.webp";
import office2 from "/assets/images/office-2.webp";
import service1 from "/assets/images/service-1.webp";
import service2 from "/assets/images/service-2.webp";
import service3 from "/assets/images/service-3.webp";
import service4 from "/assets/images/servise-4.webp";
import service5 from "/assets/images/service-5.webp";
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
                    poster="/assets/images/Architectural.webp"
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
                       <img
                           src={office2}
                           alt="Engineering Consultation Team"
                           loading="lazy"
                           decoding="async"
                       />
                   </div>
                    <div className="about-left-img-2">
                       <img
                           src={office1}
                           alt="Advance Engineering Consultancy Office in UAE"
                           loading="lazy"
                           decoding="async"
                       />
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
                        <h2 className="about-title">{t("about.title-2")}</h2>
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
                <h2 className="services-title">{t("about.service")}</h2>

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
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    decoding="async"
                                />
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