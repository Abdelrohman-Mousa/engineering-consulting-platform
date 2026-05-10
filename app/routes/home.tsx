import type {Route} from "./+types/home"

export function meta({}: Route.MetaArgs) {
    return [
        {
            title: "Engineering Consultancy UAE | Online Engineering Services"
        },
        {
            name: "description",
            content:
                "Professional engineering consultancy platform in the UAE offering online consultation requests, expert engineering advice, and smart project management through a modern digital dashboard."
        }
    ];
}

import HeroSection from "~/routes/Pages/hero-section/HeroSection";
import WhoWe from "~/routes/components/whoWeAre/WhoWe";
import TeamSection from "~/routes/components/teamSection/TeamSection";
import ClientFeedback from "~/routes/components/clientFeeedback/ClientFeedback";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhoWe />
            <TeamSection/>
            <ClientFeedback />
        </div>
    )
}
export default Home
