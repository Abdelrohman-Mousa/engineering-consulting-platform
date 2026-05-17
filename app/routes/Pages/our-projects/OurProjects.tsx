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
import { useState } from "react";
import ProjectModal from "~/routes/Pages/our-projects/project-modal/ProjectModal";


const OurProjects = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="our-projects">
            <div className="our-projects-head">
                <h2>Engineering <span>Projects</span> & Professional <span>Services</span></h2>
                <p>Delivering innovative engineering solutions and professional consulting services for residential, commercial, and industrial developments.</p>
            </div>

            <div className="our-projects-toggle">
                <div>
                    <button
                        className={activeTab === "projects" ? "active" : ""}
                        onClick={() => setActiveTab("projects")}
                    >
                        Projects
                    </button>
                </div>

                <div>
                    <button
                        className={activeTab === "services" ? "active" : ""}
                        onClick={() => setActiveTab("services")}
                    >
                        Services
                    </button>
                </div>
            </div>

            {/*==========Cards========*/}
            <div className="our-projects-container">

                {
                    activeTab === "projects" && (

                        <div className="ourProjects-cards">
                            {projects.map((project) => (
                                <div
                                    className="ourProjects-card"
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
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
                                            <button onClick={() => setSelectedProject(project)}>
                                                View Project
                                                <img src={arrow} alt="Arrow" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                )}


                {/*=========Services========*/}

                {
                    activeTab === "services" && (

                        <div className="ourServices">
                            Welcome
                        </div>
                    )}
            </div>

            <ProjectModal
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
        </div>
    )
}
export default OurProjects

