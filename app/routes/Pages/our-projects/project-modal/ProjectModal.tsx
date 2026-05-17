import "./project-modal.scss";
import { AnimatePresence, motion } from "framer-motion";

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

                        <h3>{selectedProject.title}</h3>


                    </motion.div>

                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default ProjectModal;