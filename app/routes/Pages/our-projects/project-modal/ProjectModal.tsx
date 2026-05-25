import "./project-modal.scss";
import { AnimatePresence, motion } from "framer-motion";
import closed from "/assets/icons/closed.png";
import sent from "/assets/icons/sent.svg";
import instagram from "/assets/icons/instagram.svg";
import whatsapp from "/assets/icons/whatsapp.svg";
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import arrow from "../../../../../src/animations/arrow.json";
import Lottie from "lottie-react";


interface ProjectModalProps {
    selectedProject: any;
    setSelectedProject: (project: any) => void;
}

const ProjectModal = (
    {
         selectedProject,
         setSelectedProject
    }: ProjectModalProps) => {

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
                                    <h2>{selectedProject.projectName}</h2>
                                    <div className="type-location">
                                        <p>{selectedProject.type}</p> -
                                        <p>{selectedProject.location}</p>
                                    </div>
                                </div>

                                {/*=======Carousal===========*/}
                                <div className="project-carousel">
                                    <CarouselComponent
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
                                                            <img src="${item.image}" alt="${item.title}" style="height:100%;width:100%;object-fit:cover;" />
                                                            <figcaption class="img-caption">${item.title}</figcaption>
                                                        </figure>
                                                    `}
                                                />
                                            ))}
                                        </CarouselItemsDirective>
                                    </CarouselComponent>
                                </div>

                                {/* Overview */}
                                <div className="project-modal-info-overview">
                                    <h2>Project Overview</h2>

                                    <div className="project-modal-info-overview-cards">

                                        {selectedProject.overview.map((item: any) => (
                                            <div
                                                className="project-modal-info-overview-card"
                                                key={item.id}
                                            >

                                                <div className="title-icons">
                                                    <h2>{item.label}</h2>
                                                    <img src={item.icon} alt={item.label} />
                                                </div>

                                                <p>{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenge & Solution */}
                                <div className="project-modal-challenge-solution">

                                    <h2>Challenge & Solution</h2>

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
                                                Challenge
                                            </div>

                                            <p>
                                                {selectedProject.challengeSolution.challenge}
                                            </p>

                                        </div>

                                        <div className="solution-card">
                                            <div className="card-badge solution">
                                                Solution
                                            </div>
                                            <p>
                                                {selectedProject.challengeSolution.solution}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Services Provided */}
                                <div className="project-modal-services">

                                    <h2>Services Provided</h2>

                                    <div className="project-modal-services-cards">

                                        {selectedProject.servicesProvided.map((service: any) => (
                                            <div
                                                className="project-modal-services-card"
                                                key={service.id}
                                            >
                                                <div className="service-icon">
                                                    <img
                                                        src={service.icon}
                                                        alt={service.title}
                                                    />
                                                </div>
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        ))}
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