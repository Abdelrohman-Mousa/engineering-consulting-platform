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

const OurProjects = () => {
    return (
        <div className="our-projects">
            <div className="our-projects-head">
                <h1>Engineering <span>Projects</span> & Professional <span>Services</span></h1>
                <p>Delivering innovative engineering solutions and professional consulting services for residential, commercial, and industrial developments.</p>
            </div>

            <div className="our-projects-toggle">
                <div>
                    <button className="active">
                        Projects
                    </button>
                </div>

                <div>
                    <button>
                        Services
                    </button>
                </div>
            </div>
        </div>
    )
}
export default OurProjects

