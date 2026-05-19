import "./project-modal.scss";
import { AnimatePresence, motion } from "framer-motion";
import closed from "/assets/icons/closed.png";
import sent from "/assets/icons/sent.svg";
import instagram from "/assets/icons/instagram.svg";
import whatsapp from "/assets/icons/whatsapp.svg";
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";



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
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default ProjectModal;