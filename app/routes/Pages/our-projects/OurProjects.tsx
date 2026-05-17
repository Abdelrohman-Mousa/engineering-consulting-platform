import type {Route} from "../../+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        {
            title: "Engineering Services"
        },
        {
            name: "description",
            content:
                "Explore our engineering services including structural, architectural, and technical consultancy. Submit your project online and get expert feedback from qualified engineers in the UAE."
        }
    ];
}

import "./ourProjects.scss";
import arrow from "/assets/icons/arrow-modal.svg";
import {projects} from "./data/projects";
import { useState, useEffect } from "react";
import ProjectModal from "~/routes/Pages/our-projects/project-modal/ProjectModal";
import { AnimatePresence, motion } from "framer-motion";

const OurProjects = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow =
            selectedProject ? "hidden" : "auto";
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

                <motion.h2
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
                    Engineering <span>Projects</span> & Professional <span>Services</span>
                </motion.h2>

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
                    Delivering innovative engineering solutions and professional consulting services for residential, commercial, and industrial developments.
                </motion.p>

            </motion.div>

            <div className="our-projects-toggle">
                <div>
                    <motion.button
                        className={activeTab === "projects" ? "active" : ""}
                        onClick={() => setActiveTab("projects")}
                        whileTap={{ scale: 0.95 }}
                    >
                        Projects
                    </motion.button>
                </div>

                <div>
                    <motion.button
                        className={activeTab === "services" ? "active" : ""}
                        onClick={() => setActiveTab("services")}
                        whileTap={{ scale: 0.95 }}
                    >
                        Services
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
                                        <img src={project.introImage} alt={project.title} />
                                    </div>
                                    <div className="ourProjects-card-info">
                                        <div className="ourProjects-card-info-text">
                                            <h2>{project.title}</h2>
                                            <h4>{project.desc}</h4>
                                        </div>
                                        <div className="ourProjects-card-info-btn">
                                            <button >
                                                View Project
                                                <img src={arrow} alt="Arrow" />
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

                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -30
                                }}

                                transition={{
                                    duration: 0.4
                                }}
                            >
                                Welcome
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

