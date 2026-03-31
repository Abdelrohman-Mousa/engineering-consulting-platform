import HeroSection from "~/routes/Pages/hero-section/HeroSection";
import WhoWe from "~/routes/components/whoWeAre/WhoWe";
import TeamSection from "~/routes/components/teamSection/TeamSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhoWe />
            <TeamSection/>
        </div>
    )
}
export default Home
