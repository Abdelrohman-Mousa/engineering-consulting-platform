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

const OurProjects = () => {
    return (
        <div>OurProjects</div>
    )
}
export default OurProjects

