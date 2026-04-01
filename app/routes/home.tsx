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
