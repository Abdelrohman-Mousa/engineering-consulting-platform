export function meta() {
    const url =
        "https://engineering-consulting-platform.vercel.app/projects";

    const image =
        "https://engineering-consulting-platform.vercel.app/og-image.jpg";

    return [
        {
            title:
                "Engineering Projects & Services | Advance Engineering Consultancy UAE",
        },
        {
            name: "description",
            content:
                "Explore our engineering projects and professional services including architectural design, structural engineering, project management, construction supervision, and engineering consultation across the UAE.",
        },
        {
            name: "keywords",
            content:
                "engineering projects UAE, engineering services UAE, architecture services, structural engineering, construction supervision, project management UAE",
        },
        {
            name: "robots",
            content: "index, follow",
        },

        // Open Graph

        {
            property: "og:title",
            content:
                "Engineering Projects & Services | Advance Engineering Consultancy",
        },
        {
            property: "og:description",
            content:
                "Discover our completed engineering projects and comprehensive engineering services delivered by experienced professionals across the UAE.",
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
            property: "og:image:alt",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:site_name",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:locale",
            content: "en_US",
        },

        // Twitter

        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:title",
            content:
                "Engineering Projects & Services | Advance Engineering Consultancy",
        },
        {
            name: "twitter:description",
            content:
                "Explore engineering projects, architecture, structural engineering and project management services across the UAE.",
        },
        {
            name: "twitter:image",
            content: image,
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
            href: "https://engineering-consulting-platform.vercel.app/projects",
        },
    ];
}

import "./ourProjects.scss";
import arrow from "/assets/icons/arrow-modal.svg";
import {projects} from "./data/projects";
import {services} from "./data/services";
import { useState, useEffect } from "react";
import ProjectModal from "~/routes/Pages/our-projects/project-modal/ProjectModal";
import { AnimatePresence, motion } from "framer-motion";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";


const OurProjects = () => {

    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeService, setActiveService] = useState(services[0]);


    useEffect(() => {

        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [selectedProject]);

    return (
        <div className="our-projects">
            <motion.div
                className="our-projects-head"

                initial={{
                    opacity: 0,
                    y: 40
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut"
                }}
            >

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6
                    }}
                >
                    <span> {t("head-projects.title.proj")}</span> {t("head-projects.title.engineering")} & <span>{t("head-projects.title.services")}</span> {t("head-projects.title.professional")}
                </motion.h1>

                <motion.p

                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 0.4,
                        duration: 0.6
                    }}
                >
                    {t("head-projects.pra")}
                </motion.p>

            </motion.div>

            <div className="our-projects-toggle">
                <div>
                    <motion.button
                        className={activeTab === "projects" ? "active" : ""}
                        onClick={() => setActiveTab("projects")}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t("head-projects.btn-1")}
                    </motion.button>
                </div>

                <div>
                    <motion.button
                        className={activeTab === "services" ? "active" : ""}
                        onClick={() => setActiveTab("services")}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t("head-projects.btn-2")}
                    </motion.button>
                </div>
            </div>

            {/*==========Cards========*/}
            <div className="our-projects-container">
                <AnimatePresence mode="wait">

                {
                    activeTab === "projects" && (

                        <motion.div
                            className="ourProjects-cards"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}

                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}

                        >
                            {projects.map((project) => (
                                <motion.div
                                    className="ourProjects-card"
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}

                                    whileHover={{ y: -5 }}
                                >
                                    <div className="ourProjects-card-image">
                                        <img
                                            src={project.introImage}
                                            alt={t(project.title)}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="ourProjects-card-info">
                                        <div className="ourProjects-card-info-text">
                                            <h2>{t(project.title)}</h2>
                                            <h4>{t(project.desc)}</h4>
                                        </div>
                                        <div className="ourProjects-card-info-btn">
                                            <button >
                                                <span>{t("head-projects.btn-3")}</span>
                                                <img
                                                    src={arrow}
                                                    alt=""
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                )}
                </AnimatePresence>


                {/*=========Services========*/}

                <AnimatePresence mode="wait">

                    {
                        activeTab === "services" && (

                            <motion.div
                                className="ourServices"

                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="services-container">
                                    <div className="server-list">

                                        {services.map((service, index) => (
                                            <button
                                                key={service.id}
                                                onClick={() => setActiveService(service)}
                                                className={`services-item ${
                                                    activeService.id === service.id ? "active" : ""
                                                }`}
                                            >
                                                <span className="services-number">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <span className="services-name">
                                                   {t(service.title)}
                                                </span>

                                            </button>
                                        ))}
                                    </div>

                                    {/*Services Content*/}
                                    <div className="services-content">
                                        <span className="services-tag">{t("head-projects.service")}</span>

                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeService.id}
                                                className="info"
                                                initial={{ opacity: 0, x: 30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -30 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className="image">
                                                    <img
                                                        src={activeService.img}
                                                        alt={t(activeService.title)}
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </div>

                                                <div className="info-1">
                                                    <h3>{t(activeService.title)}</h3>
                                                    <p>{t(activeService.desc)}</p>

                                                    <Link to="/consultation-request">
                                                        <button className="services-btn">
                                                            {t("head-projects.serviceRequest")}
                                                        </button>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                </AnimatePresence>
            </div>

            <ProjectModal
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
        </div>
    )
}
export default OurProjects

