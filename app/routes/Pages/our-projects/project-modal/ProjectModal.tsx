import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-navigations/styles/material.css";


import "./project-modal.scss";
import { AnimatePresence, motion } from "framer-motion";
import closed from "/assets/icons/closed.png";
import sent from "/assets/icons/sent.svg";
import instagram from "/assets/icons/instagram.svg";
import whatsapp from "/assets/icons/whatsapp.svg";
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import arrow from "../../../../../src/animations/arrow.json";
import Lottie from "lottie-react";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

interface ProjectModalProps {
    selectedProject: any;
    setSelectedProject: (project: any) => void;
}

const ProjectModal = (

    {
         selectedProject,
         setSelectedProject
    }: ProjectModalProps) => {

    const { t, i18n } = useTranslation();


    return (

        <AnimatePresence>

            {selectedProject && (

                <motion.div
                    className="project-modal-overlay"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    onClick={() => setSelectedProject(null)}
                >

                    <motion.div
                        className="project-modal"

                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 40
                        }}

                        transition={{
                            duration: 0.35,
                            ease: "easeOut"
                        }}

                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="project-modal-content">
                            <div className="project-modal-btns">
                                <button onClick={() => setSelectedProject(null)}>
                                    <img src={closed} alt="Close" />
                                </button>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={sent} alt="Send" />
                                    </button>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={whatsapp} alt="WhatsApp"/>
                                    </button>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <img src={instagram} alt="Instagram" />
                                    </button>
                                </a>
                            </div>

                            <div className="project-modal-info">
                                <div className="project-modal-info-head">
                                    <h2>{t(selectedProject.projectName)}</h2>
                                    <div className="type-location">
                                        <p>{t(selectedProject.type)}</p> -
                                        <p>{t(selectedProject.location)}</p>
                                    </div>
                                </div>

                                {/*=======Carousal===========*/}
                                <div className="project-carousel">
                                    <CarouselComponent
                                        key={`${selectedProject.id}-${i18n.language}`}
                                        enableRtl={i18n.language === "ar"}
                                        autoPlay={true}
                                        interval={2000}
                                        pauseOnHover={true}
                                        animationEffect="Fade"
                                        indicators={true}
                                        loop={true}
                                    >
                                        <CarouselItemsDirective>
                                            {selectedProject.gallery.map((item: any) => (
                                                <CarouselItemDirective
                                                    key={item.id}
                                                    template={`
                                                        <figure class="img-container">
                                                            <img src="${item.image}" alt="${item.title}" style="height:100%;width:100%;object-fit:cover;object-position: center;" />
                                                            <figcaption class="img-caption">${t(item.title)}</figcaption>
                                                        </figure>
                                                    `}
                                                />
                                            ))}
                                        </CarouselItemsDirective>
                                    </CarouselComponent>
                                </div>

                                {/* Overview */}
                                <div className="project-modal-info-overview">
                                    <h2>{t("head-projects.ProjectOverview")}</h2>

                                    <div className="project-modal-info-overview-cards">

                                        {selectedProject.overview.map((item: any) => (
                                            <div
                                                className="project-modal-info-overview-card"
                                                key={item.id}
                                            >

                                                <div className="title-icons">
                                                    <img src={item.icon} alt={item.label} />
                                                    <h2>{t(item.label)}</h2>
                                                </div>

                                                <p>{t(item.value)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenge & Solution */}
                                <div className="project-modal-challenge-solution">

                                    <h2>{t("head-projects.Challenge-Solution")}</h2>

                                    <div className="arrow-challenge-solution">
                                        <Lottie
                                            animationData={arrow}
                                            loop={true}
                                            className="arrow-animation"
                                        />
                                    </div>

                                    <div className="challenge-solution-wrapper">
                                        <div className="challenge-card">
                                            <div className="card-badge challenge">
                                                {t("head-projects.Challenge")}
                                            </div>

                                            <p>
                                                {t(selectedProject.challengeSolution.challenge)}
                                            </p>

                                        </div>

                                        <div className="solution-card">
                                            <div className="card-badge solution">
                                                {t("head-projects.Solution")}
                                            </div>
                                            <p>
                                                {t(selectedProject.challengeSolution.solution)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Services Provided */}
                                <div className="project-modal-services">

                                    <h2>{t("head-projects.Services-Provided")}</h2>

                                    <div className="project-modal-services-cards">

                                        {selectedProject.servicesProvided.map((service: any) => (
                                            <div
                                                className="project-modal-services-card"
                                                key={service.id}
                                            >
                                                <div className="service-icon">
                                                    <img
                                                        src={service.icon}
                                                        alt={t(service.title)}
                                                    />
                                                </div>
                                                <h3>{t(service.title)}</h3>
                                                <p>{t(service.description)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="project-modal-cta">

                                    <div className="project-modal-cta-content">

                                        <span>{t("head-projects.cta.Let’s-Build")}</span>

                                        <h2>
                                            {t("head-projects.cta.Your-Dream")}
                                        </h2>

                                        <p>
                                            {t("head-projects.cta.pra")}
                                        </p>

                                        <div className="project-modal-cta-buttons">
                                                    <Link to="/consultation-request">
                                                <button
                                                    className="primary-btn"
                                                >
                                                    {t("head-projects.cta.btn-2")}
                                                </button>
                                                    </Link>

                                            <a
                                                href="https://wa.me/201000000000"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="secondary-btn"
                                            >
                                                {t("head-projects.cta.btn-1")}
                                            </a>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default ProjectModal;